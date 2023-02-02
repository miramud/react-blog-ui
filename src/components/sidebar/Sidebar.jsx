import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://scontent.fabv3-2.fna.fbcdn.net/v/t1.6435-9/149303568_3978879602168612_4929278449282021904_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEngz4A_xOfPdDnUu_pmHcn6t7YttLq7BPq3ti20ursE6WqrZt0uoGKIYPcR6aCEz1s6pcUiaf167um8cn9ifIZ&_nc_ohc=ubZ4wPgieskAX-r80Ko&tn=qso706tbS4mjLqoO&_nc_ht=scontent.fabv3-2.fna&oh=00_AfBHo7kVaDZTSql-j5PClwHHSwEdOrNQulWeCSGSv6s2KA&oe=6403076D"
          alt=""
        />
        <p>
          Miracle Mudama, MiraXcode is a UI/UX Designer, 
          and Software Developer with close to a decade of experience,
          and he is very passionate about creating usable and useful digital 
          products with product teams and product owners across the world.
       
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
