import { about } from '../data/about'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex flex-col items-center gap-6 mb-12">
        <img
          src="https://placehold.co/160x160/3b82f6/ffffff?text=GH"
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover shadow-md"
        />
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {about.headline}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed max-w-2xl">
          {about.summary}
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {about.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
