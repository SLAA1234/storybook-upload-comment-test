
import { Widget } from "@uploadcare/react-widget";

import React from 'react';

function Upload() {


  return (
    <React.Fragment>

      <p> 
        <Widget 
          publicKey='demopublickey' 
          id='file'          
          previewStep='true'
          tabs='file url instagram facebook'
          effects='crop,rotate,mirror,flip,enhance,sharp,blur,grayscale,invert'
          crop='free, 1:1, 4:7'
          multiple              
          />
      </p>              
    </React.Fragment>    
  );
}

export default Upload;
