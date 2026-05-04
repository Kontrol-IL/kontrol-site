"use client";

import Image from "next/image";
import Link from "next/link";
import { SubPageLayout, SubSection } from "../ui/sub-page-layout";
import { ArticleSchema } from "../schema/Article";
import { BreadcrumbListSchema } from "../schema/BreadcrumbList";
import { BLOG_INDEX, type BlogArticleMeta } from "@/data/blog";

interface BlogPostShellProps {
  article: BlogArticleMeta;
  children: React.ReactNode;
}

export function BlogPostShell({ article, children }: BlogPostShellProps) {
  const pageUrl = `/blog/${article.slug}`;
  const relatedArticles = BLOG_INDEX
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);
  return (
    <SubPageLayout
      breadcrumb={[
        { name: "צביעת רכב", href: "/" },
        { name: "מרכז הידע", href: "/blog" },
        { name: article.title.length > 50 ? article.title.slice(0, 47) + "…" : article.title },
      ]}
    >
      <ArticleSchema
        headline={article.title}
        description={article.description}
        pageUrl={pageUrl}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        authorName={article.authorName}
        authorUrl={article.authorUrl}
        image={`/images/blog/${article.heroImageSlug}.webp`}
      />
      <BreadcrumbListSchema
        items={[
          { name: "צביעת רכב", url: "/" },
          { name: "מרכז הידע", url: "/blog" },
          { name: article.title, url: pageUrl },
        ]}
      />

      <article style={{ maxWidth: 800, margin: "0 auto" }}>
        <header style={{ marginBottom: 36 }}>
          <p
            style={{
              fontSize: 13,
              color: "var(--accent)",
              letterSpacing: "0.18em",
              fontWeight: 500,
              marginBottom: 14,
            }}
          >
            {article.category} · {article.readingMinutes} דקות קריאה
          </p>
          <h1
            style={{
              fontSize: "clamp(28px, 4.5vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "normal",
              marginBottom: 18,
            }}
          >
            {article.title}
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "var(--text-muted)",
              lineHeight: 1.65,
              marginBottom: 24,
            }}
          >
            {article.description}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              gap: 12,
              alignItems: "center",
              fontSize: 14,
              color: "var(--text-muted)",
              paddingTop: 16,
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, var(--accent), rgba(57,101,200,0.5))",
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <div>
              <div style={{ color: "white", fontWeight: 600 }}>{article.authorName}</div>
              {article.authorTitle && <div style={{ fontSize: 13 }}>{article.authorTitle}</div>}
            </div>
            <div style={{ marginRight: "auto", fontSize: 13 }}>
              {new Date(article.datePublished).toLocaleDateString("he-IL")}
            </div>
          </div>
        </header>

        <div style={{ marginBottom: 36, position: "relative", aspectRatio: "16/9", borderRadius: 14, overflow: "hidden" }}>
          <Image
            src={`/images/blog/${article.heroImageSlug}.png`}
            alt={article.heroImageAlt}
            fill
            sizes="(max-width: 800px) 100vw, 800px"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        <div
          style={{
            fontSize: 17,
            lineHeight: 1.85,
            color: "rgba(255,255,255,0.92)",
          }}
          className="blog-content"
        >
          {children}
        </div>
      </article>

      <SubSection>
        <div style={{ marginTop: 60 }}>
          <h3
            style={{
              fontSize: "clamp(22px, 2.6vw, 30px)",
              fontWeight: 700,
              marginBottom: 28,
              textAlign: "center",
            }}
          >
            מאמרים נוספים
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
              marginBottom: 60,
            }}
          >
            {relatedArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="related-article-card"
                style={{
                  display: "block",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  overflow: "hidden",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "border-color 0.2s ease, transform 0.2s ease",
                }}
              >
                <div style={{ position: "relative", aspectRatio: "16/9" }}>
                  <Image
                    src={`/images/blog/${a.heroImageSlug}.png`}
                    alt={a.heroImageAlt}
                    fill
                    sizes="(max-width: 800px) 100vw, 280px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: 18 }}>
                  <p
                    style={{
                      fontSize: 11,
                      color: "var(--accent)",
                      letterSpacing: "0.16em",
                      fontWeight: 500,
                      marginBottom: 8,
                      textTransform: "uppercase",
                    }}
                  >
                    {a.category} · {a.readingMinutes} דק&apos;
                  </p>
                  <h4
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      lineHeight: 1.35,
                      marginBottom: 8,
                      color: "white",
                    }}
                  >
                    {a.title}
                  </h4>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--text-muted)",
                      lineHeight: 1.55,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {a.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <h3
              style={{
                fontSize: "clamp(22px, 2.6vw, 30px)",
                fontWeight: 700,
                marginBottom: 14,
              }}
            >
              רוצים לבדוק זמינות ב־Kontrol?
            </h3>
            <p style={{ color: "var(--text-muted)", marginBottom: 22, fontSize: 15 }}>
              6 שאלות. שתי דקות. תשובה בוואטסאפ.
            </p>
            <Link href="/book" className="btn btn--blue">
              התחילו את השאלון
            </Link>
          </div>
        </div>
      </SubSection>

      <style>{`
        .blog-content h2 {
          font-size: clamp(22px, 2.6vw, 32px);
          font-weight: 700;
          margin-top: 36px;
          margin-bottom: 14px;
          letter-spacing: normal;
          line-height: 1.2;
        }
        .blog-content h3 {
          font-size: clamp(18px, 2vw, 24px);
          font-weight: 700;
          margin-top: 26px;
          margin-bottom: 10px;
          letter-spacing: normal;
        }
        .blog-content p {
          margin-bottom: 18px;
        }
        .blog-content ul, .blog-content ol {
          padding-inline-start: 24px;
          margin-bottom: 18px;
        }
        .blog-content li {
          margin-bottom: 8px;
        }
        .blog-content strong {
          color: white;
        }
        .blog-content blockquote {
          border-right: 3px solid var(--accent);
          padding-right: 18px;
          margin: 24px 0;
          font-style: italic;
          color: rgba(255,255,255,0.85);
        }
        .related-article-card:hover {
          border-color: var(--accent) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </SubPageLayout>
  );
}
