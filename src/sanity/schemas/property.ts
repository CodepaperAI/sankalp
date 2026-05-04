/**
 * Sanity Schema: Property
 * Represents a sold/active property listing.
 */
export const property = {
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "address", maxLength: 96 },
    },
    {
      name: "neighbourhood",
      title: "Neighbourhood",
      type: "reference",
      to: [{ type: "neighbourhood" }],
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Sold", value: "sold" },
          { title: "Active", value: "active" },
          { title: "Pre-Construction", value: "pre-construction" },
          { title: "Coming Soon", value: "coming-soon" },
        ],
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "bedrooms",
      title: "Bedrooms",
      type: "number",
    },
    {
      name: "bathrooms",
      title: "Bathrooms",
      type: "number",
    },
    {
      name: "sqft",
      title: "Square Footage",
      type: "number",
    },
    {
      name: "propertyType",
      title: "Property Type",
      type: "string",
      options: {
        list: [
          { title: "Detached", value: "detached" },
          { title: "Semi-Detached", value: "semi-detached" },
          { title: "Townhouse", value: "townhouse" },
          { title: "Condo", value: "condo" },
          { title: "Duplex", value: "duplex" },
          { title: "Estate", value: "estate" },
        ],
      },
    },
    {
      name: "niche",
      title: "Niche Specialty",
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
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "soldDate",
      title: "Sold Date",
      type: "date",
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
      title: "address",
      subtitle: "status",
      media: "images.0",
    },
  },
};
