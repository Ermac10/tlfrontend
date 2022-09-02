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
    {component: 'High Speed Disc', image: '/couplerhighspeeddisc.gif'},
    {component: 'High Speed Brake Caliper', image: '/highspeedbrakecaliper.png'},
    {component: 'Rotor Lock', image: '/rotorlock.png'},
    {component: 'Coupler', image: '/couplerhighspeeddisc.gif'},
    {component: 'Generator', image: '/generator.png'},
    {component: 'Generator Slip Ring', image: '/genslipring.png'},
    {component: 'Generator Brushes', image: '/genbrushes.png'},
    {component: 'Slip Ring', image: '/slipring.png'},
    {component: 'Rotorary Union', image: '/rotary-union-rotodisk-s.png'},
    {component: 'Variable Frequency Drive', image: '/vfd.png'},
    {component: 'PT100', image: '/pt100.png'},
    {component: 'Hydraulic Motor', image: '/hydraulicmotor.png'},
    {component: 'Pressure Sensor', image: '/pressuresensor.png'},
    {component: 'Hydraulic Oil Heat Exchanger', image: '/oilcooler.jpeg'},
    {component: 'Accumulator', image: '/accumulator.png'},
    {component: 'Hydraulic oil Filter', image: '/HydraulicOilFilter.avif'},
    {component: 'Gearbox Oil Filter', image: '/HydraulicOilFilter.avif'},
    {component: 'Brake Pads', image: '/brakepads.png'},
    {component: 'Contactor', image: '/motorcontactor.png'},
    {component: 'Relay', image: '/relay.jpg'},
    {component: 'Pitch Motor', image: '/pitchmotor.png'},
    {component: 'Pitch Ram', image: '/pitchram.png'},
    {component: 'Battery', image: '/pitchbattery.png'},
    {component: 'Pitch Limit Switch', image: '/limitswitch.png'},
    {component: 'Pitch Gearbox', image: '/pitchgbx.jpg'},
    {component: 'Fuse', image: '/fuse.png'},
    {component: 'Pitch Motor Brake', image: '/pitchmotorbrake.jpg'},
    {component: 'Bearing', image: '/bearings.png'},
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
    let index = data.map(item => item.component).indexOf(event.target.value)
     
    setSelected(index);
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
      <h1 className='title' key='Create'>Create Log Entry</h1>
      <div className='image-container'>
      <img  className='component-image' key={data.component} src={data[selected].image}  />
      </div>
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
         <label>
        Component Name 
        <select className='component'
          type="text"
          value={newForm.component}
          onChange={handleSelected}
          name="component">
            <option value='component'> -- Select a Component -- </option>
            {data.map((component) => <option key={component.component}value={component.component} >{component.component}</option>)}
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
         <label>
        Turbine Number
        <input
            type="number"
            value={newForm.turbine}
            onChange={handleChange}
            name="turbine"
            placeholder="1"
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
            value="Create Log"
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
       </div>            
      </form>
      
      {/* {props.Logs ? loaded() : loading()} */}
    </section>
    </>
    )
  }
  
  export default Turbine;