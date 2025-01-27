import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showLeftNavbar, showContent, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="leftnavbar-container">
              <h1 className="leftnavbar-heading">Left Navbar Menu</h1>
              <ul className="leftnavbar-ul">
                <li className="leftnavbar-li">Item 1</li>
                <li className="leftnavbar-li">Item 2</li>
                <li className="leftnavbar-li">Item 3</li>
                <li className="leftnavbar-li">Item 4</li>
              </ul>
            </div>
          )}

          {showContent && (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="content-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="rightnavbar-container">
              <h1 className="rightnavbar-heading">Right Navbar</h1>
              <div className="rightnavbar-description-container">
                <p className="rightnavbar-description">Ad 1</p>
                <p className="rightnavbar-description">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
