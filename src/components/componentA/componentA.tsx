import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { INputProps } from '../../App';
import { StyledButton } from '../../styles/Button';

export const ComponentA = (props: INputProps) => {
  const sessionStorageKey = 'componentA_className';
  const getSessionStorage = sessionStorage.getItem(sessionStorageKey);

  const [pinkBg, setPinkBg] = useState(false);
  const [bgClassName, setBgClassName] = useState(getSessionStorage || 'component');

  const setSessionStorage = sessionStorage.setItem(sessionStorageKey, bgClassName);

  const onClick = () => {
    if (!pinkBg) {
      setPinkBg(true);
      setBgClassName('component pink');
      return setSessionStorage;
    } else {
      setPinkBg(false);
      setBgClassName('component');
      return setSessionStorage;
    }
  };

  return (
    <div className={bgClassName}>
      <TextField id='outlined-basic' label='Type something' variant='outlined' onChange={props.handleChange} />
      <StyledButton onClick={onClick}>Click me</StyledButton>
      <span className={'component_title'}> Component A </span>
    </div>
  );
};
