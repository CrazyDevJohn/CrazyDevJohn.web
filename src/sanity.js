import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "9cduolld",
  dataset: "production",
  apiVersion: "2024-04-21",
  token:
    "sk1LJIZlbBHRW72rAkig1TwbXCnmvZf8zn3oh712bjH7b6iCPW9fkutqG6xCafhqdR1KWOQ2PuUQDHxEjnAQBLX2Pu8H2BsXd8nQcNEJzcmtbRlp2mwCw2BkwKvJaEOGSgbH5NS0iLCI8N4TlLc0f0JYXkCpGRvcWV4zKe8uV3UvGMldjX32",
  // useCdn:true
});

export const fetchProjects = async () => {
  const response = await client.fetch(`*[_type=="projects" && showInMain]{
  _id,
    image{
    asset->{
        url,
      }
  },
  tech[]->{
    name,
    className
  },
  title,
  description,
  category,
  gitLink,
  liveLink
}`);
  return response;
};
