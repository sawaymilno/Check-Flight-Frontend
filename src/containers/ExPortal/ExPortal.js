import React from "react";
import ExProfile from "../../components/Profile/ExProfile";

const ExPortal = ({
  logout,
  editToggle,
  currentUser,
  isDisabled,
  airports,
  avails,
}) => {
  return (
    <>
      <ExProfile
        currentUser={currentUser}
        isDisabled={isDisabled}
        editToggle={editToggle}
        logout={logout}
        airports={airports}
        avails={avails}
      />
    </>
  );
};

export default ExPortal;
