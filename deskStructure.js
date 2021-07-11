import S from "@sanity/desk-tool/structure-builder";

import { FcSettings, FcHome } from "react-icons/fc";

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
      S.listItem()
        .title("Home Page")
        .icon(FcHome)
        .child(
          S.document()
            .title("Home Page")
            .schemaType("homePage")
            .documentId("homePage")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !["websiteSetting", "homePage"].includes(listItem.getId())
      ),
    ]);
