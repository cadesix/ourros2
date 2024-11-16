import Navigation from '../components/Navigation'
import styles from './about.module.css'

export default function About() {
  return (
    <main>
      <Navigation />
      <div>
        <div className={styles.aboutText}>
          ourros is an experimental artist management + creative studio hybrid
          <br /><br />
          contact us <a href="mailto:cade@ourros.com">here</a>
        </div>
      </div>
    </main>
  )
} 