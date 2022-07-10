import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from './pages/Login';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword'
import ForgotPassword from './pages/ForgotPassword';
import ChangePassword from './pages/ChangePassword';
import Home from './pages/Home'; 
import NotFound from './pages/NotFound';
import HomePgaeEchart from './pages/HomePgaeEchart';
import Students from './pages/Students';
import Faculty from './pages/Faculty';
import JobAdd from './pages/JobAdd';
import Tag from './pages/Tag';
import Department from './pages/Department';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/forgot-password' element={<ForgotPassword />}></Route>
          <Route path='/reset-password' element={<ResetPassword />}></Route>
          <Route path='/change-password' element={<ChangePassword />}></Route>
          <Route path='/dashboard' element={<Home />}></Route>
          <Route path='/home-page' element={<HomePgaeEchart />}></Route>
          <Route path='/student' element={<Students />}></Route>
          <Route path='/faculty' element={<Faculty />}></Route>
          <Route path='/job-ad' element={<JobAdd />}></Route>
          <Route path='/tag' element={<Tag />}></Route>
          <Route path='/department' element={<Department />}></Route>
          <Route path='*' element={<NotFound />} />
          <Route path='/not-found' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
