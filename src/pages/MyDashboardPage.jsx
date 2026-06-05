import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageWrapper } from '../components/layout/PageWrapper';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Divider } from '../components/ui/Divider';
import {
  currentUser,
  sentRequests,
  receivedRequests,
  meetings,
} from '../data/mockCurrentUser';
import {
  ShieldCheck,
  Star,
  MapPin,
  Briefcase,
  Calendar,
  Video,
  Phone,
  Users,
  Clock,
  CheckCircle2,
  XCircle,
  Hourglass,
  Heart,
  Send,
  Inbox,
  LayoutDashboard,
  UserCircle2,
  MessageSquareText,
  ChevronRight,
  Award,
  LogOut,
} from 'lucide-react';

/* ─── helpers ─────────────────────────────────── */
const fmtDate = (iso) => {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
  });
};
const fmtDateTime = (iso) => {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', {
    weekday: 'short', day: 'numeric', month: 'short',
  }) + ' · ' + d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
};
const daysUntil = (iso) => {
  const diff = new Date(iso) - new Date();
  return Math.max(0, Math.ceil(diff / 86400000));
};

const STATUS_CONFIG = {
  accepted:  { label: 'Accepted',  labelZh: '已接受', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-250', Icon: CheckCircle2 },
  pending:   { label: 'Awaiting', labelZh: '待回复', color: 'text-[#D4A853]',  bg: 'bg-amber-50 border-amber-200',   Icon: Hourglass    },
  declined:  { label: 'Declined', labelZh: '已婉拒', color: 'text-zinc-450',   bg: 'bg-zinc-200 border-zinc-200',            Icon: XCircle      },
};
const MEETING_TYPE = {
  video_call:  { label: 'Video Call',  labelZh: '视频通话', Icon: Video    },
  in_person:   { label: 'In Person',   labelZh: '面对面',   Icon: Users    },
  phone_call:  { label: 'Phone Call',  labelZh: '电话',     Icon: Phone    },
};

/* ─── sub-components ──────────────────────────── */

function ProfileSidebar({ isChinese }) {
  const u = currentUser;
  return (
    <div className="flex flex-col gap-4">
      {/* Photo + name card */}
      <Card variant="default" className="p-0 overflow-hidden">
        <div className="h-24 bg-gradient-to-br from-[#0F8A96] via-[#053C42] to-[#042E33] relative">
          <div className="absolute inset-0 opacity-30"
            style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #0F8A9644 0%, transparent 70%)' }} />
        </div>
        <div className="px-5 pb-5 -mt-10 flex flex-col items-center text-center">
          <div className="relative mb-3">
            <img
              src={u.photo}
              alt={u.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-[#0F8A96]/60 shadow-xl"
            />
            <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white" />
          </div>
          <h2 className="font-serif text-base font-bold text-zinc-800">{isChinese ? u.nameChinese : u.name}</h2>
          <p className="text-[10px] uppercase tracking-widest text-[#B38F44] font-bold mt-0.5">{u.membershipTier} Member</p>
          <div className="flex items-center gap-1 text-xs text-zinc-450 mt-1">
            <MapPin className="w-3 h-3" />
            <span>{u.city}, {u.country}</span>
          </div>
          <div className="flex items-center gap-1.5 mt-3 px-3 py-1.5 bg-[#E6F7F6]/30 border border-[#0F8A96]/30 rounded-full">
            <ShieldCheck className="w-3 h-3 text-[#0F8A96]" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#0F8A96]">
              {isChinese ? '高级认证会员' : 'Premium Verified'}
            </span>
          </div>
        </div>
      </Card>

      {/* Profile completion */}
      <Card variant="default" className="p-4">
        <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-450 mb-2">
          {isChinese ? '档案完整度' : 'Profile Completion'}
        </p>
        <div className="flex items-end justify-between mb-1.5">
          <span className="text-2xl font-bold text-zinc-800">{u.profileCompletion}%</span>
          <span className="text-[10px] text-zinc-450">{isChinese ? '还差13%完整' : '13% remaining'}</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-zinc-200">
          <div
            className="h-1.5 rounded-full bg-gradient-to-r from-[#0F8A96] to-[#D4A853] transition-all duration-700"
            style={{ width: `${u.profileCompletion}%` }}
          />
        </div>
        <p className="text-[10px] text-zinc-600 mt-2">
          {isChinese ? '添加更多照片可提升曝光率' : 'Add more photos to boost visibility'}
        </p>
      </Card>

      {/* Quick stats */}
      <Card variant="default" className="p-4 flex flex-col gap-3">
        <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-450">
          {isChinese ? '我的数据' : 'My Stats'}
        </p>
        {[
          { label: isChinese ? '发出请求' : 'Requests Sent',     val: sentRequests.length,    Icon: Send    },
          { label: isChinese ? '收到请求' : 'Requests Received', val: receivedRequests.length, Icon: Inbox   },
          { label: isChinese ? '会面安排' : 'Meetings',          val: meetings.length,         Icon: Calendar },
          { label: isChinese ? '成功匹配' : 'Active Matches',    val: 2,                       Icon: Heart   },
        ].map(({ label, val, Icon }) => (
          <div key={label} className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-zinc-450">
              <Icon className="w-3.5 h-3.5 text-[#0F8A96]" />
              {label}
            </div>
            <span className="text-sm font-bold text-zinc-800">{val}</span>
          </div>
        ))}
      </Card>

      {/* Matchmaker card */}
      <Card variant="gold" className="p-4">
        <p className="text-[10px] uppercase tracking-widest font-bold text-[#D4A853] mb-3">
          {isChinese ? '您的专属红娘' : 'Your Matchmaker'}
        </p>
        <div className="flex items-center gap-3">
          <img
            src={u.matchmakerPhoto}
            alt={u.matchmakerName}
            className="w-10 h-10 rounded-2xl object-cover border border-[#D4A853]/20"
          />
          <div>
            <p className="text-sm font-bold text-zinc-800">{u.matchmakerName}</p>
            <p className="text-[10px] text-zinc-450">Senior Matchmaker</p>
          </div>
        </div>
        <Divider className="!my-3" />
        <div className="flex items-center gap-2 text-[10px] text-zinc-450">
          <Calendar className="w-3 h-3 text-[#0F8A96] shrink-0" />
          <span>
            {isChinese ? '下次咨询：' : 'Next consultation: '}
            <span className="text-[#D4A853] font-semibold">{fmtDateTime(u.nextConsultation)}</span>
          </span>
        </div>
      </Card>
    </div>
  );
}

/* ── Overview Tab ── */
function OverviewTab({ isChinese }) {
  const upcoming = meetings.filter((m) => m.status === 'upcoming');
  const recentPending = receivedRequests.filter((r) => r.status === 'pending');

  return (
    <div className="flex flex-col gap-6">
      {/* Welcome banner */}
      <div className="rounded-2xl bg-white border border-zinc-200 border border-[#0F8A96]/20 p-5 flex items-center gap-4">
        <div className="w-10 h-10 rounded-2xl bg-[#E6F7F6]/50 border border-[#0F8A96]/30 flex items-center justify-center text-[#0F8A96] shrink-0">
          <Award className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm font-bold text-zinc-800">
            {isChinese ? `欢迎回来，${currentUser.nameChinese}` : `Welcome back, ${currentUser.name.split(' ')[0]}`}
          </p>
          <p className="text-xs text-zinc-450 mt-0.5">
            {isChinese
              ? `您有 ${recentPending.length} 条待回复请求 · ${upcoming.length} 场即将到来的会面`
              : `You have ${recentPending.length} pending request${recentPending.length !== 1 ? 's' : ''} · ${upcoming.length} upcoming meeting${upcoming.length !== 1 ? 's' : ''}`}
          </p>
        </div>
      </div>

      {/* Upcoming meetings */}
      {upcoming.length > 0 && (
        <div>
          <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-450 mb-3">
            {isChinese ? '即将到来的会面' : 'Upcoming Meetings'}
          </p>
          <div className="flex flex-col gap-3">
            {upcoming.map((m) => {
              const TypeIcon = MEETING_TYPE[m.type].Icon;
              const days = daysUntil(m.date);
              return (
                <Card key={m.id} variant="default" className="p-4 flex items-center gap-4">
                  <img src={m.memberPhoto} alt={m.memberName}
                    className="w-12 h-12 rounded-2xl object-cover border border-zinc-200/80 shadow-sm shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-zinc-800 truncate">{m.memberName}</p>
                    <p className="text-[10px] text-zinc-450 mt-0.5">{m.memberProfession}</p>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <span className="inline-flex items-center gap-1 text-[10px] text-[#D4A853] font-semibold">
                        <TypeIcon className="w-3 h-3" />
                        {isChinese ? MEETING_TYPE[m.type].labelZh : MEETING_TYPE[m.type].label}
                      </span>
                      <span className="text-zinc-200">·</span>
                      <span className="text-[10px] text-zinc-450">{fmtDateTime(m.date)}</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold text-[#0F8A96]">{days}d</span>
                    <p className="text-[10px] text-zinc-600">away</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Pending received requests */}
      {recentPending.length > 0 && (
        <div>
          <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-450 mb-3">
            {isChinese ? '待您回复的请求' : 'Requests Awaiting Your Response'}
          </p>
          <div className="flex flex-col gap-3">
            {recentPending.map((r) => (
              <Card key={r.id} variant="bordered" className="p-4">
                <div className="flex items-start gap-4">
                  <img src={r.photo} alt={r.name}
                    className="w-12 h-12 rounded-2xl object-cover border border-zinc-200/80 shadow-sm shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <p className="text-sm font-bold text-zinc-800">{r.name}</p>
                      <span className="text-[10px] uppercase tracking-widest text-zinc-450">{fmtDate(r.receivedDate)}</span>
                    </div>
                    <p className="text-[10px] text-zinc-450 mt-0.5">{r.profession} · {r.city}, {r.country}</p>
                    {r.note && (
                      <p className="text-[11px] text-zinc-550 mt-2 leading-relaxed italic border-l-2 border-[#0F8A96]/40 pl-3">
                        "{r.note}"
                      </p>
                    )}
                    <div className="flex gap-2 mt-3">
                      <Button variant="primary" className="!text-[10px] !px-3 !py-1.5">
                        {isChinese ? '接受' : 'Accept'}
                      </Button>
                      <Button variant="ghost" className="!text-[10px] !px-3 !py-1.5">
                        {isChinese ? '婉拒' : 'Decline'}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── My Matches Tab ── */
function RequestCard({ req, direction, isChinese }) {
  const cfg = STATUS_CONFIG[req.status];
  const StatusIcon = cfg.Icon;
  return (
    <Card variant="default" className="p-4">
      <div className="flex items-start gap-4">
        <Link to={`/members/${req.memberId}`}>
          <img src={req.photo} alt={req.name}
            className="w-14 h-14 rounded-2xl object-cover border border-zinc-200/80 shadow-sm shrink-0 hover:border-[#0F8A96]/50 transition-colors" />
        </Link>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <Link to={`/members/${req.memberId}`}>
              <p className="text-sm font-bold text-zinc-800 hover:text-[#0F8A96] transition-colors">{req.name}</p>
            </Link>
            <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${cfg.bg} ${cfg.color}`}>
              <StatusIcon className="w-3 h-3" />
              {isChinese ? cfg.labelZh : cfg.label}
            </span>
          </div>
          <p className="text-[10px] text-zinc-450 mt-0.5">{req.profession} · {req.city}, {req.country} · Age {req.age}</p>
          <div className="flex items-center gap-3 mt-2 text-[10px] text-zinc-600">
            <span>{direction === 'sent' ? (isChinese ? '发送于' : 'Sent') : (isChinese ? '收到于' : 'Received')} {fmtDate(direction === 'sent' ? req.sentDate : req.receivedDate)}</span>
            {req.respondedDate && <span>· {isChinese ? '回复于' : 'Responded'} {fmtDate(req.respondedDate)}</span>}
          </div>
          {req.note && req.status === 'pending' && (
            <p className="text-[11px] text-zinc-550 mt-2 leading-relaxed italic border-l-2 border-[#0F8A96]/40 pl-3">
              "{req.note}"
            </p>
          )}
          {direction === 'received' && req.status === 'pending' && (
            <div className="flex gap-2 mt-3">
              <Button variant="primary" className="!text-[10px] !px-3 !py-1.5">{isChinese ? '接受' : 'Accept'}</Button>
              <Button variant="ghost" className="!text-[10px] !px-3 !py-1.5">{isChinese ? '婉拒' : 'Decline'}</Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

function MyMatchesTab({ isChinese }) {
  const [sub, setSub] = useState('received');
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-1 bg-zinc-100 rounded-2xl p-1 w-fit">
        {[
          { key: 'received', label: isChinese ? '收到的请求' : 'Received', Icon: Inbox,  count: receivedRequests.length },
          { key: 'sent',     label: isChinese ? '我发出的请求' : 'Sent',    Icon: Send,   count: sentRequests.length    },
        ].map(({ key, label, Icon, count }) => (
          <button
            key={key}
            onClick={() => setSub(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-semibold transition-all duration-200 ${
              sub === key
                ? 'bg-[#0F8A96] text-white shadow'
                : 'text-zinc-450 hover:text-zinc-800'
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${sub === key ? 'bg-[#0F8A96]/15 text-[#0F8A96]' : 'bg-zinc-200'}`}>{count}</span>
          </button>
        ))}
      </div>

      {sub === 'received' && (
        <div className="flex flex-col gap-3">
          {receivedRequests.length === 0
            ? <p className="text-sm text-zinc-600 py-8 text-center">{isChinese ? '暂无收到的请求' : 'No requests received yet.'}</p>
            : receivedRequests.map((r) => <RequestCard key={r.id} req={r} direction="received" isChinese={isChinese} />)
          }
        </div>
      )}
      {sub === 'sent' && (
        <div className="flex flex-col gap-3">
          {sentRequests.length === 0
            ? <p className="text-sm text-zinc-600 py-8 text-center">{isChinese ? '暂未发送请求' : 'You haven\'t sent any requests yet.'}</p>
            : sentRequests.map((r) => <RequestCard key={r.id} req={r} direction="sent" isChinese={isChinese} />)
          }
        </div>
      )}
    </div>
  );
}

/* ── Meetings Tab ── */
function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} className={`w-3 h-3 ${s <= rating ? 'text-[#D4A853] fill-[#D4A853]' : 'text-zinc-200'}`} />
      ))}
    </div>
  );
}

function MeetingCard({ m, isChinese }) {
  const TypeIcon = MEETING_TYPE[m.type].Icon;
  const isUpcoming = m.status === 'upcoming';
  return (
    <Card variant={isUpcoming ? 'bordered' : 'default'} className="p-5">
      <div className="flex items-start gap-4">
        <div className="relative shrink-0">
          <img src={m.memberPhoto} alt={m.memberName}
            className="w-14 h-14 rounded-2xl object-cover border border-zinc-200/80 shadow-sm" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border border-zinc-200/80 shadow-sm flex items-center justify-center">
            <TypeIcon className={`w-3 h-3 ${isUpcoming ? 'text-[#D4A853]' : 'text-zinc-450'}`} />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <p className="text-sm font-bold text-zinc-800">{m.memberName}</p>
              <p className="text-[10px] text-zinc-450">{m.memberProfession}</p>
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full border ${
              isUpcoming
                ? 'bg-amber-50 border-amber-200 text-[#D4A853]'
                : m.status === 'completed'
                ? 'bg-emerald-50 border-emerald-250 text-emerald-600'
                : 'bg-zinc-200 border-zinc-200 text-zinc-450'
            }`}>
              {isUpcoming ? (isChinese ? '即将进行' : 'Upcoming') : (isChinese ? '已完成' : 'Completed')}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-3 text-[10px] text-zinc-450">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-[#0F8A96]" />{fmtDateTime(m.date)}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#0F8A96]" />{m.duration}</span>
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#0F8A96]" />{m.location}</span>
          </div>

          {m.matchmakerNote && (
            <div className="mt-3 bg-[#E6F7F6]/20 border border-[#0F8A96]/20 rounded-2xl p-3">
              <p className="text-[10px] uppercase tracking-widest font-bold text-[#0F8A96] mb-1">
                {isChinese ? '红娘备注' : 'Matchmaker Note'}
              </p>
              <p className="text-[11px] text-zinc-550 leading-relaxed">{m.matchmakerNote}</p>
            </div>
          )}

          {m.status === 'completed' && m.yourRating && (
            <div className="mt-3 bg-zinc-100 rounded-2xl p-3">
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-600 mb-2">
                {isChinese ? '您的反馈' : 'Your Feedback'}
              </p>
              <StarRating rating={m.yourRating} />
              {m.yourFeedback && (
                <p className="text-[11px] text-zinc-450 mt-1.5 leading-relaxed italic">"{m.yourFeedback}"</p>
              )}
            </div>
          )}

          {m.status === 'completed' && !m.yourRating && (
            <div className="mt-3">
              <Button variant="ghost" className="!text-[10px] !px-3 !py-1.5">
                {isChinese ? '提交反馈' : 'Submit Feedback'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

function MeetingsTab({ isChinese }) {
  const upcoming  = meetings.filter((m) => m.status === 'upcoming');
  const completed = meetings.filter((m) => m.status === 'completed');

  return (
    <div className="flex flex-col gap-8">
      {upcoming.length > 0 && (
        <div>
          <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-450 mb-4">
            {isChinese ? '即将到来' : 'Upcoming'} ({upcoming.length})
          </p>
          <div className="flex flex-col gap-4">
            {upcoming.map((m) => <MeetingCard key={m.id} m={m} isChinese={isChinese} />)}
          </div>
        </div>
      )}
      {completed.length > 0 && (
        <div>
          <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-450 mb-4">
            {isChinese ? '历史记录' : 'Past Meetings'} ({completed.length})
          </p>
          <div className="flex flex-col gap-4">
            {completed.map((m) => <MeetingCard key={m.id} m={m} isChinese={isChinese} />)}
          </div>
        </div>
      )}
      {meetings.length === 0 && (
        <p className="text-sm text-zinc-600 py-12 text-center">
          {isChinese ? '暂无会面记录' : 'No meetings arranged yet.'}
        </p>
      )}
    </div>
  );
}

/* ── My Profile Tab ── */
function MyProfileTab({ isChinese }) {
  const u = currentUser;
  const fields = [
    { label: isChinese ? '姓名' : 'Full Name', value: isChinese ? u.nameChinese : u.name },
    { label: isChinese ? '年龄' : 'Age', value: u.age },
    { label: isChinese ? '职业' : 'Profession', value: u.profession },
    { label: isChinese ? '学历' : 'Education', value: u.education },
    { label: isChinese ? '居住城市' : 'City', value: `${u.city}, ${u.country}` },
    { label: isChinese ? '身高' : 'Height', value: u.height },
    { label: isChinese ? '语言' : 'Languages', value: u.languages.join(', ') },
    { label: isChinese ? '生活方式' : 'Lifestyle', value: u.lifestyle },
    { label: isChinese ? '婚恋目标' : 'Looking For', value: u.lookingFor },
    { label: isChinese ? '是否有子女' : 'Has Children', value: u.hasChildren ? (isChinese ? '是' : 'Yes') : (isChinese ? '否' : 'No') },
    { label: isChinese ? '接受跨国' : 'Open to International', value: u.openToInternational ? (isChinese ? '是' : 'Yes') : (isChinese ? '否' : 'No') },
    { label: isChinese ? '会员等级' : 'Membership Tier', value: u.membershipTier },
    { label: isChinese ? '注册时间' : 'Member Since', value: u.memberSince },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Bio */}
      <Card variant="default" className="p-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-450">
            {isChinese ? '个人简介' : 'About Me'}
          </p>
          <button className="text-[10px] text-[#0F8A96] font-semibold hover:text-[#0F8A96] transition-colors uppercase tracking-widest">
            {isChinese ? '编辑' : 'Edit'}
          </button>
        </div>
        <p className="text-sm text-zinc-550 leading-relaxed font-light">{u.bio}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {u.interests.map((i) => (
            <span key={i} className="text-[10px] px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 shadow-sm text-zinc-450 font-medium">{i}</span>
          ))}
        </div>
      </Card>

      {/* Profile fields */}
      <Card variant="default" className="p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-450">
            {isChinese ? '基本信息' : 'Profile Details'}
          </p>
          <button className="text-[10px] text-[#0F8A96] font-semibold hover:text-[#0F8A96] transition-colors uppercase tracking-widest">
            {isChinese ? '编辑' : 'Edit'}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {fields.map(({ label, value }) => (
            <div key={label}>
              <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-0.5">{label}</p>
              <p className="text-sm text-zinc-800 font-medium">{value}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Verification status */}
      <Card variant="default" className="p-5">
        <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-450 mb-4">
          {isChinese ? '认证状态' : 'Verification Status'}
        </p>
        <div className="flex flex-col gap-3">
          {[
            { label: isChinese ? '身份证实名认证' : 'Government ID Verified', done: true },
            { label: isChinese ? 'Veriff 活体人脸识别' : 'Veriff Biometric Check', done: true },
            { label: isChinese ? 'Checkr 背景审查' : 'Checkr Background Screening', done: true },
            { label: isChinese ? '学历证明' : 'Education Certificate', done: false },
            { label: isChinese ? '资产核验' : 'Asset Verification', done: false },
          ].map(({ label, done }) => (
            <div key={label} className="flex items-center gap-3">
              {done
                ? <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                : <div className="w-4 h-4 rounded-full border-2 border-zinc-200 shrink-0" />}
              <span className={`text-xs ${done ? 'text-zinc-650' : 'text-zinc-600'}`}>{label}</span>
              {!done && (
                <button className="ml-auto text-[10px] text-[#0F8A96] font-semibold hover:text-[#0F8A96] transition-colors uppercase tracking-widest shrink-0">
                  {isChinese ? '立即认证' : 'Verify'}
                </button>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

/* ─── Main Dashboard Page ─────────────────────── */
const TABS = [
  { id: 'overview', en: 'Overview',    zh: '总览',   Icon: LayoutDashboard   },
  { id: 'matches',  en: 'My Matches',  zh: '我的匹配', Icon: Heart           },
  { id: 'meetings', en: 'Meetings',    zh: '会面记录', Icon: Calendar        },
  { id: 'profile',  en: 'My Profile',  zh: '我的档案', Icon: UserCircle2     },
];

export const MyDashboardPage = ({ isChinese, onLoginToggle }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  return (
    <PageWrapper className="w-full pt-20">
      {/* Page header */}
      <div className="border-b border-zinc-150 bg-[#EDF6F6] px-8 pt-10 pb-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-4 mb-0 flex-wrap">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#0F8A96]">
                {isChinese ? '会员中心' : 'MEMBER PORTAL'}
              </span>
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-zinc-800 mt-1">
                {isChinese ? '个人资料' : 'Profile'}
              </h1>
            </div>
            <Link to="/members">
              <Button variant="ghost" className="!text-xs mb-4 flex items-center gap-2">
                <Users className="w-3.5 h-3.5" />
                {isChinese ? '浏览会员' : 'Browse Members'}
                <ChevronRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>

          {/* Tab navigation & Logout */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-1 overflow-x-auto scrollbar-none">
              {TABS.map(({ id, en, zh, Icon }) => {
                const isActive = activeTab === id;
                return (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex items-center gap-2 px-4 py-3 text-xs font-semibold whitespace-nowrap border-b-2 transition-all duration-200 ${
                      isActive
                        ? 'border-[#0F8A96] text-[#0F8A96]'
                        : 'border-transparent text-zinc-450 hover:text-zinc-800'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {isChinese ? zh : en}
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={() => {
                if (onLoginToggle) {
                  onLoginToggle(false);
                  navigate('/');
                }
              }}
              className="flex items-center gap-2 text-[#0F8A96] hover:text-white border border-[#0F8A96]/40 hover:bg-[#0F8A96] text-xs font-bold px-3 py-1.5 rounded-xl transition-all duration-200 mb-1"
            >
              <LogOut className="w-3.5 h-3.5" />
              {isChinese ? '安全退出' : 'Logout'}
            </button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-8 py-10 bg-[#EDF6F6] min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <ProfileSidebar isChinese={isChinese} />
            </div>
            {/* Main */}
            <div className="lg:col-span-9">
              {activeTab === 'overview'  && <OverviewTab  isChinese={isChinese} />}
              {activeTab === 'matches'   && <MyMatchesTab isChinese={isChinese} />}
              {activeTab === 'meetings'  && <MeetingsTab  isChinese={isChinese} />}
              {activeTab === 'profile'   && <MyProfileTab isChinese={isChinese} />}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default MyDashboardPage;
