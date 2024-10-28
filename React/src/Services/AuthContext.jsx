// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./Supabase";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [adminCheck, setAdminCheck] = useState(false);
  const [metadataCheck, setMetadataCheck] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      setAdminCheck(session?.user?.user_metadata?.isAdmin);
      setMetadataCheck(session?.user?.user_metadata?.username);
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          console.log("User is signed in:", session);
          const admincheck = session?.user?.user_metadata?.isAdmin;
          const metadatacheck = session?.user?.user_metadata.username;

          setAdminCheck(admincheck);
          setMetadataCheck(metadatacheck);
          setSession(session);
        } else if (event === "SIGNED_OUT") {
          console.log("User is signed out");
          setSession(null);
          setAdminCheck(false);
          setMetadataCheck(null);
        }
      }
    );

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session, adminCheck, metadataCheck }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext in other components
export const useAuth = () => {
  return useContext(AuthContext);
};
