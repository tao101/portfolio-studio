import { FcTemplate } from "react-icons/fc";

export default {
  name: "post",
  title: "Blog Post",
  type: "document",
  icon: FcTemplate,
  fields: [
    {
      name: "title",
      title: "Post Title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .slice(0, 200),
      },
    },
    {
      name: "image",
      title: "Post Image",
      type: "image",
    },
    {
      name: "description",
      title: "Post Description",
      type: "text",
    },
    {
      name: "timeToRead",
      title: "Time To Read",
      type: "number",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          name: "categoryRef",
          title: "Post Categories",
          type: "reference",
          to: [
            {
              name: "category",
              title: "Select a Category",
              type: "category",
            },
          ],
        },
      ],
    },
    {
      name: "content",
      title: "Post Content",
      type: "blockContent",
    },
  ],
};
