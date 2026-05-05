import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "@/lib/journal";
import { ArticleContent } from "./article-content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: { canonical: `https://sankalprealestate.ca/journal/${article.slug}` },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      url: `https://sankalprealestate.ca/journal/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      authors: ["Sankalp"],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) notFound();

  return <ArticleContent article={article} />;
}
