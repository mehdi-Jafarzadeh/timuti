import React from 'react';
import './Add.css'
import { Link } from 'react-router-dom';

const Add = () => {
    return (
        <div className="whole">

        <div className='add-container'>
            <label >title : </label><br />
            <input type="text" name="" id="" />
            <br /><br />
            <label >image : </label><br />
            <input type="file" name="" id="" />
            <br /><br />
            <label >thumbnail : </label><br />
            <input type="file" name="" id="" />
            <br /><br />
            <label >body : </label><br />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <br /><br />
            <label >status : </label><br />
            <select name="" id="">
                <option value="">published</option>
                <option value="">unpublished</option>
                <option value="">draft</option>
            </select>
            <br />
            
            <button className="btn" onClick={() => {alert("coniformd")}}>save</button>
            
            <Link className="btn" to="/">go to Home page</Link>

        </div>
        </div>
    );
}

export default Add;
