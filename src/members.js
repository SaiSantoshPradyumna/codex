
import './styles/members.css';
import wand from './styles/assests/Wands.jpg';
export default function Members(){
  return(
    <section>
      <div className='membersec1'>
        <h1>Meet Our People</h1>
      </div>
      <div className='membersec2'>
        <div className='subsec21'>
          <h1>Team Of <span>CODEX</span></h1>
        </div>
        <div className='subsec22'>
          <img src={wand} alt='oops'/>
        </div>
      </div>
      <div className='membersec3'>
        
      </div>
    </section>
  )
}