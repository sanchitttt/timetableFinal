import React from 'react'

function SelectItem({ value, children,disabled }) {
  return (
    <option disabled={disabled} value={value}>{children ? children : value}</option>
  )
}

export default SelectItem