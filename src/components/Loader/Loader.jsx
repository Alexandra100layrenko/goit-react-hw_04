import { Audio } from 'react-loader-spinner'
import s from './Loader.module.css'

const Loader = () => {
  return (
    <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
        className={s.loader}
    />
  )
}

export default Loader
