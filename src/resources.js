import './resources.css';
import front from './assests/frontendimg.png';
import back from './assests/backendimg.png';
import competitive from './assests/runningimg.png';
import cone from './assests/Cones.jpg';
import wand from './assests/Wands.jpg';
import rec from './assests/Rectangle 33.png';
export default function Resources(){
  return(
    <section>
      <div className='resourcespage'>
        <div className='col1'>
          <div className='rightimg'>
            <img src={wand} alt='wandimg'/>
          </div>
        </div>
        <div className='rscheader'>
          <h1>Resources</h1>
        </div>
        <div className='rlayout'>
          <div className="box">
            <img src={front} alt='front-end' className='img1'/>
            <h3>FRONT END DEVELOPMENT</h3>
            <p>Front-end development is generally responsible for the aesthetic of the site. What you see on the screen is the front end, which includes menus, images, and other elements</p>
            <img src={rec} alt='rec' className='img2'/>
          </div>
          <div className="box">
            <img src={back} alt='back-end' className='img1'/>
            <h3>BACK END DEVELOPMENT</h3>
            <p>Back end development is the process of creating everything that happens behind the scenes of a website or application that the user cannot see.</p>
            <img src={rec} alt='rec' className='img2'/>
          </div>
          <div className="box">
            <img src={competitive} alt='competitive-programming' className='img1'/>
            <h3>Competitive Programming</h3>
            <p>Competitive Programming is a mental sport which enables you to code a given problem under provided constraints</p>
            <p><br/></p>
            <img src={rec} alt='rec' className='img2'/>
          </div>
          <div className="viewBox">
            <h2>View More</h2>
          </div>
        </div>
        <div className='col2'>
          <div className='leftimg'>
            <img src={cone} alt='coneimg'/>
          </div>
        </div>
      </div>
    </section>
    
  )
}