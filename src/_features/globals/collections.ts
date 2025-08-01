import { isAdmin, isAnyone } from "@/utils/access";
import { addContentHashToFile } from "@/utils/addContentHashToFile";
import { handleSvgUpload } from "@/utils/handleSvgUpload";
import { CollectionConfig } from "payload";

const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "媒体",
    plural: "媒体",
  },
  upload: {
    imageSizes: [
      {
        name: "thumbnail",
        width: 300,
        height: 300,
        position: "centre",
      },
    ],
    adminThumbnail: ({ doc: media }) =>
      (media?.sizes as any)?.thumbnail?.url || media.url,
  },
  access: {
    read: isAnyone,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: "title",
  },
  hooks: {
    beforeOperation: [addContentHashToFile],
    afterChange: [handleSvgUpload],
  },
  fields: [
    {
      name: "title",
      type: "text",
      admin: {
        style: { display: "none" },
        readOnly: true,
      },
    },
    {
      name: "rawContent",
      type: "textarea",
      admin: {
        disabled: true,
        readOnly: true,
      },
    },
  ],
};

export const GlobalsCollections = [Media];
