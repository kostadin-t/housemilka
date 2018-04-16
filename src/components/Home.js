import React, { Component } from 'react';

import Slider from './Slider';


class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-image">
          <h1> Welcome to Rhodopes </h1>
        </div>
      	<div className="reviews-wrapper t-border">
        	<p className="reviews">REVIEWS</p>
          <q className="review">Unique place with great food and amazing hosts!</q>
          <q className="review">Unique place with great food and amazing hosts!</q>
          <q className="review">Unique place with great food and amazing hosts!</q>
      	</div>
      	<div className="slider-wrapper t-border">
        	<p>BOOKING FORM</p>
      	</div>
      </div>

    );
  }
}

export default Home;