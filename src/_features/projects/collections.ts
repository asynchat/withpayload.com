import { isAdmin, isAnyone } from "@/utils/access";
import { formatSlug } from "@/utils/helpers";
import { CollectionConfig } from "payload";

const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
  },
  labels: {
    singular: "应用",
    plural: "应用",
  },
  access: {
    read: isAnyone,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "title",
      label: "标题",
      type: "text",
    },
    {
      name: "description",
      label: "描述",
      type: "text",
    },
    {
      name: "content",
      label: "内容",
      type: "textarea",
    },
    {
      name: "version",
      label: "版本",
      type: "text",
      defaultValue: "1.0.0",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "price",
      label: "价格",
      type: "number",
      defaultValue: 0,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "shopUrl",
      label: "商城链接",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "thumbnail",
      label: "缩略图",
      type: "upload",
      relationTo: "media",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "categories",
      label: "分类",
      type: "relationship",
      relationTo: "projectsCategories",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug("title")],
      },
    },
  ],
};

const ProjectsCategories: CollectionConfig = {
  slug: "projectsCategories",
  admin: {
    useAsTitle: "name",
  },
  labels: {
    singular: "分类",
    plural: "分类",
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
      type: "join",
      label: "应用",
      collection: "projects",
      name: "projectsByCategory",
      on: "categories",
      admin: {
        position: "sidebar",
      },
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

export const ProjectsCollections = [Projects, ProjectsCategories];
