
import './App.css';
import Profile from './component/Axios/User';
import Parent from './component/contextApi/Parent';
// import Parent1 from './component/props/Parent';
import Main from './component/conditonalrender/Main';
import UserInfo from './component/contextApi/UserInfo';

import "bootstrap/dist/css/bootstrap.css";
import Nav from './component/route/Nav';
import { Routes, Route } from 'react-router-dom';
import StateDemo from './component/state/StateDemo';
import Jewelery from './component/product/Jewelery';
import Electronics from './component/product/Electronics';
import Retails from './component/product/Retails';
import Garments from './component/product/Garments';
import Product from './component/product/Product';
import ProductReport from './component/bootReact/ProductReport';
import AddProduct from './component/bootReact/AddProduct';
import UpdateProduct from './component/bootReact/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/state" element={<StateDemo />} />
        <Route path="/props" element={<Parent />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/condrend" element={<Main />} />
        <Route path="/preport" element={<ProductReport />} />

        <Route path='/product/add' element={<AddProduct />} />
        <Route path='/product/update/:pid' element={<UpdateProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />}>
          <Route path="jw" element={<Jewelery />} />
          <Route path="gr" element={<Garments />} />
          <Route path="elec" element={<Electronics />} />
          <Route path="rt" element={<Retails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
