import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'SLR Magic- CDN Demo' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<script type="text/javascript" src="https://bitmovin-a.akamaihd.net/bitmovin-player/stable/7/bitmovinplayer.js"></script>
			<link rel="stylesheet" href="/static/video-js.min.css" />
      <style>
        {`
          body { 
            background: #D8D8D8; 
          }
          header {
            text-align: center;
            margin-bottom: 30px;
          }
          header img {
            width: 280px;
          }
          `}
      </style>
    </Head>
    <header>
      <h1><img src="/static/slrmagic_logo_white.svg" alt="SLR Magic" /></h1>
    </header>

    { children }

    <footer>
    </footer>
  </div>
)
