import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'


function App() {
  const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
    .then(res => res.json())
  return (
    <>

      <Suspense fallback={<h1>Loading Countries.......!!!</h1>}>
        <Countries countriesPromise={countriesPromise}></Countries>

      </Suspense>

    </>
  )
}

export default App
