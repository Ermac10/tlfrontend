import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { MultilineInput } from 'react-input-multiline'

function LearningMaterial(props) {

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
    {component: 'Anemometer', image: '/FT722_FT742-FF.png', link:'https://www.youtube.com/watch?v=MhMO2-rSGtQ'},
    {component: 'Wind Vane', image: '/WindVane.jpeg', link:'https://www.youtube.com/watch?v=8Cd_IGC0DXQ'},
    {component: 'Blade 1', image: '/blade2.png', link:'https://www.youtube.com/watch?v=uK7ubLWvnbE'},
    {component: 'Blade 2', image: '/blade2.png', link:'https://www.youtube.com/watch?v=uK7ubLWvnbE'},
    {component: 'Blade 3', image: '/blade2.png', link:'https://www.youtube.com/watch?v=uK7ubLWvnbE'},
    {component: 'Nacelle', image: '/nacelle.png', link: 'https://www.youtube.com/watch?v=TAQLyhKeBXc'},
    {component: 'Pad Mount Transformer', image: '/padmount.png', link: 'https://www.youtube.com/watch?v=vh_aCAHThTQ'},
    {component: 'PLC', image: '/plc.png', link:'https://www.youtube.com/watch?v=PbAGl_mv5XI'},
    {component: 'Synchornization Contactor', image: '/gridcontactor copy.jpg', link:'https://www.youtube.com/watch?v=FCsgUXPRew8'},
    {component: 'Main Disconnect Breaker', image: '/acb.jpeg', link: 'https://www.youtube.com/watch?v=c_DwodSKSiE'},
    {component: 'Yaw Limit Switch', image: '/rotorarylimitswitch.png', link:'https://www.youtube.com/watch?v=0zeEtdiplFI'},
    {component: 'Yaw Caliper', image: '/yawcaliper.jpeg', link: 'https://www.youtube.com/watch?v=1y17pDLC0E0'},
    {component: 'Chain Hoist', image: '/chainhoist.png', link: 'https://www.youtube.com/watch?v=LOxcZcS0Cxk'},
    {component: 'Yaw Motor', image: '/yawmotor.jpg', link: 'https://www.youtube.com/watch?v=59HBoIXzX_c'},
    {component: 'Main Shaft', image: '/mainshaft.jpeg', link: 'https://www.youtube.com/watch?v=QwLJUVNt1II'},
    {component: 'Main Bearing', image: '/mainbearing.png', link:'https://www.youtube.com/watch?v=QhTI8CnRic8'},
    {component: 'Gearbox', image: '/gearbox.jpg', link: 'https://www.youtube.com/watch?v=AkRzfvLgGKA&t=19s'},
    {component: 'Shrink Disc', image: '/shrinkdisc.png', link:'https://www.youtube.com/watch?v=lEdnpgky8EY'},
    {component: 'Gearbox Heat Exchanger', image: '/oilcooler.jpeg', link:'https://www.youtube.com/watch?v=WYJ9BsCrifQ'},
    {component: 'High Speed Disc', image: '/couplerhighspeeddisc.gif', link:'https://www.youtube.com/watch?v=1y17pDLC0E0'},
    {component: 'High Speed Brake Caliper', image: '/highspeedbrakecaliper.png', link:'https://www.youtube.com/watch?v=1y17pDLC0E0'},
    {component: 'Rotor Lock', image: '/rotorlock.png', link:'https://www.youtube.com/watch?v=tqTqCjcxOXI'},
    {component: 'Coupler', image: '/couplerhighspeeddisc.gif', link:'https://www.youtube.com/watch?v=9qG4Hy31yRI'},
    {component: 'Generator', image: '/generator.png', link:'https://www.youtube.com/watch?v=JJr4PIuQp2w'},
    {component: 'Generator Slip Ring', image: '/genslipring.png', link: 'https://www.youtube.com/watch?v=onSectN11Dw'},
    {component: 'Generator Brushes', image: '/genbrushes.png', link:'https://www.youtube.com/watch?v=RAV6rmiGi7M'},
    {component: 'Slip Ring', image: '/slipring.png', link:'https://www.youtube.com/watch?v=6MMECMJDWQk'},
    {component: 'Rotorary Union', image: '/rotary-union-rotodisk-s.png', link:'https://www.youtube.com/watch?v=bADVKJlvvGc'},
    {component: 'Variable Frequency Drive', image: '/vfd.png', link:'https://www.youtube.com/watch?v=g7jFGOn6xfU'},
    {component: 'PT100', image: '/pt100.png', link:'https://www.youtube.com/watch?v=yNryBIe5kEg'},
    {component: 'Hydraulic Motor', image: '/hydraulicmotor.png', link:'https://www.youtube.com/watch?v=5M42kdA5nyU'},
    {component: 'Pressure Sensor', image: '/pressuresensor.png', link:'https://www.youtube.com/watch?v=DVq10SGKHMU'},
    {component: 'Hydraulic Oil Heat Exchanger', image: '/oilcooler.jpeg', link:'https://www.youtube.com/watch?v=WYJ9BsCrifQ'},
    {component: 'Accumulator', image: '/accumulator.png', link:'https://www.youtube.com/watch?v=EtCyFsfbePY'},
    {component: 'Hydraulic oil Filter', image: '/HydraulicOilFilter.avif', link:'https://www.youtube.com/watch?v=8J0tK3-DvOc'},
    {component: 'Gearbox Oil Filter', image: '/HydraulicOilFilter.avif', link:'https://www.youtube.com/watch?v=vQj_6wBVJV8'},
    {component: 'Brake Pads', image: '/brakepads.png', link:'https://www.youtube.com/watch?v=82qBBJ8iwcc'},
    {component: 'Contactor', image: '/motorcontactor.png', link:'https://www.youtube.com/watch?v=FCsgUXPRew8'},
    {component: 'Relay', image: '/relay.jpg', link: 'https://www.youtube.com/watch?v=n594CkrP6xE'},
    {component: 'Pitch Motor', image: '/pitchmotor.png', link:'https://www.youtube.com/watch?v=CWulQ1ZSE3c'},
    {component: 'Pitch Ram', image: '/pitchram.png', link:'https://www.youtube.com/watch?v=52IMMQSB9Hs'},
    {component: 'Battery', image: '/pitchbattery.png', link:'https://www.youtube.com/watch?v=ynYoXmyqAzE'},
    {component: 'Pitch Limit Switch', image: '/limitswitch.png', link: 'https://www.youtube.com/watch?v=LrGRPx3S7ME'},
    {component: 'Pitch Gearbox', image: '/pitchgbx.jpg', link:'https://www.youtube.com/watch?v=AkRzfvLgGKA'},
    {component: 'Fuse', image: '/fuse.png', link:'https://www.youtube.com/watch?v=IlPuioUs5N0'},
    {component: 'Pitch Motor Brake', image: '/pitchmotorbrake.jpg', link:'https://www.youtube.com/watch?v=W4pDuO6R5U0'},
    {component: 'Bearing', image: '/bearings.png', link:'https://www.youtube.com/watch?v=QhTI8CnRic8'},
  ];

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
  console.log(data[selected].link);
    return (
      <>
      <h1 className='title' key='Create'>Learning Material</h1>
      <div className='image-container'>
      <img  className='component-image' key={data.component} src={data[selected].image}  />
      </div>
      <div>
      <ul>
        <li classNmae='videos' key='videos'>
        <a href={data[selected].link} target="_blank">Video Link</a>
        </li>
      </ul>
      </div>
    <section>
      <form onSubmit={handleSubmit} className="create-log">
    <div className="input-center">
         <label>
        <select className='component'
          type="text"
          value={newForm.component}
          onChange={handleSelected}
          name="component">
            <option value='component'> -- Select a Component -- </option>
            {data.map((component) => <option key={component.component}value={component.component} >{component.component}</option>)}
            </select>
            </label><br /> 
       </div>            
      </form>
      
    </section>
    </>
    )
  }
  
  export default LearningMaterial;