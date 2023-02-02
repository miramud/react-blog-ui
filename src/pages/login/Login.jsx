// import "./login.css";

// export default function Login() {
//   return (
//     <div className="login">
//       <span className="loginTitle">Login</span>
//       <form className="loginForm">
//         <label>Email</label>
//         <input className="loginInput" type="text" placeholder="Enter your email..." />
//         <label>Password</label>
//         <input className="loginInput" type="password" placeholder="Enter your password..." />
//         <button className="loginButton">Login</button>
//       </form>
//       {/* <button className="loginRegisterButton">Register</button> */}
//     </div>
//   );
// }

import { useContext } from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {


  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
