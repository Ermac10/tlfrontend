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
    {component: 'Anemometer', image: '/FT722_FT742-FF.png'},
    {component: 'Wind Vane', image: '/WindVane.jpeg'},
    {component: 'Blade 1', image: '/blade2.png'},
    {component: 'Blade 2', image: '/blade2.png'},
    {component: 'Blade 3', image: '/blade2.png'},
    {component: 'Nacelle', image: '/nacelle.png'},
    {component: 'Pad Mount Transformer', image: '/padmount.png'},
    {component: 'PLC', image: '/plc.png'},
    {component: 'Synchornization Contactor', image: '/gridcontactor copy.jpg'},
    {component: 'Main Disconnect Breaker', image: '/acb.jpeg'},
    {component: 'Yaw Limit Switch', image: '/rotorarylimitswitch.png'},
    {component: 'Yaw Caliper', image: '/yawcaliper.jpeg'},
    {component: 'Chain Hoist', image: '/chainhoist.png'},
    {component: 'Yaw Motor', image: '/yawmotor.jpg'},
    {component: 'Main Shaft', image: '/mainshaft.jpeg'},
    {component: 'Main Bearing', image: '/mainbearing.png'},
    {component: 'Gearbox', image: '/gearbox.jpg'},
    {component: 'Shrink Disc', image: '/shrinkdisc.png'},
    {component: 'Gearbox Heat Exchanger', image: '/oilcooler.jpeg'},
    // {component: 'High Speed Disc', image: '26'},
    // {component: 'High Speed Brake Caliper', image: '27'},
    // {component: 'Rotor Lock', image: '28'},
    // {component: 'Coupler', image: '29'},
    // {component: 'Generator', image: '30'},
    // {component: 'Generator Cooling System', image: '31'},
    // {component: 'Generator Slip Ring', image: '32'},
    // {component: 'Generator Brushes', image: '33'},
    // {component: 'Top Box', image: '34'},
    // {component: 'Slip Ring', image: '35'},
    // {component: 'Rotorary Union', image: '36'},
    // {component: 'Variable Frequency Drive', image: '37'},
    // {component: 'PT100', image: '38'},
    // {component: 'Hydraulic Motor', image: '39'},
    // {component: 'Hydraulic Tank', image: '40'},
    // {component: 'Pressure Sensor', image: '41'},
    // {component: 'Hydraulic Oil Heat Exchanger', image: '42'},
    // {component: 'Accumulator', image: '43'},
    // {component: 'Hydraulic oil Filter', image: '44'},
    // {component: 'Gearbox Oil Filter', image: '45'},
    // {component: 'Brake Pads', image: '46'},
    // {component: 'Contactor', image: '47'},
    // {component: 'Relay', image: '48'},
    // {component: 'Pitch Motor', image: '49'},
    // {component: 'Pitch Ram', image: '50'},
    // {component: 'Battery', image: '51'},
    // {component: 'Pitch Limit Switch', image: '52'},
    // {component: 'Pitch Gearbox', image: '53'},
    // {component: 'Fuse', image: '54'},
    // {component: 'Pitch Motor Brake', image: '55'},
    // {component: 'Bearing', image: '56'},
    // {component: 'Ambilical Line', image: '57'}
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
  const [selected, setSelected] = useState(0);
    
  const handleSelected = (event) => {
    setSelected(event.target.value);
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  };

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
      <>
      <div className='image-container'>
      <img  className='component-image' key={data.component} src={data[selected].image} />
      </div>
    <section>
      
      {/* {data.map((component) => <img key={component.component} src={component.image}/>)} */}
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
          value={selected}
          onChange={handleSelected}
          name="component">
            <option value='component'> -- Select a Component -- </option>
            {data.map((component, index) => <option key={component.component}value={index}>{component.component}</option>)}
            
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
    </>
    )
    
  }
  
  export default Turbine;