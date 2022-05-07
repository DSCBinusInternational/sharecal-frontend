import { findFirstDiffPos } from "../misc/util";
import InputBox from "./InputBox";

function TimeInput({className, value, setValue}) {
  return <InputBox
    className={className}
    value={value}
    onChange={(val) => {
      if (val.length < value.length) return;

      const diffPos = findFirstDiffPos(value, val);
      if (diffPos === 2) {
        setValue(val.substr(0, 2) + ":" + val[diffPos] + val[4]);
      } else if (diffPos === 5) {
        setValue(val.substr(0, 4) + val[diffPos]);
      } else {
        setValue(val.substr(0, diffPos+1) + val.substr(diffPos+2));
      }
    }}/>
}

export default TimeInput;