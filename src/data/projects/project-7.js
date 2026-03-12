export const project7 = {
  id: "project-7",
  title: "Search Service",
  summary: "Full-text search across 1M+ documents with sub-100ms response times.",
  thumbnail: "https://placehold.co/400x250/ec4899/ffffff?text=Search",
  overview: "A search feature that lets users find documents by typing keywords. Results appear as you type, ranked by relevance. It works across millions of documents and returns in a fraction of a second.",
  technical: "Elasticsearch for indexing and querying. A sync service listens to database change events and updates the index. The search API supports filters, facets, and typo tolerance. Query results are cached for popular searches.",
  deepDive: "Index mapping uses a combination of text (analyzed) and keyword (exact) fields. Queries use a multi_match with best_fields for title and most_fields for body, with boost factors. Typo tolerance is implemented via fuzzy matching with max_edits=1. The sync service uses a transactional outbox: DB writes go to a table, a poller reads and publishes to a queue, and a consumer updates Elasticsearch. This ensures eventual consistency without blocking writes.",
  tags: ["Elasticsearch", "Node.js", "PostgreSQL"]
}
