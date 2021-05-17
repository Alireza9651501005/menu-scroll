import React from "react";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPos: 0,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    // console.log(document.body.getBoundingClientRect());
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };
  render() {
    return (
      <header className={this.state.show ? "hidden" : "active"}>
        <div className="portion2">
          <i class="fas fa-bars"></i>
          <strong>Shop</strong>
        </div>
        <div className="portion">
          <i class="fas fa-share-alt"></i>
          <i class="fas fa-search"></i>
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </div>
      </header>
    );
  }
}

export default Header;
