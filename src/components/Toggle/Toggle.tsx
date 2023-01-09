import React, { useState } from 'react'

import styled from "styled-components";

const Slider = styled.span`
  --color-checked: seaGreen;
  --color-unchecked: lightgray;
  width: 60px;
  height: 34px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-unchecked);
  transition: .4s;
  border-radius: 34px;
  input:checked + & {
    background-color: var(--color-checked);
    &:before {
      transform: translateX(26px);
    }
  }
  &:before {
    border-radius: 34px;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
  }
`
const StyledLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export interface Props {
  initialValue?: boolean,
  onChange: (newValue: boolean) => void,
  label: string,
}

const Toggle = ({
  initialValue,
  label,
  onChange
}: Props) => {
  const [checked, setChecked] = useState(Boolean(initialValue))
  return <StyledLabel>
    {label}
    <input 
      type="checkbox"
      checked={checked}
      onChange={() => {
        const newValue = !checked
        onChange(newValue)
        setChecked(newValue)
      }}
    />
    <Slider/>
  </StyledLabel>
}

export default Toggle