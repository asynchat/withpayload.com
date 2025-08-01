import { isAdmin, isAnyone } from "@/utils/access";
import { GlobalConfig } from "payload";

export const GlobalSettings: GlobalConfig = {
  slug: "settings",
  access: {
    read: isAnyone,
    update: isAdmin,
  },
  label: '设置',
  fields: [
    {
      name: "seo",
      type: "group",
      label: "SEO",
      fields: [
        {
          name: "metaTitle",
          type: "text",
          label: "Meta Title",
        },
        {
          name: "metaDescription",
          type: "textarea",
          label: "Meta Description",
        },
      ],
    },

    // {
    //   name: "analytics",
    //   type: "group",
    //   label: "Analytics",
    //   fields: [
    //     {
    //       name: "googleAnalyticsId",
    //       type: "text",
    //       label: "Google Analytics ID",
    //     },
    //     {
    //       name: "umami",
    //       type: "group",
    //       label: "Umami",
    //       fields: [
    //         {
    //           name: "umamiWebsiteId",
    //           type: "text",
    //           label: "Umami Website ID",
    //         },
    //         {
    //           name: "umamiSrc",
    //           type: "text",
    //           label: "Umami Src",
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};
