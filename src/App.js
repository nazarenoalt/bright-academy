import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import EditProfile from "./pages/EditProfile";
import Guest from "./pages/Guest";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import PostDeleted from "./pages/PostDeleted";
import Registered from "./pages/Registered";
import CreatePost from "./pages/CreatePost";
import Navbar from "./components/Navbar";
// Context
import AccountState from "./context/Account/AccountState";

function App() {
  return (
    <AccountState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/post/deleted" element={<PostDeleted />} />
          <Route path="/post/create-post" element={<CreatePost />} />
          <Route path="/account/success" element={<Registered />} />
          <Route path="/account/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AccountState>
  );
}

export default App;
