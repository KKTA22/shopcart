//import {useEffect} from "react"

async function Processor(setdata) {
  //const resp = await fetch("https://react-shopping-cart-67954.firebaseio.com/products.json")
  const resp = await fetch("https://exp.kkant.repl.co/products.json");
  const data = await resp.json();
  const products = await data.products;

  const cleanprod = products.map(
    (items) =>
      [
        {
          sizes: items.availableSizes,
          description: items.description,
          id: items.id,
          installments: items.installments,
          freeship: items.isFreeShipping,
          price: items.price,
          style: items.style,
          title: items.title,
        },
      ][0]
  );
  return cleanprod;

  //await setdata(products)
  //return products
}
export default Processor;
