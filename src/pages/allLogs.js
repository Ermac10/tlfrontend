import { useState } from 'react'
import { Link } from 'react-router-dom'

function AllLogs(props) {
const [query, setQuery] = useState("")

const loaded = () => {
    return props.Logs.map(({ component, turbine, log, image, start, end, volts, amps, pressure, ohms, returned, _id}) => {
     
      return (
        <>
           {/* <div>
      <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
    {
        <div key={index}>
          <p>{turbine}</p>
          <p>{component}</p>
        </div>
      }
    </div> */}


        <table className='all-logs' key={_id}>
          <tbody>
            <tr>
            <td>
          <h2>Turbine# {turbine}</h2>
          </td>
            <td>
            <Link to={`/logs/${_id}`}>
                <h2>{component}</h2>
            </Link>
            </td>
           </tr>
          </tbody>
        </table>
        </>
      )
      
    })
    
  }
  const loading = () => {
    return <h1>Loading ...</h1>
  }



return (
    <>
      <h1 className='title'>Site Logs</h1>
      {props.Logs ? loaded() : loading()}
    </>
)

}

export default AllLogs;