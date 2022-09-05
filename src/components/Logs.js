import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Turbine from "../pages/Turbine";
import LogPage from "../pages/logPage";
import AllLogs from "../pages/allLogs"
import Home from "../pages/home";
import LearningMaterial from "../pages/learningMaterial";
// import Login from "../pages/login"

function Logs(props) {
  const [ Logs, setLogs ] = useState(null) // rule of thumb: when state has data and that data is an object, null is the best way to represent
  // const API_URL = 'http://localhost:4000/api/logBook'
  const API_URL = 'https://afternoon-tundra-96240.herokuapp.com/api/logbook'
  
  
  const getLogs = async () => {
    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        setLogs(data)
    } catch (error) {
        // TODO: add logic or task here
    } 
  }

  const createLogs = async (log) => {
    try {
        await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-type': 'Application/json'
          },
          body: JSON.stringify(log)
        })
        getLogs()
    } catch (error) {
    }
  }

const deleteLog = async (id) => {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    })
    getLogs()
  } catch (error) {

  }
}

const updateLog = async (id, updatedLog) => {
  try {
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type':  'Application/json'
        },
        body: JSON.stringify(updatedLog)
      })
      getLogs()
  } catch (error) {

  }
}
  useEffect(() => {
    getLogs()
  }, [])

  return (
    <main>
      <Routes>
        {/* <Route path="/" element={<Login/>}/> */}
        <Route path="/home" element={<Home Logs={Logs} createLogs={createLogs} />}/>
        <Route path="/logs/newLog" element={<Turbine Logs={Logs} createLogs={createLogs} />}/>
        <Route path="/logs/:id" element={<LogPage Logs={Logs} deleteLog={deleteLog} updateLog={updateLog}/>} />
        <Route path="/logs" element={<AllLogs Logs={Logs} getLogs = {getLogs} deleteLog={deleteLog} updateLog={updateLog}/>} />
        <Route path="/learningMaterial" element={<LearningMaterial Logs={Logs} getLogs = {getLogs} deleteLog={deleteLog} updateLog={updateLog}/>} />
      </Routes>
    </main>
  );
}

export default Logs;
