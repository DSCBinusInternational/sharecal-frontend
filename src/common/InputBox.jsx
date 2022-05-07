import "./InputBox.css";

function InputBox({placeholder, value, onChange, dark, className, mini}) {
  return <input 
    className={`${className} ${dark ? "dark" : ""} ${mini ? "mini" : ""}`}
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={function(event) {
      onChange(event.target.value);
    }} />
}

export default InputBox;