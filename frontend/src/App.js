import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import UserAuth from "./auth/UserAuth";
import AdminAuth from "./auth/AdminAuth";
import UserRouter from "./router/UserRouter";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import User from "./pages/User";
import Room from "./pages/Room";
import Department from "./pages/Department";
import RG from "./pages/RG";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <div className="main">
        <Navbar />
        <div className="content">
          <Header />
          <Routes>
            <Route exact path="/" element={<AdminAuth />}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="user" element={<User />} />
              {/* <Route exact path="room" element={<Room />} /> */}
              {/* <Route exact path="department" element={<Department />} /> */}
              <Route exact path="rg" element={<RG />} />
            </Route>
            <Route exact path="/" element={<UserAuth />}>
              <Route exact path="/" element={<UserRouter />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
