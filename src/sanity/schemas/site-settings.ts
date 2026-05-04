/**
 * Sanity Schema: Site Settings
 * Global configuration managed from CMS.
 */
export const siteSettings = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "agentName",
      title: "Agent Name",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "whatsapp",
      title: "WhatsApp Number",
      type: "string",
    },
    {
      name: "brokerage",
      title: "Brokerage Name",
      type: "string",
    },
    {
      name: "recoNumber",
      title: "RECO Registration #",
      type: "string",
    },
    {
      name: "address",
      title: "Office Address",
      type: "text",
      rows: 2,
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "instagram", title: "Instagram", type: "url" },
        { name: "linkedin", title: "LinkedIn", type: "url" },
        { name: "youtube", title: "YouTube", type: "url" },
        { name: "facebook", title: "Facebook", type: "url" },
      ],
    },
    {
      name: "stats",
      title: "Homepage Stats",
      type: "object",
      fields: [
        { name: "familiesServed", title: "Families Served", type: "number" },
        { name: "totalTransactions", title: "Total Transactions ($M)", type: "number" },
        { name: "neighbourhoods", title: "Neighbourhoods Covered", type: "number" },
        { name: "yearsExperience", title: "Years Experience", type: "number" },
      ],
    },
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
};
