import React, { Component } from "react";
//import './App.css';
import Layout from "./../components/layout.js";

export default class App extends Component {
  componentDidMount() {
    console.log("did mount");
    if (player) {
      console.log("destroy");
      player.destroy();
    }
    var conf = {
      key: "f390f0a3-592c-4f08-99b8-0291a111de86",
      style: {},
      source: {
        dash:
          "https://dv80ex6osbfhg.cloudfront.net/slrmagic/626513_8c5147117b3cc6e5c21282ab5788cd7d/626513.mpd",
        hls:
          "https://dv80ex6osbfhg.cloudfront.net/slrmagic/626513_8c5147117b3cc6e5c21282ab5788cd7d/626513.m3u8",
        poster: "/static/poster2.jpg"
      }
    };
    var player = bitmovin.player("player");
    player.setup(conf).then(
      function(value) {
        // Success
        console.log("Successfully created bitmovin player instance");
      },
      function(reason) {
        // Error!
        console.log("Error while creating bitmovin player instance");
      }
    );
  }

  render() {
    return (
      <Layout>
        <div className="video-wrapper">
          <div id="player" />
          <div id="info">
            <h2>Video: Nepal High Quality</h2>
            <p>Diese Video-Demonstration bietet folgende Funktionen:</p>
            <ul>
              <li>
                Die Videoqualit&auml;t wird automatisch je nach zur
                Verf&uuml;gung stehender Bandbreite eingestellt.
              </li>
              <li>
                Die Videoqualit&auml;t kann auch manuell festgelegt werden.{" "}
              </li>
              <li>
                Das Video wird als HLS und DASH ausgeliefert und ist somit auf
                <strong>
                  &nbsp;iOS, Android, Chrome, Firefox, IE9+, Microsoft Edge,
                  Safari, Opera, Chromecast, Apple TV, Amazon FireTV, Android
                  TV, LG TVs, Samsung TVs
                </strong>{" "}
                lauff&auml;hig.
              </li>
            </ul>
          </div>
        </div>

        <style jsx>{`
          .video-wrapper {
            max-width: 1080px;
            padding-top: 30px;
            padding-left: 30px;
            padding-right: 30px;
            margin: 0 auto;
          }
          h2 {
            font-weight: 300;
            color: #ff6b00;
          }
          p {
            max-width: 500px;
          }
          ul {
            max-width: 500px;
          }
          .bmpui-container-wrapper > button {
            display: none;
          }
          button.bmpui-ui-watermark {
            display: none !important;
          }
          .bmpui-ui-skin-modern .bmpui-ui-watermark {
            display: none !important;
            opacity: 0;
          }

          #info {
            padding: 30px 30px 60px 30px;
            max-width: 1140px;
            margin: 0 auto;
            background: #f7f7f7;
          }
        `}</style>
      </Layout>
    );
  }
}
