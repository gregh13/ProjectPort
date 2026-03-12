export const project3 = {
  id: "project-3",
  title: "Document Processing Pipeline",
  summary: "Automated extraction and classification of 10,000+ documents per day.",
  thumbnail: "https://placehold.co/400x250/8b5cf6/ffffff?text=Doc+Pipeline",
  overview: "Upload documents and the system automatically identifies what type they are, extracts key information like dates and amounts, and routes them to the right team. What used to take hours of manual work now happens in seconds.",
  technical: "AWS Lambda functions triggered by S3 uploads. Text extraction via Tesseract OCR and AWS Textract. A custom classifier model (scikit-learn) assigns document types. Results are stored in DynamoDB and exposed through a REST API.",
  deepDive: "The pipeline is event-driven: S3 triggers Lambda, which downloads the file, runs OCR in parallel with Textract (fallback for low-confidence regions), and feeds the combined text into the classifier. The classifier is a TF-IDF + Logistic Regression model trained on 5k labeled samples; inference runs in under 200ms. DynamoDB uses a composite key (tenant_id, document_id) for multi-tenant isolation.",
  tags: ["Python", "AWS", "Lambda", "DynamoDB"]
}
