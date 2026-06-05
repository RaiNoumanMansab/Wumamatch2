import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../components/layout/PageWrapper';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { StepIndicator } from '../components/sections/registration/StepIndicator';
import { Step1BasicInfo } from '../components/sections/registration/Step1BasicInfo';
import { Step2DeepProfile } from '../components/sections/registration/Step2DeepProfile';
import { useFormStep } from '../hooks/useFormStep';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CheckCircle2, Clock, Mail, ShieldAlert } from 'lucide-react';
import { SEO } from '../components/seo/SEO';

export const RegistrationPage = ({ isChinese }) => {
  const navigate = useNavigate();
  const { currentStep, nextStep, prevStep, goToStep } = useFormStep(1, 2);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State Store
  const [formData, setFormData] = useState({
    // Step 1
    fullName: '',
    gender: '',
    dob: '',
    nationality: '',
    languages: [],
    phone: '',
    email: '',
    residence: '',
    height: '',
    bodyType: '',
    relationshipStatus: '',
    singleDuration: '',
    hasChildren: '',
    childrenCount: '',
    childrenAgeRange: [],
    childrenLiveWithYou: '',
    education: '',
    occupation: '',
    relationshipGoal: '',
    seriousness: '',
    smoke: '',
    drink: '',
    lifestyle: '',
    openToInternational: '',
    considerChildrenPartner: '',
    partnerAgeRange: '',
    keyQualities: [],

    // Step 2
    pastRelationDetails: '',
    pastRelationLessons: '',
    whyPreviousEnded: '',
    emotionalGrownUp: '',
    attachmentStyle: '',
    handlingStress: '',
    supportNeededText: '',
    personalityType: '',
    introvertExtrovert: '',
    selfDescription: '',
    careerAmbition: '',
    financialValues: '',
    weekendHabits: '',
    loveLanguages: [],
    howExpressLove: '',
    idealFiveYears: '',
    marriageRoleModel: '',
    choresAgreement: '',
    housingExpectation: '',
    partnerMustHaves: '',
    partnerDealBreakers: '',
    lifestyleMismatches: '',
    idealPartnerCoreValues: '',
    conflictResolutionStyle: '',
    conflictScenarioText: '',
    readyReason: '',
    baggageExplanation: '',
    matchmakerHelpPref: '',
    extraComments: '',
  });

  const handleStep1Submit = (step1Data) => {
    setFormData((prev) => ({ ...prev, ...step1Data }));
    nextStep();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStep2Submit = (step2Data) => {
    // Collect all final fields
    const finalData = { ...formData, ...step2Data };
    setFormData(finalData);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageWrapper className="w-full pt-20">
      <SEO
        title={isChinese ? '申请加入' : 'Join WuMa Match'}
        description={isChinese ? '提交您的WuMa Match实名会员申请，开启专属红娘配对之旅。我们只接受以婚姻为目标的严肃申请。' : 'Apply to join WuMa Match and begin your curated matchmaking journey. We only accept serious applicants committed to finding a life partner.'}
        isChinese={isChinese}
      />
      <SectionWrapper bg="dark" className="!px-4 md:!px-6 lg:!px-8">
        {!isSubmitted ? (
          <div className="max-w-6xl mx-auto w-full px-2 sm:px-4">
            {/* Step Indicator */}
            <StepIndicator currentStep={currentStep} isChinese={isChinese} />

            {/* Conditionally render forms */}
            {currentStep === 1 ? (
              <Step1BasicInfo
                data={formData}
                onNext={handleStep1Submit}
                isChinese={isChinese}
              />
            ) : (
              <Step2DeepProfile
                data={formData}
                onBack={prevStep}
                onSubmit={handleStep2Submit}
                isChinese={isChinese}
              />
            )}
          </div>
        ) : (
          /* Submission success state screen */
          <div className="max-w-xl mx-auto py-12 text-center flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', duration: 0.6 }}
              className="mb-8 bg-[#E6F7F6]/30 border border-[#0F8A96]/40 p-4 rounded-full"
            >
              <CheckCircle2 className="w-16 h-16 text-[#0F8A96]" />
            </motion.div>

            <h2 className="font-serif text-3xl font-bold text-zinc-800 mb-4">
              {isChinese ? '档案提交成功！' : 'Profile Submitted Successfully'}
            </h2>
            
            <p className="text-xs md:text-sm text-zinc-550 leading-relaxed mb-8 font-light">
              {isChinese
                ? '感谢您对 WuMa Match 的信任。我们只服务真诚严肃且以结婚为目的的会员。红娘顾问团队已收到您的档案，并在开始人脸实名审查。'
                : 'Thank you for your application to join WuMa Match. We are dedicated to maintaining a high-caliber community. Our review process has begun.'}
            </p>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 text-left mb-10">
              <Card variant="default" className="p-4 bg-white border-zinc-200/80 shadow-sm">
                <Clock className="w-5 h-5 text-[#D4A853] mb-3" />
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-800 mb-2">{isChinese ? '资料核实' : 'Profile Review'}</h4>
                <p className="text-[11px] text-zinc-550 leading-relaxed">
                  {isChinese ? '红娘团队将在24小时内审核您的材料。' : 'Reviewing background details within 24 hours.'}
                </p>
              </Card>

              <Card variant="default" className="p-4 bg-white border-zinc-200/80 shadow-sm">
                <Mail className="w-5 h-5 text-[#D4A853] mb-3" />
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-800 mb-2">{isChinese ? '邮箱邀请' : 'Email Invitation'}</h4>
                <p className="text-[11px] text-zinc-550 leading-relaxed">
                  {isChinese ? '通过后我们将发送1对1红娘沟通链接。' : 'Consultation scheduling link sent to verified emails.'}
                </p>
              </Card>

              <Card variant="default" className="p-4 bg-white border-zinc-200/80 shadow-sm">
                <ShieldAlert className="w-5 h-5 text-[#D4A853] mb-3" />
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-800 mb-2">{isChinese ? '身份安全' : 'Liveness check'}</h4>
                <p className="text-[11px] text-zinc-550 leading-relaxed">
                  {isChinese ? '首次见面需提供驾照/护照完成人脸认证。' : 'Veriff live liveness check required on onboarding.'}
                </p>
              </Card>
            </div>

            <div className="flex gap-4">
              <Button
                variant="primary"
                onClick={() => navigate('/members')}
              >
                {isChinese ? '浏览其他已认证档案' : 'Browse Verified Members'}
              </Button>
              <Button
                variant="secondary"
                onClick={() => navigate('/')}
              >
                {isChinese ? '返回首页' : 'Back Home'}
              </Button>
            </div>
          </div>
        )}
      </SectionWrapper>
    </PageWrapper>
  );
};
export default RegistrationPage;
