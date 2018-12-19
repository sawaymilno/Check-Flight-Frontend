import React from "react";
import ExProfile from "../../components/Profile/ExProfile";

const ExPortal = ({
  logout,
  editToggle,
  currentUser,
  isDisabled,
  airports,
  avails,
  updateExaminer,
  examAirports,
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
        updateExaminer={updateExaminer}
        examAirports={examAirports}
      />
    </>
  );
};

export default ExPortal;
