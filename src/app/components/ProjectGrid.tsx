import Image from 'next/image'
import Link from 'next/link'
import { projects } from '../data/projects'

export default function ProjectGrid() {
  return (
    <div className="w-layout-grid grid">
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <Link href={`/projects/${project.id}`}>
            <div className="image-container">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={225}
                className="workimg"
              />
              <div className="worktitle-overlay">
                <span className="artist"><strong>{project.artist}</strong></span>
                <br />
                {project.title}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}