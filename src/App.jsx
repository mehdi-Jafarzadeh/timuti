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


  console.log(data)

  return (
    <div className="App">

    {/* {data ? data.map(e => <>
    <br />

    <h3>{e.title}</h3>
<br />
    <p>{e.content}</p>
    
    <br />
    <hr />
    </>) : <>loading ...</>} */}

{data ? data
// .filter(e => e.id == 23 )
.map(e => <>

<div className="card">
  <img className='thum'src={e.thumbnail} alt="" />
  <div className="detail">
    <div className="card-detail-top">
      <h3>{e.title}</h3>
    </div>
    <div className="card-detail-but">
      
      <p className='card-cat'>category :</p>
      <pre> {e.category}</pre>
      <p className='card-status'>status : </p>
      <pre> {e.status}</pre>
      <button className='card-btn'>go to post</button>
    </div>
  </div>

</div>

</>) : <h1>Loading</h1> }






    </div>
  );
}

export default App;
