import { CollectionConfig } from "payload";

const User: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  labels: {
    singular: "用户",
    plural: "用户",
  },
  auth: true,
  fields: [
    {
      name: "username",
      type: "text",
      label: "用户名",
    },
    {
      name: "avatar",
      label: "头像",
      type: "upload",
      relationTo: "media", // required
      required: false,
    },
    {
      name: "metadata",
      label: "元数据",
      type: "json",
    },
    {
      name: "role",
      label: "角色",
      type: "select",
      options: ["admin", "user"],
      saveToJWT: true,
    },
  ],
};

export const UsersCollections = [User];
