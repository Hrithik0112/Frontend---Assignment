import classNames from "classnames"
import { useRef, ChangeEvent } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked
    console.log("Checkbox value changed:", newValue)
    onChange(newValue)
  }

  const handleClick = () => {
    onChange(!checked)
  }
  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        onClick={handleClick}
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        // disabled={disabled}
        onChange={handleChange} // Handle the change event
      />
    </div>
  )
}
