import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admindashboard from './AdminComponents/admindashboard';
import Userdashboard from './UsersComponents/userdashboard';
import LoginRegister from './LoginRegister/loginregister';
import BookProvider from './UsersComponents/BookContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
   return (
       <BookProvider>
         <Router>
         <Routes>
            <Route path="/" element={<LoginRegister/>} />
            <Route path="/admin-dashboard" element={<Admindashboard/>} />
            <Route path="/user-dashboard" element={<Userdashboard/>} />
         </Routes>
      </Router>
       </BookProvider>
   );
};

export default App;
