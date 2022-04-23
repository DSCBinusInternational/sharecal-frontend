import "./Button.css"

function Button({name, isBordered, onClick}) {
  return <input
  type="button"
  value={name}
  className={isBordered ? "bordered" : "filled"}
  onClick={onClick}/>
}

export default Button;