import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, CheckCircle, Circle, Send } from 'lucide-react';
import { Card } from '../../ui/Card';
import { Textarea } from '../../ui/Textarea';
import { RadioGroup } from '../../ui/RadioGroup';
import { CheckboxGroup } from '../../ui/CheckboxGroup';
import { Button } from '../../ui/Button';

export const Step2DeepProfile = ({ data, onSubmit, onBack, isChinese }) => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const [formData, setFormData] = useState({
    // 1. History (Textareas)
    pastRelationDetails: data.pastRelationDetails || '',
    pastRelationLessons: data.pastRelationLessons || '',
    whyPreviousEnded: data.whyPreviousEnded || '',
    emotionalGrownUp: data.emotionalGrownUp || '',

    // 2. Emotional Needs (Radio + Text)
    attachmentStyle: data.attachmentStyle || '',
    handlingStress: data.handlingStress || '',
    supportNeededText: data.supportNeededText || '',

    // 3. Personality (Text)
    personalityType: data.personalityType || '',
    introvertExtrovert: data.introvertExtrovert || '',
    selfDescription: data.selfDescription || '',

    // 4. Life Stage (Radios + Text)
    careerAmbition: data.careerAmbition || '',
    financialValues: data.financialValues || '',
    weekendHabits: data.weekendHabits || '',

    // 5. Love Language (Checkbox + Text)
    loveLanguages: data.loveLanguages || [],
    howExpressLove: data.howExpressLove || '',

    // 6. Relationship Vision (Textareas)
    idealFiveYears: data.idealFiveYears || '',
    marriageRoleModel: data.marriageRoleModel || '',
    choresAgreement: data.choresAgreement || '',
    housingExpectation: data.housingExpectation || '',

    // 7. Partner Compatibility (4 Textareas)
    partnerMustHaves: data.partnerMustHaves || '',
    partnerDealBreakers: data.partnerDealBreakers || '',
    lifestyleMismatches: data.lifestyleMismatches || '',
    idealPartnerCoreValues: data.idealPartnerCoreValues || '',

    // 8. Conflict (Radio + Textarea)
    conflictResolutionStyle: data.conflictResolutionStyle || '',
    conflictScenarioText: data.conflictScenarioText || '',

    // 9. Emotional Readiness (2 Textareas)
    readyReason: data.readyReason || '',
    baggageExplanation: data.baggageExplanation || '',

    // 10. Matchmaking Prefs (Radio + Text)
    matchmakerHelpPref: data.matchmakerHelpPref || '',
    extraComments: data.extraComments || '',
  });

  const sections = [
    {
      title: isChinese ? '1. 感情历史与情感反思' : '1. Relationship History & Insight',
      fields: ['pastRelationDetails', 'pastRelationLessons', 'whyPreviousEnded', 'emotionalGrownUp']
    },
    {
      title: isChinese ? '2. 情感需求与依恋类型' : '2. Emotional Needs & Attachment Style',
      fields: ['attachmentStyle', 'handlingStress', 'supportNeededText']
    },
    {
      title: isChinese ? '3. 性格特质与自我认知' : '3. Personality & Self-Awareness',
      fields: ['personalityType', 'introvertExtrovert', 'selfDescription']
    },
    {
      title: isChinese ? '4. 人生阶段与生活方式' : '4. Life Stage & Lifestyle Depth',
      fields: ['careerAmbition', 'financialValues', 'weekendHabits']
    },
    {
      title: isChinese ? '5. 爱之语与互动方式' : '5. Love Language & Connection Style',
      fields: ['loveLanguages', 'howExpressLove']
    },
    {
      title: isChinese ? '6. 长远婚姻蓝图' : '6. Relationship Vision & Long-Term Goals',
      fields: ['idealFiveYears', 'marriageRoleModel', 'choresAgreement', 'housingExpectation']
    },
    {
      title: isChinese ? '7. 伴侣兼容性期望' : '7. Partner Compatibility',
      fields: ['partnerMustHaves', 'partnerDealBreakers', 'lifestyleMismatches', 'idealPartnerCoreValues']
    },
    {
      title: isChinese ? '8. 沟通与冲突处理' : '8. Conflict & Communication Style',
      fields: ['conflictResolutionStyle', 'conflictScenarioText']
    },
    {
      title: isChinese ? '9. 准备就绪程度与承诺' : '9. Emotional Readiness & Commitment',
      fields: ['readyReason', 'baggageExplanation']
    },
    {
      title: isChinese ? '10. 红娘配对偏好' : '10. Matchmaking Preferences',
      fields: ['matchmakerHelpPref', 'extraComments']
    }
  ];

  // Helper to check if a section is completed
  const isSectionComplete = (fields) => {
    return fields.every((field) => {
      const val = formData[field];
      if (Array.isArray(val)) return val.length > 0;
      return val && val.toString().trim() !== '';
    });
  };

  const getOverallProgress = () => {
    let completedCount = 0;
    sections.forEach((sec) => {
      if (isSectionComplete(sec.fields)) completedCount++;
    });
    return Math.round((completedCount / sections.length) * 100);
  };

  const toggleAccordion = (idx) => {
    setActiveAccordion(activeAccordion === idx ? null : idx);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="flex flex-col gap-6 w-full text-left pb-16">
      {/* Progress header */}
      <div className="bg-white border-2 border-zinc-600 p-5 rounded-xl flex items-center justify-between gap-4">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-550">
            {isChinese ? '深度问卷完成率' : 'Deep Qs Progress'}
          </span>
          <span className="block font-serif text-2xl font-bold text-[#D4A853]">
            {getOverallProgress()}%
          </span>
        </div>
        <div className="w-1/2 bg-zinc-800 h-2 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#0F8A96] to-[#D4A853] transition-all duration-500" 
            style={{ width: `${getOverallProgress()}%` }} 
          />
        </div>
      </div>

      {/* 10 Collapsible Sections */}
      <div className="flex flex-col gap-4">
        {sections.map((section, idx) => {
          const isOpen = activeAccordion === idx;
          const isComplete = isSectionComplete(section.fields);
          
          return (
            <Card
              key={idx}
              variant="bordered"
              className={`border-2 border-l-4 overflow-hidden bg-white transition-all duration-300 !p-0 ${
                isOpen
                  ? 'border-l-[#0F8A96] border-zinc-600'
                  : isComplete
                    ? 'border-l-green-600 border-zinc-600'
                    : 'border-l-zinc-500 border-zinc-600'
              }`}
            >
              {/* Accordion Trigger */}
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                className="w-full px-5 py-4 flex items-center justify-between hover:bg-[#1a1a1a] transition-colors border-b border-zinc-200/50"
              >
                <div className="flex items-center gap-3">
                  {isComplete ? (
                    <CheckCircle className="w-5 h-5 text-green-500 fill-current bg-white rounded-full" />
                  ) : (
                    <Circle className="w-5 h-5 text-zinc-600" />
                  )}
                  <span className="font-serif text-sm md:text-base font-bold text-zinc-800">
                    {section.title}
                  </span>
                </div>
                {isOpen ? <ChevronUp className="w-4 h-4 text-zinc-450" /> : <ChevronDown className="w-4 h-4 text-zinc-450" />}
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="border-t-2 border-zinc-200 px-5 md:px-6 py-6 bg-[#0d0d0d] flex flex-col gap-6"
                  >
                    {/* Render fields depending on section index */}
                    {idx === 0 && (
                      <>
                        <Textarea
                          label={isChinese ? '感情历史简述 (最近的几段关系及持续时间)' : 'Brief relationship history (past relations, duration)'}
                          value={formData.pastRelationDetails}
                          onChange={(e) => setFormData({ ...formData, pastRelationDetails: e.target.value })}
                          placeholder={isChinese ? '例如：有过两段长期的恋爱关系...' : 'Describe past relationships...'}
                        />
                        <Textarea
                          label={isChinese ? '您在过往感情中学到了什么？' : 'What have you learned from past relationships?'}
                          value={formData.pastRelationLessons}
                          onChange={(e) => setFormData({ ...formData, pastRelationLessons: e.target.value })}
                        />
                        <Textarea
                          label={isChinese ? '您上一段关系结束的原因是什么？' : 'Why did your previous relationship end?'}
                          value={formData.whyPreviousEnded}
                          onChange={(e) => setFormData({ ...formData, whyPreviousEnded: e.target.value })}
                        />
                        <Textarea
                          label={isChinese ? '过往关系如何让您在情感上有所成长？' : 'How has it made you grow emotionally?'}
                          value={formData.emotionalGrownUp}
                          onChange={(e) => setFormData({ ...formData, emotionalGrownUp: e.target.value })}
                        />
                      </>
                    )}

                    {idx === 1 && (
                      <>
                        <RadioGroup
                          label={isChinese ? '您认为自己的依恋类型是？' : 'What is your attachment style?'}
                          name="attachmentStyle"
                          value={formData.attachmentStyle}
                          onChange={(val) => setFormData({ ...formData, attachmentStyle: val })}
                          options={[
                            { label: isChinese ? '安全型 (Secure)' : 'Secure', value: 'Secure' },
                            { label: isChinese ? '焦虑型 (Anxious)' : 'Anxious', value: 'Anxious' },
                            { label: isChinese ? '回避型 (Avoidant)' : 'Avoidant', value: 'Avoidant' },
                            { label: isChinese ? '混乱型 (Fearful)' : 'Fearful/Disorganized', value: 'Disorganized' }
                          ]}
                        />
                        <Textarea
                          label={isChinese ? '在感到压力或焦虑时，您通常如何排解？' : 'How do you handle stress or anxiety?'}
                          value={formData.handlingStress}
                          onChange={(e) => setFormData({ ...formData, handlingStress: e.target.value })}
                        />
                        <Textarea
                          label={isChinese ? '您期望伴侣在情感上如何给予支持？' : 'How do you expect partner support?'}
                          value={formData.supportNeededText}
                          onChange={(e) => setFormData({ ...formData, supportNeededText: e.target.value })}
                        />
                      </>
                    )}

                    {idx === 2 && (
                      <>
                        <Textarea
                          label={isChinese ? '您会用哪三个形容词来描述自己的性格特质？' : 'Three adjectives that describe your personality?'}
                          value={formData.personalityType}
                          onChange={(e) => setFormData({ ...formData, personalityType: e.target.value })}
                          placeholder="e.g. Empathetic, Independent, Analytical"
                        />
                        <RadioGroup
                          label={isChinese ? '您性格偏向内向还是外向？' : 'Are you more introverted or extroverted?'}
                          name="introvertExtrovert"
                          value={formData.introvertExtrovert}
                          onChange={(val) => setFormData({ ...formData, introvertExtrovert: val })}
                          options={[
                            { label: isChinese ? '非常内向' : 'Very Introverted', value: 'Introverted' },
                            { label: isChinese ? '趋于平衡' : 'Balanced / Ambivert', value: 'Ambivert' },
                            { label: isChinese ? '非常外向' : 'Very Extroverted', value: 'Extroverted' }
                          ]}
                        />
                        <Textarea
                          label={isChinese ? '关于您，亲近的朋友最欣赏您的是什么？' : 'What do friends appreciate most about you?'}
                          value={formData.selfDescription}
                          onChange={(e) => setFormData({ ...formData, selfDescription: e.target.value })}
                        />
                      </>
                    )}

                    {idx === 3 && (
                      <>
                        <RadioGroup
                          label={isChinese ? '您在职业事业上的抱负心' : 'Career ambition level?'}
                          name="careerAmbition"
                          value={formData.careerAmbition}
                          onChange={(val) => setFormData({ ...formData, careerAmbition: val })}
                          options={[
                            { label: isChinese ? '极强 (事业为重)' : 'Very ambitious (Career-focused)', value: 'High' },
                            { label: isChinese ? '平衡 (工作生活平衡)' : 'Balanced (Work-life harmony)', value: 'Medium' },
                            { label: isChinese ? '平稳 (家庭为主)' : 'Family/Lifestyle first', value: 'Low' }
                          ]}
                        />
                        <RadioGroup
                          label={isChinese ? '您的消费与理财观偏向于' : 'Your financial & spending values?'}
                          name="financialValues"
                          value={formData.financialValues}
                          onChange={(val) => setFormData({ ...formData, financialValues: val })}
                          options={[
                            { label: isChinese ? '节制积累 (Frugal/Investor)' : 'Saver / Investor', value: 'Saver' },
                            { label: isChinese ? '注重品质消费 (Quality oriented)' : 'Quality-of-life focused', value: 'Quality' },
                            { label: isChinese ? '慷慨体验 (Experience oriented)' : 'Experience oriented', value: 'Experience' }
                          ]}
                        />
                        <Textarea
                          label={isChinese ? '描述一个您最向往的周末度过方式' : 'Describe your ideal weekend habits.'}
                          value={formData.weekendHabits}
                          onChange={(e) => setFormData({ ...formData, weekendHabits: e.target.value })}
                        />
                      </>
                    )}

                    {idx === 4 && (
                      <>
                        <CheckboxGroup
                          label={isChinese ? '您的主要爱之语 (Love Language)' : 'Your primary Love Languages'}
                          value={formData.loveLanguages}
                          onChange={(val) => setFormData({ ...formData, loveLanguages: val })}
                          options={[
                            { label: isChinese ? '肯定的言语 (Words of Affirmation)' : 'Words of Affirmation', value: 'Words' },
                            { label: isChinese ? '高质量陪伴 (Quality Time)' : 'Quality Time', value: 'Time' },
                            { label: isChinese ? '接受礼物 (Receiving Gifts)' : 'Receiving Gifts', value: 'Gifts' },
                            { label: isChinese ? '服务的行动 (Acts of Service)' : 'Acts of Service', value: 'Service' },
                            { label: isChinese ? '身体接触 (Physical Touch)' : 'Physical Touch', value: 'Touch' }
                          ]}
                        />
                        <Textarea
                          label={isChinese ? '在以往感情中，您通常如何向伴侣表达爱意？' : 'How do you usually express love to your partner?'}
                          value={formData.howExpressLove}
                          onChange={(e) => setFormData({ ...formData, howExpressLove: e.target.value })}
                        />
                      </>
                    )}

                    {idx === 5 && (
                      <>
                        <Textarea
                          label={isChinese ? '您对未来5年的感情与家庭发展有什么具体设想？' : 'Five-year relationship & family vision?'}
                          value={formData.idealFiveYears}
                          onChange={(e) => setFormData({ ...formData, idealFiveYears: e.target.value })}
                        />
                        <Textarea
                          label={isChinese ? '您心目中的模范婚姻/长期伴侣关系是怎样的？' : 'Describe a relationship model you admire.'}
                          value={formData.marriageRoleModel}
                          onChange={(e) => setFormData({ ...formData, marriageRoleModel: e.target.value })}
                        />
                        <Textarea
                          label={isChinese ? '您对家庭家务分工及合作有何期望？' : 'Expectations on house chore splitting?'}
                          value={formData.choresAgreement}
                          onChange={(e) => setFormData({ ...formData, choresAgreement: e.target.value })}
                        />
                        <Textarea
                          label={isChinese ? '对于购房、定居或移居，您有什么原则性设想？' : 'Housing & relocation expectations?'}
                          value={formData.housingExpectation}
                          onChange={(e) => setFormData({ ...formData, housingExpectation: e.target.value })}
                        />
                      </>
                    )}

                    {idx === 6 && (
                      <>
                        <Textarea
                          label={isChinese ? '期望伴侣绝对必须具备的三个核心条件 (Must-haves)' : 'Three must-haves for your partner?'}
                          value={formData.partnerMustHaves}
                          onChange={(e) => setFormData({ ...formData, partnerMustHaves: e.target.value })}
                        />
                        <Textarea
                          label={isChinese ? '绝对无法接受的特质底线 (Deal-breakers)' : 'Your deal-breakers?'}
                          value={formData.partnerDealBreakers}
                          onChange={(e) => setFormData({ ...formData, partnerDealBreakers: e.target.value })}
                        />
                        <Textarea
                          label={isChinese ? '生活习惯上有什么完全无法调和的不匹配？' : 'Habit/lifestyle mismatches you cannot tolerate?'}
                          value={formData.lifestyleMismatches}
                          onChange={(e) => setFormData({ ...formData, lifestyleMismatches: e.target.value })}
                        />
                        <Textarea
                          label={isChinese ? '期望伴侣在精神、宗教或三观上的共鸣' : 'Core values alignment details?'}
                          value={formData.idealPartnerCoreValues}
                          onChange={(e) => setFormData({ ...formData, idealPartnerCoreValues: e.target.value })}
                        />
                      </>
                    )}

                    {idx === 7 && (
                      <>
                        <RadioGroup
                          label={isChinese ? '您遇到冲突或分歧时的主要处理习惯？' : 'Primary conflict resolution style?'}
                          name="conflictResolutionStyle"
                          value={formData.conflictResolutionStyle}
                          onChange={(val) => setFormData({ ...formData, conflictResolutionStyle: val })}
                          options={[
                            { label: isChinese ? '直接坦诚面对，倾听求同存异' : 'Direct discussion & active listening', value: 'Direct' },
                            { label: isChinese ? '冷静冷却，深思后再行理性沟通' : 'Cooldown before logical discussion', value: 'Rational' },
                            { label: isChinese ? '情绪回避或寻求旁人化解' : 'Avoidant or seek mediator', value: 'Avoidant' }
                          ]}
                        />
                        <Textarea
                          label={isChinese ? '举例说明最近一次您在关系中妥协的场景' : 'Give a scenario of how you compromise.'}
                          value={formData.conflictScenarioText}
                          onChange={(e) => setFormData({ ...formData, conflictScenarioText: e.target.value })}
                        />
                      </>
                    )}

                    {idx === 8 && (
                      <>
                        <Textarea
                          label={isChinese ? '您为什么认为目前是寻觅终身伴侣的黄金时间？' : 'Why is now the right time for commitment?'}
                          value={formData.readyReason}
                          onChange={(e) => setFormData({ ...formData, readyReason: e.target.value })}
                        />
                        <Textarea
                          label={isChinese ? '您觉得自己身上是否存在需要红娘提前知晓的包袱？' : 'Any personal factors/baggage matchmakers should know?'}
                          value={formData.baggageExplanation}
                          onChange={(e) => setFormData({ ...formData, baggageExplanation: e.target.value })}
                        />
                      </>
                    )}

                    {idx === 9 && (
                      <>
                        <RadioGroup
                          label={isChinese ? '您期望红娘团队在牵线匹配中扮演什么角色？' : 'Role of matchmaker in your process?'}
                          name="matchmakerHelpPref"
                          value={formData.matchmakerHelpPref}
                          onChange={(val) => setFormData({ ...formData, matchmakerHelpPref: val })}
                          options={[
                            { label: isChinese ? '严格的初选过滤与配对报告' : 'Filtering & detail reports', value: 'Filter' },
                            { label: isChinese ? '多维度的约会跟踪指导与情感疏导' : 'Date tracking & coaching', value: 'Coaching' },
                            { label: isChinese ? '全权管家式引荐安排' : 'Full-concierge introductions', value: 'Concierge' }
                          ]}
                        />
                        <Textarea
                          label={isChinese ? '任何额外想对红娘团队说的话' : 'Any extra comments?'}
                          value={formData.extraComments}
                          onChange={(e) => setFormData({ ...formData, extraComments: e.target.value })}
                        />
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          );
        })}
      </div>

      {/* Nav Actions */}
      <div className="flex gap-5 mt-6">
        <Button
          variant="secondary"
          size="lg"
          className="flex-1"
          onClick={onBack}
        >
          {isChinese ? '← 返回第一步' : '← Back to Step 1'}
        </Button>
        
        <Button
          variant="primary"
          size="lg"
          className="flex-1"
          onClick={handleSubmit}
        >
          <Send className="w-4 h-4 mr-2" />
          <span>{isChinese ? '提交完整申请档案' : 'Submit My Profile'}</span>
        </Button>
      </div>
    </div>
  );
};
