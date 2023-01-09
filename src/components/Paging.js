import React from 'react';
import Pagination from '@mui/material/Pagination';
import Prodshow from './Prodshow';
import Stack from '@mui/material/Stack';

export default function Paging(props){
  const [page, setPage] = React.useState(1);

    const prdata=props.prdata
    const ppn=props.ppn
    const c = Math.ceil(prdata.length/ppn)



    const handleChange = (event, value) => {
      event.preventDefault()
      setPage(value);
  };

    return (
        <div style={{ display: 'block', padding: 30, left:"auto", right:"auto"}}>
          <h1>Please take a look at our products</h1>
          <Stack alignItems="center">
          <Pagination count={c}  onChange={handleChange} style={{justifyContent:"center"}} />
          </Stack>
          <Prodshow prdata={prdata.slice((page-1)*ppn,page*ppn)} cart={props.cart} setcart={props.setcart} quants={props.quants} setquants={props.setquants}/>
        </div>
      );
    }

