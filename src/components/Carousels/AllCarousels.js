import React from 'react'
import Electronic from './Electronic'
import Fashion from './Fashion'
import AllProducts from './AllProducts'
import Furniture from './Furniture'
import CarouselComponent from '../HomeCarousel/CarouselComponent'
const AllCarousels = () => {
    return (
        <div>
            <CarouselComponent/>
            <AllProducts/>
            <Electronic/>
            <Fashion/>
            <Furniture/>
        </div>
    )
}

export default AllCarousels
