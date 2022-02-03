import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Components/Home';
import {Routes, Route,Router} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Ourwork from './Components/Ourwork.js';
import Influencers from './Components/Influencers';





const App = () => {
   return (
      <>

      <Navbar/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/ourwork' element={<Ourwork/>}  />
            <Route path='/influencers' element={<Influencers/>} />

         </Routes>
      </>
   );
};

export default App;
