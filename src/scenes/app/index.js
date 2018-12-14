import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { object, func } from 'prop-types'
import loadable from 'loadable-components'
import { setHtmlClass, removeHtmlClass } from '@sdog/utils/document'
import Logo from '@component/logo'
import MainMenu from '@scene/app/menu'
import Contact from '@component/contact'
import { getUserProfile } from '@sdog/store/user'

import theme from './theme.css'
import './styles.css'

const DashboardScene = loadable(() =>
  import(/* webpackChunkName: "dashboard" */ '@sdog/scenes/dashboard'),
)
const SearchScene = loadable(() =>
  import(/* webpackChunkName: "search" */ '@sdog/scenes/search'),
)
const SettingsScene = loadable(() =>
  import(/* webpackChunkName: "settings" */ '@sdog/scenes/settings'),
)

class App extends React.Component {
  componentDidMount() {
    setHtmlClass('html-app')
    this.props.getUserProfile()
  }

  componentWillUnmount() {
    removeHtmlClass('html-app')
  }

  render() {
    return (
      <div className={theme.app}>
        <header className={theme.appHeader}>
          <div className={theme.appHeaderInner}>
            <div className={theme.logo}>
              <Logo />
            </div>

            <MainMenu location={this.props.location} />

            <div className={theme.contact}>
              <Contact />
            </div>
          </div>
        </header>

        <div className={theme.appContent}>
          <Route path="/" component={DashboardScene} exact />
          <Route path="/settings" component={SettingsScene} />
          <Route path="/search" component={SearchScene} />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  location: object.isRequired,
  getUserProfile: func.isRequired,
}

export const mapActionsToProps = { getUserProfile }

export default withRouter(
  connect(
    null,
    mapActionsToProps,
  )(App),
)
