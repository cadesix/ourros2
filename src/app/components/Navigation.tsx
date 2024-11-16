import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  return (
    <div className="section-2">
      <Image 
        src="/images/3dLogoWeb.png"
        alt="Ourros Logo"
        width={150}
        height={150}
        className="image"
        priority
      />
      <div className="nav">
        <Link href="/" className="navlink">STUDIO</Link>
        <Link href="/management" className="navlink">MANAGEMENT</Link>
        <Link href="/about" className="navlink">ABOUT</Link>
        <Link href="/press" className="navlink">PRESS</Link>
      </div>
    </div>
  )
}