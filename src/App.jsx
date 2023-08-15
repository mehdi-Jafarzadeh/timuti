import { useState ,useEffect } from 'react';
import './App.css';

function App() {

  const [data, setdata] = useState();

  const time = 10000

  useEffect(() => {
    getApiData()
    const interval = setInterval(() => {
      console.log('fetch');
      getApiData()
    }, time);
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])

  const getApiData = async () => {
    const response = await fetch("https://jsonplaceholder.org/posts")
    .then((response) => response.json());
    setdata(response);

  };

  return (
    <div className="App">

    {data ? data.map(e => <>
    <br />

    <h3>{e.title}</h3>
<br />
    <p>{e.content}</p>
    
    <br />
    <hr />
    </>) : <>loading ...</>}

    </div>
  );
}

export default App;
