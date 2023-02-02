import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import SinglePost from "./pages/singlePost/SinglePost";
import CreatePost from "./pages/create/CreatePost";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

function App() {
  const currentUser = false;
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
          
        <Route path="/posts" element={<Home />} />
          
        <Route path="/register" element={currentUser ? <Home /> : <Register />} />

        <Route path="/login" element={currentUser ? <Home /> : <Login />} />

        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/crete" element={currentUser ? <CreatePost /> : <Login />} />
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
