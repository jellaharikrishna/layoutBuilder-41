import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-responsive">
          <div className="configuration-container">
            <h1 className="layout-heading">Layout</h1>

            <div className="checkbox-container">
              <input
                onChange={onChangeContent}
                checked={showContent}
                type="checkbox"
                id="content"
                className="checkbox"
              />
              <label htmlFor="content" className="label-heading">
                Content
              </label>
            </div>

            <div className="checkbox-container">
              <input
                onChange={onChangeLeftNavbar}
                checked={showLeftNavbar}
                type="checkbox"
                id="leftNavbar"
                className="checkbox"
              />
              <label htmlFor="leftNavbar" className="label-heading">
                Left Navbar
              </label>
            </div>

            <div className="checkbox-container">
              <input
                onChange={onChangeRightNavbar}
                checked={showRightNavbar}
                type="checkbox"
                id="rightNavbar"
                className="checkbox"
              />
              <label htmlFor="rightNavbar" className="label-heading">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
