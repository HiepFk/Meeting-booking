import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import UserAuth from "./auth/UserAuth";
import AdminAuth from "./auth/AdminAuth";
import UserRouter from "./router/UserRouter";
import AdminRouter from "./router/AdminRouter";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

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
              <Route exact path="/" element={<AdminRouter />} />
            </Route>
            <Route exact path="/" element={<UserAuth />}>
              <Route index element={<UserRouter />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
