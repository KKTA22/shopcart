import React, { useState } from "react"
import ReactDOM from 'react-dom'

export default function CartPage(props){


    let tempq=props.quants

    const [abc,setabc]=useState()

    const addn=(id,siz)=>{

        tempq[[id,siz]]=tempq[[id,siz]]+1
        props.setquants(tempq)
        setabc(tempq[[id,siz]])
    }
    const subst=(id,siz)=>{
        if (tempq[[id,siz]]===1){
            props.setcart(props.cart.filter(word=>word[0]!==id))

            delete tempq[[id,siz]]

            props.setquants(tempq)

            setabc([id,0])
        }
        else{
        tempq[[id,siz]]=tempq[[id,siz]]-1
        props.setquants(tempq)
        setabc(tempq[[id,siz]])
        }
    }
    return ReactDOM.createPortal(

        <div style={{overflowY: "scroll",display:"",backgroundColor:"rgba(206, 183, 183, 0.9)",zIndex:"100",position:"absolute",padding:"10%"}}>

            <button onClick={()=>{props.setcarton(false)}}>Back</button>

            {props.cart.length===0?<h1>cart is empty</h1>:<></>}

        {(props.cart).map((item)=>

            <div key={item}>

            <h2 style={{borderStyle:"solid"}}>{props.prdata.filter(word=>word.id===item[0])[0].title}</h2>

            <h3>size:{item[1]}</h3>

            <h3>Quantity:{(tempq)[[item[0],item[1]]]}</h3>

            <button onClick={()=>{addn(item[0],item[1])}}>add</button>

            <button onClick={()=>{subst(item[0],item[1])}}>substract</button>
            </div>




            )}
            <button style={{padding:"5%",margin:"5%"}} onClick={()=>{alert("Not allowed to check out")}}>Checkout</button>

            </div>
            ,
            document.getElementById('portal')
    )

}