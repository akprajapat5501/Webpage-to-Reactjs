import Carousal from './components/Carousal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import { Services } from './components/Services';

// import Services from './components/Services';

function App(){
  return (
    <>
      <Header/>
      <Carousal/>
      <div className="container">
        <div className="row text-center">
          <h1>Services</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aut.</p>
        </div>
        <div className="row">
          <div className="col"><Services/></div>
          <div className="col"><Services/></div>
          <div className="col"><Services/></div>
          <div className="col"><Services/></div>
        </div>
      </div>
      <Contact/>
      <Footer/>
    </>
  )
}
export default App;