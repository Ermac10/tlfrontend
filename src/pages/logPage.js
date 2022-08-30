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
    console.log("delete")
    deleteLog(id)
    navigate('/')
  }

  const handleChange = event => {
    setUpdateForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
    console.log(updateForm)
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
    <h1>{log.component}</h1>
    {/* <img className='log-image' src={log.image} alt={log.component} /> */}
    <button onClick={handleDelete}>Delete This Log</button>
    <form onSubmit={handleUpdate}>
    {/* <input 
            type="text"
            value={updateForm.returned}
            onChange={handleChange}
            name="returned"
            placeholder="Yes or No"
        /><br /> */}
    <input 
            type="text"
            value={updateForm.component}
            onChange={handleChange}
            name="component"
            placeholder="Yaw motor"
        /><br />
    <input 
            type="text"
            value={updateForm.start}
            onChange={handleChange}
            name="start"
            placeholder="8:00am"
        /><br />
         <input 
            type="text"
            value={updateForm.end}
            onChange={handleChange}
            name="end"
            placeholder="4:00pm"
        /><br />
        <input 
            type="text"
            value={updateForm.volts}
            onChange={handleChange}
            name="volts"
            placeholder="120V"
        /><br />
         <input 
            type="text"
            value={updateForm.amps}
            onChange={handleChange}
            name="amps"
            placeholder="20A"
        /><br />
          <input 
            type="text"
            value={updateForm.pressure}
            onChange={handleChange}
            name="pressure"
            placeholder="200PSI"
        /><br />
        <input 
            type="text"
            value={updateForm.ohms}
            onChange={handleChange}
            name="ohms"
            placeholder="200ohms"
        /><br />
        {/* <input 
            type="text"
            value={updateForm.image}
            onChange={handleChange}
            name="image"
            placeholder="Happy Turbine.png"
        /><br />  */}
          <textarea 
            value={updateForm.log}
            onChange={handleChange}
            name="log"
            placeholder="Happy Turbine"
            rows={20}
        /><br />
         <input 
            type="submit"
            value="Update Log"
        /><br />
    </form>
  </div>
    );
  }
  
  export default LogPage;