import { useState } from "react";
import Button from "../../common/Button";
import InputBox from "../../common/InputBox";
import TimeInput from "../../common/TimeInput";
import "./AddEntry.css";

import dayjs from "dayjs";
import { addCalendar } from "./fetches";

function AddEntry({ calName, close, addCalEntry }) {

  const date = dayjs();

  const [color, setColor] = useState("#ff0000");
  const [title, setTitle] = useState("");
  const [pass, setPass] = useState("");
  const [note, setNote] = useState("");

  const [startDate, setStartDate] = useState({
    date: date.date(),
    month: date.month() + 1,
    year: date.year(),
    time: "00:00",
  });

  const [endDate, setEndDate] = useState({
    date: date.date(),
    month: date.month() + 1,
    year: date.year(),
    time: "00:00",
  });

  return <div className="add-entry">
    <div className="flex-row">
      <InputBox value={title} onChange={setTitle} dark mini />
      <input
        type="color"
        className="input-btn"
        value={color}
        onChange={(ev) => {
          setColor(ev.target.value)
        }} />
    </div>
    <h4>Date:</h4>
    <div className="flex-row date-choose">
      <h3>Starts</h3>
      <InputBox className="sm" value={startDate.date} dark onChange={(val) => {
        setStartDate({...startDate, date: val})
      }} />
      <p>/</p>
      <InputBox className="sm" value={startDate.month} dark onChange={(val) => {
        setStartDate({...startDate, month: val})
      }}/>
      <p>/</p>
      <InputBox className="md" value={startDate.year} dark onChange={(val) => {
        setStartDate({...startDate, year: val})
      }}/>
      <TimeInput className="time" value={startDate.time} setValue={(val) => {
        setStartDate({...startDate, time: val})
      }} dark />
    </div>
    <div className="flex-row date-choose">
      <h3>Ends</h3>
      <InputBox className="sm" value={endDate.date} dark onChange={(val) => {
        setEndDate({...endDate, date: val})
      }} />
      <p>/</p>
      <InputBox className="sm" value={endDate.month} dark onChange={(val) => {
        setEndDate({...endDate, month: val})
      }}/>
      <p>/</p>
      <InputBox className="md" value={endDate.year} dark onChange={(val) => {
        setEndDate({...endDate, year: val})
      }}/>
      <TimeInput className="time" value={endDate.time} setValue={(val) => {
        setEndDate({...startDate, time: val})
      }} dark />
    </div>
    <h4>Notes:</h4>
    <hr />
    <InputBox value={note} onChange={setNote} />
    <h3>Passcode</h3>
    <InputBox value={pass} onChange={setPass} dark mini />
    <div className="flex-end"><Button name="Add" onClick={() => {
      const calEntry = {
        calName: calName,
        eventname: title,
        notes: note,
        pass: pass,
        color: color,
        start: dayjs(`${startDate.year}-${startDate.month}-${startDate.date} ${startDate.time}`, "YYYY-M-D HH:mm").format(),
        end: dayjs(`${endDate.year}-${endDate.month}-${endDate.date} ${endDate.time}`, "YYYY-M-D HH:mm").format(),
      };
      addCalendar(
        calEntry,
        (response) => {
          if (response.ok) {
            addCalEntry({
              data: {
                [startDate.year]: {
                  [startDate.month]: {
                    [startDate.date]: [{
                      name: calEntry.eventname,
                      time: [ calEntry.start, calEntry.end ],
                      notes: calEntry.notes,
                      color: calEntry.color,
                    }]
                  }
                }
              }
            });
            close();
          } else {
            alert("Wrong password!");
          }
        },
        (err) => { alert("Error adding calendar " + err); }
      )
    }} /></div>
  </div>
}

export default AddEntry;