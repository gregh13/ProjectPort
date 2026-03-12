export default function Tabs({ tabs, activeTab, onTabChange }) {
  return (
    <div>
      <div className="flex gap-1 border-b border-gray-200 dark:border-gray-700 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-2 font-medium text-sm transition-colors ${
              activeTab === tab.id
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="min-h-[50vh] max-h-[65vh] overflow-y-auto pr-2">
        <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed whitespace-pre-wrap">
          {tabs.find((t) => t.id === activeTab)?.content}
        </div>
      </div>
    </div>
  )
}
