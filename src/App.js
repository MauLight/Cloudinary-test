import React from 'react'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from '@cloudinary/url-gen/actions/resize';


const App = () => {
  const cld = new Cloudinary({  // Create a Cloudinary instance and set your cloud name.
    cloud: {
      cloudName: 'maulight'
    }
  });

  const myImage= cld.image('cld-sample-3.jpg');
  myImage.resize(fill().width(350).height(350));

  return (
    <div>
      <AdvancedImage cldImg= {myImage} />
    </div>
  )

};

export default App;