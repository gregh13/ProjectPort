export const project2 = {
  id: "project-2",
  title: "Inventory Management System",
  summary: "Real-time stock tracking with automated reorder alerts for 50+ warehouses.",
  thumbnail: "https://placehold.co/400x250/10b981/ffffff?text=Inventory+System",
  overview: "A system that helps businesses keep track of products across multiple locations. When stock runs low, it automatically sends alerts so teams can reorder before running out. This reduces lost sales and prevents overstocking.",
  technical: "Python backend with FastAPI, PostgreSQL for transactional data, and Redis for real-time counters. WebSocket connections push inventory updates to the dashboard. A background worker runs scheduled jobs for reorder calculations and email notifications.",
  deepDive: "Inventory levels are updated via optimistic locking (version column) to handle concurrent adjustments. The reorder logic uses a (min, max) policy per SKU per warehouse; when current stock falls below min, a reorder quantity of (max - current) is suggested. WebSockets use a pub/sub model: backend publishes to Redis channels, and a separate WebSocket server subscribes and forwards to connected clients.",
  tags: ["Python", "FastAPI", "PostgreSQL", "Redis"]
}
