/**
 * Project 4 — Adobe License Audit & Reclamation Automation
 * Source: source_of_truth_files/projects/Project_4_Adobe_License_Audit.md
 */

export const project4 = {
  id: "project-4",
  title: "Adobe License Audit & Reclamation Automation",
  summary: "Fully automated event-driven license governance. Reclaimed ~$50,000 in unused allocations during initial run; eliminated manual audit overhead.",
  thumbnail: "https://placehold.co/400x250/f59e0b/ffffff?text=Adobe+License+Audit",
  overview: `Fully automated Adobe license governance addressing over-allocation and underutilization. EventBridge triggers a Step Functions state machine that provisions an ECS Slack audit bot, sends modal surveys per user per license, and schedules reminders across a multi-week window. At completion, removes non-responders from Okta groups and provides a ServiceNow reinstatement path. Reclaimed ~$50K in unused allocations during the initial run.`,
  technical: `Trigger: EventBridge (biannual cadence, configurable) initiates AWS Step Functions state machine.

Orchestration: Step Functions launches ECS audit bot, schedules reminder ECS tasks, terminates ECS service at audit completion.

Compute: ECS (long-running interactive Slack audit bot), ECS tasks (scheduled reminders), Docker containerized, ECR, GitHub Actions CI/CD.

Data Layer: RDS (PostgreSQL) for user-license relationships, survey state, reminder cadence tracking, completion and reclamation status.

Integrations: Okta (license enumeration, group removal for reclamation), Slack (modal surveys, reminders, CSV reports), ServiceNow (reinstatement workflow), Datadog (time-series license metrics).

Stack: Python, Okta API, Slack SDK, AWS SDK (boto3), async database drivers, SQLAlchemy/direct SQL.`,
  deepDive: `Design principles: Fully automated lifecycle (startup and shutdown), cost optimization (ECS runs only during audit window), user-centered governance (Slack-native interface, frictionless reinstatement), concurrency-safe engineering (async DB connections, consistent source-of-truth state).

Workflow: (1) Audit kickoff via EventBridge → Step Functions → ECS bot. (2) Okta API for Adobe license group membership. (3) One Slack modal per license per user with structured validation. (4) Weekly reminder ECS tasks target incomplete responses only. (5) Async state management prevents race conditions between user responses and scheduled tasks. (6) Message lifecycle management cleans stale Slack messages, synchronizes duplicate prompts. (7) License reclamation removes non-responders from Okta groups. (8) Automated teardown at completion.`,
  tags: ["Python", "AWS Step Functions", "ECS", "PostgreSQL", "Okta", "Slack", "ServiceNow"],
}
