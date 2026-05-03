import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostShell } from "@/components/blog/blog-post-shell";
import { BLOG_INDEX, getArticleBySlug, ARTICLE_BODIES } from "@/data/blog";

export function generateStaticParams() {
  return BLOG_INDEX.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: "מאמר לא נמצא" };
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.datePublished,
      authors: [article.authorName],
    },
  };
}

export default async function BlogArticlePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const importer = ARTICLE_BODIES[article.slug];
  if (!importer) notFound();
  const mod = await importer();
  const Body = mod.default;

  return (
    <BlogPostShell article={article}>
      <Body />
    </BlogPostShell>
  );
}
