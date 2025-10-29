import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // var name="varshini"
  // var place="hyd"
  return (
    <div>
      <h1>Hi Everyone!! </h1>
      <h1>About Myself</h1>
      <h3>Introduction: <br></br>My name is Varshini, and I am from Guntakal, Andhra Pradesh. I am a recent graduate with a degree in Computer Science. Throughout my academic journey, I have developed a strong interest in technology and software development. I am passionate about learning new concepts, exploring real-world applications, and continuously improving my technical and problem-solving abilities. I am eager to begin my professional career where I can apply my knowledge, gain practical experience, and grow both personally and professionally.</h3>
      <h3>Skills: <br></br>I have developed technical skills in Java, HTML, CSS, JavaScript, and MS Excel. I am comfortable working on web development projects using HTML, CSS, and JavaScript to create responsive and interactive designs. My knowledge of Java helps me in understanding object-oriented programming and backend logic. Additionally, I use MS Excel for data management, analysis, and visualization. I am always open to learning new tools and technologies to enhance my skill set.</h3>
      <h3>Languages: </h3>
      <ol><li>English</li><li>Hindi</li><li>Telugu</li><li>Kannada</li></ol>
      <h3>Images</h3>
      <img src="html.png"></img>
      <img src="css.png"></img>
      <img src="js.png"></img><br></br>
      <video src="video.mp4" controls  style={{ width: "300px", height: "200px" }}></video>


    </div>
    
  )
}

export default App
