import React, { useState, useEffect} from 'react';
import kohi from './images/kohi.png';
import axios from 'axios';
import './css/MainPages.css';

const MainPages = () => {
  const [tugas, setTugas] = useState([]);

  useEffect(() => {
    getDatas();
  },[])

  async function getDatas() {
    const result = await axios.get('http://localhost:5000/tugas')
    setTugas(result.data.data)
  }

  console.log(tugas)
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
              <th>mapel</th>
              <th>Deadline</th>
              <th>waktu upload</th>
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

export default MainPages