import { FcGraduationCap } from "react-icons/fc";

export default {
  name: "project",
  title: "Project",
  type: "document",
  icon: FcGraduationCap,
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
    },
    {
      name: "image",
      title: "Project Image",
      type: "image",
    },
    {
      name: "description",
      title: "Project Description",
      type: "text",
    },
    {
      name: "url",
      title: "Project Url",
      type: "url",
    },
  ],
};
