/**
 * Project 2 — Google Workspace External Calendar Sharing Governance Automation
 * Source: source_of_truth_files/projects/Project_2_Calendar_Sharing_Governance.md
 */

export const project2 = {
  id: "project-2",
  title: "Calendar Sharing Governance Automation",
  shortTitle: "Calendar Sharing Governance",
  summary: "Real-time event-driven governance that closed a structural security gap. Remediated ~100–200 improperly shared calendars at launch; ~20 unauthorized attempts captured annually.",
  thumbnail: "https://placehold.co/400x250/10b981/ffffff?text=Calendar+Governance",
  overview: `Real-time governance automation that closed a structural Google Workspace security gap: the admin console's single toggle for secondary calendar sharing enabled legitimate vendor access but also permitted public exposure. Built a Python Lambda triggered every 5 minutes to monitor the Google Events API, enforce a granular allow-list, and auto-remediate violations by downgrading to free/busy. Remediated ~100–200 calendars at launch; ~20 unauthorized attempts captured annually.`,
  technical: `Runtime: AWS Lambda (containerized via Docker), ECR, EventBridge (every 5 minutes).

Data Layer: RDS (PostgreSQL) for state persistence, SQL queries for share tracking and remediation state

Observability: CloudWatch logging, Slack notifications, email notifications. Long-term share state stored in RDS beyond Google's 6-month log retention.

Security: IAM roles, AWS Secrets Manager, Google domain-wide delegation.

Capabilities: Google Events API for near real-time monitoring, domain-aware logic (OUs, user types, groups, service accounts), granular allow-list (domain/calendar/user level), automated remediation (downgrade to free/busy), ServiceNow integration with pre-populated request forms.

Stack: Python, Google SDK/Admin SDK, Google Events API, AWS SDK (boto3), requests.`,
  deepDive: `Design principles: Event-driven enforcement, idempotent remediation, granular configuration, enterprise-scale domain logic, security-first design with user-friendly workflow.

The system evaluates each calendar share change event against a code-based allow-list configuration. Domain-level, calendar-level, and user-level allowances are supported. When unauthorized external sharing is detected, the system immediately downgrades visibility to free/busy, logs full event details (Calendar ID, owner, share target, share level, timestamp, remediation state), and triggers the notification workflow.

ServiceNow integration: Partnered with ServiceNow team to build custom intake form. Pre-populated request URLs reduce friction; security approval workflow routes approved requests back for allow-list updates. The result balances governance and usability while enabling secure external collaboration for client-facing teams.`,
  tags: ["Python", "AWS Lambda", "PostgreSQL", "Google Events API", "ServiceNow", "Slack"],
}
