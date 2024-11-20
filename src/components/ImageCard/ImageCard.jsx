import s from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
    return (
      <div onClick={() => onClick(image)} className={s.card}>
        <img src={image.urls.small} alt={image.alt_description || 'Image'} className={s.image} />
      </div>
    );
  };
  
  export default ImageCard;