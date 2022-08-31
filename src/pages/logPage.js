import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import { MultilineInput } from 'react-input-multiline'

function LogPage({ Logs, deleteLog, updateLog }) {
  
  const [ updateForm, setUpdateForm ] = useState({
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

  const { id } = useParams()
  const navigate = useNavigate()
  const log = Logs.find(p =>p._id === id)

  const handleDelete = () => {
    deleteLog(id)
    navigate('/')
  }

  const handleChange = event => {
    setUpdateForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }
  const handleUpdate = event => {
    event.preventDefault()
    updateLog(id, updateForm)
   
  }

  useEffect(() => {
    setUpdateForm(log)
  }, [Logs, log])

  return (
  <div className='log'>
    <h1 className='log-name'>{log.component}</h1>
    {/* <img className='log-image' src={log.image} alt={log.component} /> */}
    
    <form onSubmit={handleUpdate} className="create-log">
   
    {/* <input 
            type="text"
            value={updateForm.returned}
            onChange={handleChange}
            name="returned"
            placeholder="Yes or No"
        /><br /> */}
    <div className="input-left">
    <label>
        {/* Component Name 
        <select className='component'
          type="text"
          value={updateForm.component}
          onChange={handleChange}
          name="component">
            <option value='hi'> -- Select a Component -- </option>
            {data.map((component) => <option key={component.component}value={component.component}>{component.component}</option>)}
           
            </select> */}
            
            </label><br />
    <label>
        Start Time
    <input 
            type="time"
            value={updateForm.start}
            onChange={handleChange}
            name="start"
        /></label><br />
        <label>
          End Time
         <input 
            type="time"
            value={updateForm.end}
            onChange={handleChange}
            name="end"
        /></label><br />
        </div>
        <div className="input-center">
        <button onClick={handleDelete}>Delete This Log</button>
        <label>
          Log Entry
        <textarea 
            value={updateForm.log}
            onChange={handleChange}
            name="log"
            placeholder="Happy Turbine"
            rows={10}
            style={{width:'100%', margin:'auto'}}
        /></label><br />
          <input 
            type="submit"
            value="Update Log"
            style={{marginTop:'0px'}}
        /><br />
        </div>
        <div className="input-right">
        <label>
        Voltage Reading
        <input 
            type="number"
            value={updateForm.volts}
            onChange={handleChange}
            name="volts"
            placeholder="120"
        />V</label><br />
         <label>
          Amperage Reading
         <input 
            type="number"
            value={updateForm.amps}
            onChange={handleChange}
            name="amps"
            placeholder="20"
        />A</label><br />
          <label>
          Pressure Reading
          <input 
            type="number"
            value={updateForm.pressure}
            onChange={handleChange}
            name="pressure"
            placeholder="200"
        />Bar</label><br />
        <label>
          Ohm Reading
        <input 
            type="number"
            value={updateForm.ohms}
            onChange={handleChange}
            name="ohms"
            placeholder="200"
        />Ohms</label><br />
        {/* <input 
            type="text"
            value={updateForm.image}
            onChange={handleChange}
            name="image"
            placeholder="Happy Turbine.png"
        /><br />  */}
        </div>
        
       
    </form>
  </div>
    );
  }
  
  export default LogPage;