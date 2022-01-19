import React from 'react';
import { StyledButton } from '../components/StyledButton';

const StyledComponentsPOC = () => {
  return (
    <div
      style={{
        margin: '20px',
        border: '2px solid black',
        padding: '20px',
        borderRadius: '8px',
        fontSize: '20px',
      }}
    >
      <h1>Styled Buttons: </h1>
      <h1>Size variants</h1>
      <StyledButton label={'Normal Button'} />
      <StyledButton variant="medium" label={'Medium Button'} />
      <StyledButton variant="large" label={'Large Button'} />
      <StyledButton variant="xLarge" label={'XLarge Button'} />
      <h1>Enabled / Disabled</h1>
      <div>
        <StyledButton variant="medium" label={'Enabled Button'} />
        <StyledButton
          state="disabled"
          variant="medium"
          label={'Disabled Button'}
        />
      </div>
      <StyledButton variant="xLarge" fluid label={'Fluid Button'} />
    </div>
  );
};

export default StyledComponentsPOC;
