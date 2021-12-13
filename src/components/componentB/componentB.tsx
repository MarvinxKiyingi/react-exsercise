import { useEffect, useState } from 'react';
import { INputProps } from '../../App';
import { StyledButton } from '../../styles/Button';

export const ComponentB = (props: INputProps) => {
  const sessionStorageKey = 'isBgPink_componentB';
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
      <p>{props.inputValue}</p>
      <StyledButton onClick={onClick}>Click me</StyledButton>
      <span className={'component_title'}> Component B </span>
    </div>
  );
};
