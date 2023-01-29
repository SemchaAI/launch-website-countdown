import "./App.css";

import { ReactComponent as Inst } from "./images/icon-instagram.svg";
import { ReactComponent as Fb } from "./images/icon-facebook.svg";
import { ReactComponent as Printerest } from "./images/icon-pinterest.svg";

import { useState } from "react";
import { CountdownByMySelf } from "./components/CountdownByMySelf";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1 className="slogan">We′re launching soon</h1>
      <CountdownByMySelf />
      <footer className="footer">
        <ul className="linksList">
          <li className="linkItem">
            <a href="#">
              <picture>
                <label htmlFor="inst"></label>
                <Inst id="inst" />
              </picture>
            </a>
          </li>
          <li className="linkItem">
            <a href="#">
              <picture>
                <label htmlFor="fb"></label>
                <Fb id="fb" />
              </picture>
            </a>
          </li>
          <li className="linkItem">
            <a href="#">
              <picture>
                <label htmlFor="print"></label>
                <Printerest className="linkItem" id="print" />
              </picture>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
