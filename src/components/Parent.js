import logo from "../assets/photo for passport.jpg";
import About from "./About";
import Contact from "./Contact";
import "./Portfolio.css";

console.log(logo);

function Parent() {
  return (
    <>
      <img className="avatar" src={logo} alt="ntg" />
      <h1>Ng Teck Guan</h1>
      <h2>Software Engineer</h2>
      <About />
      <Contact />
    </>
  );
}
export default Parent;
