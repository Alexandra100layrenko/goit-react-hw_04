import ReactModal from 'react-modal';
import s from './ImageModal.module.css';

const ImageModal = ({ isOpen, image, onClose }) => {
  ReactModal.setAppElement('#root');

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <img src={image.urls.regular} alt={image.alt_description || 'Image'} className={s.image} />
      <p>{image.description || 'No description available'}</p>
      <p>Автор: {image.user.name || 'Unknown'}</p>
      <p>❤️ {image.likes || 0}</p>
      <button onClick={onClose} className={s.closeBtn}>Close</button>
    </ReactModal>
  );
};

export default ImageModal;