import React, {useState} from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(
        () => {
          const token = JSON.parse(localStorage.getItem('token'));
          if(token === null) {
              return false;
          }
          console.log(token.accessToken !== null)
          return token?.accessToken !== null
        }
      );
    
  return (
    isLoggedIn ? children : <Navigate to='/login' />
  )
}

export default PrivateRoute