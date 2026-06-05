import React, { useState } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Textarea } from '../components/ui/Textarea';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin, Clock, CheckCircle2, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '../components/seo/SEO';

export const ContactPage = ({ isChinese }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const subjectOptions = [
    { label: isChinese ? '一般咨询' : 'General Inquiry', value: 'General Inquiry' },
    { label: isChinese ? '预约红娘配对面谈' : 'Consultation Request', value: 'Consultation Request' },
    { label: isChinese ? '商务合作' : 'Partnership Opportunity', value: 'Partnership' },
    { label: isChinese ? '加入红娘团队/职业招聘' : 'Careers', value: 'Career' },
    { label: isChinese ? '其他' : 'Other', value: 'Other' }
  ];

  const validate = () => {
    const tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = isChinese ? '请填写姓名' : 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = isChinese ? '请填写有效的电子邮箱' : 'Valid email is required';
    }
    if (!formData.message.trim()) tempErrors.message = isChinese ? '请输入留言内容' : 'Message cannot be empty';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      // Simulate API submit
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: 'General Inquiry',
          message: ''
        });
      }, 1500);
    }
  };

  return (
    <PageWrapper className="w-full pt-20 text-left">
      <SEO
        title={isChinese ? '联系我们' : 'Contact Us'}
        description={isChinese ? '联系WuMa Match专属红娘客服团队。可通过电话、邮件或在线留言与我们取得联系。' : 'Contact the WuMa Match concierge team. Reach us via phone, email, or our online inquiry form for matchmaking support.'}
        isChinese={isChinese}
      />
      <SectionWrapper bg="dark">
        <div className="text-center max-w-6xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-800 mb-4">
            {isChinese ? '联系我们' : 'Contact Our Concierge'}
          </h1>
          <p className="text-sm md:text-base text-zinc-550 font-light max-w-3xl mx-auto leading-relaxed">
            {isChinese
              ? '如果您有任何关于红娘配对、实名申请或商务合作的疑问，欢迎随时留言或通过以下方式联络我们。'
              : 'Our concierge and senior matchmakers are ready to assist you. Drop us a note or visit our branches.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card variant="bordered" className="p-6 bg-white border-zinc-200/80 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-zinc-800 mb-6 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#0F8A96]" />
                <span>{isChinese ? '专属红娘客服' : 'Concierge Service'}</span>
              </h3>
              
              <div className="flex flex-col gap-5 text-xs md:text-sm text-zinc-550">

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-2xl bg-zinc-100 border border-zinc-200/80 shadow-sm flex items-center justify-center text-[#D4A853] flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-zinc-450 text-[10px] uppercase tracking-wider mb-0.5">{isChinese ? '电子邮箱' : 'Email Us'}</span>
                    <span className="text-zinc-800 font-medium text-sm">concierge@wumamatch.com</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-2xl bg-zinc-100 border border-zinc-200/80 shadow-sm flex items-center justify-center text-[#D4A853] flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-zinc-450 text-[10px] uppercase tracking-wider mb-0.5">{isChinese ? '热线电话' : 'Phone Call'}</span>
                    <span className="text-zinc-800 font-medium text-sm">+1 (800) 888-WUMA</span>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-2xl bg-zinc-100 border border-zinc-200/80 shadow-sm flex items-center justify-center text-[#D4A853] flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-zinc-450 text-[10px] uppercase tracking-wider mb-0.5">{isChinese ? '工作时间' : 'Office Hours'}</span>
                    <span className="text-zinc-800 font-medium text-sm">{isChinese ? '周一至周五 09:00 - 18:00 (当地时间)' : 'Monday – Friday  09:00 – 18:00 (Local Time)'}</span>
                  </div>
                </div>

                {/* Locations */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-2xl bg-zinc-100 border border-zinc-200/80 shadow-sm flex items-center justify-center text-[#D4A853] flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-zinc-450 text-[10px] uppercase tracking-wider mb-0.5">{isChinese ? '服务网点' : 'Global Locations'}</span>
                    <span className="text-zinc-800 text-sm leading-relaxed">
                      {isChinese ? (
                        <>
                          美国：旧金山、纽约 <br />
                          加拿大：温哥华 <br />
                          澳大利亚：悉尼、墨尔本 <br />
                          亚洲：新加坡、上海
                        </>
                      ) : (
                        <>
                          USA: San Francisco • New York <br />
                          Canada: Vancouver <br />
                          Australia: Sydney • Melbourne <br />
                          Asia: Singapore • Shanghai
                        </>
                      )}
                    </span>
                  </div>
                </div>

              </div>
            </Card>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 w-full">
            <Card variant="default" className="p-6 md:p-8 bg-white">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="font-serif text-lg font-bold text-zinc-800 border-b border-zinc-200/80 shadow-sm pb-3 mb-4">
                    {isChinese ? '给我们留言' : 'Send Us a Message'}
                  </h3>

                  <Input
                    label={isChinese ? '姓名' : 'Full Name'}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    error={errors.fullName}
                    placeholder={isChinese ? '您的称呼' : 'Enter your name'}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input
                      label={isChinese ? '电子邮箱' : 'Email Address'}
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      error={errors.email}
                      placeholder="email@example.com"
                    />
                    <Input
                      label={isChinese ? '电话号码 (选填)' : 'Phone Number (Optional)'}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <Select
                    label={isChinese ? '咨询主题' : 'Subject of Inquiry'}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    options={subjectOptions}
                  />

                  <Textarea
                    label={isChinese ? '留言信息' : 'Your Message'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    error={errors.message}
                    placeholder={isChinese ? '请输入您的问题，顾问红娘将尽快回复...' : 'Type your inquiries here...'}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full mt-2"
                    loading={loading}
                  >
                    {isChinese ? '发送留言' : 'Send Message'}
                  </Button>
                </form>
              ) : (
                /* Success feedback container */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center gap-4"
                >
                  <CheckCircle2 className="w-16 h-16 text-[#0F8A96] mb-2 animate-bounce" />
                  <h3 className="font-serif text-xl font-bold text-zinc-800">
                    {isChinese ? '留言发送成功！' : 'Message Sent Successfully'}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-550 max-w-sm leading-relaxed mb-6 font-light">
                    {isChinese
                      ? '感谢您的留言。我们的顾问红娘已收到您的留言信息，我们通常会在1个工作日内与您联络。'
                      : 'We have received your message. Our concierge team will review it and follow up within 1 business day.'}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                  >
                    {isChinese ? '再次发送' : 'Send Another Message'}
                  </Button>
                </motion.div>
              )}
            </Card>
          </div>

        </div>
      </SectionWrapper>
    </PageWrapper>
  );
};
export default ContactPage;
