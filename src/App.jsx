import { useState ,useEffect } from 'react';
import './App.css';

function App() {

  const [data, setdata] = useState();

  useEffect(() => {

    getApiData()
  }, []);

  const getApiData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.org/posts"
    ).then((response) => response.json());
  
    // update the state
    console.log(response);
    setdata(response);
  };

  return (
    <div className="App">

    {data ? data.map(e => <>
    
    {e.id}
    <br />
    
    </>) : <>loading ...</>}

    </div>
  );
}

export default App;
