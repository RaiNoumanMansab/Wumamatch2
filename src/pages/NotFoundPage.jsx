import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../components/layout/PageWrapper';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Button } from '../components/ui/Button';
import { HeartOff } from 'lucide-react';

export const NotFoundPage = ({ isChinese }) => {
  const navigate = useNavigate();

  return (
    <PageWrapper className="w-full pt-32">
      <SectionWrapper bg="dark">
        <div className="text-center py-20 max-w-md mx-auto flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#3B0000]/30 border border-[#C0392B]/40 flex items-center justify-center text-[#E74C3C] mb-6">
            <HeartOff className="w-8 h-8 animate-pulse" />
          </div>
          
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4A853] mb-2">
            404 Error
          </span>
          
          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#F5F0EB] mb-4">
            {isChinese ? '迷失在爱里？' : 'Lost in Love?'}
          </h1>
          
          <p className="text-xs md:text-sm text-[#9A8F8A] leading-relaxed mb-10 font-light">
            {isChinese
              ? '抱歉，您所访问的页面可能已经被移除或地址输入错误。让我们协助您回到正确的航向。'
              : 'The page you are looking for does not exist or has been relocated. Let us guide you back.'}
          </p>

          <Button
            variant="primary"
            size="md"
            onClick={() => navigate('/')}
          >
            {isChinese ? '返回首页' : 'Back to Home'}
          </Button>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
};
export default NotFoundPage;
