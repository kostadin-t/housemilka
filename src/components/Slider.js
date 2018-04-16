import React from 'react';
import Carousel from 'nuka-carousel';
import Img from 'react-image';
import VisibilitySensor from 'react-visibility-sensor'

const image1 = require('../images/house-front.jpg');
const image2 = require('../images/chereshovo.jpg');
const image3 = require('../images/besedka.jpg');
const image4 = require('../images/mehana.JPG');
const image5 = require('../images/yard.JPG');

const images = [image1,image2,image3, image4, image5];

export default class Slider extends React.Component {

  

  constructor(props) {
    super(props);
    this.state = {
      showSlider: false,
      slideIndex: 0
    };
  }

  onChange (isVisible) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    this.setState({showSlider: true});
  };

  renderImages() {
    const result = images.map((img, i) => <VisibilitySensor key={i} onChange={this.onChange.bind(this)}><Img className="slider-image"src={img} alt="" key={i}/></VisibilitySensor>);
    return result;
  }

  render() {
    return (
      <Carousel 
        className="slider" 
        slideIndex={this.state.slideIndex} 
        afterSlide={slideIndex => this.setState({ slideIndex })} 
        autoplay = {true}
        wrapAround = {true}>
            { this.renderImages() }
      </Carousel>)
}
}