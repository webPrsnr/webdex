// import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Offer } from './components/Offer'
import { Services } from './components/Sevices'
import { Work } from './components/Work'

function App() {

  return (
    <>
      <Header>
        <Work />
      </Header>
      <Offer />
      <Services />
      <Footer />    
    </>
  )
}

export default App
