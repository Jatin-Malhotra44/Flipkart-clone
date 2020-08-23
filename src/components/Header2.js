import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import {Link} from 'react-router-dom'
import './css/Header.css'
import {DataContext} from './Context'
import './Header.css'


export class Header2 extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }


    render() {
        const {toggle} = this.state;
        const {cart} = this.context;
        return (
            <div style={{backgroundColor:'silver'}}>
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                
                <div className='navContainer'>
                        
                        <div className='logo'><Link to="/" className='link'>FlipKart</Link></div>
                        <div className='elem'><Link to="/" className='link'>Home</Link></div>
                        {/* <div className='elem'><Link to="/product" className='link'>Product</Link></div> */}
                        {/* <div className='elem'><Link to="/contact"className='link'>Contact</Link></div>
                        <div className='elem'><Link to="/about"className='link'>About</Link></div> */}
                        <div className='elem'><Link to="/signin"className='link'>Sign IN</Link></div>
                        <div className='elem'><Link to="/signup"className='link'>Sign Up</Link></div>
                        <div className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="40px"/>
                        </div>
                    <div className="nav-cart" style={{marginTop:'25px'}}>
                        <Link to="/cart" style={{marginTop:'30px'}}>
                            <img src={CartIcon} alt="" width="30px"/>
                        </Link>
                        <span style={{color:'red',fontSize:'20px'}}>{cart.length}</span>
                    </div>
                </div>
            </header>
            </div>
        )
    }
}

export default Header2
