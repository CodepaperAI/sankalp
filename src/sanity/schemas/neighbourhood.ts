/**
 * Sanity Schema: Neighbourhood
 * Represents a GTA community/neighbourhood guide.
 */
export const neighbourhood = {
  name: "neighbourhood",
  title: "Neighbourhood",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
    },
    {
      name: "city",
      title: "City",
      type: "string",
      options: {
        list: [
          { title: "Toronto", value: "toronto" },
          { title: "Mississauga", value: "mississauga" },
          { title: "Brampton", value: "brampton" },
          { title: "Oakville", value: "oakville" },
          { title: "Hamilton", value: "hamilton" },
          { title: "Vaughan", value: "vaughan" },
          { title: "Milton", value: "milton" },
          { title: "Burlington", value: "burlington" },
          { title: "King City", value: "king-city" },
          { title: "Markham", value: "markham" },
        ],
      },
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
    },
    {
      name: "body",
      title: "Full Guide Content",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
    },
    {
      name: "stats",
      title: "Market Stats",
      type: "object",
      fields: [
        { name: "avgPrice", title: "Average Home Price", type: "number" },
        { name: "avgDaysOnMarket", title: "Avg Days on Market", type: "number" },
        { name: "priceChange", title: "YoY Price Change (%)", type: "number" },
      ],
    },
    {
      name: "amenities",
      title: "Key Amenities",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "schools",
      title: "Notable Schools",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 2,
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "city",
      media: "heroImage",
    },
  },
};
