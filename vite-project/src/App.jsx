import { useUser } from '@clerk/clerk-react'
import { Toaster } from "@/components/ui/sonner"
import React, { useEffect } from 'react'
import {Outlet, useNavigate} from "react-router-dom"
const App = () => {
  const {user, isSignedIn , isLoaded} = useUser();
  const navigate = useNavigate();
useEffect(()=>{
  if(isLoaded&&!isSignedIn){
    navigate("/auth/sign-in")
  }
}, [navigate, isSignedIn , isLoaded])
  return (
    <div>
      <Outlet/>
      <Toaster/>
    </div>

  )
}

export default App