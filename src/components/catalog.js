import React from "react";
import Search from "./search";
import '../App.css';
import Footer from './footer';

function Catalog() {
  return (
    <div
    style={{
      width:"100%",
      display:"flex",
      justifyContent:"center",
    }}>
      <Search />


    </div>
    
  )
}


export default Catalog;