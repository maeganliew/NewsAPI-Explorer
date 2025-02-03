import { Navbar } from "./components/Navbar"
import { Newsboard } from "./components/Newsboard"
import React, { useEffect, useState } from 'react';


 const App = () => {
  
  const [category, setCategory] = useState ("general");

  return (
    <div>
          <Navbar setCategory = {setCategory}/>
          <Newsboard category = {category}/>
    </div>
  )
}

export default App

console.log("Environment Variables:", import.meta.env);
console.log("API Key:", import.meta.env.VITE_API_KEY);