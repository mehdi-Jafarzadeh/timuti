import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = (props) => {

    
  console.log(props.data)

    return (
        <div>
          <p>Mehdi jafarzadeh</p><br />
          <a href="tel://+989143259118" >09143259118</a>
          <br />
          <a href="mailto:mehdijafarzadehh4@gmail.com">mehdijafarzadehh4@gmail.com</a>
            
            {props.data ? props.data
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

<Link to="/add" className="add"><b>+</b></Link>


        </div>
    );
}

export default Landing;
