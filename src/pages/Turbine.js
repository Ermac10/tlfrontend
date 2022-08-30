import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { MultilineInput } from 'react-input-multiline'

function Turbine(props) {

  const [ newForm, setNewForm ] = useState({
    component: "",
    log: "",
    start: "",
    end: "",
    image: "",
    volts: "",
    amps: "",
    pressure: "",
    ohms: "",
    returned: ""
  })

  // const loaded = () => {
  //   return props.Logs.map(({ component, log, image, start, end, volts, amps, pressure, ohms, returned, _id}) => {
  //     return (
  //       <div className='log' key={_id}>
  //           <Link to={`/logs/${_id}`}>
  //               <h1>{component}</h1>
  //           </Link>
  //       </div>
  //     )
  //   })
    
  // }
  // const loading = () => {
  //   return <h1>Loading ...</h1>
  // }

  const handleChange = event => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value

    }))
  }
  const navigate = useNavigate()
  
  const handleSubmit = event => {
  
    event.preventDefault()

    props.createLogs(newForm)
    navigate('/logs')

  }

    return (
    <section>
      <form onSubmit={handleSubmit}>
      {/* <input 
            type="text"
            value={newForm.returned}
            onChange={handleChange}
            name="returned"
            placeholder="Yes or No"
        /><br /> */}
      <input 
            type="text"
            value={newForm.component}
            onChange={handleChange}
            name="component"
            placeholder="Yaw motor"
        /><br />
      <input 
            type="text"
            value={newForm.start}
            onChange={handleChange}
            name="start"
            placeholder="8:00am"
        /><br />
         <input 
            type="text"
            value={newForm.end}
            onChange={handleChange}
            name="end"
            placeholder="4:00pm"
        /><br />
        <input 
            type="text"
            value={newForm.volts}
            onChange={handleChange}
            name="volts"
            placeholder="120V"
        /><br />
         <input 
            type="text"
            value={newForm.amps}
            onChange={handleChange}
            name="amps"
            placeholder="20A"
        /><br />
          <input 
            type="text"
            value={newForm.pressure}
            onChange={handleChange}
            name="pressure"
            placeholder="200PSI"
        /><br />
        <input 
            type="text"
            value={newForm.ohms}
            onChange={handleChange}
            name="ohms"
            placeholder="200ohms"
        /><br />
         {/* <input 
            type="text"
            value={newForm.image}
            onChange={handleChange}
            name="image"
            placeholder="Happy Turbine.png"
        /><br /> */}
          <textarea
            value={newForm.log}
            onChange={handleChange}
            name="log"
            placeholder="Happy Turbine"
            rows={20}
        />
        <br />

         <input 
            type="submit"
            value="Add Log"
        /><br />
            
      </form>
      
      {/* {props.Logs ? loaded() : loading()} */}
    </section>
    )
  }
  
  export default Turbine;