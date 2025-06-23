import {
  BsCheckCircleFill,
  BsHeadset,
  BsPiggyBank,
  BsPeopleFill,
} from "react-icons/bs"

export const services = [
  {
    id: 1,
    title: "Home Insurance",
    description:
      "Protect your home and belongings with comprehensive coverage. Our home insurance policies cover property damage, theft, liability, and additional living expenses.",
    image: "/home.jpg",
    link: "/services/home",
    category: "property",
    features: [
      "Property Coverage",
      "Personal Belongings",
      "Liability Protection",
      "Additional Living Expenses",
    ],
    price: "Starting from $89/month",
    popular: false,
  },
  {
    id: 2,
    title: "Auto Insurance",
    description:
      "Drive with confidence knowing you're protected. Our auto insurance offers comprehensive coverage for accidents, theft, and liability with competitive rates.",
    image: "/auto.png",
    link: "/services/auto",
    category: "vehicle",
    features: [
      "Collision Coverage",
      "Comprehensive Coverage",
      "Liability Protection",
      "Uninsured Motorist",
    ],
    price: "Starting from $65/month",
    popular: true,
  },
  {
    id: 3,
    title: "Health Insurance",
    description:
      "Secure your health and financial well-being with our comprehensive health insurance plans. Coverage for medical expenses, prescriptions, and preventive care.",
    image: "/health.jpg",
    link: "/services/health",
    category: "health",
    features: [
      "Medical Coverage",
      "Prescription Drugs",
      "Preventive Care",
      "Emergency Services",
    ],
    price: "Starting from $199/month",
    popular: true,
  },
  {
    id: 4,
    title: "Business Insurance",
    description:
      "Protect your business from unexpected risks. Our business insurance covers property, liability, workers' compensation, and business interruption.",
    image: "/business.jpg",
    link: "/services/business",
    category: "business",
    features: [
      "General Liability",
      "Property Coverage",
      "Workers' Compensation",
      "Business Interruption",
    ],
    price: "Starting from $149/month",
    popular: false,
  },
  {
    id: 5,
    title: "Life Insurance",
    description:
      "Provide financial security for your loved ones. Our life insurance policies offer term and whole life options to meet your family's needs.",
    image: "/life.png",
    link: "/services/life",
    category: "life",
    features: [
      "Term Life Options",
      "Whole Life Coverage",
      "Beneficiary Protection",
      "Cash Value Building",
    ],
    price: "Starting from $25/month",
    popular: false,
  },
  {
    id: 6,
    title: "Travel Insurance",
    description:
      "Travel worry-free with comprehensive travel insurance. Coverage for trip cancellation, medical emergencies, and lost luggage worldwide.",
    image: "/travel.jpeg",
    link: "/services/travel",
    category: "specialty",
    features: [
      "Trip Cancellation",
      "Medical Emergency",
      "Baggage Protection",
      "Travel Delay",
    ],
    price: "Starting from $15/trip",
    popular: false,
  },
  {
    id: 7,
    title: "Property Insurance",
    description:
      "Comprehensive protection for your real estate investments. Coverage for rental properties, commercial buildings, and vacant land.",
    image: "/property.jpg",
    link: "/services/property",
    category: "property",
    features: [
      "Rental Property",
      "Commercial Buildings",
      "Liability Coverage",
      "Loss of Rent",
    ],
    price: "Starting from $120/month",
    popular: false,
  },
  {
    id: 8,
    title: "Disability Insurance",
    description:
      "Protect your income if you become unable to work. Our disability insurance provides financial support during recovery periods.",
    image: "../../public/disability.webp",
    link: "/services/disability",
    category: "health",
    features: [
      "Short-term Disability",
      "Long-term Disability",
      "Income Replacement",
      "Rehabilitation Benefits",
    ],
    price: "Starting from $45/month",
    popular: false,
  },
];

export const categories = [
  { id: "all", name: "All Services", count: services.length },
  {
    id: "property",
    name: "Property",
    count: services.filter((s) => s.category === "property").length,
  },
  {
    id: "vehicle",
    name: "Vehicle",
    count: services.filter((s) => s.category === "vehicle").length,
  },
  {
    id: "health",
    name: "Health & Life",
    count: services.filter(
      (s) => s.category === "health" || s.category === "life"
    ).length,
  },
  {
    id: "business",
    name: "Business",
    count: services.filter((s) => s.category === "business").length,
  },
  {
    id: "specialty",
    name: "Specialty",
    count: services.filter((s) => s.category === "specialty").length,
  },
];

export const benefits = [
    {
      icon: <BsCheckCircleFill size={24} />,
      title: "Trusted Protection",
      description: "A+ rated insurance companies with proven track records",
    },
    {
      icon: <BsHeadset size={24} />,
      title: "24/7 Support",
      description: "Round-the-clock customer service and claims assistance",
    },
    {
      icon: <BsPiggyBank size={24} />,
      title: "Competitive Rates",
      description: "Best prices with maximum coverage and benefits",
    },
    {
      icon: <BsPeopleFill size={24} />,
      title: "Expert Guidance",
      description: "Professional advisors to help you make informed decisions",
    },
  ]