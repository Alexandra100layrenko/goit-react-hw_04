import s from './ErrorMessage.module.css'

const ErrorMessage = ({ message }) => {
  return (
    <div className={s.error}>
        <IoAlertCircle size={20} /> {message}
    </div>
  )
}

export default ErrorMessage
