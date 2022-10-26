import React from 'react'
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';


const App = () => {

  const style = {
    width: '18rem'
  }

  const cld = new Cloudinary({  // Create a Cloudinary instance and set your cloud name.
    cloud: {
      cloudName: 'maulight'
    }
  });

  const myImage = cld.image('cld-sample-3.jpg');
  myImage.resize(fill().width(350).height(350));

  return (
    <div className="card m-auto" style={style}>
      <AdvancedImage className="card-img-top" cldImg={myImage} />
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  )

};

export default App;

