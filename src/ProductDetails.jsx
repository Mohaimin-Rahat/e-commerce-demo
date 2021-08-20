import React from 'react';
import axios from 'axios';
import{useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import "./Load-file/Loader.css";
import Loader from './Load-file/Loader';
import { useHistory } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button  from '@material-ui/core/Button';

const ProductDetails =()=> {
    const [loader, setLoader] = useState(true);
    const {id}= useParams()
    const history= useHistory()
    const [ProductDetails,setproductDetails]=useState()


useEffect(()=>{
 axios.get(`https://fakestoreapi.com/products/${id}`)
 .then(response =>{
    setTimeout(() =>setLoader(false),1000);
     setproductDetails(response.data)
 }).catch(error =>{
     console.log(error)
 })
},[])

const deleteProduct = ()=>{
    axios.delete(`https://fakestoreapi.com/products/${id}`)
    .then((response)=>{
        console.log(response.data);
        history.push('/')
    }).catch(error=>{
        console.log(error);
    })
};
const editProduct = (id)=>{
    history.push(`/EditProduct/${id}`);
};
   return (<>
            {loader ? (
                    <Loader></Loader>
                ) : (
                <Grid container spacing={3} justifyContent='center'>
    <Grid container item md={7}>
    <Grid item md={12}>
        {
            ProductDetails && <>
                <img src={ProductDetails.image} style={{width:'50%'}} alt={'kjfks'}/>   
                <p>Title:{ProductDetails.title}</p>
                <p>Description:{ProductDetails.description}</p>
                <p>Category:{ProductDetails.category}</p>
                <p>Price:{ProductDetails.price}</p>
                <ButtonGroup>
                <Button
                    startIcon={<EditIcon />}
                     variant="contained"
                     color="primary"
                     onClick={() => editProduct(id)}> Edit
                 </Button>
                <Button
                      startIcon={<DeleteIcon />}
                      variant="contained"
                      color="secondary"
                      onClick={() => deleteProduct()} > Delete
                </Button>
                </ButtonGroup>
        </>
        }
     </Grid>
    </Grid>
  </Grid>
   )}
  </>
 );
}

export default ProductDetails;