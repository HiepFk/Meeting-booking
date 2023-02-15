import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AdminRoute from "./router/AdminRouter";
import AuthRoute from "./router/AuthRouter";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import RG from "./pages/RG";
import Supabase from "./pages/Supabase";

function App() {
  return (
    <>
      {/* <Supabase /> */}
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <div className="main">
        <Navbar />
        <div className="content">
          <Header />
          <Routes>
            <Route exact path="/" element={<AuthRoute />}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/" element={<AdminRoute />}>
                <Route exact path="user" element={<User />} />
                <Route exact path="rg" element={<RG />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

// import {
//   useSession,
//   useSupabaseClient,
//   useSessionContext,
// } from "@supabase/auth-helpers-react";
// import { useState } from "react";

// function App() {
//   const [start, setStart] = useState(new Date());
//   const [end, setEnd] = useState(new Date());
//   const [eventName, setEventName] = useState("");
//   const [eventDescription, setEventDescription] = useState("");

//   const session = useSession(); // tokens, when session exists we have a user
//   const supabase = useSupabaseClient(); // talk to supabase!
//   const { isLoading } = useSessionContext();

//   if (isLoading) {
//     return <></>;
//   }

//   async function googleSignIn() {
//     const { error } = await supabase.auth.signInWithOAuth({
//       provider: "google",
//       options: {
//         scopes: "https://www.googleapis.com/auth/calendar",
//       },
//     });
//     if (error) {
//       alert("Error logging in to Google provider with Supabase");
//       console.log(error);
//     }
//   }

//   async function signOut() {
//     await supabase.auth.signOut();
//   }

//   async function createCalendarEvent() {
//     console.log("Creating calendar event");
//     const event = {
//       summary: eventName,
//       description: eventDescription,
//       start: {
//         dateTime: start.toISOString(), // Date.toISOString() ->
//         timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // America/Los_Angeles
//       },
//       end: {
//         dateTime: end.toISOString(), // Date.toISOString() ->
//         timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // America/Los_Angeles
//       },
//       attendees: [
//         { email: "hiepnh.fk@gmail.com" },
//         { email: "dequangnguyenxa@gmail.com" },
//         { email: "vuong01633476450@gmail.com" },
//         { email: "phamduong13092001@gmail.com" },
//       ],
//     };
//     await fetch(
//       "https://www.googleapis.com/calendar/v3/calendars/primary/events",
//       {
//         method: "POST",
//         headers: {
//           Authorization: "Bearer " + session.provider_token, // Access token for google
//         },
//         body: JSON.stringify(event),
//       }
//     )
//       .then((data) => {
//         return data.json();
//       })
//       .then((data) => {
//         console.log(data);
//         alert("Event created, check your Google Calendar!");
//       });
//   }

//   console.log(session);
//   return (
//     <div className="App">
//       <div style={{ width: "400px", margin: "30px auto" }}>
//         {session ? (
//           <>
//             <h2>Hey there {session.user.email}</h2>
//             <p>Start of your event</p>
//             <input type="datelocal-time" onChange={setStart} value={start} />
//             <p>End of your event</p>
//             <input type="datelocal-time" onChange={setEnd} value={end} />
//             <p>Event name</p>
//             <input type="text" onChange={(e) => setEventName(e.target.value)} />
//             <p>Event description</p>
//             <input
//               type="text"
//               onChange={(e) => setEventDescription(e.target.value)}
//             />
//             <hr />
//             <button onClick={() => createCalendarEvent()}>
//               Create Calendar Event
//             </button>
//             <p></p>
//             <button onClick={() => signOut()}>Sign Out</button>
//           </>
//         ) : (
//           <>
//             <button onClick={() => googleSignIn()}>Sign In With Google</button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
