import React from "react";
//import { Link } from "react-router-dom";
import { Card, CardTitle } from "react-materialize";

import "./Intro.css";
import "../../containers/App/App.css";

const Intro = () => (
  <Card
    header={
      <CardTitle
        image="https://flyefi.com/wp-content/uploads/2017/04/cessna-172-skyhawk-later-models-08.jpg"
        alt="Photo of Airplane"
      >
        Check Ride
      </CardTitle>
    }
    // actions={[<a href='#'>This is a Link</a>]}
  >
    We can always carry this a step further. There's really no end to this. And
    maybe a little bush lives there. We don't need any guidelines or formats.
    All we need to do is just let it flow right out of us. Do an almighty
    painting with us. Only God can make a tree - but you can paint one. It's
    cold, but it's beautiful.
    <br />
    <br />
    That's the way I look when I get home late; black and blue. Mix your color
    marbly don't mix it dead. You can get away with a lot.
    <br />
    <br />
    We spend so much of our life looking - but never seeing. Let's put some
    happy little clouds in our world. Just think about these things in your mind
    - then bring them into your world. You can create anything that makes you
    happy. You need to have a very firm paint to do this. There he comes.
  </Card>
);

export default Intro;
