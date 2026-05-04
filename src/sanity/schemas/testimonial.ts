/**
 * Sanity Schema: Testimonial
 * Client stories and reviews.
 */
export const testimonial = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "clientName",
      title: "Client Name",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "niche",
      title: "Niche / Service Used",
      type: "string",
      options: {
        list: [
          { title: "First-Time Buyers", value: "first-time" },
          { title: "Luxury", value: "luxury" },
          { title: "Condos", value: "condos" },
          { title: "Pre-Construction", value: "pre-construction" },
          { title: "Investment", value: "investment" },
          { title: "Relocation", value: "relocation" },
          { title: "Downsizing", value: "downsizing" },
        ],
      },
    },
    {
      name: "neighbourhood",
      title: "Neighbourhood",
      type: "string",
    },
    {
      name: "year",
      title: "Year",
      type: "number",
    },
    {
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "clientName",
      subtitle: "niche",
    },
  },
};
