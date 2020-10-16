import React from "react";
import "../styles/Header.css";
import { Route, Switch } from "react-router-dom";

import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";

const Header = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={img1} alt="header" />} />
        <Route
          path="/products"
          exact
          render={() => <img src={img2} alt="header" />}
        />
        <Route
          path="/contact"
          exact
          render={() => <img src={img3} alt="header" />}
        />
        <Route
          path="/admin"
          exact
          render={() => <img src={img4} alt="header" />}
        />

        <Route exact render={() => <img src={img5} alt="header" />} />
      </Switch>
    </>
  );
};

export default Header;
