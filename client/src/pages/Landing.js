import main2 from "../assets/images/main2.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import logo from "../assets/images/logo.svg";
// import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='hi' />
      </nav>
      <div class='container page'>
        {/* info */}
        <div class='info'>
          <h2>
            mood <span>tracking</span> app
          </h2>
          <p>
            I'm baby paleo raw denim lo-fi cliche, jianbing normcore
            sustainable. Everyday carry bicycle rights microdosing prism, chia
            narwhal hoodie green juice single-origin coffee seitan. Vape
            listicle vinyl cornhole ugh cold-pressed blue bottle fashion axe
            kickstarter succulents 90's cardigan butcher.
          </p>
        </div>
        <img src={main2} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
