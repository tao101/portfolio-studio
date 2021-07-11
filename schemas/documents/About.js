export default {
  name: "AboutPage",
  title: "About Me Page",
  type: "object",
  fields: [
    {
      name: "seo",
      title: "Page SEO",
      type: "pageSeo",
    },
    {
      name: "title",
      title: "About Me Title",
      type: "string",
    },
    {
      name: "image",
      title: "About Me Image",
      type: "image",
    },
    {
      name: "description",
      title: "About Me Description",
      type: "text",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "socialLinkTitle",
      title: "Social Link Title",
      type: "string",
    },
  ],
};
