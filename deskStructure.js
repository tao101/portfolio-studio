import S from "@sanity/desk-tool/structure-builder";

import { FcSettings, FcHome, FcAbout, FcContacts } from "react-icons/fc";

export default () =>
  S.list()
    .title("Website Content")
    .items([
      S.listItem()
        .title("Website Setting")
        .icon(FcSettings)
        .child(
          S.document()
            .title("Website Setting")
            .schemaType("websiteSetting")
            .documentId("websiteSetting")
        ),
      S.divider(),
      S.divider(),
      S.listItem()
        .title("Home Page")
        .icon(FcHome)
        .child(
          S.document()
            .title("Home Page")
            .schemaType("homePage")
            .documentId("homePage")
        ),
      S.listItem()
        .title("AboutPage")
        .icon(FcAbout)
        .child(
          S.document()
            .title("AboutPage")
            .schemaType("AboutPage")
            .documentId("AboutPage")
        ),
      S.listItem()
        .title("ContactPage")
        .icon(FcContacts)
        .child(
          S.document()
            .title("ContactPage")
            .schemaType("ContactPage")
            .documentId("ContactPage")
        ),
      S.divider(),
      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["websiteSetting", "homePage", "AboutPage", "ContactPage"].includes(
            listItem.getId()
          )
      ),
    ]);
