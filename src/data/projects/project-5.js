export const project5 = {
  id: "project-5",
  title: "CI/CD Automation",
  summary: "Reduced deployment time from 2 hours to 15 minutes with automated pipelines.",
  thumbnail: "https://placehold.co/400x250/ef4444/ffffff?text=CI+CD",
  overview: "A set of automated workflows that build, test, and deploy code whenever changes are pushed. Developers no longer need to run manual steps or wait for someone else to release. Deployments are faster and less error-prone.",
  technical: "GitHub Actions for CI, Terraform for infrastructure, and custom scripts for deployment. Pipelines run unit tests, integration tests, and security scans before promoting to staging. Production deploys require manual approval and run during low-traffic windows.",
  deepDive: "Each pipeline stage runs in isolated containers; artifacts (build outputs, test reports) are passed between stages via GitHub Actions cache. Terraform state is stored in S3 with DynamoDB locking. The deploy script uses blue-green: new instances are provisioned, health checks pass, then traffic is shifted via ALB target group updates. Rollback is a single command that switches back to the previous group.",
  tags: ["GitHub Actions", "Terraform", "AWS"]
}
