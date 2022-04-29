import React,{useState, useEffect} from 'react';


const Products =()=>{
    const[data, setData] = useState([]);
    const[filter, setFilter] = useState(data);
    const[loading, setLoading]= useState(false);
    let componentMounted= true;
    
    useEffect(()=>{
        const getProduct = async ()=>{
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return()=>{
                componentMounted =false;
            }
        }
        getProduct();
    },[]);

    const Loading =()=>{
        return(
            <>
            Loading ....
            </>
        )
    };

    const filterProduct=(cat)=>{
        const updatedList = data.filter((x)=>x.category === cat);
        setFilter(updatedList);
    
    }
    const ShowProduct =() =>{
        return(
            <>
             <button onClick={()=>setFilter(data)}> All </button>
            <button onClick={()=>filterProduct("men's clothing")}> Men </button>
            <button onClick={()=>filterProduct("women's clothing")}> Women </button>
            {filter.map((product)=>{
                return(
                    <>
                    <h1>{product.title}</h1>
                    <p>{product.price}</p>
                    <br />
                    </>
                )
            })}
            </>
        )
    }
    return(
        <>
            <h1>this is text product </h1>
            <div>
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </>
    )
}
export default Products;