import spotifyLogo from '../assets/Spotify_Logo_RGB_Green.png'
import ContactForm from './ContactForm'
const loginURL = process.env.REACT_APP_FESTIFY_URL + '/login'

function Login() {

  return (
    <div className="Login">

      <div className="login-container">
        
        <div className="festify-title-container">
          <h1 className="festify-title">festify</h1>
        </div>
        
        <div className="login-text-container">
          <div className='beta-container'>
          <h2>is now in <span>beta</span> mode!</h2>
          {/* <p>
              During this phase, we are working hard to fine-tune our features and ensure a seamless experience for all.
          </p> */}
          <p> 
            If you would like to be part of the beta testing program, please submit your details below and await contact.
          </p>
            
            <p>
              For those already onboard, please click <a href={loginURL}> here</a> to continue.
            </p>
            <p>
              Regards, The Festify Team
            </p>
            <ContactForm />
          
            {/* <img id="spotifyLogo" src={spotifyLogo}></img> */}
       
            </div>
        </div>

      </div>
    </div>
  )
}

export default Login
