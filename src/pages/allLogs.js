import { Link } from 'react-router-dom'

function AllLogs(props) {


const loaded = () => {
    return props.Logs.map(({ component, turbine, log, image, start, end, volts, amps, pressure, ohms, returned, _id}) => {
     
      return (
        <>
        <table className='all-logs' key={_id}>
          <tbody key={_id}>
            <tr key={_id}>
            <td key={_id}>
          Turbine# {turbine}
          </td>
            <td key={_id}>
            <Link key={_id} to={`/logs/${_id}`} style={{textDecoration:'none', color: '#353558 '}}>
                {component}
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