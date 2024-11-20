import s from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, onImageClick }) => {
    /*if (!images.length) {
        return <p className={s.noImages}>No images found. Try another search!</p>;
    }*/
  
    return (
      <ul className={s.gallery}>
        {images.map(image => (
          <li key={image.id} className={s.item}>
            <ImageCard image={image} onClick={onImageClick} />
          </li>
        ))}
      </ul>
    );
};
  
export default ImageGallery;