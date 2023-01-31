
import './styles/nfooter.css'
import logo from './styles/assests/codexlogo.png';
import twit from './styles/assests/twiiter.webp';
import whtapp from './styles/assests/whatsapp.webp';
import face from './styles/assests/Facebook.webp';
import insta from './styles/assests/instagram.webp';
import utube from './styles/assests/youtube.png';
export default function NFootr(){
  return(
    <div>
      <div className='footcontainer'>
        <div className='logo'>
          <img src={logo} alt='logo' />
          <p>A Gitam Club . We learn,We build and We share</p>
          <p>codex_sig@gitam.in</p>
        </div>
        <div className='row'>
          <h3>Quick Links</h3>
          <nav>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Domains</a></li>
              <li><a href='#'>Members</a></li>
              <li><a href='#'>Resources</a></li>
            </ul>
          </nav>
        </div>
        <div className='row'>
          <h3>Services</h3>
            <nav>
              <ul>
                <li><a href='#'>Resources</a></li>
                <li><a href='#'>Practice typing</a></li>
              </ul>
            </nav>
        </div>
        <div className='row'>
          <h3>Contact</h3>
            <nav>
              <ul>
                <li><a href='#'>info@codex.com</a></li>
                <li><a href='#'>123-456-789</a></li>
              </ul>
            </nav>
        </div>
        <div className='social'>
          <h3>Follow</h3>
          <div>
            <a href='#'><img className='twit' src={twit} alt='twitter' /></a>
            <a href='#'><img src={face} alt='facebook'/></a>
            <a href='#'><img src={whtapp} alt='whatsapp'/></a>
            <a href='#'><img src={insta} alt='instagram'/></a>
            <a href='#'><img  className='yout'src={utube} alt='youtube'/></a>  
          </div>
        </div>
      </div>
    </div>
  )
}