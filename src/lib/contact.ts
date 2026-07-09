export const siteContact = {
  brandName: "Sankalp Real Estate",
  phoneDisplay: "(647) 395-6139",
  phoneHref: "tel:+16473956139",
  whatsappHref: "https://wa.me/16473956139",
  email: "hello@sankalprealestate.ca",
  emailHref: "mailto:hello@sankalprealestate.ca",
  instagramLabel: "@ysrealestate1",
  instagramHref:
    "https://www.instagram.com/ysrealestate1?igsh=MTBrN29wd3h4NHJ6eg%3D%3D&utm_source=qr",
  facebookLabel: "Facebook",
  facebookHref: "https://www.facebook.com/share/1995NzQ9Qz/?mibextid=wwXIfr",
  areaServed: "Greater Toronto Area",
} as const;

export const socialLinks = [
  {
    href: siteContact.instagramHref,
    label: "Instagram",
    short: "Instagram",
    detail: siteContact.instagramLabel,
  },
  {
    href: siteContact.facebookHref,
    label: "Facebook",
    short: "Facebook",
    detail: "Market updates",
  },
] as const;
