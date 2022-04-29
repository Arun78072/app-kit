import React ,{useState ,useEffect}from 'react';
import { useParams } from 'react-router';
const Testproduct=() =>{

const {id} =useParams();
const [product, setProduct] = useState([]);
const [loading ,setLoading] = useState(false);

useEffect(()=>{
      const getProduct = async ()=>{
          setLoading(true);
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        
              setProduct(await response.json());
              setLoading(false);
          }
         
      getProduct();
  },[]);

  const Loading =()=>{
    return(
        <>
        Loading .... {id}
       
        </>
    )
};


const ShowProduct =() =>{
return(
    <>
  Lshow product ... {id}
  <img src={product.image}/>
    </>
)
}
    return(
        <>
        
        {loading ? <Loading/> : <ShowProduct/>}
        

        </>
    )
}
export default Testproduct;