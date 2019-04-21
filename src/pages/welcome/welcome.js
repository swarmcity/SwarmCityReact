import React from "react";
import welcome from "welcome.module.css";
import { NavLink } from "react-router-dom";
import styles from "styles.module.css";
import ScFab from "components/ScFab";
export default class Welcome extends React.Component {
  render() {
    return (
      <div className={welcome.container}>
        <div className={welcome.language}>
          {/* <DisplayLanguage></DisplayLanguage> */}
        </div>
        <div>
          <svg
            className={welcome.logo}
            width="134"
            height="51"
            viewBox="0 0 134 51"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="**-Symbols" fill="none" fillRule="evenodd">
              <g
                id="SmallLogo"
                transform="translate(-1 -1)"
                fill="#fff"
                fillRule="nonzero"
              >
                <g id="Group" transform="translate(.5 .858)">
                  <path
                    d="M102.091204,0.221505411 C82.2270538,0.221505411 65.8478423,15.3790961 51.0368532,27.9690076 C46.7678034,24.4073879 41.9760128,20.0174846 38.3168273,15.8760663 C37.9683334,15.4619245 37.4455927,15.3790961 37.1842223,15.5447529 C36.8357284,15.793238 36.7486049,16.2902082 37.0970988,16.6215216 C40.4949139,20.5972831 45.0253341,25.4013283 49.2943839,29.4599181 C41.3661486,36.5831575 29.2559869,45.1973074 19.4981588,45.1973074 C-0.191744302,45.1973074 -0.278867767,19.2720293 16.9715783,14.3851558 C17.7556895,14.219499 17.7556895,13.308387 16.9715783,13.5568721 C-5.59339914,18.8578875 -4.37367063,49.0902406 19.9337762,49.0902406 C31.521197,49.0902406 42.1502598,41.7185161 52.866446,33.0215378 C64.4538669,42.9609416 79.090609,51.0781213 97.9092775,51.0781213 C145.652936,51.0781213 144.258961,0.221505411 102.091204,0.221505411 M97.5607836,47.1851882 C82.4884242,47.1023598 67.851682,40.8074041 55.0445326,31.2821422 C69.5941513,19.2720293 84.3180169,5.52252075 101.655586,5.52252075 C135.459491,5.52252075 136.330726,47.4336733 97.5607836,47.1851882"
                    id="Shape"
                  />
                  <ellipse
                    id="Oval"
                    cx="27.252"
                    cy="10.906"
                    rx="4.879"
                    ry="4.638"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className={welcome.welcometo}>Welcome to</div>
        <div className={welcome.logotext}>swarm.city</div>
        <div>
          <div tabIndex="2" className={welcome.button}>
            <div>
              <div className={welcome.buttontext}>enter here</div>
            </div>
          </div>
        </div>
        <div className={welcome.status}>
          Never hold more value than you're willing to lose on a mobile device.
          This app is in beta. Please expect some minor bugs.
        </div>
        <div className={styles.fab}>
          <ScFab reason="newuser" />
        </div>
      </div>
    );
  }
}
