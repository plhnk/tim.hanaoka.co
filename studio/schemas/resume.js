export default {
  name: "resume",
  title: "Resume",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description:
        "If you’d like to create resume’s tailored for a job, make sure to specify that in the title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "If you’d like to share custom resumes with people, they’ll see this url",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "summary",
      title: "Summary",
      description: "If you'd like to include a summary statement at the top",
      type: "blockContent"
    },
    {
      name: "publishedAt",
      title: "Published at",
      description: "You can use this field to schedule when resumes get published",
      type: "datetime"
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "blockText"
    },
    {
      name: "education",
      title: "Education",
      type: "array",
      of: [{ type: 'reference', to: [{type: "education"}] }]
    },
    {
      name: "experience",
      title: "Experience",
      type: "array",
      of: [{ type: 'reference', to: [{type: "experience"}] }]
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: 'reference', to: [{type: "skills"}] }]
    },
    {
      name: "references",
      title: "References",
      type: "array",
      of: [{ type:'reference', to: [{ type: "person"}] }]
    },
    {
      name: "certifications",
      title: "Certifications",
      type: "array",
      of: [{ type: 'reference', to: [{type: "certifications"}] }]
    },
    {
      name: "relatedProjects",
      title: "Related projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }]
    },
    {
      name: "mainImage",
      title: "Main image",
      description: "If you'd like a custom cover image for this resume",
      type: "mainImage"
    }
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      image: "mainImage"
    },
    prepare({ title = "No title", publishedAt, image }) {
      return {
        title,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString()
          : "Missing publishing date",
        media: image
      };
    }
  }
};
