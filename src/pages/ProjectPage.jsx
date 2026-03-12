import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import Tabs from '../components/Tabs'

export default function ProjectPage() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('overview')

  const project = projects.find((p) => p.id === id)

  if (!project) {
    return <Navigate to="/" replace />
  }

  const tabs = [
    { id: 'overview', label: 'Overview', content: project.overview },
    { id: 'technical', label: 'Technical', content: project.technical },
    { id: 'deepDive', label: 'Deep Dive', content: project.deepDive },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors mb-6"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </Link>
      <div className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-40 object-cover"
        />
        <div className="p-6">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </div>
    </div>
  )
}
