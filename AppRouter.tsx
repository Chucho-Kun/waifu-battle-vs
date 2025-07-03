import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './src/layouts/Layout';
import React, { lazy, Suspense } from 'react';

const Portada = lazy( () => import('./src/views/Portada') )
const Battle = lazy( () => import('./src/views/Battle') )
const Waifus = lazy( () => import('./src/views/Waifus') )

export default function AppRouter() {

  React.useState(0)

  return (
    <BrowserRouter>
        <Routes>
            <Route element={ <Layout /> }>
                
                <Route path='/' element={ 
                  <Suspense fallback={
                    <div className="text-center text-pink-600 text-xl font-bold py-10">Cargando...</div>
                  } > <Portada /> </Suspense>
                 } index />
                
                <Route path='/battle' element={ 
                  <Suspense fallback={
                    <div className="text-center text-pink-600 text-xl font-bold py-10">Cargando...</div>
                  }> <Battle /> </Suspense>   
                 } />

                <Route path='/waifus' element={ 
                  <Suspense fallback={
                    <div className="text-center text-pink-600 text-xl font-bold py-10">Cargando...</div>
                  } > <Waifus /> </Suspense>
                 } />

            </Route>
        </Routes>
    </BrowserRouter>
  )
}
