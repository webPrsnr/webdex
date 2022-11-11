// import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Offer } from './components/Offer'
import { Services } from './components/Sevices'
import { Work } from './components/Work'
import {Questions} from "./components/Questions"

function App() {

  return (
    <>
      <Header>
        <Work />
      </Header>
      <Offer />
      <Services />
      <Questions />
      <Footer />    
    </>
  )
}

export default App
