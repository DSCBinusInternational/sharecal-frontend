import mainLogo from "../assets/main_logo.png";
import Button from "../common/Button";
import InputBox from "../common/InputBox";
import "./Home.css"

function Home() {
  return <div className="container">
    <div>
      <img src={mainLogo} alt="Main logo" className="logo" />
    </div>
    <h1>Welcome to <span className="cyan">ShareCal</span></h1>
    <h2>calendar <span className="cyan">sharing</span> and <span className="cyan">collaboration</span> platform</h2>
    <form className="main-form">
      <div className="form-box">
        <label>Enter Cal-Name:</label>
        <InputBox />
      </div>
      <div className="form-box">
        <label>Enter Passcode:</label>
        <InputBox />
      </div>
    </form>
    <div className="buttons">
      <Button/>
      <Button/>
    </div>
    <h5>
      Users who enter the passcode on your calendar will receive
      an edit access.
    </h5>
  </div>
}

export default Home;