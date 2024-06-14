import spotifyLogo from '../assets/Spotify_Logo_RGB_Green.png'
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
          <p>
            During this phase, we are working hard to fine-tune our features and ensure a seamless experience for all. <br></br>
            If you would like to be part of the beta testing team, please sign-up here and await instructions:<br></br>
            For those already onboard, please click <a href={loginURL}> here</a> to continue.<br></br>
            Best regards, <br></br>
            The Festify Team
          </p>
          
            {/* <img id="spotifyLogo" src={spotifyLogo}></img> */}
       
            </div>
        </div>

      </div>
    </div>
  )
}

export default Login
