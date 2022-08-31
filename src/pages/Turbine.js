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
  const data = [
    {component: 'Anemometer', image: '14,438'},
    {component: 'Wind Vane', image: '14,427'},
    {component: 'Blade 1', image: '14,350'},
    {component: 'Blade 2', image: '14,424'},
    {component: 'Blade 3', image: '14,344'},
    {component: 'Nose Cone', image: '14,318'},
    {component: 'Spinner', image: '14,299'},
    {component: 'Nacelle', image: '14,293'},
    {component: 'Tower', image: '14,275'},
    {component: 'Foundation', image: '14,274'},
    {component: 'Pad Mount Transformer', image: '14,272'},
    {component: 'Converter', image: '14,272'},
    {component: 'PLC', image: '14,271'},
    {component: 'Synchornization Contactor', image: '14,268'},
    {component: 'Main Disconnect', image: '14,259'},
    {component: 'Transmission Cables', image: '14,256'},
    {component: 'Drip Loop', image: '14,248'},
    {component: 'Yaw Limit Switch', image: '14,230'},
    {component: 'Yaw Caliper', image: '14,202'},
    {component: 'Chain Hoist', image: '14,200'},
    {component: 'Yaw Motor', image: '14,200'},
    {component: 'Main Shaft', image: '14,196'},
    {component: 'Main Bearing', image: '14,178'},
    {component: 'Gearbox', image: '14,175'},
    {component: 'Shrink Disc', image: '14,167'},
    {component: 'Gearbox Heat Exchanger', image: '14,163'},
    {component: 'High Speed Disc', image: '14,158'},
    {component: 'High Speed Brake Caliper', image: '14,158'},
    {component: 'Rotor Lock', image: '14,155'},
    {component: 'Coupler', image: '14,154'},
    {component: 'Generator', image: '14,138'},
    {component: 'Generator Cooling System', image: '14,109'},
    {component: 'Generator Slip Ring', image: '14,105'},
    {component: 'Generator Brushes', image: '14,089'},
    {component: 'Top Box', image: '14,087'},
    {component: 'Slip Ring', image: '14,086'},
    {component: 'Rotorary Union', image: '14,075'},
    {component: 'Variable Frequency Drive', image: '14,071'},
    {component: 'PT100', image: '14,068'},
    {component: 'Hydraulic Motor', image: '14,066'},
    {component: 'Hydraulic Tank', image: '14,061'},
    {component: 'Pressure Sensor', image: '14,058'},
    {component: 'Hydraulic Oil Heat Exchanger', image: '14,057'},
    {component: 'Mt. Lindsey', image: '14,055'},
    {component: 'Culebra Peak', image: '14,053'},
    {component: 'Mt. Sherman', image: '14,043'},
    {component: 'North Eolus', image: '14,042'},
    {component: 'Little Bear Peak', image: '14,041'},
    {component: 'Redcloud Peak', image: '14,037'},
    {component: 'Conundrum Peak', image: '14,037'},
    {component: 'Pyramid Peak', image: '14,029'},
    {component: 'San Luis Peak', image: '14,023'},
    {component: 'North Maroon Peak', image: '14,022'},
    {component: 'Wetterhorn Peak', image: '14,021'},
    {component: 'Wilson Peak', image: '14,021'},
    {component: 'Mt. of the Holy Cross', image: '14,007'},
    {component: 'Huron Peak', image: '14,006'},
    {component: 'Sunshine Peak', image: '14,004'}
  ];

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
      <form onSubmit={handleSubmit} className="create-log">
      {/* <input 
            type="text"
            value={newForm.returned}
            onChange={handleChange}
            name="returned"
            placeholder="Yes or No"
        /><br /> */}
    <div className="input-left">
      {/* <label>
        Component Name 
      <input className='component'
            type="text"
            value={newForm.component}
            onChange={handleChange}
            name="component"
            placeholder="Yaw motor"
        /></label><br /> */}
         <label>
        Component Name 
        <select className='component'
          type="text"
          value={newForm.component}
          onChange={handleChange}
          name="component">
            <option value='hi'> -- Select a Component -- </option>
            {data.map((component) => <option key={component.component}value={component.component}>{component.component}</option>)}
           
            </select>
            
            </label><br />
      <label>
        Start Time
      <input
            type="time"
            value={newForm.start}
            onChange={handleChange}
            name="start"
            placeholder="8:00am"
        /></label><br />
        <label>
          End Time
         <input 
            type="time"
            value={newForm.end}
            onChange={handleChange}
            name="end"
            placeholder="4:00pm"
        /></label><br />
        </div>
        <div className="input-center">
         <label>
          Log Entry
          <textarea className="input"
            value={newForm.log}
            onChange={handleChange}
            name="log"
            placeholder="Happy Turbine"
            rows={10}
            style={{width:'100%', margin:'auto'}}
        /></label><br />
         <input className="input"
            type="submit"
            value="Add Log"
            style={{marginTop:'0px'}}
        /><br />
        </div>
        <div className="input-right">
        <label>
        Voltage Reading
        <input className="input"
            type="number"
            value={newForm.volts}
            onChange={handleChange}
            name="volts"
            placeholder="120V"
        />V</label><br />
        <label>
          Amperage Reading
         <input className="input"
            type="number"
            value={newForm.amps}
            onChange={handleChange}
            name="amps"
            placeholder="20A"
        />A</label><br />
        <label>
          Pressure Reading
          <input className="input"
            type="number"
            value={newForm.pressure}
            onChange={handleChange}
            name="pressure"
            placeholder="200Bar"
        />Bar</label><br />
        <label>
          Ohm Reading
        <input className="input"
            type="number"
            value={newForm.ohms}
            onChange={handleChange}
            name="ohms"
            placeholder="200ohms"
        />Ohms</label><br />
         {/* <input 
            type="text"
            value={newForm.image}
            onChange={handleChange}
            name="image"
            placeholder="Happy Turbine.png"
        /><br /> */}
        </div>            
      </form>
      
      {/* {props.Logs ? loaded() : loading()} */}
    </section>
    )
  }
  
  export default Turbine;