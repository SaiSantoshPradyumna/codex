
import NFootr from './nfooter';
import Footr from './footer';
import './about.css';
import cone from './assests/Cones.jpg';
import guy from './assests/countguy.png';
import logo1 from './assests/discordlogo.png';
import logo2 from './assests/insta.png';
import logo3 from './assests/youtubelogo.png';
import rtbg from './assests/sec3bg.png';
import ltbg from './assests/sec2bg.png';
import team from './assests/codexteam.png';
import img1 from './assests/codifyimg.png';
import img2 from './assests/snapimg.png';
import img3 from './assests/thorimg.png';
import img4 from './assests/introc.png';
import wand from './assests/Wands.jpg';
export default function About(){
  return(
    <section>
      <div className='aboutsec1'>
        <h1>Who We Are?</h1>
      </div>
      <div className='aboutsec2'>
        <div className='subsec21'>
          <img src={cone} alt='oops a cone' />
        </div>
        <div className='subsec22'>
          <h1>Our Followers Count</h1>
        </div>
        <div className='subsec23'>
        <img src={guy} alt='oops a guy' />
        </div>
      </div>
      <div className='aboutsec3'>
        <div className='subsec31'>
          <h3>Site Visits</h3>
          <p>1000</p>
        </div>
        <div className='subsec32'>
          <img src={logo1} alt='oops a logo'/>
          <h4>234</h4>
          <p>Members</p>
        </div>
        <div className='subsec33'>
          <img src={logo2} alt='oops a logo'/>
          <h4>551</h4>
          <p>Followers</p>
        </div>
        <div className='subsec34'>
          <img src={logo3} alt='oops a logo'/>
          <h4>100</h4>
          <p>Subscribers</p>
        </div>
      </div>
      <div className='aboutsec4'>
        <div className='subsec41'>
          <img src={ltbg} alt='oops a bg'/>
        </div>
        <div className='subsec42'>
          <div className='aboutus'>
            <h1>About us</h1>
            <p>
            CODEX is the most active clubs on banglore campus and
            beyond and always operates, keeping the needs of the
            student community in mind. What's more, it never rests,
             ensuring you always have another event to attend, another
              skill to develop, and another way to have a great time!
              There are two sides to all engineering people. On one day, we may
               want to spend all night coding, and on another, we may get the
               urge to spend the night playing counter strike! Both these sides 
               need to be catered to. And CODEX club is the organization that does 
               it!!! CODEX club is an all-purpose organization that takes care of all
                your computing needs. It conducts a host of technical events like workshops
                 and hackathons covering everything you could imagine, from web development to cloud computing.
            </p>
            <button>want to Join Us?</button>
          </div>
          <div className='teamimg'>
            <img src={team} alt='team'/>
          </div>
        </div>
        <div className='subsec43'>
          <img src={rtbg} alt='oops a bg'/>
        </div>
      </div>
      <div className='aboutsec5'>
        <div className='subsec51'>
          <h1>Our Events</h1>
        </div>
        <div className='subsec52'>
          <div className='ebox'>
            <img className='eimg' src={img1} alt='codify'/>
            <h3>Code To Design</h3>
            <p>The introduction of competitive programming and logical approach to solve codes
               in a simpler way through the CODEX coding competition.</p>
          </div>
          <div className='ebox'>
            <img className='eimg' src={img2} alt='snapchat lens'/>
            <h3>Snapchat Lens</h3>
            <p>A workshop on building your own, collaboratively constructed snap lens was held.</p>
          </div>
          <div className='ebox'>
            <img className='eimg' src={img3} alt='code against time'/>
            <h3>Code To Design</h3>
            <p>The name says it all!! By cracking the most codes in the allotted time, you may win.</p>
          </div>
          <div className='ebox'>
            <img className='eimg' src={img4} alt='intro to c programming'/>
            <h3>Code To Design</h3>
            <p>The club took the initiative to introduce and make individuals perfect in C language through the workshop.</p>
          </div>
        </div>
      </div>
      <div className='aboutsec6'>
        <div className='subsec61'>
          <button>View More</button>
        </div>
        <div className='subsec62'>
          <img src={wand} alt='wands'/>
        </div>
      </div>
      <NFootr/>
      <Footr/>
    </section>
  )
  
}