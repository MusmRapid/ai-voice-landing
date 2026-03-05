import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "1. Introduction",
    content: `Humalogue AI ("we," "us," "our," or "Company") is committed to protecting your privacy. 
This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service. 
Please read this Privacy Policy carefully. By accessing and using Humalogue, you acknowledge that you have read and understood this Privacy Policy.`,
  },
  {
    title: "2. Information We Collect",
    content: `2.1 Information You Provide Directly
- Account registration information (name, company, email, phone number)
- Billing and payment information (processed securely; we do not store full credit card numbers)
- Contact lists and personal data you upload for outreach (phone numbers, email addresses, names)
- Communications with our support team and usage data about your campaigns and interactions

2.2 Information Collected Automatically
- Log data (IP address, browser type, pages visited, time and date stamps)
- Device information (device type, operating system, unique device identifiers)
- Cookies and similar tracking technologies; Usage analytics and location information`,
  },
  {
    title: "3. Legal Basis for Processing",
    content: `For users in the EU, UK, or Africa: We process your personal data under contractual necessity, legitimate interest, consent, and legal obligation.
For California residents (CCPA): You have the right to know what personal information is collected, the right to delete, and the right to opt-out of sales (which we do not engage in).`,
  },
  {
    title: "4. How We Use Your Information",
    content: `To provide and improve the Service; process transactions; respond to inquiries; prevent fraud; monitor usage; comply with legal obligations; and send marketing communications (with consent).`,
  },
  {
    title: "5. Data Sharing and Disclosure",
    content: `5.1 Third-Party Service Providers
We share data with vendors who assist in operating the Service (cloud hosting, payment processors, analytics). These providers are contractually obligated to protect your data.

5.2 Legal Requirements and Business Transfers
We may disclose personal data if required by law or if Humalogue is involved in a merger or acquisition.`,
  },
  {
    title: "6. Data Retention",
    content: `Account data is retained during account tenure; Call logs for 90 days; Billing information for 7 years; Contact lists are deleted upon account termination.`,
  },
  {
    title: "7. Your Privacy Rights",
    content: `GDPR users have rights to access, rectify, erase, restrict processing, portability, object, withdraw consent, and lodge complaints. 
CCPA users have rights to know, delete, and opt-out. To exercise rights, contact privacy@humalogue.us.`,
  },
  {
    title: "8. Security",
    content: `We implement industry-standard technical and organizational measures including encryption, firewalls, and access controls. However, no method is 100% secure.`,
  },
  {
    title: "9. Contact Us",
    content: `Humalogue AI | Email: privacy@humalogue.us | Data Protection Officer: dpo@humalogue.us`,
  },
];

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-6 md:px-12 bg-lightBg text-lightText transition-colors duration-500">
      
      <div className="max-w-4xl mx-auto mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-heroLeft hover:text-yellowBrand font-medium text-sm md:text-base"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-heroLeft">
        Privacy Policy
      </h1>

      <div className="max-w-4xl mx-auto space-y-12">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-lightText">
              {section.title}
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-lightText/80 whitespace-pre-line">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;