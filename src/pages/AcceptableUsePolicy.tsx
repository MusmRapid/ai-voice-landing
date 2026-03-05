import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "1. Purpose",
    content: `This Acceptable Use Policy defines prohibited and restricted uses of the Humalogue Service. Humalogue provides AI agent technology to handle incoming calls and conversations. Users are responsible for the legality of all calls routed to Humalogue, including compliance with DNC, TCPA, GDPR, and communication laws at the point of call origination. Violation of this AUP may result in account suspension, termination, and legal action.`,
  },
  {
    title: "2. Prohibited Activities",
    content: `2.1 Illegal and Fraudulent Activities: Any activity violating federal, state, or international laws; Fraud, scams, money laundering; Phishing, identity theft; Hacking or unauthorized access`,
  },
  {
    title: "2.2 TCPA and Call Origination Compliance",
    content: `Users are solely responsible for ensuring all calls routed to Humalogue comply with TCPA, Do-Not-Call regulations, GDPR, TRAI, BTRC, and applicable communication laws. This includes: DNC registry checking (performed by user’s dialer/originating system); obtaining prior express written consent for calls to cell phones; honoring opt-outs within 48 hours; caller ID accuracy and legality; recording consent disclosure; and identifying the calling company and call purpose. Humalogue does not originate, place, or route calls—users route calls from their own infrastructure to Humalogue’s AI agents. Humalogue does not receive phone numbers before calls are connected and cannot verify DNC compliance. Users warrant that all incoming calls are lawfully placed with required consent.`,
  },
  {
    title: "2.3 AI Disclosure (Conditional)",
    content: `Humalogue provides AI agents to handle incoming calls routed by users. Users are responsible for any AI disclosures required by law. AI disclosure is required ONLY if needed to prevent deception (e.g., California AB 701). If the call recipient was already informed that they would speak with an AI system (in the campaign, original call routing, customer relationship, or contact), no additional AI disclosure is required. Users may not misrepresent AI as a human or conceal AI identity when deception would violate law. Users warrant that they have complied with all required disclosures for the underlying call before routing to Humalogue’s AI agents. Humalogue’s AI must always identify the calling company, state the call purpose, and offer transfer to a human representative upon request.`,
  },
  {
    title: "2.4 Harassment and Threats",
    content: `Threatening, harassing, bullying, or intimidating individuals; Abusive or sexually explicit communications; Hate speech; Coordinated harassment or doxxing`,
  },
  {
    title: "2.5 Data Privacy Violations",
    content: `Processing data without lawful basis or required consent; Unauthorized access to personal data; Selling or trafficking in personal information; Violating GDPR, CCPA, or POPIA`,
  },
  {
    title: "2.6 Intellectual Property and Platform Misuse",
    content: `Copyright or trademark infringement; Reverse-engineering or accessing source code; Interfering with Service availability; Creating multiple accounts to hide violations`,
  },
  {
    title: "3. Restricted Activities",
    content: `High-volume campaigns, international calling, financial services, collections, political campaigns, and healthcare outreach require explicit prior approval from compliance@humalogue.us.`,
  },
  {
    title: "4. Due Diligence",
    content: `By using the Service, you represent that your use is lawful, all contact data is obtained with consent, you understand TCPA and communication laws, and you are not on sanctions lists.`,
  },
  {
    title: "5. Monitoring and Enforcement",
    content: `Humalogue monitors for suspicious activity. We may immediately suspend accounts for illegal activity or emergency risk. For other violations, we provide 5 business days to cure. Appeals: compliance@humalogue.us.`,
  },
  {
    title: "6. Contact",
    content: `Questions or to report violations: compliance@humalogue.us or abuse@humalogue.us`,
  },
];

const AcceptableUsePolicy: React.FC = () => {
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
        Acceptable Use Policy
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

export default AcceptableUsePolicy;