import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import kohi from '../images/kohi.png';
import axios from 'axios';
import './css/AdminPage.css'

const AdminPage = () => {
  const [tugas, setTugas] = useState([]);

  useEffect(() => {
    getDatas();
  },[]) 

  async function getDatas() {
    const res = await axios.get('http://localhost:5000/tugas')
    setTugas(res.data.data)
  }

  async function deleteData(id){
    try{
        await axios.delete(`http://localhost:5000/tugas/${id}`);
        setTugas();
        window.location.reload();
    }catch(err){
        console.error(err.message)
    }
  }
  return (
    <>
    <div className="container">
      <div className="title">
        <img className='kohi' src={kohi} alt="kohi"/>
        <h2>Tugas Sekolah</h2>
      </div>
      <div className='content'>
        <table class="content-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Tugas</th>
              <th>Mapel</th>
              <th>Deadline</th>
              <th>Waktu upload</th>
              <th>Edit</th>
            </tr>
        </thead>
        <tbody>
          {tugas.map((data, i) => {
            return (
              <>
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{data.nama_tugas}</td>
                  <td>{data.mapel}</td>
                  <td>{data.deadline}</td>
                  <td>{data.createdAt.split('T').join(' | ').split('Z').join('').split('.000')}</td>
                  <td>
                    <div className="buttons">
                        <Link to={`edit/${data.id}`} className='btn btn-primary'>Edit</Link>
                        <button className=' btn btn-danger' onClick={() => deleteData(data.id)}>Delete</button>
                    </div>
                </td>
                </tr>	
              </>
            )
          })}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default AdminPage