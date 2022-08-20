import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="homeBg">
        <Header />
        <h1>home</h1>
      </div>
    )
  }
}

export default Home
