import { backendUrl } from "../../constants";

export function addCalendar(calName, title, note, pass, color, start, end) {
  fetch(backendUrl + "/cal/" + calName, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      eventname: title,
      notes: note,
      pass: pass,
      color: color,
      start: start,
      end: end,
    })
  })
}