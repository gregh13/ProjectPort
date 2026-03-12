/**
 * Project 1 — Enterprise Google Workspace User & License Audit Automation
 * Source: source_of_truth_files/projects/Project_1_Google_Workspace_Audit.md
 */

export const project1 = {
  id: "project-1",
  title: "Google Workspace Lifecycle Governance Automation",
  shortTitle: "Google Workspace Governance",
  summary: "Multi-domain automation eliminating ~900 hours of manual audit work annually. Enforces offboarding, retention, license management, and compliance across four Workspace domains.",
  thumbnail: "https://placehold.co/400x250/3b82f6/ffffff?text=Google+Workspace+Audit",
  overview: `Multi-domain Google Workspace lifecycle governance automation enforcing offboarding, retention, and license management across four Workspace domains. Built in Python as containerized AWS Lambda with RDS state; reconciles user state against Workday, legal hold, and OU policies to suspend, archive, or delete accounts. Eliminated ~800 hours of manual audit work annually and strengthened compliance posture.`,
  technical: `Runtime: AWS Lambda (containerized via Docker), ECR, EventBridge (scheduled and parameterized execution). Domain-specific configurations with Pydantic validation for configuration and event payload integrity.

Storage & Observability: RDS (PostgreSQL) for state tracking, CloudWatch for logging, Datadog for time-series metrics, Slack notifications for operational reporting, comprehensive CSV output artifacts per run.

Security: IAM roles, AWS Secrets Manager, Google domain-wide delegation.

Capabilities: User enumeration (active and suspended), Workday reconciliation, legal hold protection, suspension/archiving, data transfer via Google Data Transfer API, Drive ownership verification, anomaly detection (active in Workday but suspended in Google, vice versa, admin privilege mismatch).

Stack: Python, Google Admin SDK, Google Data Transfer API, Google Drive API, Slack SDK, AWS SDK (boto3), Pydantic, requests.`,
  deepDive: `Design principles: Highly configurable, guardrail-enforced execution, idempotent processing, state-aware lifecycle management, extensible multi-domain architecture.

The core architecture uses a fan-out reconciliation model: each run processes the full domain population, reconciles against Workday employment status, legal hold API data, and OU policy rules. Archive limits enforce domain-specific retention; when thresholds are exceeded, users are archived to yearly archive service accounts. Data transfer state (initiated/in-progress/completed) is tracked in RDS; Drive API verification ensures no shared files remain owned by departing users before deletion.

Datadog metrics capture time-series license usage and available vs consumed license tracking, enabling true-up forecasting beyond point-in-time reporting. Historical state reconstruction supports security incident response and snapshot-based restoration for misconfigurations.`,
  tags: ["Python", "AWS Lambda", "PostgreSQL", "Google Admin SDK", "Workday", "Pydantic"],
}
