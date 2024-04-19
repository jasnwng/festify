import '../styles/Login.css'
import spotifyLogo from '../assets/Spotify_Logo_RGB_Green.png'

function Login() {

  return (
    <div className="Login">

      <div className="login-text-container">
        <h2>step 1</h2>
        <h3>connect with spotify</h3>
        <a href="http://localhost:8888/login">
          <img id="spotifyLogo" src={spotifyLogo}></img>
        </a>
      </div>

      <div id="login-title-container">
        <h1 id="login-title">festify</h1>
      </div>

    </div>
  )
}

export default Login
