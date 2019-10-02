import React from 'react';
import { Gallery, GalleryImage } from "react-gesture-gallery";


function Slider() {

    const [index, setIndex] = React.useState(0);

    const images = [
        {
            src: "/fish.jpg"
        },
        {
            src: "/roll-2.jpg"
        },
        {
            src: "/roll-3.jpg"
        }
    ]
    

    return (

        <div className="img-carousel">
          <Gallery
            index={index}
            onRequestChange={i => {
              setIndex(i);
            }}
          >
            {images.map(img => (
              <GalleryImage key={img.src} src={img.src} />
            ))}
          </Gallery>
        </div>
    );
}

export default Slider;