import React from "react";
import { Card, CardTitle } from "react-materialize";

import "../../containers/App/App.css";

const Intro = () => (
  <Card
    header={
      <CardTitle
        image="https://flyefi.com/wp-content/uploads/2017/04/cessna-172-skyhawk-later-models-08.jpg"
        alt="Photo of Airplane"
      >
      </CardTitle>
    }
    // actions={[<a href='#'>This is a Link</a>]}
  >
    <div className="container" style={{ textAlign: "center" }}>
      <h4>The Easy Way To Schedule Checkrides.</h4>
      <hr />
      <i>
        <h6>
          Spend your time flying instead of scheduling. Our tool provides real
          time examiner availability so you can quickly find the right time and
          location for your checkride.
        </h6>
      </i>
    </div>
    <br />
    <div
      className="container"
      style={{
        paddingBottom: "1em",
        textAlign: "center",
        display: "grid",
        gridGap: "20px",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))"
      }}
    >
      <div>
        <h4>Pilots</h4>
        <hr />
        <p>
          Schedule your check ride with a Designated Pilot Examiner. Search
          airports and review DPE check ride availability on your preferred
          dates. Pick your ideal date, time, location and examiner. Once
          selected, please allow 24 hours for DPE appointment confirmation.
        </p>
      </div>
      <div>
        <h4>Examiners</h4>
        <hr />
        <p>
          Simplify the scheduling process. No more late night phone calls. Sync
          your calendar to our online scheduling tool. Allow students to see
          your availability and book online. Once booked, you will have 24 hours
          to confirm the appointment and receive payment.
        </p>
      </div>
    </div>
  </Card>
);

export default Intro;
