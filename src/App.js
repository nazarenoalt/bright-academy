import { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// Template
import AppTemplate from "templates/AppTemplate";
// Pages
import Home from "pages/Home";
import Courses from "pages/Courses";
import Profile from "pages/Profile";
import EditProfile from "pages/EditProfile";
import Guest from "pages/Guest";
import Login from "pages/Login";
import Logout from "pages/Logout";
import SignUp from "pages/SignUp";
import NotFound from "pages/NotFound";
import PostDeleted from "pages/PostDeleted";
import Registered from "pages/Registered";
import CreatePost from "pages/CreatePost";
// Styles
import { GlobalStyle } from "GlobalStyle.css";
// Context
import AccountContext from "context/Account/AccountContext";

function App() {
  const { isLogged } = useContext(AccountContext);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppTemplate>
        <Routes>
          <Route
            path="/"
            element={
              isLogged ? <Home /> : <Navigate replace to="/account/login" />
            }
          />
          <Route
            path="/courses"
            element={
              isLogged ? <Courses /> : <Navigate replace to="/account/login" />
            }
          />
          <Route
            path="/edit-profile"
            element={
              isLogged ? (
                <EditProfile />
              ) : (
                <Navigate replace to="/account/login" />
              )
            }
          />
          <Route
            path="/account/profile"
            element={
              isLogged ? <Profile /> : <Navigate replace to="/account/login" />
            }
          />
          <Route path="/post/deleted" element={<PostDeleted />} />
          <Route
            path="/post/create-post"
            element={
              isLogged ? (
                <CreatePost />
              ) : (
                <Navigate replace to="/account/login" />
              )
            }
          />
          <Route path="/account/login" element={<Login />} />
          <Route path="/guest" element={<Guest />} />
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
