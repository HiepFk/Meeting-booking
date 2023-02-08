import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import UserAuth from "./auth/UserAuth";
import AdminAuth from "./auth/AdminAuth";
import UserRouter from "./router/UserRouter";
import AdminRouter from "./router/AdminRouter";
import Home from "./pages/Home";
import User from "./pages/User";
import Room from "./pages/Room";
import Department from "./pages/Department";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <div className="main">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<AdminAuth />}>
            {/* <Navbar /> */}
            <Route exact path="/" element={<AdminRouter />} />
          </Route>
          <Route exact path="/" element={<UserAuth />}>
            {/* <Navbar /> */}
            <Route index element={<UserRouter />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
