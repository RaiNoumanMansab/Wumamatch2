import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = ({ isChinese }) => {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#C0392B]/15 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About column */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#C0392B] fill-current" />
            <span className="font-serif text-lg tracking-wider font-bold text-[#F5F0EB]">
              WuMa <span className="text-[#C0392B]">Match</span>
            </span>
          </Link>
          <p className="text-xs text-[#9A8F8A] leading-relaxed">
            {isChinese
              ? '精英华人专属的人工定制婚恋平台。拒绝死板算法，拒绝无意义划动，由专业红娘为您手工甄选理想伴侣。'
              : 'Elite global Chinese matchmaking service powered by expert human matchmakers. No algorithms. No swiping. Only serious, curated relationships.'}
          </p>
          <div className="flex items-center gap-2 mt-2 text-xs text-[#D4A853]">
            <Shield className="w-4 h-4" />
            <span className="uppercase tracking-widest font-semibold text-[10px]">
              {isChinese ? '安全合规・隐私保证' : 'Secure & Confidential'}
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs uppercase tracking-widest font-bold text-[#F5F0EB]">
            {isChinese ? '快速链接' : 'Quick Links'}
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs text-[#9A8F8A]">
            <Link to="/members" className="hover:text-[#E74C3C] transition-colors">{isChinese ? '精选会员' : 'Members'}</Link>
            <Link to="/plans" className="hover:text-[#D4A853] transition-colors font-semibold">{isChinese ? '会员方案' : 'Plans'}</Link>
            <Link to="/success-stories" className="hover:text-[#E74C3C] transition-colors">{isChinese ? '成功案例' : 'Success'}</Link>
            <Link to="/about" className="hover:text-[#E74C3C] transition-colors">{isChinese ? '关于我们' : 'About'}</Link>
            <Link to="/events" className="hover:text-[#E74C3C] transition-colors">{isChinese ? '高端活动' : 'Events'}</Link>
            <Link to="/blogs" className="hover:text-[#E74C3C] transition-colors">{isChinese ? '博客' : 'Blog'}</Link>
            <Link to="/contact" className="hover:text-[#E74C3C] transition-colors">{isChinese ? '联系我们' : 'Contact'}</Link>
            <Link to="/register" className="hover:text-[#E74C3C] transition-colors">{isChinese ? '注册加入' : 'Register'}</Link>
          </div>
        </div>

        {/* Premium Standards */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs uppercase tracking-widest font-bold text-[#F5F0EB]">
            {isChinese ? '红娘标准' : 'Elite Standards'}
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs text-[#9A8F8A]">
            <li>✓ {isChinese ? '100% 实名身份及人脸核验' : 'Identity Verified Members'}</li>
            <li>✓ {isChinese ? '私人红娘 1对1 深度心理面谈' : '1-on-1 Consultation'}</li>
            <li>✓ {isChinese ? '专业配对评估报告与建议' : 'Detailed Matchmaker Reports'}</li>
            <li>✓ {isChinese ? '安全私密，不公开个人敏感资料' : 'No Public Personal Contact'}</li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-4 text-xs text-[#9A8F8A]">
          <h4 className="text-xs uppercase tracking-widest font-bold text-[#F5F0EB]">
            {isChinese ? '联系方式' : 'Contact Us'}
          </h4>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-[#C0392B]" />
            <span>concierge@wumamatch.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#C0392B]" />
            <span>+1 (800) 888-WUMA</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#C0392B] mt-0.5" />
            <span>
              {isChinese
                ? '美国旧金山・加拿大温哥华・澳大利亚悉尼・新加坡'
                : 'San Francisco • Vancouver • Sydney • Singapore'}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-12 pt-6 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-zinc-600 uppercase tracking-widest font-semibold">
        <span>© {new Date().getFullYear()} WuMa Match. All rights reserved.</span>
        <div className="flex gap-4">
          <span className="hover:text-[#E74C3C] cursor-pointer">{isChinese ? '隐私政策' : 'Privacy Policy'}</span>
          <span>•</span>
          <span className="hover:text-[#E74C3C] cursor-pointer">{isChinese ? '服务条款' : 'Terms of Service'}</span>
        </div>
      </div>
    </footer>
  );
};
