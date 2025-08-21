
import React from 'react';
import { COMPANY_DATA } from '../constants';
import type { Officer, Shareholder } from '../types';

const InfoRow: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row py-3 border-b border-brand-gray-300">
    <dt className="w-full sm:w-1/3 md:w-1/4 font-semibold text-brand-gray-200">{label}</dt>
    <dd className="w-full sm:w-2/3 md:w-3/4 text-white mt-1 sm:mt-0">{value || '-'}</dd>
  </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-12">
        <h3 className="text-2xl font-bold text-brand-orange border-b-2 border-brand-orange/30 pb-2 mb-4">{title}</h3>
        {children}
    </div>
);

const CompanyInfo = () => {
  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Corporate Information</h2>
        <p className="mt-4 text-lg text-brand-gray-200 max-w-2xl mx-auto">Official business profile for HIVE LOGIC PTE. LTD.</p>
      </div>
      <div className="bg-brand-gray-400/30 border border-brand-gray-300 rounded-xl p-6 sm:p-10">
        
        <Section title="Business Profile">
            <dl>
                {Object.entries(COMPANY_DATA.profile).map(([key, value]) => <InfoRow key={key} label={key} value={value} />)}
            </dl>
        </Section>

        <Section title="Business Activities">
            <dl>
                {Object.entries(COMPANY_DATA.businessActivities).map(([key, value]) => <InfoRow key={key} label={key} value={value} />)}
            </dl>
        </Section>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
                <h3 className="text-2xl font-bold text-brand-orange border-b-2 border-brand-orange/30 pb-2 mb-4">Issued Share Capital</h3>
                <dl>
                    {Object.entries(COMPANY_DATA.shareCapital).map(([key, value]) => <InfoRow key={key} label={key} value={String(value)} />)}
                </dl>
            </div>
             <div>
                <h3 className="text-2xl font-bold text-brand-orange border-b-2 border-brand-orange/30 pb-2 mb-4">Paid-Up Capital</h3>
                <dl>
                    {Object.entries(COMPANY_DATA.paidUpCapital).map(([key, value]) => <InfoRow key={key} label={key} value={String(value)} />)}
                </dl>
            </div>
        </div>

        <Section title="Officers">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {COMPANY_DATA.officers.map((officer: Officer) => (
                    <div key={officer.id} className="bg-brand-gray-400/50 p-4 rounded-lg border border-brand-gray-300">
                        <h4 className="font-bold text-lg text-white">{officer.name}</h4>
                        <p className="text-brand-orange font-semibold">{officer.position}</p>
                        <p className="text-sm text-brand-gray-200 mt-2">{officer.address}</p>
                        <div className="mt-3 text-xs text-brand-gray-200 flex justify-between">
                            <span>ID: {officer.id}</span>
                            <span>Appointed: {officer.appointmentDate}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Section>

        <Section title="Shareholders">
            <div className="space-y-6">
                {COMPANY_DATA.shareholders.map((shareholder: Shareholder) => (
                     <div key={shareholder.id} className="bg-brand-gray-400/50 p-4 rounded-lg border border-brand-gray-300">
                        <div className="flex justify-between items-start">
                             <div>
                                <h4 className="font-bold text-lg text-white">{shareholder.name}</h4>
                                <p className="text-sm text-brand-gray-200">{shareholder.address}</p>
                                <p className="text-xs text-brand-gray-200 mt-1">ID: {shareholder.id} | Nationality: {shareholder.nationality}</p>
                             </div>
                             <div className="text-right ml-4 flex-shrink-0">
                                <p className="font-bold text-lg text-brand-orange">{shareholder.shares}</p>
                                <p className="text-sm text-brand-gray-100">{shareholder.currency}</p>
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
      </div>
    </section>
  );
};

export default CompanyInfo;
