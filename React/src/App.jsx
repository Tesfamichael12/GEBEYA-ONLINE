// App.js
import React from "react";
import { useAuth } from "./Services/AuthContext";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Pages/Signup/Signup";
import Login from "./Components/Pages/Login/";
import UpdateUserMetadata from "./Components/Pages/UpdateUserMetadata";
import UserList from "./Components/Admin/UserList";
import Nav from "./Components/Common/Nav";
const App = () => {
  const { session, adminCheck, metadataCheck } = useAuth();

  return (
    <div>
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="update-user-metadata" element={<UpdateUserMetadata />} />
        {adminCheck && <Route path="Userlist" element={<UserList />} />}
        <Route path="*" element={<Login />} /> {/* Fallback route */}
      </Routes>
    </div>
  );
};

export default App;
