import { CollectionConfig } from "payload";

const User: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    {
      name: "username",
      type: "text",
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: "media", // required
      required: false,
    },
    {
      name: "metadata",
      type: "json",
    },
    {
      name: "role",
      type: "select",
      options: ["admin", "user"],
      saveToJWT: true,
    },
  ],
};

export const UsersCollections = [User];
