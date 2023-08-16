import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {

    
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
        <div>
            
            {data ? data
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
      <Link className="card-btn" to={"post?id=" + e.id} >go to post</Link>
    </div>
  </div>

</div>

</>) : <h1>Loading</h1> }




        </div>
    );
}

export default Landing;
