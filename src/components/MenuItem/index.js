import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'

import './index.css'
import ThemeContext from '../../Context/ThemeContext'

const MenuItem = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, isActive, changeActiveMenu} = value
      const mainHeading = isDarkTheme
        ? 'main-menu-heading'
        : 'main-menu-heading dark-color'
      const imageIcon = isDarkTheme ? 'icon-image' : 'icon-image dark-image'

      const onClickChangeMenu = event => {
        changeActiveMenu(event.target.value)
      }

      const activeClass = isActive ? 'links back-ground' : 'links'
      const activeClass2 = isActive ? 'links back-ground' : 'links'
      const activeClass3 = isActive ? 'links back-ground' : 'links'
      const activeClass4 = isActive ? 'links back-ground' : 'links'

      return (
        <div className="item-app-container">
          <Link className={activeClass} to="/side-left">
            <li className="menu-links" onClick={onClickChangeMenu}>
              <AiFillHome className={imageIcon} />
              <h1 className={mainHeading}>Home</h1>
            </li>
          </Link>

          <Link className={activeClass2} to="/side-left">
            <li className="menu-links" onClick={onClickChangeMenu}>
              <AiFillFire className={imageIcon} />
              <h1 className={mainHeading}>Trending</h1>
            </li>
          </Link>

          <Link className={activeClass3} to="/side-left">
            <li className="menu-links" onClick={onClickChangeMenu}>
              <AiFillFire className={imageIcon} />
              <h1 className={mainHeading}>Gaming</h1>
            </li>
          </Link>

          <Link className={activeClass4} to="/side-left">
            <li className="menu-links" onClick={onClickChangeMenu}>
              <AiFillFire className={imageIcon} />
              <h1 className={mainHeading}>Save Videos</h1>
            </li>
          </Link>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default MenuItem
