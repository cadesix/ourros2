import Navigation from '../components/Navigation'
import styles from './press.module.css'

const pressLinks = [
  {
    title: 'EARLY RISING - Ourros',
    url: 'https://earlyrising.co/2020/12/16/ourros/'
  },
  {
    title: 'BILLBOARD - Alternative Singer-Rapper Contradash signs to Interscope',
    url: 'https://www.billboard.com/pro/contradash-interscope-signing-new-single-exclusive/'
  },
  {
    title: "VARIETY - JJ Abrams' Loud Robot Label signs Sally Boy",
    url: 'https://variety.com/2021/music/news/jj-abrams-loud-robot-sally-boy-1235029019/'
  },
  {
    title: "ONES TO WATCH - Hong Kong Boyfriend Has us Hooked on 'Sharlene'",
    url: 'https://www.onestowatch.com/blog/hong-kong-boyfriend-sharlene'
  },
  {
    title: "DIRECTORS LIBRARY - Eddie Mandell and Ava Doorley direct 'Marie' for Sally Boy",
    url: 'https://directorslibrary.com/12/2020/latest/music-videos/marie-sally-boy/'
  }
]

export default function Press() {
  return (
    <main>
      <Navigation />
      <div>
        <div className={styles.pressLinks}>
          {pressLinks.map((link) => (
            <a 
              key={link.url} 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title}
              <br /><br />
            </a>
          ))}
        </div>
      </div>
    </main>
  )
} 