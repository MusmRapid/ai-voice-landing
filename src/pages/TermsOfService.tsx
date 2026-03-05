import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "1. Description of Services",
    content: `Humalogue AI provides software that enables users to automate sales, outreach, and workflow tasks using artificial intelligence and integrations with third-party platforms.
The Services may include AI-generated messaging, workflow automation, campaign management, integrations, and AI agents that assist in communications. Users are solely responsible for the content and recipients of communications sent through the platform.`,
  },
  {
    title: "2. Eligibility",
    content: `You must be at least eighteen (18) years old and capable of forming legally binding agreements to use the Services. If you are using the Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.`,
  },
  {
    title: "3. User Responsibilities",
    content: `Users are solely responsible for all communications sent using the Services. Users must comply with all applicable laws and regulations and must maintain the confidentiality and security of their account credentials.
Users may not impersonate others, distribute malware, send deceptive communications, or otherwise misuse the platform.`,
  },
  {
    title: "4. Compliance with Communication Laws",
    content: `Users must comply with all applicable communication and privacy regulations including TCPA, CAN-SPAM, GDPR, PECR, TRAI rules, BTRC regulations, and similar laws. Humalogue does not originate calls; users are responsible for lawful placement, DNC compliance, opt-out handling, caller ID accuracy, and AI disclosure as required.`,
  },
  {
    title: "5. AI-Generated Content",
    content: `The Services may generate content using AI systems. AI-generated outputs may be inaccurate, incomplete, or inappropriate. Users are responsible for reviewing and approving AI-generated content before sending or publishing.`,
  },
  {
    title: "6. Third-Party Integrations",
    content: `The Services may integrate with third-party providers such as email platforms, CRM systems, messaging services, and social media networks. Use of such integrations is subject to the terms of those third parties.`,
  },
  {
    title: "7. Data Usage and Privacy",
    content: `Use of the Services is also governed by the Humalogue Privacy Policy. Users must ensure lawful processing of personal data and comply with applicable data protection regulations including GDPR and POPIA. For EU data, a DPA is required and available upon request.`,
  },
  {
    title: "8. Acceptable Use Policy",
    content: `Users may not conduct spam campaigns, phishing attacks, scams, harassment, or harmful communications. Humalogue reserves the right to investigate and suspend accounts without notice.`,
  },
  {
    title: "9. Intellectual Property",
    content: `All software, AI models, and related intellectual property are owned by Humalogue AI or licensors. Users receive a limited license to access and use the Services according to these Terms.`,
  },
  {
    title: "10. Fees and Payments",
    content: `Certain features may require payment. Users agree to provide accurate billing info. Fees are non-refundable unless required by law. Humalogue may update pricing with reasonable notice.`,
  },
  {
    title: "11. Suspension and Termination",
    content: `Humalogue may suspend or terminate accounts for violations, legal risks, or abusive activities. Users will receive notice and opportunity to cure violations except in urgent legal cases. Data may be retained 30 days for recovery.`,
  },
  {
    title: "12. Disclaimer of Warranties",
    content: `Services are provided “as is.” Humalogue makes no warranties regarding availability, AI accuracy, communication deliverability, or business outcomes. Disclaimers do not apply to gross negligence, fraud, or legally non-excludable liabilities.`,
  },
  {
    title: "13. Limitation of Liability",
    content: `Humalogue shall not be liable for indirect, incidental, special, or consequential damages. Total liability shall not exceed fees paid by the user in the preceding 12 months. Exceptions include gross negligence, fraud, IP infringement, or breach of confidentiality.`,
  },
  {
    title: "14. Indemnification",
    content: `Users agree to indemnify Humalogue AI and affiliates for third-party claims arising from their use of Services, communications, or violations of law. Exceptions include Humalogue’s gross negligence or software defects.`,
  },
  {
    title: "15. Modifications to the Terms",
    content: `Humalogue may update these Terms periodically. Material changes will have 30 days notice. Continued use after notice constitutes acceptance of revised Terms.`,
  },
  {
    title: "16. Governing Law",
    content: `These Terms shall be governed by the laws of Delaware. Arbitration under JAMS applies for disputes. Injunctive relief may be sought in Delaware courts for IP or confidentiality breaches.`,
  },
  {
    title: "17. Contact Information",
    content: `Humalogue AI | Email: team@humalogue.us`,
  },
  {
    title: "18. Telephony and Voice Communications",
    content: `Users are responsible for compliance with applicable telecommunication regulations. Humalogue does not provide telecom services.`,
  },
  {
    title: "19. AI Voice Agents and Automated Calling",
    content: `Humalogue may allow AI-powered voice agents. Users are responsible for supervision and lawful, ethical use.`,
  },
  {
    title: "20. AI Disclosure Requirements (Conditional)",
    content: `Disclosure is required only when necessary to comply with law, e.g., California AB 701. Users must follow disclosure laws before routing calls to Humalogue.`,
  },
  {
    title: "21. Call Recording and Monitoring",
    content: `Users must comply with call recording laws and obtain required consent before recording.`,
  },
  {
    title: "22. Prohibited Calling Practices",
    content: `Users may not conduct unlawful robocalls, spoof caller identities, or engage in fraudulent or abusive calling practices.`,
  },
  {
    title: "23. Third-Party Telephony Providers",
    content: `Humalogue is not responsible for telecom service delivery, routing reliability, or third-party restrictions.`,
  },
];

const TermsOfService: React.FC = () => {
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
        Terms of Service
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

export default TermsOfService;