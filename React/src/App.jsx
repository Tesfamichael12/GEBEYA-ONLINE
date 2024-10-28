// App.js
import React from "react";
import { useAuth } from "./Services/AuthContext";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const { session, adminCheck, metadataCheck } = useAuth();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="update-user-metadata" element={<UpdateUserMetadata />} />
        <Route path="user-table" element={<Usertable />} />
        <Route path="*" element={<Home />} /> {/* Fallback route */}
      </Routes>
    </div>
  );
};

export default App;
