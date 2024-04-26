import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Title from './components/title'
import MediaCard from './components/employeecard.jsx';
import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';





console.log(data[0].firstName);

import data from './data/data.js';
import './App.css'
const label = { inputProps: { 'aria-label': 'Switch demo' } };



function App() {
  const[ShowInactive,setShowInactive] = useState(false);

const filterData = ShowInactive ? data.filter((employee) => employee.onLeave) :data;

const handleToggle = () => {
  setShowInactive(event.target.checked);
  console.log(event.target.checked);
 }

  console.log(ShowInactive);
  
  return (
    <Container fixed>
      <Typography variant="h3" component="h2">
  Employee Dashboard
</Typography>

      <Switch {...label} checked={ShowInactive}onClick={handleToggle}/>
    <MediaCard employee={filterData} />
    </Container>
  )
}

export default App
