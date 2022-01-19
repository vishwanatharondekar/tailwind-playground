import React from 'react';
import Button from './components/Button';
import StyledComponentsPOC from './styledComponents/StyledComponentsPOC';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <Button type="primary">Close</Button>
      <StyledComponentsPOC />
    </div>
  );
}

export default App;
