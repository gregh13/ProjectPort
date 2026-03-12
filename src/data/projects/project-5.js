/**
 * Project 5 — LRCOP (Launch Readiness Content Orchestration Platform)
 * Source: source_of_truth_files/projects/Project_5_LRCOP.md
 */

export const project5 = {
  id: "project-5",
  title: "LRCOP — Launch Readiness Content Orchestration Platform",
  summary: "Distributed ingestion and AI-assisted content generation system. Reduces manual synthesis time for launch documentation from fragmented Jira, Confluence, and Figma sources.",
  thumbnail: "https://placehold.co/400x250/ef4444/ffffff?text=LRCOP",
  overview: `LRCOP ingests fragmented launch content from Jira, Confluence, Slack, Figma, and Dropbox Paper, then generates AI-assisted first drafts for help docs and launch communications. Built a distributed ingestion engine (API Gateway, SQS, Lambda, DynamoDB, S3) with source-specific workers that crawl nested references. Content is vectorized in a Bedrock Knowledge Base and fed to QuickSuite for structured Confluence drafts.`,
  technical: `Phase 1 — Ingestion: API Gateway (authenticated Jira entry point), SQS (message routing), Lambda (orchestrator + source-specific workers), DynamoDB (job state), S3 (artifact + metadata storage). Terraform-managed infrastructure.

Phase 2 — Retrieval: S3-backed Bedrock Knowledge Base, ticket-scoped vectorization, metadata-based retrieval guardrails. Public documentation knowledge bases for cross-referencing.

Phase 3 — Generation: AWS QuickSuite (Bedrock Agents and Flows). Jira and Confluence webhooks for trigger, retry, and review. Deliverables: help documentation drafts, internal knowledge base updates, support macros, launch summaries.

Supported Sources: Jira, Confluence, Slack, Dropbox Paper, Figma. Extensible worker-based design.

Stack: Python, Lambda, SQS, API Gateway, DynamoDB, S3, Bedrock Knowledge Base, AWS QuickSuite, Terraform.`,
  deepDive: `Orchestrator responsibilities: Maintain ingestion graph in DynamoDB, route discovered links to appropriate workers, enforce recursion depth limits and domain allow-lists, manage concurrency controls, detect job completion, post ingestion summary back to Jira.

Worker pattern: Each source has a dedicated worker Lambda. Workers snapshot content, crawl nested links, emit SQS messages for newly discovered artifacts, normalize output (Markdown/PDF), upload to S3 with structured metadata (ticket ID, source type, depth, lineage, guardrail attributes).

Resilience: Depth limits, domain allow-lists, retry mechanisms for permission failures, SQS concurrency limits, reliable completion detection. Design themes: Distributed event-driven ingestion, recursive content crawling, metadata-driven guardrails, multi-knowledge-base retrieval, agentic content orchestration.`,
  tags: ["Python", "AWS Lambda", "SQS", "DynamoDB", "Bedrock", "QuickSuite", "Terraform", "Jira"],
}
