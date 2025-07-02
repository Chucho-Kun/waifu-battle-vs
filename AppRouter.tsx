import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './src/layouts/Layout';
import { lazy, Suspense } from 'react';

const Portada = lazy( () => import('./src/views/Portada') )
const Battle = lazy( () => import('./src/views/Battle') )
const Waifus = lazy( () => import('./src/views/Waifus') )

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={ <Layout /> }>
                
                <Route path='/' element={ 
                  <Suspense fallback="Cargando..." > <Portada /> </Suspense>
                 } index />
                
                <Route path='/battle' element={ 
                  <Suspense fallback="Cargando..."> <Battle /> </Suspense>   
                 } />

                <Route path='/waifus' element={ 
                  <Suspense fallback="Cargando..." > <Waifus /> </Suspense>
                 } />
                 
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
