import Calendar from 'react-calendar';
import React,{useState} from 'react';
import './styles/Calendar.css'
import ho from './styles/assests/horn.png';
import './styles/eventDate.css';
import bg from './styles/assests/sec2bg.png';
import icon from './styles/assests/calendarimg.png';
import subbar from './styles/assests/subeventbar.png';
export default function EventDate(){
  const [value, onChange] = useState(new Date());
  return(
    <section>
      <div className='calSec'>
        <div className='caldesign'>
          <img src={bg} alt='bg2'/>
        </div>
        <div className='calMain'>
          <div className='calHeader'>
            <div><h1>Our Event Calendar</h1></div>
            <div><img src={ho} alt='horn-logo' /></div>
          </div>
          <div className='eventsSec'>
            <div className='events'>
              <div className='eventbar1'>
                <img src={subbar} alt='logo' className='subbar'/>
                <img src={icon} alt='calendar-logo'  className='callogo'/>
                <div className='des'>
                  <h4>December 15,2022</h4>
                  <p>c programming workshop</p>
                </div>
              </div>
              <div className='eventbar2'>
                <img src={subbar} alt='logo' className='subbar'/>
                <img src={icon} alt='calendar-logo'  className='callogo'/>
                <div className='des'>
                  <h4>December 15,2022</h4>
                  <p>c programming workshop</p>
                </div>
              </div>
              <div className='eventbar3'>
                <img src={subbar} alt='logo' className='subbar'/>
                <img src={icon} alt='calendar-logo' className='callogo'/>
                <div className='des'>
                  <h4>December 15,2022</h4>
                  <p>c programming workshop</p>
                </div>
              </div>
            </div>
            <div className='cal'>
              <Calendar onChange={onChange} value={value}  nextLabel={null} next2Label={null} prevLabel={null} prev2Label={null} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}