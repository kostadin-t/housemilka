import React, { Component } from 'react';


class Attractions extends Component {
  render() {
    return (
      <div className="attractions-main">
        <div className="attraction" >
            <p className="attraction-name"> Eagle's Eye! </p>
            
      	</div>
	      <div className="attraction">
	        <p className="attraction-name"> Yagodinska cave! </p>
	      </div>
	      <div className="attraction">
	        <p className="attraction-name"> Devil's throat! </p>
	      </div>
	      <div className="attractions-float group">
	        
	        <div className="attraction-f1" >
	        	<img className="attraction-image" src={require('../images/valchi.jpg')} alt="" />
	            <h2 className="attraction-name"> Valchi kamak </h2>
	            <p className="attraction-info"> Valchi kamak sds dsd sds dsds dsds ds dsdasdwdassds  </p>
	            
	      	</div>
		      <div className="attraction-f2">
		        <img className="attraction-image" src={require('../images/valchi.jpg')} alt="" />
		        <h2 className="attraction-name"> Devil's path </h2>
		        <p className="attraction-info"> Valchi kamak sds dsd sds dsds dsds ds dsdasdwdassds  </p>
		      </div>
      	</div>
      </div>
    );
  }
}

export default Attractions;