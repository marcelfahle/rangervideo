import React, { Component } from 'react';
//import './App.css';
import Layout from './../components/layout.js';
import VideoPlayer from './../components/VideoPlayer';


const videoJsOptions = {
  autoplay: false,
  controls: true,
  width: 720,
  height: 361,
  poster: '/static/poster1.png',
  sources: [{
    src: 'https://s3-us-west-2.amazonaws.com/steelpuck/content/slrmagic/601333_120184d862a0229ff0110f07407b743a/601333.mpd',
    type: 'application/dash+xml'
  }]
}


//src: 'https://s3-us-west-2.amazonaws.com/steelpuck/content/slrmagic/slrmagic-8mm-osmo-inspire-zenmusex5r-1080.mp4',
//type: 'video/mp4'

export default class App extends Component {


	componentDidMount() {
		var conf = {
        key:       "f390f0a3-592c-4f08-99b8-0291a111de86",
        style: {
          width: "720px",
          height: "361px",
        },
        source: {
          dash:        "https://dv80ex6osbfhg.cloudfront.net/content/slrmagic/601333_120184d862a0229ff0110f07407b743a/601333.mpd",
          hls:         "https://dv80ex6osbfhg.cloudfront.net/content/slrmagic/601333_120184d862a0229ff0110f07407b743a/601333.m3u8",
          progressive: "https://dv80ex6osbfhg.cloudfront.net/content/slrmagic/slrmagic-8mm-osmo-inspire-zenmusex5r-1080.mp4",
          poster:      "/static/poster1.png"
        }
    };
    var player = bitmovin.player("player");
    player.setup(conf).then(function(value) {
        // Success
        console.log("Successfully created bitmovin player instance");
    }, function(reason) {
        // Error!
        console.log("Error while creating bitmovin player instance");
    });	

	}


  render() {

    return (
      <Layout>
        <div className="video-wrapper">
					<div id="player"></div>
        </div>

        <style jsx>{`
          .video-wrapper {
            position: absolute;
            width: 720px;
            height: 361px;
            margin-bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            -webkit-box-shadow: 0px 9px 24px 6px rgba(0,0,0,0.32);
            -moz-box-shadow: 0px 9px 24px 6px rgba(0,0,0,0.32);
            box-shadow: 0px 9px 24px 6px rgba(0,0,0,0.32);
          }
					.bmpui-container-wrapper > button { display: none; }
				  button.bmpui-ui-watermark	{ display: none !important; }
          .bmpui-ui-skin-modern .bmpui-ui-watermark {
            display: none !important;
            opacity: 0;
          }
          `}</style>

      </Layout>
    );
  }
}
