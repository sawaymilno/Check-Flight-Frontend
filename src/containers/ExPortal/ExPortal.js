import React from "react";
import ExProfile from "../../components/Profile/ExProfile";

const ExPortal = ({logout, editToggle, state}) => {

    return (
      <>
        <ExProfile
          state={state}
          editToggle={editToggle}
          logout={logout}
        />
      </>
    );
  //}
}

export default ExPortal;
