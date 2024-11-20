import s from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => (
  <div className={s.card} onClick={() => onClick(image)}>
    <img
      src={image.urls.small}
      alt={image.alt_description || 'Image'}
      className={s.image}
    />
    <p className={s.caption}>{image.description || 'No description available'}</p>
  </div>
);

export default ImageCard;