import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "./App.css";
import Header from "./Header";
import { changeFlag, changeSize } from "./redux/Action";
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => {
      window.addEventListener("resize", handleSize);
    };
  }, []);

  const handleSize = () => {
    let size2 = window.innerWidth;
    if (size2 < props.state.size) {
      props.dispatch(changeFlag(true));
    } else if (size2 > props.state.size) {
      props.dispatch(changeFlag(false));
    }

    props.dispatch(changeSize(size2));
  };
  return (
    <div className="App">
      <Header />
      <Navbar />
      {props.state.flag ? (
        <>
          <div className="pasage">
            <div className="pasage2">
              <img
                src="/images/pencile.jpg"
                width="100rem"
                height="100rem"
                alt="pencil"
              />
              <div>
                <h2>Pencile</h2>
                <p>in stock</p>
              </div>
            </div>
            <h3>1.50</h3>
          </div>
          <div className="pasage">
            <div className="pasage2">
              <img
                src="/images/Rubberband.jpg"
                width="100rem"
                height="100rem"
                alt="Rubberband"
              />
              <div>
                <h2>Rubberband</h2>
                <p>in stock</p>
              </div>
            </div>
            <h3>4.50</h3>
          </div>
          <div className="pasage">
            <div className="pasage2">
              <img
                src="/images/pencile.jpg"
                width="100rem"
                height="100rem"
                alt="pencil"
              />
              <div>
                <h2>Pencile</h2>
                <p>in stock</p>
              </div>
            </div>
            <h3>1.50</h3>
          </div>
          <div className="pasage">
            <div className="pasage2">
              <img
                src="/images/Rubberband.jpg"
                width="100rem"
                height="100rem"
                alt="Rubberband"
              />
              <div>
                <h2>Rubberband</h2>
                <p>in stock</p>
              </div>
            </div>
            <h3>4.50</h3>
          </div>
          <div className="pasage">
            <div className="pasage2">
              <img
                src="/images/pencile.jpg"
                width="100rem"
                height="100rem"
                alt="pencil"
              />
              <div>
                <h2>Pencile</h2>
                <p>in stock</p>
              </div>
            </div>
            <h3>1.50</h3>
          </div>
          <div className="pasage">
            <div className="pasage2">
              <img
                src="/images/pencile.jpg"
                width="100rem"
                height="100rem"
                alt="pencil"
              />
              <div>
                <h2>Pencile</h2>
                <p>in stock</p>
              </div>
            </div>
            <h3>1.50</h3>
          </div>
          <div className="pasage">
            <div className="pasage2">
              <img
                src="/images/pencile.jpg"
                width="100rem"
                height="100rem"
                alt="pencil"
              />
              <div>
                <h2>Pencile</h2>
                <p>in stock</p>
              </div>
            </div>
            <h3>1.50</h3>
          </div>
          <div className="pasage">
            <div className="pasage2">
              <img
                src="/images/Rubberband.jpg"
                width="100rem"
                height="100rem"
                alt="Rubberband"
              />
              <div>
                <h2>Rubberband</h2>
                <p>in stock</p>
              </div>
            </div>
            <h3>4.50</h3>
          </div>
          <div className="pasage">
            <div className="pasage2">
              <img
                src="/images/pencile.jpg"
                width="100rem"
                height="100rem"
                alt="pencil"
              />
              <div>
                <h2>Pencile</h2>
                <p>in stock</p>
              </div>
            </div>
            <h3>1.50</h3>
          </div>
          <div className="pasage">
            <div className="pasage2">
              <img
                src="/images/pencile.jpg"
                width="100rem"
                height="100rem"
                alt="pencil"
              />
              <div>
                <h2>Pencile</h2>
                <p>in stock</p>
              </div>
            </div>
            <h3>1.50</h3>
          </div>
        </>
      ) : (
        <>
          <div className="pasage">
            <div className="pasage2">
              <img
                src="/images/Rubberband.jpg"
                width="100rem"
                height="100rem"
                alt="Rubberband"
              />
              <div>
                <h2>Rubberband</h2>
                <p>in stock</p>
              </div>
            </div>
            <h3>4.50</h3>
          </div>
          <div className="pasage">
            <div className="pasage2">
              <img
                src="/images/pencile.jpg"
                width="100rem"
                height="100rem"
                alt="pencil"
              />
              <div>
                <h2>Pencile</h2>
                <p>in stock</p>
              </div>
            </div>
            <h3>1.50</h3>
          </div>
          <div className="pasage">
            <div className="pasage2">
              <img
                src="/images/Rubberband.jpg"
                width="100rem"
                height="100rem"
                alt="Rubberband"
              />
              <div>
                <h2>Rubberband</h2>
                <p>in stock</p>
              </div>
            </div>
            <h3>4.50</h3>
          </div>
          <div className="pasage">
            <div className="pasage2">
              <img
                src="/images/Rubberband.jpg"
                width="100rem"
                height="100rem"
                alt="Rubberband"
              />
              <div>
                <h2>Rubberband</h2>
                <p>in stock</p>
              </div>
            </div>
            <h3>4.50</h3>
          </div>
          <div className="pasage">
            <div className="pasage2">
              <img
                src="/images/pencile.jpg"
                width="100rem"
                height="100rem"
                alt="pencil"
              />
              <div>
                <h2>Pencile</h2>
                <p>in stock</p>
              </div>
            </div>
            <h3>1.50</h3>
          </div>
          <div className="pasage">
            <div className="pasage2">
              <img
                src="/images/Rubberband.jpg"
                width="100rem"
                height="100rem"
                alt="Rubberband"
              />
              <div>
                <h2>Rubberband</h2>
                <p>in stock</p>
              </div>
            </div>
            <h3>4.50</h3>
          </div>
          <div className="pasage">
            <div className="pasage2">
              <img
                src="/images/Rubberband.jpg"
                width="100rem"
                height="100rem"
                alt="Rubberband"
              />
              <div>
                <h2>Rubberband</h2>
                <p>in stock</p>
              </div>
            </div>
            <h3>4.50</h3>
          </div>
          <div className="pasage">
            <div className="pasage2">
              <img
                src="/images/pencile.jpg"
                width="100rem"
                height="100rem"
                alt="pencil"
              />
              <div>
                <h2>Pencile</h2>
                <p>in stock</p>
              </div>
            </div>
            <h3>1.50</h3>
          </div>
          <div className="pasage">
            <div className="pasage2">
              <img
                src="/images/Rubberband.jpg"
                width="100rem"
                height="100rem"
                alt="Rubberband"
              />
              <div>
                <h2>Rubberband</h2>
                <p>in stock</p>
              </div>
            </div>
            <h3>4.50</h3>
          </div>
          ّ
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispachToProps = (dispatch) => ({
  dispatch: dispatch,
});

export default connect(mapStateToProps, mapDispachToProps)(App);
