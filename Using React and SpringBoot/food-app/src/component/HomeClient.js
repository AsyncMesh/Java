import React, { useEffect, useState } from 'react'

const HomeClient = () => {
 const [user,setUser]=useState({});
 
   useEffect(()=>{
     const loggedInUser = localStorage.getItem("user");
     if(loggedInUser){
       setUser(JSON.parse(loggedInUser));
     }
   },[])
 
   return (
     <div>
         Food app Home page
         <h2>Welcome, {user.nm}</h2>
     </div>
   )
}

export default HomeClient