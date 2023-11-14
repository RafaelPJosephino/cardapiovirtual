/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react"
import Logo from "../Itens/imgs/Logo JNLanches.jpg"
import "./Navbar.css"

class Navbar extends Component {
  state = { clicked: false }
  handlerClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return (
      <>
        <nav>
          <a href="index.html" >
            <img src={Logo} className="logo-icon" alt="logo"></img>
          </a>
          <div>
            <ul id="navbar" className={this.state.clicked? "#navbar active" :"#navbar"}>
              <li>
                <a  onClick={()=>{this.props.selecionarCategoria(0)}} className="active" >Todos</a>
              </li>
              <li>
                <a  onClick={()=>{this.props.selecionarCategoria(1)}}>Porções</a>
              </li>
              <li>
                <a  onClick={()=>{this.props.selecionarCategoria(2)}}>Hamburguers</a>
              </li>
              <li>
                <a  onClick={()=>{this.props.selecionarCategoria(3)}}>Combos</a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handlerClick}>
            <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
            </i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
