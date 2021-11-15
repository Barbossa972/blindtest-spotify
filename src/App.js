import swal from "sweetalert"
import logo from "./logo.svg"
import loading from "./loading.svg"
import styles from "./App.module.css"
import Button from "./Button"
import { shuffleArray, getRandomNumber } from "./utils"

// Get token from https://developer.spotify.com/console/get-current-user-saved-tracks/
const apiToken = "BQDbpesgCg29XFIxfAFgRuvnNjM9CifCq-OLjZnlXG81niNw5Y0_sQio55-rMkC4l5P_eNhY7-sIJ5s2syZVzV68Mwi9gzXLvYKGQznPiARUN95ar3pVsG7sSg1rd7u0gKKPfRrRWnGUev4FZFxVLSpN798f_Q"

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1 className={styles.appTitle}>Bienvenue sur le Blindtest</h1>
        <p>Aller c'est l'heure de coder !</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className={styles.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
