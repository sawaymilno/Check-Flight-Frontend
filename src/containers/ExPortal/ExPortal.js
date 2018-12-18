import React from "react";
import ExProfile from "../../components/Profile/ExProfile";

const ExPortal = ({ logout, editToggle, currentUser, isDisabled }) => {

    return (
      <>
        <ExProfile
          currentUser={currentUser}
          isDisabled={isDisabled}
          editToggle={editToggle}
          logout={logout}
        />
      </>
    );
}

export default ExPortal;
