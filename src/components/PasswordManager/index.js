import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class PasswordManager extends Component {
  state = {
    websiteName: '',
    userName: '',
    password: '',
    searchInput: '',
    isChecked: false,
    passwordsList: [],
  }

  deletePassword = id => {
    const {passwordsList} = this.state

    this.setState({
      passwordsList: passwordsList.filter(password => password.id !== id),
    })
  }

  toggleIsChecked = () => {
    const {passwordsList} = this.state
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
    return passwordsList
  }

  renderPasswordsList = () => {
    const {passwordsList} = this.state
    return passwordsList.map(eachPassword => (
      <PasswordItem
        key={eachPassword.id}
        passwordDetails={eachPassword}
        deletePassword={this.deletePassword}
        toggleIsChecked={this.toggleIsChecked}
      />
    ))
  }

  onAddPassword = event => {
    event.preventDefault()
    const {websiteName, userName, isChecked, password} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newPassword = {
      id: v4(),
      website: websiteName,
      name: userName,
      pword: password,
      isCheckedOrNot: isChecked,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      websiteName: '',
      userName: '',
      password: '',
    }))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeWebSiteNameInput = event => {
    this.setState({websiteName: event.target.value})
  }

  onChangeUserNameInput = event => {
    this.setState({userName: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({password: event.target.value})
  }

  onChangeIsChecked = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  render() {
    const {websiteName, userName, password, passwordsList} = this.state

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo-image"
        />
        <div className="password-submission-container">
          <div className="password-filling-form">
            <h1 className="password-header">Add New password</h1>
            <form className="form" onSubmit={this.onAddPassword}>
              <div className="field">
                <div className="logo-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="icon"
                  />
                </div>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Website"
                  value={websiteName}
                  onChange={this.onChangeWebSiteNameInput}
                />
              </div>
              <div className="field">
                <div className="logo-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="icon"
                  />
                </div>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Username"
                  value={userName}
                  onChange={this.onChangeUserNameInput}
                />
              </div>
              <div className="field">
                <div className="logo-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="icon"
                  />
                </div>
                <input
                  type="password"
                  className="input"
                  placeholder="Enter Password"
                  value={password}
                  onChange={this.onChangePasswordInput}
                />
              </div>
              <div className="button-container">
                <button type="submit" className="button">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-image"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="password-manager-sm-image"
            />
          </div>
        </div>

        <div className="passwords-container">
          <div className="passwords-header">
            <div className="header-title">
              <h1 className="your-password-heading">Your Passwords </h1>
              <p className="passwords-count">{passwordsList.length}</p>
            </div>
            <div className="search-container">
              <div className="temp">
                <div className="search-logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="search-icon"
                  />
                </div>
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search"
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="show-passwords">
            <div className="passwords-visibility">
              <input
                type="checkbox"
                value="Show Passwords"
                id={this.id}
                className="checkbox-input"
                onChange={this.onChangeIsChecked}
              />
              <label htmlFor={this.id}>Show Passwords</label>
            </div>
          </div>
          <ul className="passwords-list">
            {passwordsList.length >= 1 ? (
              this.renderPasswordsList()
            ) : (
              <div className="no-passwords-view">
                <div className="card-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="no-password-image"
                  />
                </div>
                <p className="no-password-heading">No Passwords</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
