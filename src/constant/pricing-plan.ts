export interface Plan {
  name: string;
  price: {
    monthly: number;
    annual: number;
  };
  featured: boolean;
  features: string[];
}

export const pricingPlans: Plan[] = [
  {
    name: "Basic",
    price: {
      monthly: 29,
      annual: 290,
    },
    featured: false,
    features: [
      "24/7 Customer Support",
      "Basic Medical Coverage",
      "Annual Health Check",
      "Email Notifications",
      "Limited Doctor Visits",
      "Generic Medicine Discounts",
      "Online Health Reports",
      "Access to Basic Wellness Tips",
    ],
  },
  {
    name: "Pro",
    price: {
      monthly: 59,
      annual: 590,
    },
    featured: true,
    features: [
      "Priority Customer Support",
      "Advanced Medical Coverage",
      "Biannual Health Check",
      "Home Doctor Visits (3/year)",
      "Email & SMS Notifications",
      "Brand Medicine Discounts",
      "Access to Diet Plans & Webinars",
      "Health Emergency Assistance (24/7)",
    ]
  },
  {
    name: "Premium",
    price: {
      monthly: 89,
      annual: 890,
    },
    featured: false,
    features: [
      "Dedicated Health Manager",
      "Comprehensive Medical & Dental Coverage",
      "Quarterly Full Body Health Check",
      "Unlimited Home Doctor Visits",
      "Email, SMS & App Push Notifications",
      "100% Medicine Reimbursement",
      "Custom Wellness Program",
      "VIP Access to Partner Hospitals",
      
     
    ],
  },
];
