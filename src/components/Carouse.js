import Carousel from 'react-bootstrap/Carousel';

import image2 from'./images/3858438.jpg'
import image3 from'./images/5340927.jpg'
import image1 from './images/Website_HeroBanner_TNRCatsnip.jpg'

function CarouselFadeExample() {
  return (


    <Carousel fade>
      <Carousel.Item 
    //   style={{height:'200px',width:'200px'}}
      >
        <img
          className="d-block w-100"
          src={image2}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item 
    //   style={{height:'200px',width:'200px'}}
      >
        <img 
          className="d-block w-100"
          src={image1}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default CarouselFadeExample;