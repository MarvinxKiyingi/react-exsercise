import { useState } from 'react';
import { StyledButton } from '../../styles/Button';

export const ComponentA = () => {
  const [pinkBg, setPinkBg] = useState(false);
  const onClick = () => {
    if (!pinkBg) {
      setPinkBg(true);
    } else {
      setPinkBg(false);
    }
  };
  return (
    <div className={pinkBg ? 'component pink' : 'component'}>
      <span className={'component_title'}> Component A </span>
      <StyledButton onClick={onClick}>Click me</StyledButton>
    </div>
  );
};
