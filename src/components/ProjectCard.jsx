export default function ProjectCard({ project, onClick }) {
  return (
    <button
      onClick={() => onClick(project)}
      className="w-full h-full flex flex-col text-left rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
    >
      <div className="w-full aspect-[8/5] flex-shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col min-h-0">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 flex-1">
          {project.summary}
        </p>
        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </button>
  )
}
