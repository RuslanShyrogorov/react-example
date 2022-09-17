// import { useEffect } from 'react';
// import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// let gallery = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionPosition: 'bottom',
//   captionDelay: 250,
// });

// gallery.on('show.simplelightbox');

export function FavoritePage({ images }) {
  // useEffect(() => {
  //   new SimpleLightbox('.gallery a', {
  //     captionsData: 'alt',
  //     captionPosition: 'bottom',
  //     captionDelay: 250,
  //   });
  // }, []);

  return (
    <div className="gallery">
      {images.map(image => {
        const { webformatURL, id, tags, largeImageURL } = image;
        return (
          <a key={id} href={largeImageURL}>
            <img src={webformatURL} alt={tags} width="300" />
          </a>
        );
      })}
    </div>
  );
}
