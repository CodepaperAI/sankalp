/**
 * Sanity Schema: Niche Specialty
 * The 7 niche service areas.
 */
export const niche = {
  name: "niche",
  title: "Niche Specialty",
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
      name: "order",
      title: "Display Order (1-7)",
      type: "number",
      validation: (Rule: { min: (n: number) => { max: (n: number) => unknown } }) =>
        Rule.min(1).max(7),
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short one-liner for the niche",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "body",
      title: "Full Page Content",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
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
      title: "title",
      subtitle: "tagline",
      media: "heroImage",
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};
