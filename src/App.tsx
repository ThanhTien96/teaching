import React from 'react';


import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router';
import MainTemplate from 'templates/MainTemplate';
import Login from 'pages/account/Login';
import Signup from 'pages/account/Signup';
import Project from 'pages/project/Project';
import Task from 'pages/project/Task';






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index  path='' element={<Login/>} />
        <Route  path='signup' element={<Signup/>}/>
        <Route path='*' element={<Navigate to={'/'} replace/>}></Route>

        <Route path='project' element={<MainTemplate />}>

          <Route index path='' element={<Project />}></Route>
          <Route  path='task' element={<Task />}></Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
