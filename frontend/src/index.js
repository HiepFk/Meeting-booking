import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import {
  AuthProvider,
  RoomProvider,
  EventProvider,
  DepartmentProvider,
  UserProvider,
} from "./context";
import "./assets/styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <UserProvider>
      <RoomProvider>
        <DepartmentProvider>
          <EventProvider>
            <Router>
              <App />
            </Router>
          </EventProvider>
        </DepartmentProvider>
      </RoomProvider>
    </UserProvider>
  </AuthProvider>
);
