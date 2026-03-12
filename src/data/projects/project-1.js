export const project1 = {
  id: "project-1",
  title: "API Aggregator",
  summary: "Unified API gateway that reduced latency by 40% across microservices.",
  thumbnail: "https://placehold.co/400x250/3b82f6/ffffff?text=API+Aggregator",
  overview: "This project provides a single entry point for multiple backend services. Instead of clients making separate calls to different APIs, they connect to one gateway that intelligently routes and combines responses. The result is faster load times and a simpler experience for end users.",
  technical: "Built with Node.js and Express, the aggregator uses parallel request batching and response caching. It implements circuit breakers for fault tolerance and rate limiting to prevent abuse. The gateway sits behind a load balancer and scales horizontally based on traffic.",
  deepDive: "The core architecture uses a fan-out/fan-in pattern: incoming requests are decomposed into sub-requests, executed concurrently via Promise.allSettled, and results are merged. Cache keys are derived from request fingerprints (method + path + query hash). Circuit breakers use a sliding window to track failure rates; when the threshold is exceeded, the breaker opens and fails fast until a cooldown period elapses.",
  tags: ["Node.js", "Express", "Redis"]
}
