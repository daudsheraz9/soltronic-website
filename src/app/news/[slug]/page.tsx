import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ARTICLES_DATA } from '@/data/newsData';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return ARTICLES_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found | Soltronic Energy News',
      description: 'The requested solar news article could not be found.',
    };
  }

  return {
    title: `${article.title} | Soltronic Energy News`,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      images: [
        {
          url: article.image,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
    alternates: {
      canonical: `https://soltronicsenergy.com/news/${article.slug}`,
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Get related articles
  const relatedArticles = ARTICLES_DATA.filter((a) => a.id !== article.id).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: `https://soltronicsenergy.com${article.image}`,
    datePublished: article.date,
    publisher: {
      '@type': 'Organization',
      name: 'Soltronic Energy',
      logo: {
        '@type': 'ImageObject',
        url: 'https://soltronicsenergy.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://soltronicsenergy.com/news/${article.slug}`,
    },
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-16">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <div className="bg-[#107022] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-emerald-100 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-white transition-colors">News & Policy</Link>
            <span>/</span>
            <span className="text-white font-semibold truncate max-w-xs">{article.category}</span>
          </nav>

          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white font-bold text-xs rounded-lg uppercase tracking-wider mb-4 border border-white/20">
            {article.category}
          </span>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 text-left">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-emerald-600/60 text-xs text-emerald-100">
            <div className="flex items-center gap-2 font-semibold">
              <i className="fa-solid fa-newspaper text-sm text-emerald-300"></i>
              <span>Soltronic Energy Official Report</span>
            </div>

            <div className="flex items-center gap-4 text-emerald-200">
              <span className="flex items-center gap-1 font-medium">
                <i className="fa-regular fa-calendar text-xs"></i>
                {article.date}
              </span>
              <span className="flex items-center gap-1 font-medium">
                <i className="fa-regular fa-clock text-xs"></i>
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Article Layout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Back Link */}
        <Link 
          href="/news" 
          className="inline-flex items-center gap-2 text-xs font-bold text-[#107022] hover:text-emerald-800 transition-colors mb-6 group"
        >
          <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
          Back to All News & Articles
        </Link>

        {/* Hero Article Image */}
        <div className="relative w-full h-72 sm:h-96 lg:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 mb-10 bg-slate-200">
          <Image 
            src={article.image} 
            alt={article.title} 
            fill 
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover" 
            priority
          />
        </div>

        {/* Key Takeaways Box */}
        <div className="bg-emerald-50 border border-emerald-200/80 rounded-3xl p-6 sm:p-8 mb-10 shadow-sm">
          <div className="flex items-center gap-2 text-[#107022] font-extrabold text-sm uppercase tracking-wider mb-4">
            <i className="fa-solid fa-circle-check text-lg"></i>
            Key Takeaways & Executive Summary
          </div>
          <ul className="space-y-3">
            {article.keyTakeaways.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium text-left">
                <span className="w-5 h-5 rounded-full bg-[#107022] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body Content */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8 text-slate-700 leading-relaxed">
          {article.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              {section.heading && (
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 pt-4 border-t border-slate-100 first:border-t-0 first:pt-0 text-left">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-slate-700 leading-relaxed text-left">
                  {p}
                </p>
              ))}

              {section.quote && (
                <blockquote className="my-6 p-6 bg-slate-50 border-l-4 border-[#107022] rounded-r-2xl italic text-slate-800 font-serif text-sm sm:text-base leading-relaxed shadow-xs text-left">
                  "{section.quote}"
                </blockquote>
              )}

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <div className="my-4 p-5 bg-slate-50 border border-slate-200/60 rounded-2xl">
                  <ul className="space-y-2.5">
                    {section.bulletPoints.map((bp, bpIdx) => (
                      <li key={bpIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 text-left">
                        <i className="fa-solid fa-angle-right text-[#107022] mt-1 shrink-0"></i>
                        <span className="font-medium">{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* Tags */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 mr-1">Tags:</span>
              {article.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs text-slate-600 font-medium hover:bg-slate-200 transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Related Articles Section */}
        <div className="mt-14">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-justify">Related Solar News & Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <Link 
                key={rel.id} 
                href={`/news/${rel.slug}`}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-40 relative overflow-hidden bg-slate-100">
                    <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-white/90 text-[#107022] text-[10px] font-bold rounded uppercase">
                      {rel.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] text-slate-400 mb-1">{rel.date}</p>
                    <h3 className="text-xs font-bold text-slate-900 group-hover:text-[#107022] transition-colors line-clamp-2 leading-snug text-left">
                      {rel.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4 pt-0 text-[11px] font-bold text-[#107022] flex items-center gap-1">
                  Read Article <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
