import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import InputBox from "../common/InputBox";
import headerLogo from "../assets/header_logo.png";
import Button from "../common/Button"
import "./Calendar.css";
import CalendarComponent from "./Calendar/CalendarComponent";
import AddEntry from './Calendar/AddEntry';
import { useEffect, useState } from 'react';
import { backendUrl } from '../constants';
import { useParams } from 'react-router-dom';

function Calendar() {

  const [calendar, setCalendar] = useState({
    state: "idle", // Bisa idle, error, loaded
    calendar: {},
  });

  const { id } = useParams();
  
  useEffect(() => {
    fetch(backendUrl + "/cal/" + id).then(response => {

      if (response.ok) {
        response.json().then(data => {
          setCalendar({
            state: "loaded",
            calendar: data,
          });
        })
      } else {
        alert("Calendar does not exist!");
        setCalendar({
          state: "error",
          calendar: {},
        })
      }
    }).catch((reason) => {
      alert("HTTP Request failed!\n" + reason);
      setCalendar({
        state: "error",
        calendar: {},
      })
    });
  }, [id]);

  return <div>
    <div className="header">
      <img className="header-logo" src={headerLogo} alt="Header Logo" />
      <div className="right-header">
        <Popup className="calendar-modal" trigger={<Button name="+Add" />} modal nested>
        <AddEntry />
        </Popup>
        <Popup className="calendar-modal" trigger={<Button name="Share" isBordered />} modal nested>
          <h3>Share</h3>
          <InputBox value={window.location.href} dark />
        </Popup>
      </div>
    </div>
    <div className="main-content-wrapper">
      <div className="main-content">
        <CalendarComponent calendar={calendar} />
      </div>
    </div>
  </div>
}

export default Calendar;