import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  AdminPage,
  AddTugas,
  EditTugas
} from './components/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/admin' element={<AdminPage/>} />
      <Route path='/admin/add' element={<AddTugas/>} />
      <Route path='/admin/edit/:id' element={<EditTugas/>} />
    </Routes>
  </BrowserRouter>
);