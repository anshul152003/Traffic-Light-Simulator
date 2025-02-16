import React from 'react';
import TrafficLight from './TrafficLight.jsx'
import './App.css'

const App = () => {

  const trafficStates = {
    red: {
      duration: 4000,
      backgroundColor: 'red',
      next: 'green',
    },
    yellow: {
      duration: 500,
      backgroundColor: 'yellow',
      next: 'red',    
    },
    green: {
      duration: 3000,
      backgroundColor: 'green',
      next: 'yellow',
    }
  };

  return (
    <div className='wrapper'>
      <TrafficLight trafficStates={trafficStates} />
    </div>
  )
}

export default App