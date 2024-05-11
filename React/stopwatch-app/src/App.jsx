import { useState } from 'react'
import './App.css'
import './stopwatch.css'

function App() {
  const [timer, setTimer] = useState(null);
  const [status, setStatus] = useState(false);
  const [time, setTime] = useState('00:00:00.000');
  const [start, setStart] = useState(null);
  const [laps, setLaps] = useState(new Array());
  const [lapsCount, setLapsCount] = useState(0);

  let initial = 0;

  const startStopwatch = () => {
    if (timer && status) return;
    if (!timer) {
      setStart(Date.now());
      resetStopwatch();
    } 

    initial = timer ? start : Date.now();
    let intervalId = setInterval(()=>{
      let pastTime = Date.now() - initial;
      let currentDate = new Date(pastTime).toISOString();
      let formatTime = currentDate.replace(`${currentDate.split('T')[0]}T`, '').replace('Z', '');
      setTime(formatTime);
    });

    setTimer(() => intervalId);
    setStatus(true);
  }

  const pauseStopwatch = () => {
    if (timer) {
      clearInterval(timer);
      setStatus(false);
    }
  }

  const lapStopwatch = () => {
    if (timer && status) {
      setLaps(new Array(<p key={`lap_${lapsCount + 1}`}>{`${(lapsCount + 1)}: ${time}`}</p>, laps));
      setLapsCount((lapsCount) => lapsCount + 1)
    }
  }
  
  const stopStopwatch = () => {
    if (timer) {
      pauseStopwatch();
      setTimer(null);
      resetStopwatch();
    }
  }

  const resetStopwatch = () => {
    setTime('00:00:00.000');
    setLaps(new Array());
    setLapsCount(0);
  }

  return (
    <>
      <div className='stopwatch-container'>
        <span className='stopwatch-number'>{time}</span>
        <section className='stopwatch-btns'>
          <button onClick={startStopwatch}>Iniciar</button>
          <button onClick={pauseStopwatch}>Pausar</button>
          <button onClick={lapStopwatch}>Marcar volta</button>
          <button onClick={stopStopwatch}>Parar</button>
        </section>
      </div>
      <div className='stopwatch-registers'>
        <div className='stopwatch-laps'>{laps}</div>
      </div>
    </>
  )
}

export default App