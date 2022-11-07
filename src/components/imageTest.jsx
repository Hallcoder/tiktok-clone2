import React from 'react';
import { useEffect } from 'react';
function ImageTest() {
    let images = [];
    const importAll = (r) => {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        console.log(images);
        return images;
      }
    useEffect(() =>{
         images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    },[])
    return ( 
        <div>{images.map(img => {
            return <img src={images[img]}></img>
        })
            }
            </div>
     );
}

export default ImageTest;