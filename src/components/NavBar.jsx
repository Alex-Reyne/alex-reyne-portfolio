import '../styles/NavBar.scss';
import useSound from 'use-sound';
import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import ContactDialog from './ContactDialog';

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [volume, setVolume] = useState(0.05);
  const [play] = useSound('../images/click.mp3', { volume });

  const closeNav = () => {
    setTimeout(() => {
      setOpenNav(false);
    }, 800);
  };

  const handleNavOpen = () => {
    openNav ? closeNav() : setOpenNav(true);
  };

  return (
    <>
      <nav id="nav-bar">
        <section className="nav-links">
          <Link>
            <sup>01</sup>
            <p
              className=".btn-flip"
              class="btn-flip"
              data-back="Hello"
              data-front="Hello"
              onClick={scroll.scrollToTop}
              onMouseEnter={play}
            ></p>
          </Link>

          <Link to="about" spy={true} smooth={true}>
            <sup>02</sup>
            <p
              className=".btn-flip"
              class="btn-flip"
              data-back="About"
              data-front="About"
              onMouseEnter={play}
            ></p>
          </Link>
          <Link to="projects" spy={true} smooth={true}>
            <sup>03</sup>
            <p
              className=".btn-flip"
              class="btn-flip"
              data-back="Projects"
              data-front="Projects"
              onMouseEnter={play}
            ></p>
          </Link>
          <Link to="contact" spy={true} smooth={true}>
            <sup>04</sup>
            <p
              className=".btn-flip"
              class="btn-flip"
              data-back="Contact"
              data-front="Contact"
              onMouseEnter={play}
            ></p>
          </Link>
        </section>
      </nav>
      <nav id="mobile-nav-bar">
        <div className="hamburger-menu" onClick={handleNavOpen}>
          <hr />
          <hr />
          <hr />
        </div>
      </nav>
      {openNav && (
        <>
          <section className="mobile-nav-links fade-in" onClick={handleNavOpen}>
            <Link onClick={handleNavOpen}>
              <sup>01</sup>
              <p
                className=".btn-flip"
                class="btn-flip"
                data-back="Hello"
                data-front="Hello"
                onClick={(e) => {
                  scroll.scrollToTop();
                  play();
                }}
              ></p>
            </Link>
            <Link to="about" spy={true} smooth={true} onClick={handleNavOpen}>
              <sup>02</sup>
              <p
                className=".btn-flip"
                class="btn-flip"
                data-back="About"
                data-front="About"
                onClick={(e) => {
                  play();
                }}
              ></p>
            </Link>
            <Link to="projects" spy={true} smooth={true} onClick={handleNavOpen}>
              <sup>03</sup>
              <p
                className=".btn-flip"
                class="btn-flip"
                data-back="Projects"
                data-front="Projects"
                onClick={(e) => {
                  play();
                }}
              ></p>
            </Link>
            <Link to="contact" spy={true} smooth={true} onClick={handleNavOpen}>
              <sup>04</sup>
              <p
                className=".btn-flip"
                class="btn-flip"
                data-back="Contact"
                data-front="Contact"
                onClick={(e) => {
                  play();
                }}
              ></p>
            </Link>
          </section>
        </>
      )}
    </>
  );
}
