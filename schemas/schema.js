// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

//documents
import Home from "./documents/Home";
import websiteSetting from "./documents/WebsiteSetting";
import Project from "./documents/Project";
import BlogPosts from "./documents/BlogPosts";
import Category from "./documents/Category";
import blockContent from "./objects/blockContent";
import About from "./documents/About";
import Contact from "./documents/Contact";
//objects
import pageSeo from "./objects/pageSeo";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    Home,
    websiteSetting,
    BlogPosts,
    Category,
    Project,
    blockContent,
    About,
    Contact,
    pageSeo,
  ]),
});
