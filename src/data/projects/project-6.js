export const project6 = {
  id: "project-6",
  title: "Mobile Companion App",
  summary: "Cross-platform app for field workers with offline-first sync.",
  thumbnail: "https://placehold.co/400x250/06b6d4/ffffff?text=Mobile+App",
  overview: "A mobile app that lets field workers record data even when they have no internet connection. When they're back online, everything syncs automatically. Built for both phones and tablets, with a simple interface designed for use outdoors.",
  technical: "React Native with Expo. SQLite for local storage, synced to a backend via a custom sync protocol. Conflict resolution uses last-write-wins with optional manual merge for critical records. Push notifications for sync status and task assignments.",
  deepDive: "Sync protocol: client sends a vector of (record_id, updated_at) for changed records; server returns deltas. Conflicts are detected when server has a newer version of a record the client modified; in that case we apply last-write-wins but log the conflict for audit. SQLite is wrapped in a small abstraction that queues writes when offline and flushes on reconnect. Expo's background fetch runs periodic sync attempts.",
  tags: ["React Native", "Expo", "SQLite"]
}
