import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowUpRight } from 'lucide-react';
import { Card } from '../../ui/Card';
import { fadeUp, viewportOnce } from '../../../utils/motion';
import { formatBlogDate, getCategoryLabel } from '../../../data/mockBlogs';

export const BlogCard = ({ blog, isChinese, index = 0, featured = false }) => {
  const title = isChinese ? blog.titleChinese : blog.title;
  const excerpt = isChinese ? blog.excerptChinese : blog.excerpt;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      custom={index * 0.08}
      variants={fadeUp}
      className="flex h-full"
    >
      <Link to={`/blogs/${blog.slug}`} className="w-full group">
        <Card
          variant="bordered"
          className={`h-full bg-[#111111] hover:bg-[#151515] border-zinc-800 hover:border-[#C0392B]/30 flex flex-col overflow-hidden transition-all duration-300 ${
            featured ? 'md:flex-row md:items-stretch' : ''
          }`}
        >
          <div
            className={`relative overflow-hidden border-zinc-900 ${
              featured ? 'md:w-1/2 aspect-[16/10] md:aspect-auto md:min-h-[280px]' : 'aspect-[16/10] border-b'
            }`}
          >
            <img
              src={blog.photo}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/60 via-transparent to-transparent" />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0D0D0D]/80 border border-[#C0392B]/30 text-[#E74C3C] backdrop-blur-sm">
              {getCategoryLabel(blog.category, isChinese)}
            </span>
          </div>

          <div className={`p-6 text-left flex flex-col flex-1 ${featured ? 'md:w-1/2 md:justify-center' : ''}`}>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-[#9A8F8A] font-semibold mb-3">
              <span>{formatBlogDate(blog.date, isChinese)}</span>
              <span className="text-zinc-700">•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {blog.readTime} {isChinese ? '分钟' : 'min read'}
              </span>
            </div>

            <h3
              className={`font-serif font-bold text-[#F5F0EB] mb-3 group-hover:text-[#E74C3C] transition-colors duration-300 ${
                featured ? 'text-xl md:text-2xl' : 'text-lg'
              }`}
            >
              {title}
            </h3>

            <p className="text-xs text-[#9A8F8A] leading-relaxed font-light flex-1 mb-4 line-clamp-3">
              {excerpt}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-zinc-850">
              <div className="flex items-center gap-2.5">
                <img
                  src={blog.authorPhoto}
                  alt={isChinese ? blog.authorChinese : blog.author}
                  className="w-7 h-7 rounded-full object-cover border border-zinc-700"
                />
                <div>
                  <p className="text-[11px] font-semibold text-[#F5F0EB]">
                    {isChinese ? blog.authorChinese : blog.author}
                  </p>
                  <p className="text-[9px] text-zinc-500 uppercase tracking-wider">
                    {isChinese ? blog.authorRoleChinese : blog.authorRole}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#C0392B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};
