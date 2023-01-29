import {Link} from 'react-router-dom';
import './home.css'
import saly from'./assests/Saly-10.png'
export default function Home(){
  return(
    <div className='homepage'>
      <section className='sec1'>
        <div className='mainContainer'>
          <div className='container-1'>
            <div></div>
            <div className='info'>
              <h1>Hello, We are <span>CODEX</span></h1>
              <p>
              CODEX is a student-run organization at the University of GITAM <br/>
              that aims to provide students with the resources and opportunities to <br/>
              learn about computer science and software development. We learn, <br/>
              we build, and we share!
              </p>
              <div className='btnContainer'>
              <button>Explore now</button>
            </div>
            </div>
            <div className='img1Container'>
              <img src={saly} alt='saly'/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}