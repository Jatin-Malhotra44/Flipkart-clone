import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ad1 from '../../assets/ad1.jpg'
import ad2 from '../../assets/ad2.jpg'
import ad3 from '../../assets/jbl.jpg'
import { HomeWrapper } from './StyledComponent';
const CarouselComponent = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
      <div style={{width:'100%',margin:'10px auto'}}>
        <HomeWrapper>
        <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <img style={{width:'100%',height:'350px'}}
          className="d-block w-100"
          src={ad1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:'150px',height:'350px'}}
          className="d-block w-100"
          src={ad2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:'150px',height:'350px'}}
          className="d-block w-100"
          src={ad3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </HomeWrapper>
    </div>
  );
}


export default CarouselComponent;
