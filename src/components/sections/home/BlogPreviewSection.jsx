import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionWrapper } from '../../layout/SectionWrapper';
import { SectionHeader } from '../../ui/SectionHeader';
import { Button } from '../../ui/Button';
import { BlogCard } from '../blogs/BlogCard';
import { mockBlogs } from '../../../data/mockBlogs';

export const BlogPreviewSection = ({ isChinese }) => {
  const navigate = useNavigate();
  const latest = mockBlogs.slice(0, 3);

  return (
    <SectionWrapper id="blog-preview" bg="darker">
      <SectionHeader
        eyebrow={isChinese ? '婚恋洞察' : 'From Our Blog'}
        title={isChinese ? '红娘博客与情感智慧' : 'Matchmaker Insights & Advice'}
        subtitle={
          isChinese
            ? '资深红娘分享约会技巧、跨文化婚恋与关系成长的真实经验。'
            : 'Expert guidance on dating, relationships, and finding love with intention.'
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
        {latest.map((blog, idx) => (
          <BlogCard key={blog.id} blog={blog} isChinese={isChinese} index={idx} />
        ))}
      </div>

      <div className="text-center">
        <Button 
          variant="secondary" 
          onClick={() => navigate('/blogs')}
          className="group px-8"
        >
          {isChinese ? '阅读全部文章' : 'View All Articles'}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </SectionWrapper>
  );
};
