import { HashRouter, Routes, Route } from "react-router-dom";
import BlogPost from "./components/blog-post";
import Menu from "./components/menu";

import Blog from "./pages/blog";
import Home from "./pages/home";
import Logout from "./pages/logout";
import Profile from "./pages/profile";
import Login from "./pages/login";
import { AuthContextProvider } from "./context/auth-context";

function App() {
  return (
    <HashRouter>
      <AuthContextProvider>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />}>
            <Route path=":slug" element={<BlogPost />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<p>No found</p>} />
        </Routes>
      </AuthContextProvider>
    </HashRouter>
  );
}

export default App;
