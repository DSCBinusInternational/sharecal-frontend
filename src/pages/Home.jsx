import { useState } from "react";
import mainLogo from "../assets/main_logo.png";
import Button from "../common/Button";
import InputBox from "../common/InputBox";
import { randWords } from "../misc/util";
import "./Home.css"

function Home() {

  const [calName, setCalName] = useState("");

  return <div className="container">
    <div>
      <img src={mainLogo} alt="Main logo" className="logo" />
    </div>
    <h1>Welcome to <span className="cyan">ShareCal</span></h1>
    <h2>calendar <span className="cyan">sharing</span> and <span className="cyan">collaboration</span> platform</h2>
    <form className="main-form">
      <div className="form-box">
        <label>Enter Cal-Name:</label>
        <InputBox placeholder="Calendar Name" value={calName} onChange={setCalName} />
      </div>
      <div className="form-box">
        <label>Enter Passcode:</label>
        <InputBox placeholder="Passcode" />
      </div>
    </form>
    <div className="buttons">
      <Button name="Create" />
      <Button name="Random Name"
        isBordered
        onClick={function() {
          setCalName(randWords(4));
        }}/>
    </div>
    <h5>
      Users who enter the passcode on your calendar will receive
      an edit access.
    </h5>
  </div>
}

export default Home;