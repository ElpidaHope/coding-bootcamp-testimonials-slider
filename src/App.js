import { useState } from 'react';
import './App.css';
import iconNext from './images/icon-next.svg';
import iconPrev from './images/icon-prev.svg';

function App() {
  const users = [
    {
      testimonial : " “ I’ve been interested in coding for a while but never taken the jump,    until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” ",
      name: "Tanya Sinclair",
      job: "UX Engineer",
      image: require('./images/image-tanya.jpg')
    },

    {
      testimonial: " “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ” ",
      name: "John Tarkpor",
      job: "Junior Front-end Developer",
      image: require('./images/image-john.jpg')
    }
  ]
  
  const [user, setUser] = useState(users[0])

  const sliderNext = () => {
    setUser(users[1])
  }

  const sliderPrev = () => {
    setUser(users[0])
  }
  return (
    <div className='container'>
      <div className="image-container">
        <img src={user.image} alt="" className='user-image'/>
        <div className="buttons">
          <img src={iconPrev} alt="prev" onClick={sliderPrev}/>
          <img src={iconNext} alt="next" onClick={sliderNext}/>
        </div>

      </div>
      <div className="text-container">
        <h3>{user.testimonial}</h3>
        <div className='details'>
          <h4>{user.name}</h4>
          <p>{user.job}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
