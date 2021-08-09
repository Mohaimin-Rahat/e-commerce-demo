import React from 'react'
import Grid from '@material-ui/core/Grid';
import{useState,useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "./Load-file/Loader.css";
import Loader from './Load-file/Loader';

const AddProduct=() =>{
    const [loader, setLoader] = useState(true);
    const history= useHistory()
    const [product,setProduct]=useState({
        name:'',
        title:'',
        description:'',
        price:'',
        category:'',
        image:'',
    });

    const addProduct=(e,key)=>{
        setProduct({...product,[key]: e.target.value})
    }
    const productAdded = ()=>{
        axios.post('https://fakestoreapi.com/products',{
            name:product.name,
            title:product.title,
            description:product.description,
            price:product.price,
            category:product.category,
            image:product.image,
              }).then((response)=>{
                 history.push('/')
               }).catch(error=>{
                console.log(error);
            })
    };
    useEffect(()=>{
        setTimeout(() => setLoader(false),1000);
    },[])

    return(<>
        {loader ? (
                <Loader></Loader>
            ) : (
    <Grid container spacing={3} justifyContent='center'>
        <Grid container item md={7}>
          <Grid item md={12}>
            <p>ProductList</p>
          </Grid>
         <Grid item md={12}>
           <div>
               <p>Product Name</p>
               <input value={product.name} onChange={e=>addProduct(e,'name')}/>
           </div>
           <div>
           <p>Product Title</p>
           <input value={product.title} onChange={e=>addProduct(e,'title')}/>
       </div>
           <div>
               <p>Product Description</p>
               <input value={product.description} onChange={e=>addProduct(e,'description')}/>
           </div>
           <div>
               <p>Product Price</p>
               <input value={product.price} onChange={e=>addProduct(e,'price')}/>
           </div>
           <div>
               <p>Product Category</p>
               <input value={product.category} onChange={e=>addProduct(e,'category')}/>
           </div>
           <div>
               <p>Product Image</p>
               <input value={product.image} onChange={e=>addProduct(e,'image')}/>
           </div>
            <button onClick={productAdded}>Add Product</button>
          </Grid>
        </Grid>
    </Grid>
    )}
    </>
    );
    

}
export default AddProduct;