import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "1. Purpose and Principles",
    content: `Humalogue is committed to responsible AI development and deployment. Our core principles: Transparency (users understand when interacting with AI), Accountability (humans remain responsible), Safety (AI must not cause harm), Fairness (no discrimination), Privacy (respect user data), Human Oversight (humans control and override).`,
  },
  {
    title: "2. AI Disclosure (Conditional Requirements)",
    content: `Humalogue provides AI agents to handle incoming calls routed by users. AI disclosure is required ONLY when necessary to prevent deception and comply with applicable law. If the call recipient was already informed they would speak with an AI system (in the campaign messaging, original call routing, customer agreement, or contact context), no additional disclosure is required.`,
  },
  {
    title: "2.1 When AI Disclosure IS Required",
    content: `California AB 701 and similar laws require disclosure when the AI voice is designed to deceive or mislead someone into thinking they’re speaking with a real person. If disclosure is required, it should be clear at the start of interaction: "This is an automated system." If the recipient already consented to speak with an automated system, additional disclosure may not be required.`,
  },
  {
    title: "2.2 When AI Disclosure is NOT Required",
    content: `No disclosure is required if: (a) the call recipient was informed in advance; (b) the calling company clearly identified itself and the system is obviously automated; (c) the call is internal/B2B; (d) the recipient explicitly consented.`,
  },
  {
    title: "2.3 User Responsibilities",
    content: `Users are responsible for determining whether AI disclosure is legally required for their specific use case. Users warrant compliance BEFORE routing calls. Humalogue AI agents must always identify the calling company and state the call purpose. Users may not misrepresent or conceal AI identity when doing so would violate law.`,
  },
  {
    title: "3. AI Model Governance",
    content: `Humalogue uses third-party AI models (OpenAI, Anthropic) or proprietary models developed with safeguards. Models are tested for bias, accuracy, and harmful outputs. Users should report problematic outputs to support@humalogue.us.`,
  },
  {
    title: "4. AI Limitations and User Responsibility",
    content: `AI systems may generate inaccurate, incomplete, or misleading information and may hallucinate facts. Users MUST review and approve AI-generated content before sending. Humalogue is not liable for inaccuracies in AI outputs. Users are responsible for ensuring compliance with laws and regulations.`,
  },
  {
    title: "5. Bias and Fairness",
    content: `AI models are tested for bias across protected characteristics. Training data is reviewed to remove biased patterns. Users must not use AI to discriminate. Users are responsible for reviewing AI outputs for bias.`,
  },
  {
    title: "6. Prohibited AI Uses",
    content: `Prohibited: Deepfakes or fabricated evidence; Impersonation without consent; Disinformation or election interference; Discrimination; Phishing or scams; Misleading health/legal/financial advice; Child exploitation material.`,
  },
  {
    title: "7. Transparency and Human Oversight",
    content: `Users can view AI models used, access audit logs, understand material decisions, request human review. Users must approve significant AI outputs. Humans can override AI recommendations. High-stakes decisions involve human review.`,
  },
  {
    title: "8. Data Handling in AI Systems",
    content: `User data is not used to train models without consent. Contact information is not shared with third parties. AI systems may use anonymized, aggregated data to improve performance.`,
  },
  {
    title: "9. Incident Response and Monitoring",
    content: `Humalogue monitors AI systems for violations. Users can report problematic behavior to support@humalogue.us. Violations may result in account suspension. If AI causes harm, Humalogue will investigate and take corrective action.`,
  },
  {
    title: "10. Contact",
    content: `Questions: ai-ethics@humalogue.us | Report safety concerns: safety@humalogue.us`,
  },
];

const ResponsibleAIPolicy: React.FC = () => {
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
        Responsible AI Policy
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

export default ResponsibleAIPolicy;