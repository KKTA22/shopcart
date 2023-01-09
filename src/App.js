
import './App.css';
import Processor from "./components/Processor"
import { useEffect, useState } from 'react';
import Paging from './components/Paging';
import CartPage from './components/CartPage';

function App() {
    const [loading,setloading]=useState(true)
    const [prdata,setprdata]=useState()
    const [cart,setcart]=useState([])
    const [quants,setquants]=useState({})
    const [carton,setcarton]=useState(false)
    const ppn=3
    useEffect(()=> {
      (async()=>{
        const data =await Processor() ;
        setprdata(data)
        setloading(false)

      })();
    },[]);
  return (
    <div className="App">
      <button onClick={()=>{setcarton(true)}}>Cart</button>
      {carton?<CartPage cart={cart} prdata={prdata} setcarton={setcarton} quants={quants} setquants={setquants} setcart={setcart}/>:<></>}
      {loading? <h1>loading</h1>:<div><Paging prdata={prdata} ppn={ppn} setcart={setcart} cart={cart} setquants={setquants} quants={quants}/></div>}


    </div>
  );
}

export default App;
