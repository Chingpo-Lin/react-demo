import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from './pages/Home' // route component
import About from './pages/About'
import Header from './components/Header' // general component
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* html use a to jump to other page */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* react use route link to switch component, write route link*/}
                <MyNavLink to='/home' title='home'>Home</MyNavLink>
                <MyNavLink to='/about' title='about'>About</MyNavLink>
                {/* <NavLink activeClassName='atguigu' className="list-group-item" to='/about' children='About'/> */}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* register route */}
                  <Route path='/about' component={About}/>
                  <Route path='/home' component={Home}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

