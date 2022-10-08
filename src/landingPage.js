import './App.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleClick = () => { 
        console.log("Hellooo");      
        navigate("/postView");
    }
    return(
        <div className="landing-div">
           <img className="landing-img" src="https://www.innovationnewsnetwork.com/wp-content/uploads/2022/05/%C2%A9-iStock-Pitris-696x392.jpg" alt='landig-img' />
            <div className='landing-h2'>10X Team 04 <br /> <button onClick={handleClick} className='landing-btn'>Enter</button></div>
        </div>
    )
}

export default LandingPage;