import React from 'react'
import Grid from '@material-ui/core/Grid';
import{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "./Load-file/Loader.css";
import Loader from './Load-file/Loader';
import Button  from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';

const EditProduct=()=>{
    const [loader, setLoader] = useState(true);
    const history= useHistory()
    const {id}= useParams()
    const [newDetails,setnewDetails]=useState()
       
    
        useEffect(() => {
            axios
                .get(`https://fakestoreapi.com/products/${id}`)
                .then((response) => {
                    setnewDetails(response.data);
                    setTimeout(() => setLoader(false),1000);
                })
                .catch((error) => console.log(error));
        }, []);
            
         
        const editProduct = (e, key) => {
            setnewDetails({ ...newDetails, [key]: e.target.value });
        };
        
        const requestUpdate = () => {
            axios
                .patch(`https://fakestoreapi.com/products/${id}`, {
                    title: newDetails.title,
                    description:newDetails.description,
                    price: newDetails.price,
                    category: newDetails.category,
                    image: newDetails.image,
                })
                .then((response)=>{
                    history.push(`/ProductDetails/${id}`)
            })
                .catch(error=>{
                    console.log(error);
                })
            };

    return(
    <>
        {loader ? (
                <Loader></Loader>
            ) : (
             <Grid container spacing={3} justifyContent='center'>
                <Grid container item md={7}>
                  <Grid item md={12}>
                    
                </Grid>
                <Grid item md={12}>
               
                <div>
                    <p>Product Title</p>
                    <input value={newDetails.title} onChange={e=>editProduct(e,'title')}/>
                </div>
                <div>
                    <p>Product Description</p>
                    <input value={newDetails.description} onChange={e=>editProduct(e,'description')}/>
                </div>
                <div>
                    <p>Product Price</p>
                    <input value={newDetails.price} onChange={e=>editProduct(e,'price')}/>
                </div>
                <div>
                    <p>Product Category</p>
                    <input value={newDetails.category} onChange={e=>editProduct(e,'category')}/>
                </div>
                <div>
                    <p>Product Image</p>
                    <input value={newDetails.image} onChange={e=>editProduct(e,'image')}/>
                </div>
                <Button
                    startIcon={<UpdateIcon />}
                     variant="contained"
                     color="primary"
                     onClick={() => requestUpdate(id)}> Update Details
                </Button>
        </Grid>
        </Grid>
    </Grid>
    )}
    </>
    );
            
        
}       
export default EditProduct;