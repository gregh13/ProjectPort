/**
 * Project 6 — AI Initiatives & Adoption Engineering
 * Source: source_of_truth_files/projects/Project_6_AI_Initiatives.md
 */

export const project6 = {
  id: "project-6",
  title: "AI Initiatives & Adoption Engineering",
  shortTitle: "AI Initiatives",
  summary: "Composite of four high-impact AI initiatives: SpriteGPT stabilization, executive AI adoption metrics, Gemini observability, and Reclaim AI scheduling integration.",
  thumbnail: "https://placehold.co/400x250/06b6d4/ffffff?text=AI+Initiatives",
  overview: `Four AI adoption initiatives: (1) SpriteGPT—stabilized an internal AI review tool before a major cycle by fixing async Workday ingestion bugs, preserving ~300–400 manager hours. (2) ChatGPT pipeline—corrected duplication and SQL logic in Databricks to restore executive adoption dashboards. (3) Gemini observability—built daily EventBridge automation for Datadog metrics with privacy-preserving hashed identifiers. (4) Reclaim—integrated AI scheduling links into Slack profiles via Okta SCIM.`,
  technical: `SpriteGPT: TypeScript + React frontend, Python backend, AWS Elastic Beanstalk, Workday API integration. Root cause: async Workday report ingestion and timing logic.

ChatGPT Pipeline: API → S3 → Databricks job → transformed table → complex SQL → Tableau. Fix: corrected duplication and field selection in SQL logic.

Gemini Observability: Python containerized to ECR, EventBridge (daily trigger), RDS (state), Google Admin Events API, Datadog Logs ingestion, logs-to-metrics conversion. Privacy: hashed user identifiers.

Reclaim Integration: Slack Enterprise Grid, Okta/ISAM (SCIM provisioning), Reclaim. SCIM attribute mapping, Okta workflow configuration, optional provisioning logic for non-users.`,
  deepDive: `Overarching themes: (1) AI enablement through integration—embedded AI capabilities into daily collaboration workflows. (2) Cross-system orchestration—coordinated across Slack, Okta, Workday, ChatGPT, Gemini, Reclaim, Databricks, Tableau. (3) Adoption-focused engineering—preserved opt-in flexibility, avoided disruption to non-users. (4) Reliability under executive visibility—stabilized high-impact tooling ahead of critical deadlines, restored trust in executive dashboards. (5) Privacy-conscious telemetry—hashed identifiers, structured telemetry for actionable insight without exposing sensitive data.

The initiatives collectively demonstrate how AI capabilities can be stabilized, integrated, observed, and embedded directly into everyday workflows—practical AI enablement at scale.`,
  tags: ["Python", "TypeScript", "React", "Databricks", "Workday", "Slack", "Okta", "Datadog"],
}
