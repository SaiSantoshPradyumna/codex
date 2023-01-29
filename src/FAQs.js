import './FAQs.css';
import q from './assests/quiresimg.png';
import man from './assests/faqsguy.png';
import bg from './assests/sec3bg.png';
import questions from './faq.json';
import Banner from "./Banner";
export default function Faqs(){
  return(
    <section>
      <div className="maincontainer1">
        <div className="row1">
          <img src={man} alt='man' />
        </div>
        <div className="row2">
          <div className='faq'>
            <Banner>
              <Banner.Header className='bheader' >FAQ'S
              </Banner.Header>
              <h3>These are some of the frequently asked question about CODEX</h3>
              {questions.map((question) => (
                <Banner.Entity key={question.id}>
                  <Banner.Question>{question.question}</Banner.Question>
                  <Banner.Text>{question.answers}</Banner.Text>
                </Banner.Entity>
              ))}
              
            </Banner>
          </div>
        </div>
      </div>
      <div className='maincontainer2'>
        <div className='row3'>
          <input type='text' value='Any Queries ask here'>
          </input>
          <img src={q} alt='send' />
        </div>
        <div className="row4">
          <img src={bg} alt='bg'/>
        </div>
      </div>
    </section>
    
  )
}