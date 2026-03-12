export const project4 = {
  id: "project-4",
  title: "Analytics Dashboard",
  summary: "Interactive dashboards with drill-down for sales and marketing metrics.",
  thumbnail: "https://placehold.co/400x250/f59e0b/ffffff?text=Analytics",
  overview: "A web-based dashboard that displays charts and tables for business metrics. Users can filter by date range, region, or product, and click through to see more detail. No need to export to spreadsheets—everything is interactive.",
  technical: "React frontend with Recharts for visualizations. Data is pre-aggregated in a data warehouse (BigQuery) and served via a thin API layer. Caching at the API level reduces query load. The UI uses virtual scrolling for large tables.",
  deepDive: "Aggregations are computed in BigQuery via scheduled queries that materialize daily/hourly rollups. The API exposes a generic query interface that maps UI filters to parameterized SQL. Frontend state (filters, date range) is synced to the URL for shareable links. Recharts receives pre-aggregated series; no client-side aggregation.",
  tags: ["React", "BigQuery", "Recharts"]
}
