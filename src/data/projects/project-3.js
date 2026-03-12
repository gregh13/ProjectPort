/**
 * Project 3 — Enterprise Whiteboard Migration (Miro → Zoom)
 * Source: source_of_truth_files/projects/Project_3_Miro_to_Zoom_Migration.md
 */

export const project3 = {
  id: "project-3",
  title: "Enterprise Whiteboard Migration (Miro → Zoom)",
  summary: "Large-scale migration of 3,000+ employees from Miro to Zoom Whiteboards. Eliminated ~$250,000 in annual licensing costs under vendor constraints.",
  thumbnail: "https://placehold.co/400x250/8b5cf6/ffffff?text=Miro+to+Zoom",
  overview: `Large-scale migration of 3,000+ employees from Miro to Zoom Whiteboards, eliminating ~$250K annually. Executed under vendor constraints (API throttling, limited export tooling) using controlled batching and retry logic. Built a Python automation with bulk export workflows and a Slack self-service bot with a fairness-based queue. Ran a pilot, validated data integrity, and supported full rollout.`,
  technical: `Runtime: AWS Lambda, EventBridge, ECS (Slack bot and long-running workloads), RDS (PostgreSQL), S3 (export artifact storage), CloudWatch.

Containerization: Docker-based architecture, images pushed via GitHub Actions, stored in ECR, deployed to ECS and Lambda.

Data Layer: RDS for state tracking (board export status, queue position, retry state, user requests). S3 for durable board export artifacts.

Capabilities: Bulk migration engine (enterprise-wide extraction, automated transformation), Slack self-service bot (slash commands, modal workflows, fair-use queue), Miro API exploration (reverse engineering, throttling optimization), Zoom API integration (automated board creation, import workflows).

Stack: Python, Miro API, Zoom API, Slack SDK, AWS SDK (boto3), requests.`,
  deepDive: `Design themes: Vendor-constrained engineering, API-driven migration, Slack-native workflow automation, fairness-based queue architecture, enterprise-scale data orchestration.

Technical discovery: Deep investigation of Miro export capabilities, reverse engineering undocumented behaviors, optimized batching strategies within throttling constraints. Retry logic designed to maximize data throughput while preserving integrity.

Operational design: Throughput optimization (managed API throttling, controlled batching, retry strategies for incomplete exports). State awareness: board lifecycle tracked in RDS for resumable and repeatable exports. Storage separation: S3 for artifact persistence, compute and storage decoupled. Fairness-based queue prevents single-user monopolization during high-demand periods.`,
  tags: ["Python", "AWS Lambda", "ECS", "PostgreSQL", "S3", "Miro API", "Zoom API", "Slack"],
}
