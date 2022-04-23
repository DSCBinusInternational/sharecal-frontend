import "./InputBox.css";

function InputBox({placeholder, value, onChange}) {
  return <input 
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={function(event) {
      onChange(event.target.value);
    }} />
}

export default InputBox;