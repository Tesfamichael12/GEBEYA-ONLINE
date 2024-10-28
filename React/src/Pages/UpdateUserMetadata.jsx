import React, { useState } from "react";
import { supabase } from "../Services/Supabase";
import { useAuth } from "../Services/AuthContext";

const UpdateUserMetadata = () => {
  const { session } = useAuth();
  const [username, setUsername] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telebirrPhoneNumber, setTelebirrPhoneNumber] = useState("");

  const handleUpdateMetadata = async () => {
    const { error } = await supabase.auth.updateUser({
      data: {
        username,
        phone_no,
        address,
        firstName,
        lastName,
        telebirrPhoneNumber,
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setSuccessMessage("");
      return;
    }

    setSuccessMessage("User metadata updated successfully!");
    setErrorMessage("");
  };

  if (!session) {
    return <p>Please log in to update your metadata.</p>;
  }

  return (
    <div>
      <h2>Fill in your KYC Details</h2>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <input
        type="text"
        value={telebirrPhoneNumber}
        onChange={(e) => setTelebirrPhoneNumber(e.target.value)}
        placeholder="Telebirr Phone Number"
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="text"
        value={phone_no}
        onChange={(e) => setPhone_no(e.target.value)}
        placeholder="Phone Number"
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
      />
      <button onClick={handleUpdateMetadata}>Update Metadata</button>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default UpdateUserMetadata;
