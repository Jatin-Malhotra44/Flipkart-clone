import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Products.css'
import { Container, Card, Row, Col,CardImg } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {HomeWrapper} from './NewStyle'

export class AllProducts extends Component {

    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
          };
        return (
            <div id="product" style={{margin:'30px 0'}}>
                <HomeWrapper>
                    <Container>
                        <Typography variant='h2'>All Products</Typography>
                    </Container>
               <Container>
               <Slider {...settings}>
               {
                   products.map(product =>(
                       <div className="card" key={product._id}>
                           <div style={{width:'230px',height:'220px',margin:'0 auto',alignItems:'center'}}>
                           <Link to={`/product/${product._id}`}>
                               <img src={product.src} alt="" style={{width:'70%',height:'70%',margin:'10px'}}/>
                           </Link>
                           </div>
                           <div className="content">
                               <h3>
                                   <Link to={`/product/${product._id}`}>{product.title}</Link>
                               </h3>
                               <span>₹{product.price}</span>
                               <p>{product.description}</p>
                               <button onClick={()=> addCart(product._id)}>Add to cart</button>
                           </div>
                       </div>
                   ))
               }
               </Slider>
               </Container>
               </HomeWrapper>
            </div>
        )
    }
}

export default AllProducts
