import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const AddTugas = () => {
  const [namaTugas, setNamaTugas ] = useState("");    
  const [mapel, setMapel] = useState("");
  const [deadline, setDeadline] = useState("");
  const navigate = useNavigate();
  const baseURL = 'http://localhost:5000/tugas'; 

  const saveTugas = async(e) =>  {
    e.preventDefault();
    const uploadData = {
      nama_tugas : namaTugas,
      mapel: mapel,
      deadline: deadline
    }
    
    try {
      await axios.post(baseURL, uploadData)
      .catch(err => {console.error(err)})
      navigate('/admin')
    } catch (err){console.log(err)}
  }

  return (
    <>
      <div className="container">
        <div className="wrapper">
            <div className="s-form">
                <form onSubmit={saveTugas}>
                    <label className='label'>Nama Tugas : </label>
                    <input 
                    type="text"  
                    value={namaTugas}
                    onChange={e => setNamaTugas(e.target.value)}
                    />

                    <label className='label'>Mata Pelajaran : </label>
                    <input 
                    type="text" 
                    value={mapel} 
                    onChange={e => setMapel(e.target.value)}
                    />

                    <label className='label'>Deadline : </label>
                    <input 
                    type="text" 
                    value={deadline} 
                    onChange={e => setDeadline(e.target.value)}
                    />

                    <button type="submit" className='btn submit-btn'>Save</button>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default AddTugas
