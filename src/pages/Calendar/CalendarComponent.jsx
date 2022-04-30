import "./CalendarComponent.css";
import dayjs from "dayjs";

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function CalendarComponent() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = dayjs();
  const startingDayPos = date.date(1).day();
  const daysInPrevMonth = date.month(date.month() - 1).daysInMonth();
  const daysInCurMonth = date.daysInMonth();

  const $prevMonth = [];
  for (let i = 0; i < startingDayPos; i++) {
    $prevMonth.push(<div className="cell dates prev-month">
      {daysInPrevMonth - startingDayPos + i + 1}
    </div>)
  }

  const $curMonth = [];
  for (let i = 0; i < daysInCurMonth; i++) {
    $curMonth.push(<div className="cell dates">
      {i + 1}
    </div>)
  }

  return <div className="calendar">
    <h1>{month[date.month()]} {date.year()}</h1>
    <div className="main-calendar">
      {
        days.map((day) => (
          <div className="cell">{day}</div>
        ))
      }
      {
        $prevMonth
      }
      {
        $curMonth
      }
    </div>
  </div>
}

export default CalendarComponent;