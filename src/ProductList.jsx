import React from 'react';
import axios from 'axios';
import{useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import "./Load-file/Loader.css";
import Loader from './Load-file/Loader';
import Button  from '@material-ui/core/Button';



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
                    <Grid key={index} md={4}>
                        <img src={product.image} style={{width:'75%'}} alt={'kjfks'}/>
                        <p> {product.title}</p>
                    <Grid>
                        <Button 
                        variant="contained"
                        color="primary"
                        onClick={()=> seeDetails(product.id)}>See Details </Button>
                    </Grid>
                        </Grid>
                ))
        
            }
            </Grid>
        </Grid>
        )}
        </>
        
}

export default ProductList;