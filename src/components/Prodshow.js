


function Prodshow({prdata,quants,setquants,cart,setcart}){



    const checkex=(id,value)=>{
        return cart.filter((item)=>item[0]===id && item[1]===value).length>0

    }
    const addcart=(event,id)=>{
        event.preventDefault()



        if ( checkex(id,event.target.val.value)){
            //alert("Already in cart")
            let tempq=quants
            tempq[[id,event.target.val.value]]=tempq[[id,event.target.val.value]]+1
            setquants(tempq)
            //setabc(tempq[[id,event.target.val.value]])
        }
        else{

            setcart([...cart,[id,event.target.val.value]])

            const nq=quants
            nq[[id,event.target.val.value]]=1
            setquants(nq)
        }

    }
    return(
        <div>
        {prdata.map((item)=>
            <div key={item.id} style={{color:"red",padding:"1%", margin:"1%", borderStyle:"solid"}}>

            <h1 style={{color:"blue"}}>{item.title}</h1>

            <h2>Description:{item.description?item.description:"No description Available"}</h2>

            <h2>Style:{item.style?item.style:"No Style"}</h2>

            <h1 style={{color:"black"}}>Only for ${item.price}</h1>


            <form type="submit" onSubmit={(event)=>{addcart(event,item.id)}} >
            <p>Choose size:
            <select name="val" >

            {item.sizes.map((it)=>

            <option key={it} value={it}>{it}</option>


            )}
            </select>
            </p>

            <button type="submit" >Add to cart</button>
            </form>
            </div>)}

            </div>
    )
}
export default Prodshow;