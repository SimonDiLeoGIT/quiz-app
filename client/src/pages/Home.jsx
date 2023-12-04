import { Link } from "react-router-dom";
import html from "./../assets/html5.svg";
import css from "./../assets/css.svg";
import javascript from "./../assets/javascript.svg";
import accessibility from "./../assets/accessibility.svg"
import { Nav } from './../components/Nav';

export const Home = () => {
  return (
    <section className="game">
      <Nav />
      <div className="game-container">
        <section className="title-container">
          <h1 className="title"> <span> Welcome to the </span> Frontend Quiz! </h1>
          <p> Pick a subject to get started. </p>
        </section>
        <section className="categories">
            <Link to={"/quiz/html"}> 
              <button> 
                <div className="icon-container html">
                  <img src={html} alt="HTML"/>
                </div>
                <div className="text-container"> HTML </div> 
              </button> 
            </Link>
            <Link to={"/quiz/css"}>
              <button> 
                <div className="icon-container css">
                  <img src={css} alt="CSS"/>
                </div>
                <div className="text-container"> CSS </div> 
              </button> 
            </Link>
            <Link to={"/quiz/javascript"}>
              <button> 
                <div className="icon-container js">
                  <img src={javascript} alt="Javascript"/>
                </div>
                <div className="text-container"> Javascript </div> 
              </button> 
            </Link>
            <Link to={"/quiz/accessibility"}>
              <button> 
                <div className="icon-container access">
                  <img src={accessibility} alt="Accessibility"/>
                </div>
                <div className="text-container"> Accessibility </div> 
              </button> 
            </Link>
        </section>
      </div>
    </section>
  );
}