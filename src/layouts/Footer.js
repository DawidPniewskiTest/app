import React from "react";
import {Route} from 'react-router-dom'

const Footer = () => {

  return (
    <div>
      <h2>Stopka</h2>
      <Route path="/" exact render = {(props) => {
        console.log(props);

        return (
          <p>Jesteś na <span>{props.match.page}</span></p>
        )
      }}/>

    </div>
  )
}

export default Footer;
