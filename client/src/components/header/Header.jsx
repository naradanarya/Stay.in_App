import "./header.css";
import { Notifications } from "@material-ui/icons";
import { Button } from "@material-ui/core";

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <span className="logo">Stay.In</span>
      </div>
      <div className="headerCenter"></div>
      <div className="headerRight">
        <div className="topbarLinks">
          <span className="topbarLink">Staycation</span>
          <span className="topbarLink">Follow Us</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Button variant="outlined" color="primary" href="/login">
              Login
            </Button>
          </div>
          <div className="topbarIconItem">
            <Button variant="contained" color="primary" href="/register">
              register
            </Button>
          </div>
          <div className="topbarIconItem">
            <Notifications />
          </div>
        </div>
      </div>
    </div>
  );
}
