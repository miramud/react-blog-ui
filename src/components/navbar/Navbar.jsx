import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  let user = false
  return (
    <div className='navbar'>
        <div className="navbarLeft">
            <i className="navbarIcon fab fa-facebook-square"></i>
            <i className="navbarIcon fab fa-instagram-square"></i>
            <i className="navbarIcon fab fa-twitter-square"></i>
        </div>
        <div className="navbarCenter">
            <ul className="navbarList">
                <li className="navbarListItem">
                    <Link className="link" to="/">HOME</Link>
                </li>
                <li className="navbarListItem">
                    <Link className="link" to="/create">CREATE</Link>
                </li>
                {user && <li className="topListItem">LOGOUT</li>}
            </ul>
        </div>
        <div className="navbarRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="navbarImg"
              src="https://scontent.fabv3-2.fna.fbcdn.net/v/t1.6435-9/149303568_3978879602168612_4929278449282021904_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEngz4A_xOfPdDnUu_pmHcn6t7YttLq7BPq3ti20ursE6WqrZt0uoGKIYPcR6aCEz1s6pcUiaf167um8cn9ifIZ&_nc_ohc=ubZ4wPgieskAX-r80Ko&tn=qso706tbS4mjLqoO&_nc_ht=scontent.fabv3-2.fna&oh=00_AfBHo7kVaDZTSql-j5PClwHHSwEdOrNQulWeCSGSv6s2KA&oe=6403076D"
              alt=""
            />
          </Link>
        ) : (
          <ul className="navbarList">
            <li className="navbarListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navbarListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="navbarSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}

export default Navbar