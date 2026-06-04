export const blogCategories = [
  { id: 'all', en: 'All', zh: '全部' },
  { id: 'matchmaker-insights', en: 'Matchmaker Insights', zh: '红娘见解' },
  { id: 'dating-advice', en: 'Dating Advice', zh: '约会建议' },
  { id: 'relationship-tips', en: 'Relationship Tips', zh: '情感指南' },
  { id: 'community', en: 'Community & Culture', zh: '社区文化' },
];

export const mockBlogs = [
  {
    id: 1,
    slug: 'why-human-matchmaking-beats-algorithms',
    featured: true,
    category: 'matchmaker-insights',
    title: 'Why Human Matchmaking Still Beats Algorithms in 2026',
    titleChinese: '2026年，为什么人工红娘依然胜过算法配对',
    excerpt:
      'In an age of AI-driven dating apps, our senior matchmakers explain why curated introductions lead to deeper, more lasting connections.',
    excerptChinese:
      '在AI约会应用盛行的时代，资深红娘为您解析：为什么精心甄选的人工引荐，能建立更深层、更持久的情感联结。',
    content: [
      'Every week, we speak with accomplished professionals who have tried every major dating app on the market. The pattern is always the same: hundreds of matches, dozens of conversations that fizzle out, and a growing sense that something essential is missing.',
      'Algorithms optimise for engagement — time spent swiping, messages sent, subscriptions renewed. They are not designed to optimise for compatibility, emotional maturity, or shared life goals. A human matchmaker, by contrast, reads between the lines of a profile, listens for what is unsaid in a consultation, and draws on years of experience pairing people who share values, not just interests.',
      'At WuMa Match, our matchmakers spend an average of 90 minutes in each member consultation. We explore family expectations, career ambitions, attachment styles, and cultural identity — dimensions that no questionnaire can fully capture.',
      'The result speaks for itself: 94% member satisfaction and over 380 successful matches made since our founding. When you remove the noise of endless swiping and replace it with intentional, expert-led introductions, people connect differently. They show up more authentically. They invest more deeply. And they find partners who are genuinely aligned with who they are and who they want to become.',
    ],
    contentChinese: [
      '每周，我们都会与尝试过市面上所有主流约会应用的优秀职场精英交谈。模式总是一成不变：数百个配对、数十段无疾而终的对话，以及一种愈发强烈的感觉——某些本质的东西缺失了。',
      '算法优化的是用户活跃度——滑动时长、消息数量、续订率。它们并非为兼容性、情感成熟度或共同人生目标而设计。相比之下，人工红娘能读懂档案字里行间的内容，在咨询中捕捉未说出口的信息，并凭借多年配对经验，将价值观相近的人联结在一起，而非仅仅兴趣相投。',
      '在WuMa Match，红娘顾问平均每次会员咨询长达90分钟。我们深入探讨家庭期望、职业抱负、依恋模式与文化认同——这些是任何问卷都无法完全捕捉的维度。',
      '成果不言自明：94%会员满意度，自成立以来成功牵线380余对。当你剔除无效滑动的噪音，以专业红娘主导的精准引荐取而代之，人们会以不同的方式建立联结——更真实、更投入，并找到与自己及未来愿景真正契合的伴侣。',
    ],
    author: 'Jennifer Wu',
    authorChinese: '吴珍妮',
    authorRole: 'Senior Matchmaker',
    authorRoleChinese: '资深红娘顾问',
    authorPhoto: 'https://randomuser.me/api/portraits/women/47.jpg',
    date: '2026-05-28',
    readTime: 6,
    photo: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 2,
    slug: 'first-date-conversation-starters',
    category: 'dating-advice',
    title: '7 Conversation Starters That Go Beyond Small Talk',
    titleChinese: '7个超越寒暄的深度对话开场白',
    excerpt:
      'First dates curated by WuMa matchmakers are designed for depth. Here are seven questions our members swear by for meaningful early connections.',
    excerptChinese:
      'WuMa红娘安排的初次约会旨在建立深度联结。以下是会员们亲测有效的七个深度对话问题。',
    content: [
      'Small talk has its place, but on a WuMa-curated first date, you already know your matchmaker believes there is genuine potential. That means you can skip the weather and go straight to what matters.',
      '"What does a fulfilling week look like for you?" This question reveals lifestyle priorities without feeling like an interview. It opens the door to discussions about work-life balance, hobbies, and personal rituals.',
      '"How did your family shape what you want in a partner?" For our global Chinese community, family values often sit at the heart of relationship expectations. This question honours that reality with grace.',
      '"What is something you changed your mind about in the last few years?" Intellectual humility and personal growth are attractive qualities. This question surfaces both.',
      '"If you could have dinner with anyone living or dead, who would it be and why?" Classic but effective — it reveals intellectual curiosity and cultural references in one elegant move.',
      'Our matchmakers recommend choosing two or three of these questions and letting the conversation unfold naturally. The goal is not to interrogate — it is to create space for genuine discovery.',
    ],
    contentChinese: [
      '寒暄有其存在的意义，但在WuMa红娘安排的初次约会中，您已知道红娘认为双方存在真实潜力。这意味着您可以跳过天气话题，直接触及核心。',
      '"对你来说，充实的一周是什么样的？"这个问题揭示生活方式优先级，又不会显得像在面试。它为讨论工作与生活平衡、兴趣爱好和个人习惯打开了大门。',
      '"家庭如何塑造你对伴侣的期望？"对于全球华人社区而言，家庭价值观往往是关系期望的核心。这个问题以优雅的方式尊重这一现实。',
      '"过去几年你改变了哪些看法？" intellectual humility 与个人成长是极具吸引力的品质。这个问题能同时展现两者。',
      '"如果能与任何在世或已故的人共进晚餐，你会选谁？为什么？"经典而有效——一个问题同时揭示求知欲与文化背景。',
      '红娘建议从中选择两到三个问题，让对话自然展开。目标不是审问——而是为真实的相互了解创造空间。',
    ],
    author: 'Sarah Chen',
    authorChinese: '陈莎拉',
    authorRole: 'Lead Matchmaker',
    authorRoleChinese: '首席红娘',
    authorPhoto: 'https://randomuser.me/api/portraits/women/44.jpg',
    date: '2026-05-20',
    readTime: 5,
    photo: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 3,
    slug: 'long-distance-relationships-diaspora',
    category: 'relationship-tips',
    title: 'Making Long-Distance Work in the Global Diaspora',
    titleChinese: '全球华人异地恋：如何让距离成为考验而非障碍',
    excerpt:
      'Many WuMa members connect across continents. Our relationship coaches share practical frameworks for building trust and intimacy across time zones.',
    excerptChinese:
      '许多WuMa会员跨越大陆相遇。关系教练分享在时差中建立信任与亲密感的实用框架。',
    content: [
      'London to Sydney. Vancouver to Singapore. New York to Taipei. Our member base spans the globe, and some of the most beautiful WuMa love stories begin with two people in different cities who chose to invest in something real.',
      'Long-distance relationships fail when they lack structure. Successful ones share three characteristics: scheduled quality time, transparent communication about expectations, and a shared vision for when geography will no longer be a barrier.',
      'We advise couples to establish a weekly video call ritual — not a check-in, but a proper date. Cook the same meal simultaneously. Watch a film together. Treat the call as sacred time, not a logistical update.',
      'Discuss the timeline openly. "When will we be in the same city?" is not a pressure question — it is a commitment question. Our matchmakers help facilitate these conversations early, before emotional investment outpaces practical planning.',
      'Distance tests intentionality. And intentionality, as it turns out, is the foundation of every lasting relationship we have helped build.',
    ],
    contentChinese: [
      '伦敦到悉尼，温哥华到新加坡，纽约到台北。我们的会员遍布全球，一些最美的WuMa爱情故事，始于两个身处不同城市却选择认真投入的人。',
      '异地恋失败往往源于缺乏结构。成功的异地恋有三个共同特征：固定的优质相处时间、对期望的透明沟通，以及关于何时消除地理障碍的共同愿景。',
      '我们建议情侣建立每周视频约会仪式——不是例行打卡，而是真正的约会。同步烹饪同一道菜，一起看电影，将通话视为神圣时光，而非事务性汇报。',
      '开诚布公地讨论时间线。"我们何时能在同一座城市？"不是施压的问题——而是承诺的问题。红娘会在情感投入超越现实规划之前，协助双方展开这类对话。',
      '距离考验的是诚意。而诚意，恰恰是我们所见证的每一段长久关系的基石。',
    ],
    author: 'Jennifer Wu',
    authorChinese: '吴珍妮',
    authorRole: 'Senior Matchmaker',
    authorRoleChinese: '资深红娘顾问',
    authorPhoto: 'https://randomuser.me/api/portraits/women/47.jpg',
    date: '2026-05-12',
    readTime: 7,
    photo: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 4,
    slug: 'red-flags-vs-yellow-flags',
    category: 'dating-advice',
    title: 'Red Flags vs. Yellow Flags: What Our Matchmakers Watch For',
    titleChinese: '红旗信号与黄旗信号：红娘在配对中关注什么',
    excerpt:
      'Not every concern is a dealbreaker. Learn how WuMa matchmakers distinguish between genuine incompatibility and normal early-stage uncertainty.',
    excerptChinese:
      '并非每个顾虑都意味着不合适。了解WuMa红娘如何区分真正的不兼容与早期阶段的正常不确定感。',
    content: [
      'When members ask us what to look for in a potential partner, we often reframe the question: what should you pay attention to, and what should you give time to resolve?',
      'Red flags are non-negotiable: dishonesty about relationship status, disrespect toward service staff, consistent failure to follow through on commitments, or fundamental misalignment on children, marriage, or lifestyle. These do not improve with time.',
      'Yellow flags are worth noting but not necessarily disqualifying: different communication styles, nervousness on a first date, or differing opinions on minor preferences. These are opportunities for conversation, not reasons to disengage.',
      'Our matchmakers conduct pre-introduction compatibility reviews specifically to filter red flags before you ever meet. That is the advantage of human curation — problems are often visible to an experienced eye before they become your problem.',
    ],
    contentChinese: [
      '当会员询问该在潜在伴侣身上关注什么，我们往往会重构这个问题：哪些值得留意，哪些值得给时间化解？',
      '红旗信号不可妥协：对感情状态的欺骗、对服务人员的不尊重、屡次食言，或在子女、婚姻、生活方式上的根本分歧。这些不会随时间改善。',
      '黄旗信号值得关注但不一定 disqualifying：不同的沟通风格、初次约会的紧张感，或对次要偏好的不同意见。这些是对话的契机，而非退缩的理由。',
      '红娘在见面前专门进行兼容性预审，正是为了在您见面前过滤红旗信号。这就是人工甄选的优势——问题往往在成为您的麻烦之前，就被经验丰富的眼睛发现。',
    ],
    author: 'Sarah Chen',
    authorChinese: '陈莎拉',
    authorRole: 'Lead Matchmaker',
    authorRoleChinese: '首席红娘',
    authorPhoto: 'https://randomuser.me/api/portraits/women/44.jpg',
    date: '2026-05-05',
    readTime: 5,
    photo: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 5,
    slug: 'cultural-values-modern-dating',
    category: 'community',
    title: 'Balancing Cultural Values with Modern Dating Expectations',
    titleChinese: '文化价值观与现代婚恋期望的平衡之道',
    excerpt:
      'For overseas Chinese professionals, dating often means navigating two worlds. WuMa was built specifically for this intersection.',
    excerptChinese:
      '对海外华人精英而言，婚恋往往意味着在两个世界间穿行。WuMa正是为这一交汇点而生。',
    content: [
      'Our members frequently describe a specific tension: they were raised with traditional expectations around family, marriage, and filial responsibility, yet they live and work in societies that celebrate individualism and casual dating culture.',
      'Neither world is wrong. The challenge is integration — finding a partner who understands both your heritage and your present reality without asking you to choose between them.',
      'This is why WuMa Match focuses on the global Chinese diaspora specifically. Our matchmakers share this cultural fluency. They understand why a member might want a partner who speaks Mandarin at home but builds a career in London. They know that "meeting the parents" is not a cliché — it is a milestone.',
      'Modern dating does not require abandoning cultural values. It requires finding someone who honours them alongside you.',
    ],
    contentChinese: [
      '会员们常描述一种特定的张力：成长于围绕家庭、婚姻与孝道的传统期望，却在推崇个人主义与随意约会文化的社会中工作生活。',
      '两个世界都没有错。挑战在于融合——找到既理解您的文化传承、又理解您当下现实，且不要求您二选一的伴侣。',
      '这正是WuMa Match专注全球华人社区的原因。我们的红娘具备这种文化流利度，理解为何会员可能希望伴侣在家说普通话、却在伦敦打拼事业；明白"见家长"不是陈词滥调——而是重要里程碑。',
      '现代婚恋不必抛弃文化价值观，而是找到与您共同守护价值观的人。',
    ],
    author: 'Jennifer Wu',
    authorChinese: '吴珍妮',
    authorRole: 'Senior Matchmaker',
    authorRoleChinese: '资深红娘顾问',
    authorPhoto: 'https://randomuser.me/api/portraits/women/47.jpg',
    date: '2026-04-28',
    readTime: 6,
    photo: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 6,
    slug: 'what-happens-after-you-join-wuma',
    category: 'matchmaker-insights',
    title: 'What Happens After You Join WuMa Match',
    titleChinese: '加入WuMa Match之后，会发生什么',
    excerpt:
      'A transparent walkthrough of our onboarding process — from profile verification to your first curated introduction.',
    excerptChinese:
      '透明解读我们的入会流程——从档案认证到首次精选引荐。',
    content: [
      'Joining WuMa Match is not like downloading an app. It is the beginning of a relationship with a dedicated matchmaker who will know your story, your preferences, and your goals intimately.',
      'Step one is profile creation and verification. We verify identity, conduct liveness checks, and review educational and professional credentials where provided. This typically takes 3–5 business days.',
      'Step two is your private consultation — a 60–90 minute video call with your assigned matchmaker. This is where the real work begins. We explore your relationship history, your non-negotiables, and the qualities you are truly seeking in a life partner.',
      'Step three is curated matching. Your matchmaker handpicks candidates from our verified member pool, conducts preliminary compatibility reviews, and presents you with detailed profiles and matchmaker notes — not just photos.',
      'Step four is facilitated introduction. When both parties express mutual interest, we arrange the first meeting — whether video call or in-person — with full concierge support. Your matchmaker remains available throughout for guidance and feedback.',
      'Most members receive their first introduction within 2–3 weeks of profile approval. Quality takes time. That is by design.',
    ],
    contentChinese: [
      '加入WuMa Match不像下载一个应用，而是与专属红娘建立关系的开始——她将深入了解您的故事、偏好与目标。',
      '第一步是档案创建与认证。我们核验身份、进行活体检测，并审核您提供的学历与职业证明，通常需3–5个工作日。',
      '第二步是私密咨询——与指定红娘进行60–90分钟视频面谈。这才是真正工作的开始：探讨感情经历、不可妥协的条件，以及您在人生伴侣身上真正寻求的品质。',
      '第三步是精选配对。红娘从认证会员库中手工挑选候选人，进行初步兼容性评估，并向您呈现详细档案与红娘评估报告——而非仅仅照片。',
      '第四步是 facilitated 引荐。当双方均表示意向，我们安排首次见面（视频或线下），并提供全程管家式支持。红娘全程提供指导与反馈。',
      '大多数会员在档案获批后2–3周内收到首次引荐。品质需要时间，这是刻意为之。',
    ],
    author: 'Sarah Chen',
    authorChinese: '陈莎拉',
    authorRole: 'Lead Matchmaker',
    authorRoleChinese: '首席红娘',
    authorPhoto: 'https://randomuser.me/api/portraits/women/44.jpg',
    date: '2026-04-15',
    readTime: 8,
    photo: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
  },
];

export const getBlogBySlug = (slug) => mockBlogs.find((b) => b.slug === slug);

export const getCategoryLabel = (categoryId, isChinese) => {
  const cat = blogCategories.find((c) => c.id === categoryId);
  if (!cat) return categoryId;
  return isChinese ? cat.zh : cat.en;
};

export const formatBlogDate = (dateStr, isChinese) => {
  const date = new Date(dateStr);
  if (isChinese) {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  }
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};
