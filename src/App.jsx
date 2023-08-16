import './App.css';
import { Routes , Route } from 'react-router-dom'
import Landing from './Pages/Landing/landing';
import Post from './Pages/Post/Post';
import Add from './Pages/Add/Add'
import { useEffect, useState } from 'react';

function App() {

  
  const [data, setdata] = useState();

  const time = 10000

  useEffect(() => {
    getApiData()
    const interval = setInterval(() => {
      console.log('fetch');
      getApiData()
    }, time);
    return () => clearInterval(interval);
  }, [])

  const getApiData = async () => {
    const response = await fetch("https://jsonplaceholder.org/posts")
    .then((response) => response.json());
    setdata(response);

  };

  return (
    <div className="App">

<Routes>
      <Route path="/" element={<Landing data={data}/>} />
      <Route path="/post" element={<Post data={data}/>} />
      <Route path="/add" element={<Add />} />
    </Routes>
    </div>
  );
}

export default App;