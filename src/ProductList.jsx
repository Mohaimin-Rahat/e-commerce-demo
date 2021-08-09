import React from 'react';
import axios from 'axios';
import{useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import "./Load-file/Loader.css";
import Loader from './Load-file/Loader';



const ProductList =()=> {
    const [loader, setLoader] = useState(true);
        const history= useHistory()
        const [productList,setproductList]=useState([])

    useEffect(()=>{
     axios.get('https://fakestoreapi.com/products')
     .then(response =>{
        setTimeout(() => setLoader(false), 1000);
         setproductList(response.data)
     }).catch(error =>{
         console.log(error)
     })
    },[])

    const seeDetails =(id)=>{
        history.push(`/ProductDetails/${id}`)
    }
        
        return <>
        {loader ? (
            <Loader></Loader>
        ) : (
        <Grid container spacing={3} justifyContent='center'>
             <Grid container item md={7}>
             <Grid item md={12}>
            <p>ProductList</p>
            </Grid>
            {
                productList.map((product,index) => (
                    <Grid key={index} item md ={3}>
                        <img src={product.image} style={{width:'100%'}} alt={'kjfks'}/>
                        <p> {product.title}</p>
                        <button onClick={()=> seeDetails(product.id)}>See Details </button>
                        </Grid>
                ))
        
            }
            </Grid>
        </Grid>
        )}
        </>
        
}

export default ProductList;