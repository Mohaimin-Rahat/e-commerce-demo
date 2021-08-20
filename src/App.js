import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Error from './Error'
import AddProduct from './AddProduct';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import EditProduct from './EditProduct';
import Navbar from './NavBar/NavBar';

const App = () => {
  const [userList] = useState([]);

  return (
    <Grid container justifyContent={'center'}>
      <Grid item md={12}>
        <Router>
          <Navbar/>
        <Switch>
          <Route exact path='/'>
            <ProductList userList={userList} />
          </Route>
          <Route exact path='/ProductDetails/:id'>
            <ProductDetails />
          </Route>
          <Route exact path='/create-product/'>
            <AddProduct />
          </Route>
          <Route exact path='/EditProduct/:id'>
            <EditProduct />
          </Route>

          <Route exact path='*'>
            <Error />
          </Route>
        </Switch>
        </Router>
      </Grid>
    </Grid>
  );
};
export default App;