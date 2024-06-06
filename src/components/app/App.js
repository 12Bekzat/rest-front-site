import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from '../../providers/AuthProvider';
import Home from '../../pages/Home';
import Header from '../header/Header';
import '../../scss/style.scss';
import Footer from '../footer/Footer';
import Catalog from '../../pages/Catalog';
import About from '../../pages/About';
import Users from '../../pages/Users';
import CreateUser from '../../pages/CreateUser';
import EditUser from '../../pages/EditUser';
import AllowUsers from '../../pages/AllowUsers';
import DashboardPage from '../../pages/DashboardPage';
import Products from '../../pages/Products';
import CreateProduct from '../../pages/CreateProduct';
import EditProduct from '../../pages/EditProduct';
import Orders from '../../pages/Orders';
import Cart from '../../pages/Cart';
import Payment from '../../pages/Payment';
import { LoaderProvider } from '../../providers/LoaderProvider';
import Profile from '../../pages/Profile';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import LogOut from '../../pages/LogOut';
import CreateCategory from '../../pages/CreateCategory';
import OrdersPost from '../../pages/OrdersPost';
import DashboardProds from '../../pages/DasboardProds';
import EditOrder from '../../pages/EditOrder';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LoaderProvider>
          <Header />

          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} /> */}
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/about' element={<About />} />
            <Route path='/users' element={<Users />} />
            <Route path='/user/allow' element={<AllowUsers />} />
            <Route path='/user/create' element={<CreateUser />} />
            <Route path='/user/edit/:id' element={<EditUser />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/products' element={<Products />} />
            <Route path='/product/create' element={<CreateProduct />} />
            <Route path='/product/edit/:id' element={<EditProduct />} />
            <Route path='/orders/edit/:id' element={<EditOrder />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/orders/post' element={<OrdersPost />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/my/edit' element={<EditUser my={true}/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/category/create' element={<CreateCategory/>} />
            <Route path='/dashboard/products' element={<DashboardProds/>} />
            <Route path='/logout' element={<LogOut/>} />
          </Routes>

          <Footer />
        </LoaderProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
