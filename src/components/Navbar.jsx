import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { projects } from '../data/projects'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  const isProjectPage = location.pathname.startsWith('/projects/')

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
          >
            Home
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors ${
                isProjectPage ? 'text-blue-600 dark:text-blue-400' : ''
              }`}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 top-full mt-1 py-2 w-56 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg z-50">
                {projects.map((project) => (
                  <Link
                    key={project.id}
                    to={`/projects/${project.id}`}
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {project.shortTitle || project.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  )
}
