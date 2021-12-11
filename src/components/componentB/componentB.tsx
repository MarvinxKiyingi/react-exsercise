import { useState } from 'react';
import { StyledButton } from '../../styles/Button';

export const ComponentB = () => {
  const sessionStorageKey = 'componentB_className';
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
    }
  };
  return (
    <div className={bgClassName}>
      <span className={'component_title'}> Component B </span>
      <StyledButton onClick={onClick}>Click me</StyledButton>
    </div>
  );
};
