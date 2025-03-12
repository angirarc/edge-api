
import { JobStatus }  from '../models/jobs.model'
import type { Job } from '../models/jobs.model';

let jobs: Job[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    category: "Engineering",
    industry: "Technology",
    description: "Looking for an experienced software engineer to lead development of cloud-native applications.",
    salaryRange: "$120,000 - $180,000",
    company: "TechCorp Solutions",
    status: JobStatus.ACTIVE,
    postedBy: "Sarah Chen",
    postedOn: new Date('2024-01-15')
  },
  {
    id: 2,
    title: "Product Marketing Manager",
    category: "Marketing",
    industry: "Consumer Goods",
    description: "Drive product marketing strategy and execution for our consumer product line.",
    salaryRange: "$90,000 - $130,000",
    company: "BrandMax Inc",
    status: JobStatus.ACTIVE,
    postedBy: "Michael Rodriguez",
    postedOn: new Date('2024-01-16')
  },
  {
    id: 3,
    title: "Data Scientist",
    category: "Analytics",
    industry: "Healthcare",
    description: "Analyze complex healthcare datasets to drive clinical insights and improve patient outcomes.",
    salaryRange: "$100,000 - $150,000",
    company: "HealthTech Analytics",
    status: JobStatus.INACTIVE,
    postedBy: "Dr. James Wilson",
    postedOn: new Date('2024-01-17')
  },
  {
    id: 4,
    title: "UX/UI Designer",
    category: "Design",
    industry: "Technology",
    description: "Create intuitive and engaging user experiences for our mobile applications.",
    salaryRange: "$85,000 - $120,000",
    company: "AppDesign Co",
    status: JobStatus.ACTIVE,
    postedBy: "Emma Thompson",
    postedOn: new Date('2024-01-18')
  },
  {
    id: 5,
    title: "Financial Analyst",
    category: "Finance",
    industry: "Banking",
    description: "Perform financial modeling and analysis to support investment decisions.",
    salaryRange: "$75,000 - $110,000",
    company: "Global Finance Partners",
    status: JobStatus.ACTIVE,
    postedBy: "Robert Chang",
    postedOn: new Date('2024-01-19')
  },
  {
    id: 6,
    title: "DevOps Engineer",
    category: "Engineering",
    industry: "Technology",
    description: "Implement and maintain CI/CD pipelines and cloud infrastructure.",
    salaryRange: "$110,000 - $160,000",
    company: "CloudTech Solutions",
    status: JobStatus.ACTIVE,
    postedBy: "Alex Kumar",
    postedOn: new Date('2024-01-20')
  },
  {
    id: 7,
    title: "Sales Director",
    category: "Sales",
    industry: "Software",
    description: "Lead enterprise sales team and develop strategic client relationships.",
    salaryRange: "$130,000 - $200,000",
    company: "Enterprise Software Inc",
    status: JobStatus.ACTIVE,
    postedBy: "Jennifer Martinez",
    postedOn: new Date('2024-01-21')
  },
  {
    id: 8,
    title: "HR Manager",
    category: "Human Resources",
    industry: "Retail",
    description: "Oversee all aspects of human resources including recruitment and employee relations.",
    salaryRange: "$80,000 - $120,000",
    company: "Retail Giants Corp",
    status: JobStatus.SUSPENDED,
    postedBy: "David Wilson",
    postedOn: new Date('2024-01-22')
  },
  {
    id: 9,
    title: "Content Strategist",
    category: "Marketing",
    industry: "Media",
    description: "Develop and execute content strategy across multiple platforms.",
    salaryRange: "$70,000 - $100,000",
    company: "Digital Media Group",
    status: JobStatus.ACTIVE,
    postedBy: "Lisa Park",
    postedOn: new Date('2024-01-23')
  },
  {
    id: 10,
    title: "Machine Learning Engineer",
    category: "Engineering",
    industry: "Artificial Intelligence",
    description: "Build and deploy machine learning models for computer vision applications.",
    salaryRange: "$130,000 - $190,000",
    company: "AI Innovations Ltd",
    status: JobStatus.INACTIVE,
    postedBy: "Dr. Maria Garcia",
    postedOn: new Date('2024-01-24')
  },
  {
    id: 11,
    title: "Supply Chain Manager",
    category: "Operations",
    industry: "Manufacturing",
    description: "Optimize supply chain operations and manage vendor relationships.",
    salaryRange: "$90,000 - $140,000",
    company: "Global Manufacturing Co",
    status: JobStatus.ACTIVE,
    postedBy: "Thomas Lee",
    postedOn: new Date('2024-01-25')
  },
  {
    id: 12,
    title: "Mobile App Developer",
    category: "Engineering",
    industry: "Technology",
    description: "Develop native iOS applications using Swift and SwiftUI.",
    salaryRange: "$100,000 - $150,000",
    company: "MobileApp Tech",
    status: JobStatus.ACTIVE,
    postedBy: "Chris Johnson",
    postedOn: new Date('2024-01-26')
  },
  {
    id: 13,
    title: "Business Analyst",
    category: "Business",
    industry: "Consulting",
    description: "Analyze business processes and recommend improvements.",
    salaryRange: "$75,000 - $110,000",
    company: "Business Solutions Corp",
    status: JobStatus.ACTIVE,
    postedBy: "Rachel Kim",
    postedOn: new Date('2024-01-27')
  },
  {
    id: 14,
    title: "Project Manager",
    category: "Management",
    industry: "Construction",
    description: "Manage large-scale construction projects from inception to completion.",
    salaryRange: "$95,000 - $140,000",
    company: "BuildWell Construction",
    status: JobStatus.ACTIVE,
    postedBy: "Mark Anderson",
    postedOn: new Date('2024-01-28')
  },
  {
    id: 15,
    title: "Cybersecurity Engineer",
    category: "Engineering",
    industry: "Information Security",
    description: "Implement and maintain security measures to protect company assets.",
    salaryRange: "$120,000 - $180,000",
    company: "SecureNet Defense",
    status: JobStatus.ACTIVE,
    postedBy: "Kevin Zhang",
    postedOn: new Date('2024-01-29')
  },
  {
    id: 16,
    title: "Digital Marketing Specialist",
    category: "Marketing",
    industry: "E-commerce",
    description: "Execute digital marketing campaigns across multiple channels.",
    salaryRange: "$65,000 - $95,000",
    company: "E-commerce Solutions",
    status: JobStatus.ACTIVE,
    postedBy: "Sophie Brown",
    postedOn: new Date('2024-01-30')
  },
  {
    id: 17,
    title: "Cloud Architect",
    category: "Engineering",
    industry: "Technology",
    description: "Design and implement scalable cloud infrastructure solutions.",
    salaryRange: "$140,000 - $200,000",
    company: "Cloud Systems Inc",
    status: JobStatus.SUSPENDED,
    postedBy: "Andrew Mitchell",
    postedOn: new Date('2024-01-31')
  },
  {
    id: 18,
    title: "Research Scientist",
    category: "Research",
    industry: "Biotechnology",
    description: "Conduct research in molecular biology and drug development.",
    salaryRange: "$110,000 - $170,000",
    company: "BioTech Research",
    status: JobStatus.INACTIVE,
    postedBy: "Dr. Emily White",
    postedOn: new Date('2024-02-01')
  },
  {
    id: 19,
    title: "Customer Success Manager",
    category: "Customer Service",
    industry: "SaaS",
    description: "Manage client relationships and ensure customer satisfaction.",
    salaryRange: "$80,000 - $120,000",
    company: "SaaS Solutions Ltd",
    status: JobStatus.ACTIVE,
    postedBy: "Daniel Lee",
    postedOn: new Date('2024-02-02')
  },
  {
    id: 20,
    title: "Legal Counsel",
    category: "Legal",
    industry: "Legal Services",
    description: "Provide legal advice and ensure regulatory compliance.",
    salaryRange: "$130,000 - $190,000",
    company: "Legal Partners LLP",
    status: JobStatus.ACTIVE,
    postedBy: "Amanda Cohen",
    postedOn: new Date('2024-02-03')
  }
];

export default jobs;