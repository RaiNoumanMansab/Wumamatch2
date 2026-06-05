import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock } from 'lucide-react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { BlogCard } from '../components/sections/blogs/BlogCard';
import { Button } from '../components/ui/Button';
import { getBlogBySlug, mockBlogs, formatBlogDate, getCategoryLabel } from '../data/mockBlogs';
import { fadeUp } from '../utils/motion';
import { SEO } from '../components/seo/SEO';

export const BlogDetailPage = ({ isChinese }) => {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  const title = isChinese ? blog.titleChinese : blog.title;
  const content = isChinese ? blog.contentChinese : blog.content;
  const related = mockBlogs
    .filter((b) => b.slug !== blog.slug && b.category === blog.category)
    .slice(0, 2);

  const fallbackRelated = mockBlogs
    .filter((b) => b.slug !== blog.slug)
    .slice(0, 3 - related.length);

  const relatedPosts = [...related, ...fallbackRelated].slice(0, 3);

  return (
    <PageWrapper className="w-full pt-24">
      <SEO
        title={title}
        description={isChinese ? blog.excerptChinese || blog.excerpt : blog.excerpt}
        isChinese={isChinese}
      />
      <SectionWrapper bg="dark" className="!pt-8 !pb-12 text-left">
        {/* Back link */}
        <div className="max-w-3xl mx-auto mb-8 flex justify-start">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-zinc-550 hover:text-[#0F8A96] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isChinese ? '返回博客' : 'Back to Blog'}
          </Link>
        </div>

        {/* Article header */}
        <motion.article
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#E6F7F6]/40 border border-[#0F8A96]/30 text-[#0F8A96] mb-5">
            {getCategoryLabel(blog.category, isChinese)}
          </span>

          <h1 className="font-serif text-3xl md:text-5xl font-bold text-zinc-800 leading-tight mb-6">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-widest text-zinc-550 font-semibold mb-8 pb-8 border-b border-zinc-150">
            <div className="flex items-center gap-2.5">
              <img
                src={blog.authorPhoto}
                alt={isChinese ? blog.authorChinese : blog.author}
                className="w-9 h-9 rounded-full object-cover border border-zinc-200"
              />
              <div>
                <p className="text-xs font-semibold text-zinc-800 normal-case tracking-normal">
                  {isChinese ? blog.authorChinese : blog.author}
                </p>
                <p className="text-[9px] text-zinc-450">
                  {isChinese ? blog.authorRoleChinese : blog.authorRole}
                </p>
              </div>
            </div>
            <span className="text-zinc-700 hidden sm:inline">|</span>
            <span>{formatBlogDate(blog.date, isChinese)}</span>
            <span className="text-zinc-700">•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {blog.readTime} {isChinese ? '分钟阅读' : 'min read'}
            </span>
          </div>

          {/* Cover image */}
          <div className="rounded-2xl overflow-hidden border border-zinc-200/80 shadow-sm mb-10 aspect-[16/9]">
            <img src={blog.photo} alt={title} className="w-full h-full object-cover" />
          </div>

          {/* Body */}
          <div className="flex flex-col gap-5 mb-12">
            {content.map((paragraph, idx) => (
              <p key={idx} className="text-sm md:text-base text-zinc-550 leading-relaxed font-light">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Author box */}
          <div className="bg-white border border-zinc-200/80 shadow-sm rounded-2xl p-6 flex items-start gap-4 mb-10">
            <img
              src={blog.authorPhoto}
              alt={isChinese ? blog.authorChinese : blog.author}
              className="w-14 h-14 rounded-full object-cover border border-[#D4A853]/30 flex-shrink-0"
            />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#D4A853] font-bold mb-1">
                {isChinese ? '作者' : 'Written by'}
              </p>
              <p className="font-serif text-lg font-bold text-zinc-800 mb-1">
                {isChinese ? blog.authorChinese : blog.author}
              </p>
              <p className="text-xs text-zinc-550 font-light leading-relaxed">
                {isChinese
                  ? `${blog.authorChinese}是WuMa Match${blog.authorRoleChinese}，专注于为全球华人精英提供深度情感配对与关系辅导。`
                  : `${blog.author} is a ${blog.authorRole} at WuMa Match, dedicated to curated matchmaking for the global Chinese diaspora.`}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#E6F7F6]/30 to-[#1A1A1A] border border-[#0F8A96]/20 rounded-2xl p-8 text-center">
            <h3 className="font-serif text-xl font-bold text-zinc-800 mb-2">
              {isChinese ? '准备好开启您的寻爱之旅了吗？' : 'Ready to Start Your Journey?'}
            </h3>
            <p className="text-xs text-zinc-550 mb-5 max-w-md mx-auto">
              {isChinese
                ? '让专业红娘为您手工甄选理想伴侣，告别无效滑动。'
                : 'Let our expert matchmakers find your perfect match — no swiping required.'}
            </p>
            <Link to="/register">
              <Button variant="primary" size="sm">
                {isChinese ? '立即加入 WuMa Match' : 'Join WuMa Match'}
              </Button>
            </Link>
          </div>
        </motion.article>
      </SectionWrapper>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <SectionWrapper bg="darker" className="text-left">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-zinc-800 mb-8 max-w-6xl mx-auto">
            {isChinese ? '相关文章' : 'Related Articles'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedPosts.map((post, idx) => (
              <BlogCard key={post.id} blog={post} isChinese={isChinese} index={idx} />
            ))}
          </div>
        </SectionWrapper>
      )}
    </PageWrapper>
  );
};

export default BlogDetailPage;
