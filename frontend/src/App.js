import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AdminRoute from "./router/AdminRouter";
import AuthRoute from "./router/AuthRouter";

import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import RG from "./pages/RG";
import Canlendar from "./components/Home/Canlendar";

function App() {
  return (
    <Canlendar />

    // <Routes>
    //   <Route exact path="/login" element={<Login />} />
    //   <Route exact path="/" element={<AuthRoute />}>
    //     <Route exact path="/" element={<Home />} />
    //     <Route exact path="/" element={<AdminRoute />}>
    //       <Route exact path="user" element={<User />} />
    //       <Route exact path="rg" element={<RG />} />
    //     </Route>
    //   </Route>
    // </Routes>
  );
}

export default App;
