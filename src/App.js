import { BrowserRouter, Route, Routes } from "react-router-dom";
// Template
import AppTemplate from "./templates/AppTemplate";
// Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Guest from "./pages/Guest";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import PostDeleted from "./pages/PostDeleted";
import Registered from "./pages/Registered";
import CreatePost from "./pages/CreatePost";
// Styles
import { GlobalStyle } from "./GlobalStyle.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppTemplate>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/post/deleted" element={<PostDeleted />} />
          <Route path="/post/create-post" element={<CreatePost />} />
          <Route path="/account/success" element={<Registered />} />
          <Route path="/account/signup" element={<SignUp />} />
          <Route path="/account/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppTemplate>
    </BrowserRouter>
  );
}

export default App;
