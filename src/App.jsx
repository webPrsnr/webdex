// import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Offer } from './components/Offer'
import { Services } from './components/Sevices'
import { Work } from './components/Work'
import {Questions} from "./components/Questions"
import { Pricing } from './components/Pricing'

function App() {

  return (
    <>
      <Header>
        <Work />
      </Header>
      <Offer />
      <Services />
      <Questions />
      <Pricing />
      <Footer />
    </>
  )
}

export default App
