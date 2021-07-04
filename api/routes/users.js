const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//Update User
router.put("/:id", async (req, res) => {
  if (req.body.userId == req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account sudah di update");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("Kamu hanya bisa update akun kamu!");
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  if (req.body.userId == req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account sudah dihapus");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("Kamu hanya bisa menghapus akun kamu saja!");
  }
});

//Get User
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

// follow user
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("Berhasil di follow");
      } else {
        res.status(403).json("kamu sudah follow akun ini");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("kamu tidak bisa follow akun sendiri");
  }
});

//unfollow user 
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("Berhasil di unfollow");
      } else {
        res.status(403).json("kamu tidak follow akun ini");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("kamu tidak bisa unfollow akun sendiri");
  }
});

module.exports = router;
