import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import {Outlet, useNavigate} from "react-router-dom"
const App = () => {
  const {user, isSignedIn , isLoaded} = useUser();
  const navigate = useNavigate();
!isSignedIn&&isLoaded && navigate("/auth/sign-in")
  return (
    <div>
      <Outlet/>
    </div>

  )
}

export default App