import { backendUrl } from "../../constants";

export function addCalendar(data, onSuccess, onError) {
  fetch(backendUrl + "/cal/" + data.calName, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(onSuccess).catch(onError);
}