import Carousel from 'react-bootstrap/Carousel';
import firstSlide from '../assets/Slider.jpg';
import secondSlide from '../assets/Slider2.jpg'

function Carousell() {
    return (
        <Carousel data-bs-theme="dark" interval={2000} prevIcon={null} nextIcon={null}>
            <Carousel.Item>
                <img
                    className="d-block w-100 w-64"
                    src={firstSlide}
                    alt="First slide" style={{height:"470px"}}
                />
                <Carousel.Caption>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 w-64"
                    src={secondSlide}
                    alt="Second slide"
                    style={{height:"470px"}}
                />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousell;