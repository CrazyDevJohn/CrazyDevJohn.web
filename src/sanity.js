import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "9cduolld",
  dataset: "production",
  apiVersion: "2024-04-21",
  token:
    "sk1LJIZlbBHRW72rAkig1TwbXCnmvZf8zn3oh712bjH7b6iCPW9fkutqG6xCafhqdR1KWOQ2PuUQDHxEjnAQBLX2Pu8H2BsXd8nQcNEJzcmtbRlp2mwCw2BkwKvJaEOGSgbH5NS0iLCI8N4TlLc0f0JYXkCpGRvcWV4zKe8uV3UvGMldjX32",
  // useCdn:true
});

export const getHomeContent = async () => {
  return await client.fetch(`*[_type=="home"]{
  title,
    typeWritterText,
  description,
    hireme
}[0]`);
};

export const getServices = async () => {
  return await client.fetch(`*[_type=="services"]{
  customers,
    fProjects,
    students,
    pProjects
}[0]`);
};

export const getAbout = async () => {
  return await client.fetch(`*[_type=="about"]{
  text
}`);
};

export const getProjects = async () => {
  return await client.fetch(`*[_type=="projects"]{
    projects[] {
    code,
    text,
    demo,
    snap {
        asset->{
        url
        }
    }
    }
}[0]`);
};
