import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { Input } from '../../ui/Input';
import { Select } from '../../ui/Select';
import { RadioGroup } from '../../ui/RadioGroup';
import { CheckboxGroup } from '../../ui/CheckboxGroup';
import { Button } from '../../ui/Button';
import { formSectionCardClass, formSectionTitleClass } from '../../../utils/formStyles';

export const Step1BasicInfo = ({ data, onNext, isChinese }) => {
  const [formData, setFormData] = useState({
    // About You
    fullName: data.fullName || '',
    gender: data.gender || '',
    dob: data.dob || '',
    nationality: data.nationality || '',
    languages: data.languages || [],
    phone: data.phone || '',
    email: data.email || '',
    residence: data.residence || '',

    // Physical & Personal
    height: data.height || '',
    bodyType: data.bodyType || '',
    relationshipStatus: data.relationshipStatus || '',
    singleDuration: data.singleDuration || '',
    hasChildren: data.hasChildren || '',
    childrenCount: data.childrenCount || '',
    childrenAgeRange: data.childrenAgeRange || [],
    childrenLiveWithYou: data.childrenLiveWithYou || '',
    education: data.education || '',
    occupation: data.occupation || '',

    // Intentions
    relationshipGoal: data.relationshipGoal || '',
    seriousness: data.seriousness || '',
    smoke: data.smoke || '',
    drink: data.drink || '',
    lifestyle: data.lifestyle || '',
    openToInternational: data.openToInternational || '',
    considerChildrenPartner: data.considerChildrenPartner || '',
    partnerAgeRange: data.partnerAgeRange || '',
    keyQualities: data.keyQualities || [],
  });

  const [errors, setErrors] = useState({});

  // Dropdown options
  const nationalityOptions = [
    { label: isChinese ? '中国 / 华人' : 'Chinese / Chinese Diaspora', value: 'Chinese' },
    { label: isChinese ? '美国' : 'United States', value: 'United States' },
    { label: isChinese ? '加拿大' : 'Canada', value: 'Canada' },
    { label: isChinese ? '澳大利亚' : 'Australia', value: 'Australia' },
    { label: isChinese ? '新加坡' : 'Singapore', value: 'Singapore' },
    { label: isChinese ? '英国' : 'United Kingdom', value: 'United Kingdom' },
    { label: isChinese ? '其他' : 'Other', value: 'Other' }
  ];

  const validate = () => {
    const tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = isChinese ? '请填写姓名' : 'Full Name is required';
    if (!formData.gender) tempErrors.gender = isChinese ? '请选择性别' : 'Gender is required';
    if (!formData.dob) tempErrors.dob = isChinese ? '请填写出生日期' : 'Date of Birth is required';
    if (!formData.nationality) tempErrors.nationality = isChinese ? '请选择国籍' : 'Nationality is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = isChinese ? '请填写有效的电子邮箱' : 'Valid email is required';
    }
    if (!formData.phone.trim()) tempErrors.phone = isChinese ? '请填写电话号码' : 'Phone number is required';
    if (!formData.residence.trim()) tempErrors.residence = isChinese ? '请填写常住国家与城市' : 'Residence details required';

    if (!formData.height) tempErrors.height = isChinese ? '请选择身高范围' : 'Height is required';
    if (!formData.relationshipStatus) tempErrors.relationshipStatus = isChinese ? '请选择婚姻状况' : 'Relationship Status is required';
    if (!formData.hasChildren) tempErrors.hasChildren = isChinese ? '请选择是否育有子女' : 'Children status is required';
    if (!formData.education) tempErrors.education = isChinese ? '请选择最高学历' : 'Highest education level is required';
    if (!formData.occupation.trim()) tempErrors.occupation = isChinese ? '请填写目前职业' : 'Occupation is required';

    if (!formData.relationshipGoal) tempErrors.relationshipGoal = isChinese ? '请选择择偶意向' : 'Relationship goal is required';
    if (!formData.seriousness) tempErrors.seriousness = isChinese ? '请选择诚意度' : 'Seriousness level is required';
    if (formData.keyQualities.length === 0) tempErrors.keyQualities = isChinese ? '请至少选择一项最看重的伴侣特质' : 'Select at least one quality';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onNext(formData);
    } else {
      // Scroll to first error
      const firstErrorKey = Object.keys(errors)[0];
      if (firstErrorKey) {
        const element = document.getElementsByName(firstErrorKey)[0];
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full text-left pb-16">
      {/* 1. About You */}
      <Card variant="bordered" className={formSectionCardClass}>
        <h3 className={formSectionTitleClass}>
          {isChinese ? '一、关于您 (About You)' : '1. About You'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
          {/* Row 1: Name + DOB */}
          <Input
            label={isChinese ? '真实姓名 (不会公开显示)' : 'Full Name (Kept Confidential)'}
            name="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            error={errors.fullName}
            placeholder={isChinese ? '例如：张伟' : 'e.g. John Doe'}
          />
          <Input
            label={isChinese ? '出生日期' : 'Date of Birth'}
            type="date"
            name="dob"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            error={errors.dob}
          />

          {/* Row 2: Nationality + Phone */}
          <Select
            label={isChinese ? '国籍/背景' : 'Nationality'}
            name="nationality"
            value={formData.nationality}
            onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
            options={nationalityOptions}
            error={errors.nationality}
            placeholder={isChinese ? '请选择国籍' : 'Select nationality'}
          />
          <Input
            label={isChinese ? '电话号码 (验证使用)' : 'Phone Number'}
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            error={errors.phone}
            placeholder="+1 (555) 000-0000"
          />

          {/* Row 3: Email + Residence */}
          <Input
            label={isChinese ? '电子邮箱 (联络使用)' : 'Email Address (Confidential)'}
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={errors.email}
            placeholder="name@example.com"
          />
          <Input
            label={isChinese ? '居住城市与国家' : 'City & Country of Residence'}
            name="residence"
            value={formData.residence}
            onChange={(e) => setFormData({ ...formData, residence: e.target.value })}
            error={errors.residence}
            placeholder={isChinese ? '例如：加拿大 温哥华' : 'e.g. Vancouver, Canada'}
          />

          {/* Row 4: Gender (full width) */}
          <div className="md:col-span-2">
            <RadioGroup
              label={isChinese ? '性别' : 'Gender'}
              name="gender"
              value={formData.gender}
              onChange={(val) => setFormData({ ...formData, gender: val })}
              error={errors.gender}
              inline
              options={[
                { label: isChinese ? '男士 (Male)' : 'Male', value: 'Male' },
                { label: isChinese ? '女士 (Female)' : 'Female', value: 'Female' }
              ]}
            />
          </div>

          {/* Row 5: Languages (full width) */}
          <div className="md:col-span-2">
            <CheckboxGroup
              label={isChinese ? '您会说的语言' : 'Languages You Speak'}
              value={formData.languages}
              onChange={(val) => setFormData({ ...formData, languages: val })}
              inline
              options={[
                { label: isChinese ? '英语' : 'English', value: 'English' },
                { label: isChinese ? '普通话' : 'Chinese (Mandarin)', value: 'Chinese' },
                { label: isChinese ? '粤语' : 'Cantonese', value: 'Cantonese' },
                { label: isChinese ? '西班牙语' : 'Spanish', value: 'Spanish' },
                { label: isChinese ? '法语' : 'French', value: 'French' },
                { label: isChinese ? '其他' : 'Other', value: 'Other' }
              ]}
            />
          </div>
        </div>
      </Card>

      {/* 2. Physical & Personal */}
      <Card variant="bordered" className={formSectionCardClass}>
        <h3 className={formSectionTitleClass}>
          {isChinese ? '二、身体及个人背景 (Physical & Personal)' : '2. Physical & Personal'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">

          {/* Height (full width) */}
          <div className="md:col-span-2">
            <RadioGroup
              label={isChinese ? '身高范围' : 'Height Range'}
              name="height"
              value={formData.height}
              onChange={(val) => setFormData({ ...formData, height: val })}
              error={errors.height}
              inline
              options={[
                { label: 'Under 155cm', value: 'Under 155cm' },
                { label: '155–163cm', value: '155–163cm' },
                { label: '165–173cm', value: '165–173cm' },
                { label: '175–183cm', value: '175–183cm' },
                { label: '185cm+', value: '185cm+' }
              ]}
            />
          </div>

          {/* Body Type + Relationship Status side by side */}
          <RadioGroup
            label={isChinese ? '体型 (选填)' : 'Body Type (Optional)'}
            name="bodyType"
            value={formData.bodyType}
            onChange={(val) => setFormData({ ...formData, bodyType: val })}
            inline
            options={[
              { label: isChinese ? '苗条' : 'Slim', value: 'Slim' },
              { label: isChinese ? '匀称' : 'Average', value: 'Average' },
              { label: isChinese ? '运动健美' : 'Athletic', value: 'Athletic' },
              { label: isChinese ? '丰满' : 'Curvy', value: 'Curvy' },
            ]}
          />
          <RadioGroup
            label={isChinese ? '目前婚姻状况' : 'Relationship Status'}
            name="relationshipStatus"
            value={formData.relationshipStatus}
            onChange={(val) => setFormData({ ...formData, relationshipStatus: val })}
            error={errors.relationshipStatus}
            inline
            options={[
              { label: isChinese ? '单身' : 'Single', value: 'Single' },
              { label: isChinese ? '离异' : 'Divorced', value: 'Divorced' },
              { label: isChinese ? '丧偶' : 'Widowed', value: 'Widowed' }
            ]}
          />

          {/* Single Duration + Children side by side */}
          <RadioGroup
            label={isChinese ? '单身时长' : 'How long single?'}
            name="singleDuration"
            value={formData.singleDuration}
            onChange={(val) => setFormData({ ...formData, singleDuration: val })}
            inline
            options={[
              { label: isChinese ? '少于半年' : 'Under 6 months', value: 'Under 6 months' },
              { label: isChinese ? '半年到2年' : '6 months - 2 years', value: '6 months - 2 years' },
              { label: isChinese ? '2年以上' : '2+ years', value: '2+ years' }
            ]}
          />
          <RadioGroup
            label={isChinese ? '是否有子女？' : 'Do you have children?'}
            name="hasChildren"
            value={formData.hasChildren}
            onChange={(val) => setFormData({ ...formData, hasChildren: val })}
            error={errors.hasChildren}
            inline
            options={[
              { label: isChinese ? '有 (Yes)' : 'Yes', value: 'Yes' },
              { label: isChinese ? '没有 (No)' : 'No', value: 'No' }
            ]}
          />

          {/* Conditional children questions */}
          {formData.hasChildren === 'Yes' && (
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 border-2 border-zinc-600 bg-[#0a0a0a] p-5 rounded-xl">
              <RadioGroup
                label={isChinese ? '子女数量' : 'Number of Children'}
                name="childrenCount"
                value={formData.childrenCount}
                onChange={(val) => setFormData({ ...formData, childrenCount: val })}
                inline
                options={[
                  { label: '1', value: '1' },
                  { label: '2', value: '2' },
                  { label: '3+', value: '3+' }
                ]}
              />
              <CheckboxGroup
                label={isChinese ? '子女年龄段' : 'Children Age Range'}
                value={formData.childrenAgeRange}
                onChange={(val) => setFormData({ ...formData, childrenAgeRange: val })}
                inline
                options={[
                  { label: isChinese ? '幼儿 (0-6岁)' : 'Toddler (0-6)', value: 'Toddler' },
                  { label: isChinese ? '学龄儿童 (7-12岁)' : 'Child (7-12)', value: 'Child' },
                  { label: isChinese ? '青少年 (13-18岁)' : 'Teenager (13-18)', value: 'Teenager' },
                  { label: isChinese ? '成年 (18+)' : 'Adult (18+)', value: 'Adult' }
                ]}
              />
              <RadioGroup
                label={isChinese ? '子女是否与您同住？' : 'Do they live with you?'}
                name="childrenLiveWithYou"
                value={formData.childrenLiveWithYou}
                onChange={(val) => setFormData({ ...formData, childrenLiveWithYou: val })}
                inline
                options={[
                  { label: isChinese ? '是' : 'Yes', value: 'Yes' },
                  { label: isChinese ? '否' : 'No', value: 'No' },
                  { label: isChinese ? '共同监护' : 'Shared', value: 'Shared' }
                ]}
              />
            </div>
          )}

          {/* Education + Occupation side by side */}
          <RadioGroup
            label={isChinese ? '最高教育程度' : 'Highest Education'}
            name="education"
            value={formData.education}
            onChange={(val) => setFormData({ ...formData, education: val })}
            error={errors.education}
            inline
            options={[
              { label: isChinese ? '学士' : "Bachelor's", value: 'Bachelor' },
              { label: isChinese ? '硕士' : "Master's", value: 'Master' },
              { label: isChinese ? '博士 / PhD' : 'Doctorate / PhD', value: 'Doctorate' },
              { label: isChinese ? '专科及其他' : 'Associate / Other', value: 'Other' }
            ]}
          />
          <Input
            label={isChinese ? '目前具体职业' : 'Current Occupation'}
            name="occupation"
            value={formData.occupation}
            onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
            error={errors.occupation}
            placeholder={isChinese ? '例如：执业医师' : 'e.g. Cardiologist / Marketing Director'}
          />

        </div>
      </Card>

      {/* 3. Your Intentions */}
      <Card variant="bordered" className={formSectionCardClass}>
        <h3 className={formSectionTitleClass}>
          {isChinese ? '三、寻找愿景与习惯 (Your Intentions)' : '3. Your Intentions'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">

          {/* Relationship Goal (full width) */}
          <div className="md:col-span-2">
            <RadioGroup
              label={isChinese ? '您正在寻找什么关系？' : 'What are you looking for?'}
              name="relationshipGoal"
              value={formData.relationshipGoal}
              onChange={(val) => setFormData({ ...formData, relationshipGoal: val })}
              error={errors.relationshipGoal}
              inline
              options={[
                { label: isChinese ? '严肃长远的婚姻关系' : 'Serious marriage / relationship', value: 'Serious relationship' },
                { label: isChinese ? '开放探索的恋爱态度' : 'Open to exploring possibilities', value: 'Open to exploring' }
              ]}
            />
          </div>

          {/* Seriousness (full width) */}
          <div className="md:col-span-2">
            <RadioGroup
              label={isChinese ? '您寻偶的认真严肃程度' : 'How serious are you?'}
              name="seriousness"
              value={formData.seriousness}
              onChange={(val) => setFormData({ ...formData, seriousness: val })}
              error={errors.seriousness}
              inline
              options={[
                { label: isChinese ? '非常严肃 (成家意向极强)' : 'Very serious (Ready to settle down)', value: 'Very serious' },
                { label: isChinese ? '开放接触且持谨慎态度' : 'Open but selective', value: 'Open but selective' },
                { label: isChinese ? '目前正处于探索阶段' : 'Just exploring', value: 'Just exploring' }
              ]}
            />
          </div>

          {/* Smoke + Drink side by side */}
          <RadioGroup
            label={isChinese ? '吸烟习惯' : 'Do you smoke?'}
            name="smoke"
            value={formData.smoke}
            onChange={(val) => setFormData({ ...formData, smoke: val })}
            inline
            options={[
              { label: isChinese ? '从不' : 'Never', value: 'Never' },
              { label: isChinese ? '有时' : 'Occasionally', value: 'Occasionally' }
            ]}
          />
          <RadioGroup
            label={isChinese ? '饮酒习惯' : 'Do you drink?'}
            name="drink"
            value={formData.drink}
            onChange={(val) => setFormData({ ...formData, drink: val })}
            inline
            options={[
              { label: isChinese ? '从不' : 'Never', value: 'Never' },
              { label: isChinese ? '社交饮酒' : 'Socially', value: 'Socially' }
            ]}
          />

          {/* Lifestyle (full width) */}
          <div className="md:col-span-2">
            <RadioGroup
              label={isChinese ? '您的生活作息' : 'Your Lifestyle'}
              name="lifestyle"
              value={formData.lifestyle}
              onChange={(val) => setFormData({ ...formData, lifestyle: val })}
              inline
              options={[
                { label: isChinese ? '偏向宅家' : 'Home-oriented', value: 'Home-oriented' },
                { label: isChinese ? '作息规律平衡' : 'Balanced', value: 'Balanced' },
                { label: isChinese ? '热衷社交' : 'Very social', value: 'Very social' }
              ]}
            />
          </div>

          {/* Open to Intl + Partner with children side by side */}
          <RadioGroup
            label={isChinese ? '接受跨国恋爱？' : 'Open to international relationship?'}
            name="openToInternational"
            value={formData.openToInternational}
            onChange={(val) => setFormData({ ...formData, openToInternational: val })}
            inline
            options={[
              { label: isChinese ? '接受' : 'Yes', value: 'Yes' },
              { label: isChinese ? '可能' : 'Maybe', value: 'Maybe' },
              { label: isChinese ? '不接受' : 'No', value: 'No' }
            ]}
          />
          <RadioGroup
            label={isChinese ? '接受有子女的伴侣？' : 'Partner with children?'}
            name="considerChildrenPartner"
            value={formData.considerChildrenPartner}
            onChange={(val) => setFormData({ ...formData, considerChildrenPartner: val })}
            inline
            options={[
              { label: isChinese ? '愿意' : 'Yes', value: 'Yes' },
              { label: isChinese ? '可能' : 'Maybe', value: 'Maybe' },
              { label: isChinese ? '不考虑' : 'No', value: 'No' }
            ]}
          />

          {/* Partner Age Range (full width) */}
          <div className="md:col-span-2">
            <RadioGroup
              label={isChinese ? '期望的伴侣年龄段' : 'Preferred Partner Age Range'}
              name="partnerAgeRange"
              value={formData.partnerAgeRange}
              onChange={(val) => setFormData({ ...formData, partnerAgeRange: val })}
              inline
              options={[
                { label: '22–30', value: '22-30' },
                { label: '30–38', value: '30-38' },
                { label: '38–46', value: '38-46' },
                { label: '46+', value: '46+' }
              ]}
            />
          </div>

          {/* Key Qualities (full width) */}
          <div className="md:col-span-2">
            <CheckboxGroup
              label={isChinese ? '最看重伴侣哪些核心特质？ (限选两项)' : 'Which matters most in a partner? (Max 2)'}
              value={formData.keyQualities}
              onChange={(val) => setFormData({ ...formData, keyQualities: val })}
              maxSelected={2}
              error={errors.keyQualities}
              inline
              options={[
                { label: isChinese ? '善良温和 (Kindness)' : 'Kindness', value: 'Kindness' },
                { label: isChinese ? '忠诚可靠 (Loyalty)' : 'Loyalty', value: 'Loyalty' },
                { label: isChinese ? '顾家观念 (Family-oriented)' : 'Family-oriented', value: 'Family-oriented' },
                { label: isChinese ? '情绪成熟 (Emotional Maturity)' : 'Emotional Maturity', value: 'Emotional Maturity' },
                { label: isChinese ? '独立进取 (Independence)' : 'Independence', value: 'Independence' }
              ]}
            />
          </div>

        </div>
      </Card>

      <div className="flex justify-end">
        <Button
          type="submit"
          variant="primary"
          size="md"
          className="shadow-lg"
        >
          {isChinese ? '继续第二步 →' : 'Continue to Step 2 →'}
        </Button>
      </div>
    </form>
  );
};
