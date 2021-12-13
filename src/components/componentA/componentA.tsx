import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { INputProps } from '../../App';
import { StyledButton } from '../../styles/Button';

export const ComponentA = (props: INputProps) => {
  const sessionStorageKey = 'isBgPink_componentA';
  const getSessionStorage: boolean = JSON.parse(sessionStorage.getItem(sessionStorageKey)!);

  const [pinkBg, setPinkBg] = useState(getSessionStorage);

  const setSessionStorage = sessionStorage.setItem(sessionStorageKey, JSON.stringify(pinkBg));

  const onClick = () => {
    if (!pinkBg) {
      setPinkBg(true);
      return setSessionStorage;
    } else {
      setPinkBg(false);
      return setSessionStorage;
    }
  };

  useEffect(() => {
    if (!getSessionStorage) {
      setPinkBg(false);
    }
  }, [getSessionStorage]);

  return (
    <div className={pinkBg ? 'component pink' : 'component'}>
      <TextField id='outlined-basic' label='Type something' variant='outlined' onChange={props.handleChange} />
      <StyledButton onClick={onClick}>Click me</StyledButton>
      <span className={'component_title'}> Component A </span>
    </div>
  );
};
