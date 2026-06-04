import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Heart, User, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { Input } from '../ui/Input';

export const Navbar = ({ isLoggedIn, onLoginToggle, isChinese, onLanguageToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
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
    navigate('/dashboard');
  };

  // ── "Home" removed; "Plans" added ──
  const navLinks = [
    { to: '/members',         label: isChinese ? '精选会员'  : 'Members'         },
    { to: '/plans',           label: isChinese ? '会员方案'  : 'Plans'            },
    { to: '/success-stories', label: isChinese ? '成功案例'  : 'Success Stories'  },
    { to: '/about',           label: isChinese ? '关于我们'  : 'About Us'         },
    { to: '/events',          label: isChinese ? '高端活动'  : 'Events'           },
    { to: '/blogs',           label: isChinese ? '博客'      : 'Blog'             },
    { to: '/contact',         label: isChinese ? '联系我们'  : 'Contact'          },
  ];

  const navBg = isScrolled
    ? 'bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_40px_rgba(0,0,0,0.8)]'
    : 'bg-transparent border-b border-transparent';

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-8 h-[72px] flex items-center justify-between gap-6">

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
            {/* Language dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown((p) => !p)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/5 border border-white/8 text-[10px] font-bold tracking-widest text-[#9A8F8A] hover:text-[#F5F0EB] hover:bg-white/10 transition-all duration-200"
              >
                <img
                  src={isChinese ? 'https://flagcdn.com/w80/cn.png' : 'https://flagcdn.com/w80/us.png'}
                  alt={isChinese ? 'CN' : 'US'}
                  className="w-5 h-3.5 object-cover rounded-sm"
                />
                <span>{isChinese ? '中文' : 'EN'}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showLangDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showLangDropdown && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-[#141414] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-50">
                  <button
                    onClick={() => { if (isChinese) onLanguageToggle(); setShowLangDropdown(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-semibold transition-colors duration-200 ${
                      !isChinese ? 'text-[#F5F0EB] bg-[#C0392B]/15' : 'text-[#9A8F8A] hover:text-[#F5F0EB] hover:bg-white/5'
                    }`}
                  >
                    <img src="https://flagcdn.com/w80/us.png" alt="US" className="w-5 h-3.5 object-cover rounded-sm flex-shrink-0" />
                    <span>English</span>
                    {!isChinese && <span className="ml-auto text-[#C0392B] text-[10px]">✓</span>}
                  </button>
                  <div className="h-px bg-zinc-800" />
                  <button
                    onClick={() => { if (!isChinese) onLanguageToggle(); setShowLangDropdown(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-semibold transition-colors duration-200 ${
                      isChinese ? 'text-[#F5F0EB] bg-[#C0392B]/15' : 'text-[#9A8F8A] hover:text-[#F5F0EB] hover:bg-white/5'
                    }`}
                  >
                    <img src="https://flagcdn.com/w80/cn.png" alt="CN" className="w-5 h-3.5 object-cover rounded-sm flex-shrink-0" />
                    <span>中文</span>
                    {isChinese && <span className="ml-auto text-[#C0392B] text-[10px]">✓</span>}
                  </button>
                </div>
              )}
            </div>

            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-1.5 rounded-2xl border transition-all duration-200 ${
                      isActive
                        ? 'bg-[#C0392B]/15 border-[#C0392B]/40 text-[#E74C3C]'
                        : 'bg-[#D4A853]/10 border-[#D4A853]/20 text-[#D4A853] hover:bg-[#D4A853]/20'
                    }`
                  }
                >
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="me"
                    className="w-5 h-5 rounded-full object-cover border border-[#D4A853]/40"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    {isChinese ? '个人资料' : 'Profile'}
                  </span>
                </NavLink>
                <Button variant="ghost" size="sm" onClick={() => { onLoginToggle(false); navigate('/'); }}>
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
            {/* Mobile language dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown((p) => !p)}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-2xl bg-white/5 border border-white/8 text-[10px] font-bold text-[#9A8F8A]"
              >
                <img
                  src={isChinese ? 'https://flagcdn.com/w80/cn.png' : 'https://flagcdn.com/w80/us.png'}
                  alt={isChinese ? 'CN' : 'US'}
                  className="w-5 h-3.5 object-cover rounded-sm"
                />
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showLangDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showLangDropdown && (
                <div className="absolute right-0 top-full mt-2 w-36 bg-[#141414] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-50">
                  <button
                    onClick={() => { if (isChinese) onLanguageToggle(); setShowLangDropdown(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-semibold ${
                      !isChinese ? 'text-[#F5F0EB] bg-[#C0392B]/15' : 'text-[#9A8F8A]'
                    }`}
                  >
                    <img src="https://flagcdn.com/w80/us.png" alt="US" className="w-5 h-3.5 object-cover rounded-sm flex-shrink-0" /><span>English</span>
                    {!isChinese && <span className="ml-auto text-[#C0392B] text-[10px]">✓</span>}
                  </button>
                  <div className="h-px bg-zinc-800" />
                  <button
                    onClick={() => { if (!isChinese) onLanguageToggle(); setShowLangDropdown(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-semibold ${
                      isChinese ? 'text-[#F5F0EB] bg-[#C0392B]/15' : 'text-[#9A8F8A]'
                    }`}
                  >
                    <img src="https://flagcdn.com/w80/cn.png" alt="CN" className="w-5 h-3.5 object-cover rounded-sm flex-shrink-0" /><span>中文</span>
                    {isChinese && <span className="ml-auto text-[#C0392B] text-[10px]">✓</span>}
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-2xl text-[#9A8F8A] hover:text-[#F5F0EB] hover:bg-white/5 transition-colors"
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
                    <Link
                      to="/dashboard"
                      className="flex items-center gap-3 py-3 px-4 rounded-xl bg-[#D4A853]/10 border border-[#D4A853]/20"
                    >
                      <img
                        src="https://randomuser.me/api/portraits/women/68.jpg"
                        alt="me"
                        className="w-8 h-8 rounded-xl object-cover border border-[#D4A853]/30"
                      />
                      <div>
                        <p className="text-xs font-bold text-[#D4A853]">{isChinese ? '陈雨欣' : 'Sophia Chen'}</p>
                        <p className="text-[10px] text-zinc-500">{isChinese ? '精英会员 · 已认证' : 'Elite · Verified'}</p>
                      </div>
                      <User className="w-4 h-4 text-[#D4A853] ml-auto" />
                    </Link>
                    <Button variant="ghost" className="w-full" onClick={() => { onLoginToggle(false); navigate('/'); }}>
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
          <div className="bg-[#1a0a0a] border border-[#C0392B]/20 rounded-2xl p-4 text-xs text-[#9A8F8A] leading-relaxed">
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
