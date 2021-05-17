import React from "react";
import { connect } from "react-redux";
import { changeSize, changeFlag } from "./redux/Action";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      scrollPos: 0,
      show: true,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleSize);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleSize);
  }
  handleScroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };

  handleSize = () => {
    let size2 = window.innerWidth;
    if (size2 < this.props.state.size) {
      this.props.dispatch(changeFlag(true));
    } else if (size2 > this.props.state.size) {
      this.props.dispatch(changeFlag(false));
    }
    this.props.dispatch(changeSize(size2));
  };
  render() {
    return (
      <nav className={this.state.show ? "hidden2" : "active"}>
        <span className={this.props.state.flag ? "purchase" : null}>
          PURCHASES
        </span>
        <span className={!this.props.state.flag ? "wishlist" : null}>
          WISHLIST
        </span>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispachToProps = (dispatch) => ({
  dispatch: dispatch,
});

export default connect(mapStateToProps, mapDispachToProps)(Navbar);
