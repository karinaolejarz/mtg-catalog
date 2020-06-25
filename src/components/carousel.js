import chandra from '../photos/chandra.png';
import packleader from '../photos/packleader.jpeg';
import coreset from '../photos/coreset.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel' 
import '../App.css';


export class BootstrapCarousel extends Component {  
        render() {  
                return (  
                   <div className="carousel-area">  
                      <div class='container-fluid'>  
                         <div className="row title" style={{ marginBottom:"20px"}} >  

                      </div>  
                   </div>  

               <div className='container-fluid'>  
          <Carousel>  



        <Carousel.Item style={{height:"500px"}} >  
         <img  
            className="d-block w-100"  
             src={coreset}  />
            <Carousel.Caption><h3>Core Set 2021: Preorder booster packs at your local game store</h3></Carousel.Caption> 
        </Carousel.Item>
      
      
      
        <Carousel.Item style={{height:"500px"}}>  
        <img 
         className="d-block w-100"  
          src={chandra}    />  
          <Carousel.Caption><h3>Discover the new Chandra's Spellbook</h3></Carousel.Caption>  
        </Carousel.Item>  



        <Carousel.Item style={{height:"500px"}}>  
        <img 
        className="d-block w-100"  
        src={packleader}   />  
        <Carousel.Caption><h3>Good boys are joining the game!</h3></Carousel.Caption>  
      </Carousel.Item> 


   </Carousel>
    </div>  
  </div>  
                )  
        }  
}  
  
export default BootstrapCarousel;