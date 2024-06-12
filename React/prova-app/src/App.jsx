import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [advices, setAdvices] = useState([]);

  function getAdviceByParam(param) {
    setAdvices([]);
    if (param != 'random') {
      axios.get(`https://api.adviceslip.com/advice/search/${param}`).then(res => {
        setAdvices(res.data.slips);
      }).catch(res => {
        setAdvices([]);
      });
    } else {
      axios.get(`https://api.adviceslip.com/advice`).then(res => {
        setAdvices(res.data.slip);
      }).catch(res => {
        setAdvices([]);
      });
    }
  }

  return (
    <>
    <div className='bg-dark p-4 pb-2 m-4 rounded-5'>
      <div className='row text-center d-block'>
        <div className='col' key='dog'>
          <button onClick={() => getAdviceByParam('dog')} className='btn btn-primary rounded-pill w-25 py-2 my-2'>Cachorro</button>
        </div>
        <div className='col' key='cat'>
          <button onClick={() => getAdviceByParam('cat')} className='btn btn-secondary rounded-pill w-25 py-2 my-2'>Gato</button>
        </div>
        <div className='col' key='study'>
          <button onClick={() => getAdviceByParam('study')} className='btn btn-success rounded-pill w-25 py-2 my-2'>Estudo</button>
        </div>
        <div className='col' key='random'>
          <button onClick={() => getAdviceByParam('random')} className='btn btn-danger rounded-pill w-25 py-2 my-2'>Aleatório</button>
        </div>
      </div>

      <ul className='list-group text-center py-2 px-5'>
        {
          advices && advices.length > 0 && advices.map(ad => {
            return (
              <li className='list-group-item' key={ad.id}>{ad.advice}</li>
            )
          })
        }
        {
          (advices && (!advices.length && advices.length != 0)) && (
            <>
              <li className='list-group-item' key={advices.id}>{advices.advice}</li>
            </>
          )
        }
        {
          (!advices) && (
            <>
              <li className='list-group-item' key='not_found'>Nenhum aviso encontrado.</li>
            </>
          )
        }
      </ul>
    </div>
    </>
  )
}

export default App
