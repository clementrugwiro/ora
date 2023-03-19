import React, { createContext, useMemo, useState } from "react";

const getInitialState = () => {
  if (window && window.localStorage) {
    const storedUser = window.localStorage.getItem("auth");
    if (storedUser) return JSON.parse(storedUser);
  }
  return { name: "", role: "user", auth: false };
};

export const UserContext = createContext(getInitialState);

function UserProvider({ children, ...props }) {
  const [user, setUser] = useState(getInitialState);
  const login = (data) => {
    localStorage.setItem(
      "auth",
      JSON.stringify({
        name: data.user?.name,
        firstName: data?.firstName,
        auth: true,
        email: data.user?.email,
      })
    );
    localStorage.setItem("auth_token", data.token);
    setUser(() => ({
      name: data.user?.name,
      auth: true,
      email: data.user.email,
      // firstName: data.user?.profile?.firstName,
      // id: data.user?.profile?.id,
      // profileImage: data.user?.profile?.avatar,
    }));
  };

  const logout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("auth_token");
    setUser(() => ({ name: "", role: "user", auth: false }));
  };

  const setName = (name) => {
    setUser({ ...user, name });
  };

  const setProfileImage = (profileImage) => {
    setUser({ ...user, profileImage });
  };

  const value = useMemo(
    () => ({
      user,
      setName,
      setProfileImage,
      login,
      logout,
    }),
    [user]
  );

  return (
    <UserContext.Provider {...props} value={value}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
