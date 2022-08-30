
import { Link } from 'react-router-dom'

function AllLogs(props) {
const loaded = () => {
    return props.Logs.map(({ component, log, image, start, end, volts, amps, pressure, ohms, returned, _id}) => {
      return (
        <div className='log' key={_id}>
            <Link to={`/logs/${_id}`}>
                <h1>{component}</h1>
            </Link>
        </div>
      )
      
    })
    
  }
  const loading = () => {
    return <h1>Loading ...</h1>
  }



return (
    <>
      {props.Logs ? loaded() : loading()}
      
    </>
)

}

export default AllLogs;