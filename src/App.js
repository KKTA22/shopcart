
import './App.css';
import Processor from "./components/Processor"
import { useEffect, useState } from 'react';
import Paging from './components/Paging';
import CartPage from './components/CartPage';
import Filter from './components/Filter';

function App() {
    const [loading,setloading]=useState(true)
    const [prdata,setprdata]=useState()
    const [cart,setcart]=useState([])
    const [quants,setquants]=useState({})
    const [carton,setcarton]=useState(false)
    const [ppn,setppn]=useState(3)
    const [filtprd,setfiltprd]=useState()

    const handlech=(event)=>{

      setppn(event.target.value)
    }
    useEffect(()=> {
      (async()=>{
        const data =await Processor() ;
        setprdata(data)
        setfiltprd(data)
        setloading(false)

      })();
    },[]);
  return (
    <div className="App">
      <button onClick={()=>{setcarton(true)}}>Cart</button>
      <p>
        Select products per page
      <select defaultValue={3} onChange={handlech}>
        <option >1</option>
        <option >3</option>
        <option >5</option>
      </select>
      </p>
      <Filter setfiltprd={setfiltprd} prdata={prdata} filtprd={filtprd}/>
      {carton?<CartPage cart={cart} prdata={prdata} setcarton={setcarton} quants={quants} setquants={setquants} setcart={setcart}/>:<></>}
      {loading? <h1>loading</h1>:<div><Paging prdata={filtprd} ppn={ppn} setcart={setcart} cart={cart} setquants={setquants} quants={quants}/></div>}


    </div>
  );
}

export default App;
