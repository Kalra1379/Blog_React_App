import React, { useState } from "react";
import Home from "./components/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  const [blogs,setblogs]=useState([
    {title:"First",id:1,body:"THis is first blog body....",author:"arpit"},
    {title:"Second",id:2,body:"THis is second blog body....",author:"arpit1"},
    {title:"Third",id:3,body:"THis is Third blog body....",author:"arpit2"}
  ]);

  const handleDelete=(id)=>{
    const newblogs=blogs.filter();
    setblogs(newblogs);
  }
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home blogs={blogs} handleDelete={handleDelete} title="All blogs"/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
