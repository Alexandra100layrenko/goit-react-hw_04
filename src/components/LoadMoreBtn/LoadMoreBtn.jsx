import s from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onClick }) => (
    <button onClick={onClick} className={s.button}>
      Load more
    </button>
  );

export default LoadMoreBtn
