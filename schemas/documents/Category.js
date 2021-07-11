import { FcTimeline } from "react-icons/fc";

export default {
  name: "category",
  title: "Post Category",
  type: "document",
  icon: FcTimeline,
  fields: [
    {
      name: "title",
      title: "Category Title",
      type: "string",
    },
  ],
};
