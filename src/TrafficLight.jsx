import { useEffect, useState } from "react"

const TrafficLight = ({trafficStates}) => {

    const [currentColor, setCurrentColor] = useState('green');
    
    useEffect(() => {
        const {duration, next} = trafficStates[currentColor];
        const timerId = setTimeout(() => {
            setCurrentColor(next);
        }, duration);

        return () => clearTimeout(timerId);
    }, [currentColor, trafficStates]);

  return (
    <div className='traffic-light-container'>
    {Object.keys(trafficStates).map((color) => (
        <div 
            key={color} 
            className='traffic-light' 
            style={{ backgroundColor: currentColor === color ? trafficStates[color].backgroundColor : 'gray' }}
        />
    ))}
</div>
  )
}

export default TrafficLight