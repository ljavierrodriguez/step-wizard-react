const ComponentA = (props) => {


    const validarForm = () => {
      props.nextStep();
    }
  
    return (
      <>
        <h1>Component A</h1>
        <input type="text" value={props.username} onChange={e => props.setUsername(e.target.value)} />
        <button onClick={props.previousStep}>Previous</button>
        <button onClick={validarForm}>Next</button>
      </>
    )
  }

  export default ComponentA;