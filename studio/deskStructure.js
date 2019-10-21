import S from "@sanity/desk-tool/structure-builder";
import { MdWeb, MdSettings } from "react-icons/md";
import { FaRebel } from "react-icons/fa";

const hiddenTypes = ["category", "myInfo", "page", "person", "project", "resume", "education", "experience", "certifications", "skills", "siteSettings"];

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(MdSettings),
      S.listItem()
        .title("My Info")
        .child(
          S.editor()
            .id("myInfo")
            .schemaType("myInfo")
            .documentId("myInfo")
        )
        .icon(FaRebel),
      S.listItem()
        .title("Projects")
        .schemaType("project")
        .child(S.documentTypeList("project")),
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("About")
                .child(
                  S.editor()
                    .id("aboutPage")
                    .schemaType("page")
                    .documentId("about")
                )
                .icon(MdWeb),
              S.listItem()
                .title("Contact")
                .child(
                  S.editor()
                    .id("contactPage")
                    .schemaType("page")
                    .documentId("contact")
                )
                .icon(MdWeb)
            ])
        ),
      S.listItem()
        .title("Resume")
        .child(
          S.list()
            .title("Resume")
            .items([
              S.listItem()
                .title("Resumes")
                .schemaType("resume")
                .child(S.documentTypeList("resume").title("Resumes"))
                .icon(MdWeb),
              S.listItem()
                .title("Education")
                .schemaType("education")
                .child(S.documentTypeList("education").title("Education"))
                .icon(MdWeb),
              S.listItem()
                .title("Experience")
                .schemaType("experience")
                .child(S.documentTypeList("experience").title("Experience")
                )
                .icon(MdWeb),                
              S.listItem()
                .title("Certifications")
                .schemaType("certifications")
                .child(S.documentTypeList("certifications").title("Certifications")
                )
                .icon(MdWeb),
              S.listItem()
                .title("Skills")
                .schemaType("skills")
                .child(S.documentTypeList("skills").title("Skills")
                )
                .icon(MdWeb)
            ])
        ),
      S.listItem()
        .title("People")
        .schemaType("person")
        .child(S.documentTypeList("person").title("People")),
      S.listItem()
        .title("Categories")
        .schemaType("category")
        .child(S.documentTypeList("category").title("Categories")),
      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
    ]);
