import {Component} from 'react'

import {GrClose} from 'react-icons/gr'
import {BiSearchAlt2} from 'react-icons/bi'

import Header from '../Header'
import SideLeft from '../SideLeft'
import ThemeContext from '../../Context/ThemeContext'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Home extends Component {
  state = {
    searchInputValue: '',
    moviesList: [],
    apiStatus: apiStatusConstants.initial,
    bannerVisible: true,
  }

  closeBannerClicked = () => {
    this.setState({bannerVisible: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInputValue: event.target.value})
  }

  render() {
    const {moviesList, bannerVisible, searchInputValue} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const homeSideRight = isDarkTheme
            ? 'home-side-right black-background'
            : 'home-side-right'

          return (
            <>
              <Header />
              <div className="home-app-container">
                <div className="home-side-left">
                  <SideLeft />
                </div>
                <div className={homeSideRight}>
                  {bannerVisible && (
                    <div className="side-right-banner-container">
                      <div className="banner-container">
                        <img
                          className="banner-logo"
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <p className="banner-heading">
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </p>
                        <button className="banner-button" type="button">
                          GET IT NOW
                        </button>
                      </div>
                      <button
                        className="close-button"
                        type="button"
                        onClick={this.closeBannerClicked}
                      >
                        <GrClose />
                      </button>
                    </div>
                  )}

                  <div className="search-container">
                    <input
                      className="user-search"
                      type="search"
                      placeholder="Search"
                      value={searchInputValue}
                      onChange={this.onChangeSearchInput}
                    />
                    <button
                      className="search-button"
                      type="button"
                      data-testid="searchButton"
                    >
                      <BiSearchAlt2 />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
