import { isAdmin, isAnyone } from "@/utils/access";
import { formatSlug } from "@/utils/helpers";
import { CollectionConfig } from "payload";

const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
  },
  labels: {
    singular: "文章",
    plural: "文章",
  },
  access: {
    read: isAnyone,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug("title")],
      },
    },
    {
      name: "title",
      type: "text",
      label: "标题",
      required: true,
    },
    {
      name: "description",
      type: "text",
      label: "描述",
    },
    {
      name: "content",
      label: "内容",
      type: "richText",
      required: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true,
      label: "作者",
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "postsTags",
      label: "标签",
      hasMany: true,
    },
    {
      name: "project",
      type: "relationship",
      relationTo: "projects",
      label: "应用",
      admin: {
        position: "sidebar",
        description:
          "选择该文章所属的应用",
      }
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      label: "特色图片",
      admin: {
        position: "sidebar",
        description:
          "该图片将作为文章的特色图片",
      },
    },
  ],
};

const PostsTags: CollectionConfig = {
  slug: "postsTags",
  admin: {
    useAsTitle: "name",
  },
  labels: {
    singular: "标签",
    plural: "标签",
  },
  access: {
    read: isAnyone,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "名称",
    },
    {
      name: "label",
      type: "text",
      label: "标签",
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug("name")],
      },
    },
  ],
};

export const BlogCollections = [Posts, PostsTags];
