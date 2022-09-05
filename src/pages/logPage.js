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

  const { id } = useParams()
  const navigate = useNavigate()
  const log = Logs.find(p =>p._id === id)
  const handleDelete = () => {
    deleteLog(id)
    navigate('/logs')
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
    navigate('/logs')
  }

  useEffect(() => {
    setUpdateForm(log);
  }, [Logs, log])

  const [image, setImage] = useState('');

  useEffect(() => {
    data.map(image => {
      if(image.component === log.component) {
       setImage(image.image)
      } 
    });
  }, [])

  return (
  <div className='log'>
    <h1 className='title'>{log.component}</h1>
    <div className='image-container'>
    <img className='component-image' src={image} alt={log.component} />
    </div>
<section>
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
    </section>
  </div>
    );
  }
  
  export default LogPage;