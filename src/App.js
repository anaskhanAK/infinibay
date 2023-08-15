import './App.css';
import Layout from './layout/Layout';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import VmList from './pages/VmList';
import CustomsScripts from './pages/CustomsScripts';
import CustomsTemplates from './pages/CustomsTemplates';
import Storage from './pages/Storage';
import UserList from './pages/UsersList';
import ISOsList from './pages/ISOsList';
import Home from './Component/Screens/Home'
import Signin from "./Component/Screens/Signin";
import Signup from "./Component/Screens/Signup";
import ForgotPassword from "./Component/Screens/ForgotPassword";
import Statistics from './pages/Statistics';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route exact path="/signin" element={<Signin />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/forgotpassword" element={<ForgotPassword />} />
      <Route element={<Layout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/vm-list' element={<VmList />} />
        <Route path='/customs-scripts' element={<CustomsScripts />} />
        <Route path='/customs-templates' element={<CustomsTemplates />} />
        <Route path='/storage' element={<Storage />} />
        <Route path='/users' element={<UserList />} />
        <Route path='/iso-list' element={<ISOsList />} />
        <Route path='/statistics' element={<Statistics />} />
      </Route>
    </Routes>
  );
}

export default App;
