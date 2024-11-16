import { projects } from '../../data/projects'
import Navigation from '../../components/Navigation'
import styles from './project.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function Project({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)
  
  if (!project) {
    notFound()
  }

  return (
    <main>
      <Navigation />
      <div className={styles.projectContainer}>
        <div className={styles.projectContent}>
          <h1 className={styles.title}>
            <span className={styles.artist}>{project.artist}</span>
            <br />
            {project.title}
          </h1>
          
          {project.videoId ? (
            <div className={styles.videoWrapper}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${project.videoId}`}
                title={`${project.title} by ${project.artist}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <Image
              src={project.image}
              alt={`${project.title} by ${project.artist}`}
              width={1200}
              height={675}
              className={styles.projectImage}
              priority
            />
          )}
        </div>
      </div>
    </main>
  )
} 