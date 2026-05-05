import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { neighbourhoods } from "@/lib/neighbourhoods";
import { NeighbourhoodContent } from "./neighbourhood-content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return neighbourhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const n = neighbourhoods.find((n) => n.slug === slug);
  if (!n) return {};

  return {
    title: n.seoTitle,
    description: n.seoDescription,
    alternates: { canonical: `https://sankalprealestate.ca/communities/${n.slug}` },
    openGraph: {
      title: n.seoTitle,
      description: n.seoDescription,
      url: `https://sankalprealestate.ca/communities/${n.slug}`,
      type: "article",
    },
  };
}

export default async function NeighbourhoodPage({ params }: Props) {
  const { slug } = await params;
  const neighbourhood = neighbourhoods.find((n) => n.slug === slug);

  if (!neighbourhood) notFound();

  return <NeighbourhoodContent neighbourhood={neighbourhood} />;
}
