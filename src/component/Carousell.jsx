import Carousel from 'react-bootstrap/Carousel';
import firstSlide from '../assets/Slider.jpg';
import secondSlide from '../assets/Slider2.jpg'

function Carousell() {
    return (
        <Carousel data-bs-theme="dark" interval={2000} prevIcon={null} nextIcon={null}>
            <Carousel.Item>
                <img
                    className="d-block lg:w-full md:w-96 sm:w-52 w-100"
                    src={firstSlide}
                    alt="First slide"
                />
                <Carousel.Caption>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block lg:w-full md:w-96 sm:w-52 w-100"
                    src={secondSlide}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousell;