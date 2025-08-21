import React from 'react';
import { DataProcessingIcon, CustomerServiceIcon, FinancialAutomationIcon } from './components/icons/Icons';
import type { Officer, Shareholder } from './types';

export const USE_CASES = [
  {
    icon: <DataProcessingIcon />,
    title: "Data Entry & Processing",
    description: "Automate the extraction and entry of data from documents, emails, and forms into your business systems with unparalleled accuracy.",
  },
  {
    icon: <CustomerServiceIcon />,
    title: "Customer Support",
    description: "Streamline customer service with AI-powered bots that handle queries, process requests, and escalate issues, freeing up your team for high-value interactions.",
  },
  {
    icon: <FinancialAutomationIcon />,
    title: "Finance & Accounting",
    description: "Automate invoice processing, expense reporting, and financial reconciliations to ensure compliance and improve financial visibility.",
  },
];

const officers: Officer[] = [
    {
        id: '1234567A',
        name: 'SHANUR RAHAMAN',
        position: 'Director',
        address: '123 Tech Street, Singapore 123456',
        appointmentDate: '01 Jan 2023',
    },
];

const shareholders: Shareholder[] = [
    {
        id: 'CORP001',
        name: 'HIVE LOGIC HOLDINGS PTE. LTD.',
        address: '123 Tech Street, Singapore 123456',
        nationality: 'Singapore',
        shares: '1,000,000',
        currency: 'SGD',
    },
];

export const COMPANY_DATA = {
    profile: {
        'Company Name': 'HIVE LOGIC PTE. LTD.',
        'Registration No.': '202312345A',
        'Company Type': 'Private Company Limited by Shares',
        'Incorporation Date': '01 Jan 2023',
        'Status': 'Live Company',
    },
    businessActivities: {
        'Primary Activity': '62011: Development of software for enterprise solutions (except games)',
        'Secondary Activity': '62019: Development of other software and programming activities n.e.c.',
    },
    shareCapital: {
        'Total Number of Issued Shares': '1,000,000',
        'Currency': 'Singapore Dollar (SGD)',
        'Share Type': 'Ordinary',
    },
    paidUpCapital: {
        'Amount': 'SGD 1,000,000',
        'Currency': 'Singapore Dollar (SGD)',
    },
    officers,
    shareholders,
};
