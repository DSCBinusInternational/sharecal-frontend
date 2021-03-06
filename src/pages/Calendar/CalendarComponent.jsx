import "./CalendarComponent.css";
import dayjs from "dayjs";
import Popup from 'reactjs-popup';

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function CalendarComponent({calendar}) {

  const date = dayjs();

  const startingDayPos = date.date(1).day();
  const daysInPrevMonth = date.month(date.month() - 1).daysInMonth();
  const daysInCurMonth = date.daysInMonth();

  const $prevMonth = [];
  for (let i = 0; i < startingDayPos; i++) {
    $prevMonth.push(<div className="cell dates prev-month" key={String(date.month()-1) + i}>
      {daysInPrevMonth - startingDayPos + i + 1}
    </div>)
  }

  const $curMonth = [];
  for (let i = 0; i < daysInCurMonth; i++) {
    $curMonth.push(<div className="cell dates" key={String(date.month()) + i}>
      {i + 1}
      {
        (calendar.state === "loaded") &&
        calendar.calendar.data?.[date.year()]?.[date.month()+1]?.[i+1]?.map(({name, color, time, notes}) => (
          <Popup className="event-modal" modal nested trigger={<div key={name} className="event-cell" style={{
            backgroundColor: color,
          }}>{name}</div>}>
            <h2>{name}</h2>
            <div style={{
              backgroundColor: color,
              }} className="color-cell" />
            <hr />
            <h3>Begin: {dayjs(time[0]).toString()}</h3>
            <h3>End: {dayjs(time[0]).toString()}</h3>
            <p className="note">{notes}</p>
          </Popup>
        ))
      }
    </div>)
  }

  return <div className="calendar">
    <h1>{month[date.month()]} {date.year()}</h1>
    <div className="main-calendar">
      {days.map((day) => (
        <div className="cell" key={day}>{day}</div>
      ))}
      { $prevMonth }
      { $curMonth }
    </div>
  </div>
}

export default CalendarComponent;