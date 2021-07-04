const Post = require("../models/Post");

const router = require("express").Router();


//create post

router.post("/", async(req,res)=>{
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch (err){
        res.status(500).json(err);
    }
    
});

//Update Post
router.put("/",async(req,res)=>{
const post = Post.findById(req.params.id);
if(post.userId === req.body.userId){

}else{
    res.status(403).json("kamu hanya bisa update post kamu saja")
}
})


module.exports = router;