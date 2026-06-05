import React, { useState, useMemo } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { BlogCard } from '../components/sections/blogs/BlogCard';
import { Tag } from '../components/ui/Tag';
import { Divider } from '../components/ui/Divider';
import { blogCategories, mockBlogs } from '../data/mockBlogs';
import { BookOpen } from 'lucide-react';

export const BlogsPage = ({ isChinese }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const featuredPost = mockBlogs.find((b) => b.featured) || mockBlogs[0];

  const filteredBlogs = useMemo(() => {
    const list = mockBlogs.filter((b) => b.id !== featuredPost.id);
    if (activeCategory === 'all') return list;
    return list.filter((b) => b.category === activeCategory);
  }, [activeCategory, featuredPost.id]);

  const showFeatured =
    activeCategory === 'all' || featuredPost.category === activeCategory;

  return (
    <PageWrapper className="w-full pt-20">
      {/* Hero */}
      <div className="relative bg-[#EDF6F6] pt-20 pb-10 px-8 text-center overflow-hidden border-b border-zinc-200/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(15,138,150,0.08)_0%,transparent_70%)]" />
        <div className="relative max-w-6xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-[#E6F7F6] border border-[#0F8A96]/30 text-[#0F8A96] mb-5">
            <BookOpen className="w-3 h-3" />
            {isChinese ? 'WuMa 婚恋洞察' : 'WuMa Insights'}
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-[#053C42] mb-4">
            {isChinese ? '红娘博客与情感指南' : 'Matchmaker Blog & Relationship Guides'}
          </h1>
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-[#D4A853] mb-6">
            {isChinese ? '专业红娘执笔 · 真诚婚恋智慧' : 'Expert advice for intentional, meaningful love'}
          </p>
          <Divider icon className="!my-5" />
          <p className="text-xs md:text-sm text-zinc-550 leading-relaxed max-w-3xl font-light">
            {isChinese
              ? '从约会技巧到跨文化婚恋，我们的资深红娘与关系教练分享真实经验，帮助您在寻爱路上更有方向、更有信心。'
              : 'From first-date conversation tips to navigating long-distance love across the diaspora — curated wisdom from the matchmakers who know what works.'}
          </p>
        </div>
      </div>

      <SectionWrapper bg="dark" className="!pt-8 md:!pt-12">
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {blogCategories.map((cat) => (
            <Tag
              key={cat.id}
              active={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
            >
              {isChinese ? cat.zh : cat.en}
            </Tag>
          ))}
        </div>

        {/* Featured post */}
        {showFeatured && (
          <div className="mb-10 max-w-6xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4A853] mb-4 text-left">
              {isChinese ? '精选文章' : 'Featured Article'}
            </p>
            <BlogCard blog={featuredPost} isChinese={isChinese} featured />
          </div>
        )}

        {/* Blog grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredBlogs.map((blog, idx) => (
              <BlogCard key={blog.id} blog={blog} isChinese={isChinese} index={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 max-w-md mx-auto">
            <BookOpen className="w-10 h-10 text-[#0F8A96]/40 mx-auto mb-4" />
            <p className="text-sm text-zinc-550">
              {isChinese ? '该分类暂无文章，请选择其他分类。' : 'No articles in this category yet. Try another filter.'}
            </p>
          </div>
        )}
      </SectionWrapper>
    </PageWrapper>
  );
};

export default BlogsPage;
