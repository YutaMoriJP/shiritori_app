import { useState } from "react";

const useInput = initial => {
  const [value, setValue] = useState(initial);
  const onChange = e => setValue(e.target.value);
  const reset = () => setValue(initial);
  return [{ value, onChange }, reset];
};

export default useInput;
