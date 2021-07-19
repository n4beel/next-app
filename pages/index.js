import Nav from "./Components/navbar/Nav"
import Home from '../pages/Components/main/Home'
import classes from './index.module.css'
import Page from './Components/main/Page'
import Footerpage from "./Components/footer/Footerpage"

export default function index() {
  return (
    <>

      <div className="container">
        <Nav />
      </div>
      <div className={classes.hash}></div>
      <Home />
      <Page />
      <Footerpage />
    </>
  )
}
