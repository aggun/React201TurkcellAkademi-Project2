import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/dashboard/Home';
import Users from './Pages/dashboard/Users';
import Contact from './Pages/dashboard/Contact';
import UserDetail from './Pages/dashboard/UserDetail';
import DashboardLayout from './layouts/dashboard';
import Login from './Pages/auth/Login';
import AuthLayout from './layouts/auth';
import Register from './Pages/auth/Register';
import Error404 from './Pages/Error404';
function App() {
  return (
    <BrowserRouter>
 
    <Routes>
<Route path='/' element={<DashboardLayout/>}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />}/>
        <Route path="users/:id" element={<UserDetail />}/>
        <Route path="contact" element={<Contact />}/>
        </Route>

        <Route path='auth' element={<AuthLayout/>}>
        <Route index element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        </Route>

<Route path='*' element={<Error404/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
