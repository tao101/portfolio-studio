export default {
  name: "homePage",
  title: "Home Page",
  type: "object",
  fields: [
    {
      name: "seo",
      title: "Page SEO",
      type: "pageSeo",
    },
    {
      name: "introTitle",
      title: "Introduction Title",
      type: "string",
    },
    {
      name: "introDescription",
      title: "Introduction Description",
      type: "string",
    },
    {
      name: "resumeButtonText",
      title: "resume Button Text",
      type: "string",
    },
    {
      name: "resumeButtonLink",
      title: "resume Button Link",
      type: "url",
    },
    {
      name: "contactMeText",
      title: "Contact Me Text",
      type: "string",
    },
    {
      name: "skillsTitle",
      title: "Skills Section Title",
      type: "string",
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          name: "title",
          title: "title",
          type: "string",
        },
        {
          name: "image",
          title: "Image",
          type: "image",
        },
      ],
    },
    {
      name: "languagesTitle",
      title: "Languages Title",
      type: "string",
    },
    {
      name: "languages",
      title: "languagesArray",
      type: "array",
      of: [
        {
          name: "languagesTitle",
          title: "languages Title",
          type: "string",
        },
        {
          name: "image",
          title: "Image",
          type: "image",
        },
      ],
    },
    {
      name: "featuredProjectsTitle",
      title: "Featured Projects Title",
      type: "string",
    },
    {
      name: "featuredProjects",
      title: "Featured Projects",
      type: "array",
      of: [
        {
          name: "featuredProject",
          title: "Select a Project to feature",
          type: "reference",
          to: [{ type: "project" }],
        },
      ],
    },
  ],
};
