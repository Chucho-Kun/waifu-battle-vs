import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Portada from './src/views/Portada';
import Waifus from './src/views/Waifus';
import Battle from './src/views/Battle';
import Layout from './src/layouts/Layout';
import React from 'react';

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={ <Layout /> }>
                <Route path='/' element={ <Portada /> } index />
                <Route path='/battle' element={ <Battle /> } />
                <Route path='/waifus' element={ <Waifus /> } />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
