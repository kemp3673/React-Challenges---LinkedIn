import { useRef, useEffect } from 'react';

export default function FocusInput() {
  const focusedInput = useRef(null);

  useEffect(() => {
    focusedInput.current.focus();
  }, [])

  return (
    <div>
      <label htmlFor='focused-input'>Focus me on page load!</label>
      <input
        name='focused-input'
        ref={focusedInput}
      >
      </input>
      {/* <input autoFocus name='focused-input'></input> */}
      {/* This 'autofocus works pretty much the same but does not require use of refs */}
    </div>
  )
}
