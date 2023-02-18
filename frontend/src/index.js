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

// import { createClient } from "@supabase/supabase-js";
// import { SessionContextProvider } from "@supabase/auth-helpers-react";

// const supabase = createClient(
//   "https://osrkddzktsutrlvoklnu.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zcmtkZHprdHN1dHJsdm9rbG51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYyMjU2NjMsImV4cCI6MTk5MTgwMTY2M30.dCNWovzA-Jp0PflV9PDmLapFx-Bl9mDM60frUGmZ1Vo"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// root.render(
//   <AuthProvider>
//     <UserProvider>
//       <RoomProvider>
//         <DepartmentProvider>
//           <EventProvider>
//             {/* <SessionContextProvider supabaseClient={supabase}> */}
//             <Router>
//               <App />
//             </Router>
//             {/* </SessionContextProvider> */}
//           </EventProvider>
//         </DepartmentProvider>
//       </RoomProvider>
//     </UserProvider>
//   </AuthProvider>
// );
