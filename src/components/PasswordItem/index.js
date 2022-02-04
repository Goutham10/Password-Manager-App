import './index.css'

const PasswordItem = props => {
  const {passwordDetails} = props
  const {
    id,
    website,
    name,
    pword,
    isCheckedOrNot,
    initialClassName,
  } = passwordDetails
  const initial = name ? name[0].toUpperCase() : ''
  const password = isCheckedOrNot ? (
    pword
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-icon"
    />
  )

  const onDeletePassword = () => {
    const {deletePassword} = props
    deletePassword(id)
  }
  console.log(pword)

  return (
    <li className="password-item">
      <div className="password-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
      </div>
      <div className="password-text-details">
        <p>{website}</p>
        <p>{name}</p>
        <p>{password}</p>
      </div>
      <button type="button" className="delete-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
          onClick={onDeletePassword}
          testid="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
