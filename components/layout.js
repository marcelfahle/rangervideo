import Link from "next/link";
import Head from "next/head";

export default ({ children, title = "Ranger TV" }) =>
  <div>
    <Head>
      <title>
        {title}
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script
        type="text/javascript"
        src="https://bitmovin-a.akamaihd.net/bitmovin-player/stable/7/bitmovinplayer.js"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu:300,400"
        rel="stylesheet"
      />
      <style>
        {`
          body { 
            background: #fff;
            margin: 0;
            padding: 0;
            font-family: 'Ubuntu', sans-serif;
          }
          header {
            position: relative;
            margin-bottom: 30px;
            max-width: 1200px;
            padding-left: 30px;
            padding-right: 30px;
            margin: 0 auto;
          }
          h1 {
            margin: 0;
            padding: 0;
            text-align: left;
          }
          header img {
            width: 180px;
          }
          footer {
            padding: 30px 30px 60px 30px;
            max-width: 1140px;
            margin: 0 auto;
          }
          a {
            color: #FF6B00;
          }
          nav {
          position: absolute;
          right: 30px;
          top: 50px;
          }
          nav ul {
            padding-left: 0;
            list-style: none;
          }
          nav ul li {
            display: inline-block;
            padding-left: 20px;
            padding-right: 20px;
          }
          nav a {
            text-decoration: none;
          }
          `}
      </style>
    </Head>
    <div>
      <header>
        <h1>
          <img src="/static/ranger-logo.jpg" alt="Ranger" />
        </h1>
        <nav>
          <ul>
            <li>
              <a href="/">Video 1</a>
            </li>
            <li>
              <a href="/video2">Video 2</a>
            </li>
          </ul>
        </nav>
      </header>

      {children}

      <footer>
        <p>
          Demo von Marcel Fahle (<a
            href="https://marcelfahle.net"
            target="_blank"
          >
            marcelfahle.net
          </a>)
        </p>
      </footer>
    </div>
  </div>;
