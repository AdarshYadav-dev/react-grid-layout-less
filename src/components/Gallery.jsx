import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <hr />
      <div className="gallerymid">
        <div className="galleryitems">
          <img src="https://picsum.photos/500/500?random=1" alt="random image" />
        </div>
        <div className="galleryitems">
          <img src="https://picsum.photos/500/500?random=2" alt="random image" />
        </div>
        <div className="galleryitems">
          <img src="https://picsum.photos/500/500?random=3" alt="random image" />
        </div>
        <div className="galleryitems">
          <img src="https://picsum.photos/500/500?random=4" alt="random image" />
        </div>
        <div className="galleryitems">
          <img src="https://picsum.photos/500/500?random=5" alt="random image" />
        </div>
        <div className="galleryitems">
          <img src="https://picsum.photos/500/500?random=6" alt="random image" />
        </div>
        <div className="galleryitems">
          <img src="https://picsum.photos/500/500?random=7" alt="random image" />
        </div>
        <div className="galleryitems">
          <img src="https://picsum.photos/500/500?random=8" alt="random image" />
        </div>
        <div className="galleryitems">
          <img src="https://picsum.photos/500/500?random=9" alt="random image" />
        </div>
        <div className="galleryitems">
          <img src="https://picsum.photos/500/500?random=10" alt="random image" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
