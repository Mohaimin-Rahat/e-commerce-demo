import React, {useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Error from './Error'
import AddProduct from './AddProduct';
import { Switch,Route,Link } from 'react-router-dom';
import EditProduct from './EditProduct';

const App = () => {
  const [userList,setuserList]=useState([]);


return(
  <Grid container justifyContent={'center'}>
    <Grid item md={12}>
        <Link to='/'>Home</Link>
        <Link to='/create-product'>Create Product</Link>
    </Grid>
     <Grid item md={12}>
        <Switch>
          <Route exact path='/'>
            <ProductList userList={userList}/>
          </Route>
          <Route exact path='/ProductDetails/:id'>
            <ProductDetails/>
          </Route>
          <Route exact path='/create-product/'>
            <AddProduct/>
          </Route>
          <Route exact path='/EditProduct/:id'>
            <EditProduct/>
          </Route>

      <Route exact path='*'>
         <Error/>
      </Route>
    </Switch>
    </Grid>
  </Grid>
 );
};
export default App;