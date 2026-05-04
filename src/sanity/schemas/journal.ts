/**
 * Sanity Schema: Journal Post
 * Blog/article content for SEO and authority building.
 */
export const journal = {
  name: "journal",
  title: "Journal Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Buying Guide", value: "buying-guide" },
          { title: "Selling Tips", value: "selling-tips" },
          { title: "Market Update", value: "market-update" },
          { title: "Neighbourhood Spotlight", value: "neighbourhood-spotlight" },
          { title: "Investment Strategy", value: "investment-strategy" },
          { title: "First-Time Buyers", value: "first-time-buyers" },
          { title: "Lifestyle", value: "lifestyle" },
        ],
      },
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
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
    {
      name: "relatedNeighbourhood",
      title: "Related Neighbourhood",
      type: "reference",
      to: [{ type: "neighbourhood" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "coverImage",
    },
  },
  orderings: [
    {
      title: "Published Date, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
};
