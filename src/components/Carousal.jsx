import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Carousal =()=> {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img className="img-fluid" src="https://media.istockphoto.com/id/1341288649/photo/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=2048x2048&w=is&k=20&c=tYXX52oUSiV5_FPTEyReC8XoY1tx4hPhDBvfZNtzg8w=" alt="" />
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img className="img-fluid" src="https://media.istockphoto.com/id/1135654650/photo/toad-rock-mount-abu-02.jpg?s=2048x2048&w=is&k=20&c=FgjqxLbMhfbFFUoPhfLqlP2aQ0IXfvPbskSbBvAEg6I=" alt="" />
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img className="img-fluid" src="https://media.istockphoto.com/id/2162624415/photo/woman-looking-with-awe-at-clouds-gathering-above-sigiria-rock-sitting-on-hill.jpg?s=2048x2048&w=is&k=20&c=ZRhpY1vPPWwg-9wX09rqyLW-Z4zfNiFtZstj_R2zMLw=" alt="" />
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Carousal;