import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

class Carousel extends Component {
  render() {
    const { settings, images } = this.props;
    return (
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="" />
          </div>
        ))}
      </Slider>
    );
  }
}

Carousel.propTypes = {
  settings: PropTypes.object,
  images: PropTypes.array.isRequired,
};

Carousel.defaultProps = {
  settings: {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false
  }
};

export default Carousel;