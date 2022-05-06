import './App.css';
import Navbar from './components/Navbar';
import CRUD from './components/CRUD';

  function App(props)
{
  return(
    
    <div className="App">
      <Navbar/>
      <CRUD/>     
    </div>
   
  )
}     
export default App;
