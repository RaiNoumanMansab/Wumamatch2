import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Globe, User, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { Input } from '../ui/Input';

export const Navbar = ({ isLoggedIn, onLoginToggle, isChinese, onLanguageToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setLoginError(isChinese ? '请填写所有字段' : 'Please fill in all fields');
      return;
    }
    onLoginToggle(true);
    setShowLoginModal(false);
    setUsername('');
    setPassword('');
    setLoginError('');
  };

  // ── "Home" removed; "Plans" added ──
  const navLinks = [
    { to: '/members',         label: isChinese ? '精选会员'  : 'Members'         },
    { to: '/plans',           label: isChinese ? '会员方案'  : 'Plans'            },
    { to: '/success-stories', label: isChinese ? '成功案例'  : 'Success Stories'  },
    { to: '/about',           label: isChinese ? '关于我们'  : 'About Us'         },
    { to: '/events',          label: isChinese ? '高端活动'  : 'Events'           },
    { to: '/contact',         label: isChinese ? '联系我们'  : 'Contact'          },
  ];

  const navBg = isScrolled
    ? 'bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_40px_rgba(0,0,0,0.8)]'
    : 'bg-transparent border-b border-transparent';

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between gap-6">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#C0392B]/15 border border-[#C0392B]/40 flex items-center justify-center group-hover:bg-[#C0392B]/25 transition-colors duration-300">
              <Heart className="w-4 h-4 text-[#C0392B] fill-current" />
            </div>
            <span className="font-serif text-[1.15rem] tracking-wide font-bold text-[#F5F0EB]">
              WuMa <span className="text-[#C0392B]">Match</span>
            </span>
          </Link>

          {/* ── Desktop nav links ── */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative text-[11px] uppercase tracking-[0.12em] font-semibold transition-colors duration-300 pb-0.5 ${
                    isActive
                      ? 'text-[#E74C3C] nav-link-active'
                      : 'text-[#9A8F8A] hover:text-[#F5F0EB]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* ── Right actions (desktop) ── */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {/* Language toggle */}
            <button
              onClick={onLanguageToggle}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-[10px] font-bold tracking-widest text-[#9A8F8A] hover:text-[#F5F0EB] hover:bg-white/10 transition-all duration-200"
            >
              <Globe className="w-3.5 h-3.5" />
              {isChinese ? 'EN' : '中文'}
            </button>

            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#D4A853]/10 border border-[#D4A853]/20">
                  <User className="w-3.5 h-3.5 text-[#D4A853]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4A853]">
                    {isChinese ? '尊贵会员' : 'Premium Member'}
                  </span>
                </div>
                <Button variant="ghost" size="sm" onClick={() => onLoginToggle(false)}>
                  {isChinese ? '退出' : 'Logout'}
                </Button>
              </div>
            ) : (
              <>
                <Button variant="secondary" size="sm" onClick={() => setShowLoginModal(true)}>
                  {isChinese ? '登录' : 'Login'}
                </Button>
                <Button variant="primary" size="sm" onClick={() => navigate('/register')}>
                  {isChinese ? '立即加入' : 'Join Now'}
                </Button>
              </>
            )}
          </div>

          {/* ── Mobile right: lang + hamburger ── */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onLanguageToggle}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/8 text-[10px] font-bold text-[#9A8F8A]"
            >
              <Globe className="w-3.5 h-3.5" />
              {isChinese ? 'EN' : '中文'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#9A8F8A] hover:text-[#F5F0EB] hover:bg-white/5 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#0D0D0D] border-b border-[#C0392B]/15 shadow-2xl">
            {/* Red accent line at top */}
            <div className="h-[2px] bg-gradient-to-r from-[#C0392B] via-[#D4A853] to-[#C0392B]" />
            <div className="px-6 py-7 flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-sm font-semibold tracking-wide text-[#9A8F8A] hover:text-[#F5F0EB] hover:bg-white/5 transition-all duration-200"
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 -rotate-90 opacity-40" />
                  </Link>
                ))}
              </div>

              <div className="border-t border-zinc-900 pt-5 flex flex-col gap-3">
                {isLoggedIn ? (
                  <>
                    <div className="flex items-center justify-center gap-2 py-2 text-xs font-bold uppercase tracking-wider text-[#D4A853]">
                      <User className="w-4 h-4" />
                      {isChinese ? '尊贵会员已激活' : 'Premium Access Active'}
                    </div>
                    <Button variant="ghost" className="w-full" onClick={() => onLoginToggle(false)}>
                      {isChinese ? '安全退出' : 'Logout'}
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="secondary" className="w-full" onClick={() => { setShowLoginModal(true); setIsOpen(false); }}>
                      {isChinese ? '会员登录' : 'Member Login'}
                    </Button>
                    <Button variant="primary" className="w-full" onClick={() => navigate('/register')}>
                      {isChinese ? '立即免费注册' : 'Join Now — Free'}
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ── Login Modal ── */}
      <Modal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} title={isChinese ? '会员安全登录' : 'Member Login'}>
        <form onSubmit={handleLoginSubmit} className="flex flex-col gap-5">
          <div className="bg-[#1a0a0a] border border-[#C0392B]/20 rounded-xl p-4 text-xs text-[#9A8F8A] leading-relaxed">
            💡 {isChinese
              ? '演示模式：输入任意邮箱与密码即可登录，解锁会员照片预览。'
              : 'Demo: enter any email & password to simulate a logged-in premium state and unlock member photos.'}
          </div>
          <Input label={isChinese ? '电子邮箱' : 'Email Address'} type="email" value={username}
            onChange={(e) => setUsername(e.target.value)} placeholder="member@wumamatch.com" />
          <Input label={isChinese ? '登录密码' : 'Password'} type="password" value={password}
            onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
          {loginError && <span className="text-xs text-red-400">{loginError}</span>}
          <Button type="submit" variant="primary" className="w-full">
            {isChinese ? '安全登录' : 'Secure Login'}
          </Button>
        </form>
      </Modal>
    </>
  );
};
