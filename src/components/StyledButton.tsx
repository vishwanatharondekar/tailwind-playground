import React from 'react';
import styled from 'styled-components';

interface IStyledBtn {
  variant: 'normal' | 'medium' | 'large' | 'xLarge';
  fluid: boolean;
}

const StyledBtn = styled.button<IStyledBtn>`
  background-color: ${(props) => (props.disabled ? '#aeaeae' : '#1a7ad5')};
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  box-shadow: 2px 2px 4px #494949;
  margin: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  width: ${(props) => (props.fluid ? '100%' : 'normal')};
  font-size: ${(props) =>
    props.variant === 'normal'
      ? '14px'
      : props.variant === 'medium'
      ? '16px'
      : props.variant === 'large'
      ? '20px'
      : props.variant === 'xLarge'
      ? '24px'
      : null};
`;

export const StyledButton = ({
  label,
  variant = 'normal',
  fluid = false,
  state = 'enabled',
}: {
  label: string;
  variant?: 'normal' | 'medium' | 'large' | 'xLarge';
  fluid?: boolean;
  state?: 'enabled' | 'disabled';
}) => {
  return (
    <StyledBtn
      disabled={state === 'disabled'}
      onClick={() => console.log('Clicked')}
      fluid={fluid}
      variant={variant}
    >
      {label}
    </StyledBtn>
  );
};
