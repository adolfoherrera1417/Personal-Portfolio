import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Adolfo's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Hi, I'm <a href="https://www.linkedin.com/in/adolfo-herrera/">Adolfo</a>!
        </h1>

        <p className="description">
          <code>A Full-Stack Software Engineer</code>
        </p>
        <div className="social-icons">
          <ul>
            <li><a href="https://github.com/adolfoherrera1417" style={{color: "black"}}><FontAwesomeIcon icon={faGithub} size='sm' style={{height: "2em"}}/></a></li>
            <li><a href="https://www.linkedin.com/in/adolfo-herrera/" style={{color: "#0070f3"}}><FontAwesomeIcon icon={faLinkedin} size='sm' style={{height: "2em"}}/></a></li>
            <li><a href="adolfoherrera1417@gmail.com" style={{color: "black"}}><FontAwesomeIcon icon={faEnvelope} size='sm' style={{height: "2em"}}/></a></li>
          </ul>
        </div> 
      </main>


      <div className="HolyGrail">
        <div className="HolyGrail-nav">
          <div className="card">
            <div className="content">
              <h3>Education</h3>
              <p>Texas A&M University</p>
              <p><i>B.S in Computer Science and Engineering</i></p>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h3>Work Experience &rarr;</h3>
              <p>Software Engineer Intern at Northrop Grumman - 2018</p>
              <br></br>
              <p>DevOps Engineer Intern at Northrop Grumman - 2019</p>
            </div>
          </div>
        </div>

        <div className="HolyGrail-content">
          <section className="projects">
            <h2 className="title-2">
              Projects!
            </h2>

            <div className="card" style={{height: "auto", textAlign: "center"}}>
              <div className="content">
                <video autoPlay loop muted playsInline>
                  <source src="IronManPixelArt.mp4" type="video/mp4"/>
                </video>
                <h3>Pathfinding Visualizer</h3>
                <p>Nothing fancy, mainly a learning excercise. I created this because I wanted to reinforce the knowledge I had on the basic graph traversal algorithms such as BFS, DFS and A*.</p>
                <p>You can visit it <a href="https://adolfoherrera1417.github.io/Target-Acquired/">here!</a></p>
              </div>
            </div>

            <div className="card" style={{height: "auto", textAlign: "center"}} >
              <div className="content">
              <video autoPlay loop muted playsInline>
                <source src="riseresidentialVideo.mp4" type="video/mp4"/>
                </video>
                <h3>Rise Residential Redesign</h3>
                <p>This was my first official freelance client. We were tasked with updaing the complete UI of their website to give it a more clean look. This website was transitioned from wordpress over to a more modern language React</p>
                <p>You can visit it<a href="https://rise-residential.com"> here!</a></p>
              </div>
            </div>
          </section>
        </div> 
      </div>

      


      <style jsx>{`
        .container {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        video {
          width: 300px;
        }
        main {
          padding: 3rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .social-icons {
          text-align: center;
          font-family: "Open Sans";
          font-weight: 300;
          font-size: 1em;
          display: inline;
        }

        .social-icons ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display:inline;
          
        }

        .social-icons ul li {
         
          vertical-align:  middle;
          display: inline;
        }

        .HolyGrail {
          flex: 1;
          display: flex;
          max-width: 900px;
          flex-direction: column;
        }

        .HolyGrail-content {
          flex: 1;
        }
        .HolyGrail-nav {
          flex: 0 0 20em;
          order: -1;
          margin-top: 2em;
        }

        a {
          color: red;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .title-2 {
          margin-left: 20px;
          line-height: 1.15;
          font-size: 2rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 900px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: auto;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          color: #eb3562;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .content {
          margin-top: auto;
          margin-bottom: auto;
    
        }

        .logo {
          height: 1em;
        }

        .social-icons ul li a {
          display: inline;
          font-size: 1em;
          margin: 0 7px;
          text-decoration: none;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        @media (min-width: 768px)  {
          .HolyGrail {
            flex-direction: row;
            flex: 1;
          }
          .HolyGrail-content {
            flex: 1;
          }
          .HolyGrail-nav, .HolyGrail-ads {
            /* 12em is the width of the columns */
            flex: 0 0 20em;
          }
          video {
            width: 400px;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
