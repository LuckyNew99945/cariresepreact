import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
function App() {

  //useSates

  const [input,setInput] = useState('');
  const [meals,setMeal] = useState([]);




  //Functions
  const takeApi = async () => {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php'
      );
    // console.log(response);
    if(response.status === 200) {
      // console.log('app api work');
    }
  }

  //Use Effects
  useEffect(() => {
    takeApi();
  },[])


  

  return (
    <div>
      <Header/>
      <Main input={input} setInput={setInput} meals={meals} setMeal={setMeal}/>
    </div>
  );
}

export default App;
