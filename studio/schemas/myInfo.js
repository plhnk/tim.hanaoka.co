import { FaRebel } from "react-icons/fa";

export default {
  name: "myInfo",
  title: "My Info",
  type: "document",
  liveEdit: false,
  __experimental_actions: ["update", "publish" /* 'create', 'delete' */],
  icon: FaRebel,
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string"
    },
    {
      name: "shortName",
      title: "Short First name",
      type: "string"
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string"
    },
    {
      name: "email",
      title: "Email",
      type: "email"
    },
    {
      name: "phone",
      title: "Phone",
      type: "string"
    },
    {
      name: "headshot",
      title: "H-h-h-headshot",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "coverImage",
      title: "Cover image",
      type: "mainImage"
    },
    {
      name: "address1",
      title: "Address 1",
      type: "string"
    },
    {
      name: "address2",
      title: "Address 2",
      type: "string"
    },
    {
      name: "zipCode",
      title: "ZIP Code",
      type: "string"
    },
    {
      name: "city",
      title: "City",
      type: "string"
    },
    {
      name: "country",
      title: "Country",
      type: "string"
    }
  ]
};
