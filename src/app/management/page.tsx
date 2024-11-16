import Navigation from '../components/Navigation'
import styles from './management.module.css'
import Image from 'next/image'

const artists = [
  { name: 'SALLY BOY', instagram: 'sallyboy', image: '/images/rob.jpeg' },
  { name: 'HONG KONG BOYFRIEND', instagram: 'hongkongboyfriend', image: '/images/chase.jpeg' },
  { name: 'CONTRADASH', instagram: 'contradash', image: '/images/noah.jpeg' },
  { name: 'NOAH JACK', instagram: 'noahjack', image: '/images/joe.jpeg' },
  { name: 'JOE AVIO', instagram: 'joeavio', image: '/images/erez.jpeg' }
]

export default function Management() {
  return (
    <main className={styles.body}>
      <Navigation />
      <div>
        {artists.map((artist) => (
          <Image
            key={artist.name}
            src={artist.image}
            alt={artist.name}
            width={300}
            height={300}
            className={styles.artistImage}
          />
        ))}
      </div>
      <div className="container">
        <div className={styles.mgmtText}>
          <div className={styles.artistLinks}>
            {artists.map((artist) => (
              <a 
                key={artist.name}
                href={`https://instagram.com/${artist.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {artist.name}<br />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.mgmtTextMobile}>
          <div className={styles.artistLinks}>
            {artists.map((artist) => (
              <a 
                key={artist.name}
                href={`https://instagram.com/${artist.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {artist.name}<br />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 