import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="flex flex-col items-center gap-6">
        <img
          src="https://placehold.co/160x160/3b82f6/ffffff?text=You"
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover shadow-md"
        />
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Hi, I'm a Developer
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
          I build software that solves real problems. My focus is on clean architecture,
          maintainable code, and systems that scale. I enjoy working across the stack—
          from APIs and databases to frontend interfaces.
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Tailwind'].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
            >
              {skill}
            </span>
          ))}
        </div>
        <Link
          to="/projects"
          className="mt-4 px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
        >
          View Projects
        </Link>
      </div>
    </div>
  )
}
