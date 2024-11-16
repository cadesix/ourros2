import Navigation from './components/Navigation'
import ProjectGrid from './components/ProjectGrid'

export default function Home() {
  return (
    <main>
      <Navigation />
      <ProjectGrid />
      <div>
        <div className="text-block-9">© OURROS LLC {new Date().getFullYear()} • 1136</div>
      </div>
    </main>
  )
}