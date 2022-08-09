import './App.css';
import StepWizard from 'react-step-wizard';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import { useState } from 'react';






const ComponentC = (props) => {
  return (
    <>
      <h1>Component C</h1>
      <button onClick={props.previousStep}>Previous</button>
      <button onClick={props.nextStep}>Next</button>
    </>
  )
}


function App() {

  const [username, setUsername] = useState('');

  return (
    <>
      <StepWizard>
        <ComponentA username={username} setUsername={setUsername} />
        <ComponentB />
        <ComponentC />
      </StepWizard>
    </>
  );
}

export default App;
