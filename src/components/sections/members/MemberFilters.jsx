import React from 'react';
import { Search } from 'lucide-react';
import { Select } from '../../ui/Select';
import { Button } from '../../ui/Button';

export const MemberFilters = ({
  filters,
  onChange,
  onSearch,
  isChinese
}) => {
  const genderOptions = [
    { label: isChinese ? '全部性别' : 'All Genders', value: 'All' },
    { label: isChinese ? '男士' : 'Male', value: 'Male' },
    { label: isChinese ? '女士' : 'Female', value: 'Female' }
  ];

  const countryOptions = [
    { label: isChinese ? '全部国家' : 'All Countries', value: 'All' },
    { label: isChinese ? '澳大利亚' : 'Australia', value: 'Australia' },
    { label: isChinese ? '加拿大' : 'Canada', value: 'Canada' },
    { label: isChinese ? '美国' : 'United States', value: 'United States' },
    { label: isChinese ? '新加坡' : 'Singapore', value: 'Singapore' },
    { label: isChinese ? '英国' : 'United Kingdom', value: 'United Kingdom' },
    { label: isChinese ? '台湾' : 'Taiwan', value: 'Taiwan' },
    { label: isChinese ? '中国' : 'China', value: 'China' }
  ];

  const verifyOptions = [
    { label: isChinese ? '所有身份' : 'All Statuses', value: 'All' },
    { label: isChinese ? '基础认证' : 'Basic Verified', value: 'basic-verified' },
    { label: isChinese ? '尊贵认证' : 'Premium Verified', value: 'premium-verified' }
  ];

  return (
    <div className="w-full bg-[#141414] border border-zinc-800/80 rounded-2xl p-6 shadow-lg text-left relative z-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-end">
        {/* Gender Filter */}
        <Select
          label={isChinese ? '意向性别' : 'Preferred Gender'}
          value={filters.gender}
          onChange={(e) => onChange({ ...filters, gender: e.target.value })}
          options={genderOptions}
        />

        {/* Min Age Select */}
        <Select
          label={isChinese ? '最小年龄' : 'Min Age'}
          value={filters.minAge}
          onChange={(e) => onChange({ ...filters, minAge: Number(e.target.value) })}
          options={Array.from({ length: 33 }, (_, i) => {
            const age = i + 18;
            return { label: String(age), value: age };
          })}
        />

        {/* Max Age Select */}
        <Select
          label={isChinese ? '最大年龄' : 'Max Age'}
          value={filters.maxAge}
          onChange={(e) => onChange({ ...filters, maxAge: Number(e.target.value) })}
          options={Array.from({ length: 43 }, (_, i) => {
            const age = i + 28;
            return { label: String(age), value: age };
          })}
        />

        {/* Country Filter */}
        <Select
          label={isChinese ? '常住国家' : 'Residence Country'}
          value={filters.country}
          onChange={(e) => onChange({ ...filters, country: e.target.value })}
          options={countryOptions}
        />

        {/* Verification Status */}
        <Select
          label={isChinese ? '认证级别' : 'Verification Level'}
          value={filters.verificationStatus}
          onChange={(e) => onChange({ ...filters, verificationStatus: e.target.value })}
          options={verifyOptions}
        />
      </div>

      <div className="mt-5 flex justify-end gap-3 border-t border-zinc-850 pt-5">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onChange({ gender: 'All', minAge: 25, maxAge: 45, country: 'All', verificationStatus: 'All' })}
        >
          {isChinese ? '重置' : 'Reset'}
        </Button>
        <Button
          variant="primary"
          size="sm"
          className="px-6"
          onClick={onSearch}
        >
          <Search className="w-4 h-4 mr-2" />
          <span>{isChinese ? '搜索筛选' : 'Search Members'}</span>
        </Button>
      </div>
    </div>
  );
};
