const ComponentB = (props) => {

    const validarForm = () => {
      props.nextStep();
    }
    
    return (
      <>
        <h1>Component B</h1>
        <button onClick={props.previousStep}>Previous</button>
        <button onClick={validarForm}>Next</button>
      </>
    )
  }

  export default ComponentB;