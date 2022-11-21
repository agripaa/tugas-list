import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditTugas = () => {
  const [namaTugas, setNamaTugas] = useState("");
  const [mapel, setMapel] = useState("");
  const [deadline, setDeadline] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();
  const baseURL = "http://localhost:5000/tugas";

  useEffect(() => {
    getTugasById();
  },[])

  async function getTugasById(){
    const res = await axios.get(`${baseURL}/${id}`);
    setNamaTugas(res.data.data.nama_tugas);
    setMapel(res.data.data.mapel);
    setDeadline(res.data.data.deadline)
  }

  const updateTugas = async(e) =>  {
    e.preventDefault();
    const uploadData = {
      nama_tugas : namaTugas,
      mapel: mapel,
      deadline: deadline
    }
    
    try {
      await axios.patch(`${baseURL}/${id}`, uploadData)
      .catch(err => {console.error(err)})
      navigate('/admin')
    } catch (err){console.log(err)}
  }

  return (
    <>
      <div className="container">
        <div className="wrapper">
            <div className="s-form">
                <form onSubmit={updateTugas}>
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

export default EditTugas
