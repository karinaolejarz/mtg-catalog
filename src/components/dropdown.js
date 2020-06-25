import React, { Component } from 'react';
import ManaR from '../photos/Mana_R.png';
import ManaU from '../photos/Mana_U.png';
import ManaB from '../photos/Mana_B.png';
import ManaW from '../photos/Mana_W.png';
import ManaG from '../photos/Mana_G.png';
import ManaN from '../photos/Mana_N.png';

class Dropdown extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (

      

      <div>


        <button onClick={this.showMenu} class="btn btn-secondary" style={{width:"190px"}}>
        ▼ Filter by mana color
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                  
                }}
                style={{display:"flex",flexDirection:"column",position:"absolute",width:"150px"}}
              >
              
                <a href="/catalog" class="btn btn-light"> <img src={ManaN} style={{width:"1em", height:"1em"}}/> All </a>
                <a href="/red" class="btn btn-light"> <img src={ManaR} style={{width:"1em", height:"1em"}} /> Red </a>
                <a href="/white" class="btn btn-light"> <img src={ManaW} style={{width:"1em", height:"1em"}} /> White </a>
                <a href="/blue" class="btn btn-light"> <img src={ManaU} style={{width:"1em", height:"1em"}}/> Blue </a>
                <a href="/green" class="btn btn-light"> <img src={ManaG} style={{width:"1em", height:"1em"}}/> Green </a>
                <a href="/black" class="btn btn-light"> <img src={ManaB} style={{width:"1em", height:"1em"}}/> Black </a>
                
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}
export default Dropdown;