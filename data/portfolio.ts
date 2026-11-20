import {
  BarChart3,
  Code2,
  GraduationCap,
  Globe2,
  Headset,
  Megaphone,
  Share2,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  summary: string;
  deliverables: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Digital marketing",
    summary:
      "Reach the right people and grow your visibility with digital campaigns shaped around your business goals.",
    deliverables: [
      "Search engine optimization (SEO)",
      "Pay-per-click advertising (PPC)",
      "Content marketing",
      "Email marketing",
    ],
    icon: Megaphone,
  },
  {
    title: "Social media management",
    summary:
      "Build a consistent, engaging social presence and turn your audience into a community around your brand.",
    deliverables: [
      "Content creation and scheduling",
      "Community engagement",
      "Social media strategy",
      "Performance reporting",
    ],
    icon: Share2,
  },
  {
    title: "Google My Business services",
    summary:
      "Help local customers find and trust your business on Google Search and Maps.",
    deliverables: [
      "Profile setup and optimization",
      "Reviews management",
      "Local SEO",
      "Insights and reporting",
    ],
    icon: BarChart3,
  },
  {
    title: "Business automation",
    summary:
      "Make everyday operations smoother, reduce repetitive work and give your team more room to focus.",
    deliverables: [
      "Workflow automation",
      "Process optimization",
      "Integration and connectivity",
      "Reporting and analytics",
    ],
    icon: Workflow,
  },
  {
    title: "Zoho solutions",
    summary:
      "Connect the tools you need to run your business, from customer relationships to finance and marketing.",
    deliverables: [
      "Zoho CRM",
      "Zoho Books",
      "Zoho Campaigns",
      "Custom Zoho workflows",
    ],
    icon: BarChart3,
  },
  {
    title: "Odoo ERP solutions",
    summary:
      "Bring essential business operations together in a flexible system designed to support your next stage of growth.",
    deliverables: [
      "Sales and CRM",
      "Inventory management",
      "Accounting and finance",
      "HR, payroll and POS systems",
    ],
    icon: BarChart3,
  },
  {
    title: "Web development",
    summary:
      "Create a clear, responsive web presence that helps customers understand and connect with your business.",
    deliverables: [
      "Business websites",
      "Responsive web design",
      "Landing pages",
      "Website updates and maintenance",
    ],
    icon: Globe2,
  },
  {
    title: "Software development",
    summary:
      "Build software around your workflows, customers and the problems your team needs to solve.",
    deliverables: [
      "Custom business software",
      "Web applications",
      "System integrations",
      "Ongoing improvements",
    ],
    icon: Code2,
  },
  {
    title: "IT support",
    summary:
      "Get practical help with everyday technology issues so your business can keep moving.",
    deliverables: [
      "Troubleshooting",
      "System setup and configuration",
      "Software and device support",
      "Maintenance and guidance",
    ],
    icon: Headset,
  },
  {
    title: "IT and software training",
    summary:
      "Build confidence using the tools and systems your team relies on every day.",
    deliverables: [
      "Software onboarding",
      "Team and user training",
      "Digital skills development",
      "Practical technology guidance",
    ],
    icon: GraduationCap,
  },
];

export const processSteps = [
  {
    title: "Discover",
    description: "We learn about your business, challenges and goals.",
  },
  {
    title: "Plan",
    description: "We analyze your needs and agree on a clear strategy.",
  },
  {
    title: "Develop",
    description: "We build and integrate a solution around your needs.",
  },
  {
    title: "Test",
    description: "We check quality, security and performance.",
  },
  {
    title: "Deploy",
    description: "We launch carefully and make sure you are ready.",
  },
  {
    title: "Support",
    description: "We stay available to support and improve the solution.",
  },
];
