import{Routes,Route} from 'react-router-dom'
import Support from './Components/Support';
import Enterprise from './Components/Enterprise';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Header from './Components/Header';
import Features from './Components/Features';

function App() {
  return(
    <>
    <Header/>
    <Routes>
    <Route path='header' element={<Header/>}></Route>
      <Route path='/' element={<Features/>}></Route>
      <Route path='enterprise' element={<Enterprise/>}></Route>
      <Route path='support' element={<Support/>}></Route>
      <Route path='home' element={<Home/>}></Route>
      <Route path='footer' element={<Footer/>}></Route>

    </Routes>
    <Footer/>

    
    </>
    
    );
}


export default App
