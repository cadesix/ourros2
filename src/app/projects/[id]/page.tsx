import { projects } from '../../data/projects'
import Navigation from '../../components/Navigation'
import styles from './project.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function Project({ params }: PageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) notFound()

  return (
    <main>
      <Navigation />
      <div className={styles.projectContainer}>
        <div className={styles.projectContent}>
          {project.type === 'video' && project.videoUrl ? (
            <div className={styles.videoWrapper}>
              <iframe
                src={project.videoUrl}
                title={`${project.title} by ${project.artist}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className={styles.imageWrapper}>
              <Image
                src={project.image}
                alt={`${project.title} by ${project.artist}`}
                width={1200}
                height={675}
                className={styles.projectImage}
                priority
              />
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
} 