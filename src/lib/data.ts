import { PlaceHolderImages } from '@/lib/placeholder-images';

export const contactDetails = {
  email: 'praveenraj9008@gmail.com',
  phone: '9742269389',
  linkedin: 'https://www.linkedin.com/in/praveen-raj-r-3a8459279/',
};

export const projects = [
  {
    name: 'Diwali Gifting for Progress.com',
    description: 'A corporate gifting web application for Diwali, created for Progress.com.',
    link: 'https://dreams-sigma.vercel.app/login',
    image: PlaceHolderImages.find(img => img.id === 'dreams-sigma'),
  },
  {
    name: 'Box Production',
    description: 'A corporate website for a production company, built to showcase their services, portfolio, and professional brand identity.',
    link: 'https://box-production.com/',
    image: PlaceHolderImages.find(img => img.id === 'box-production'),
  },
  {
    name: 'Havya',
    description: 'A feature-rich e-commerce and shopping application with a modern user interface.',
    link: 'https://havya.vercel.app/',
    image: PlaceHolderImages.find(img => img.id === 'havya'),
  },
  {
    name: 'NextStep',
    description: 'An engaging landing page for a startup, crafted to attract new users and potential investors with a compelling value proposition.',
    link: 'https://nextstep-ten-mu.vercel.app/',
    image: PlaceHolderImages.find(img => img.id === 'nextstep'),
  },
];

export const initialSkills = [
  'TCP/IP',
  'Routing & Switching',
  'BGP',
  'OSPF',
  'EIGRP',
  'MPLS',
  'VPN',
  'WAN Technologies',
  'VLANs',
  'STP',
  'HSRP',
  'VRRP',
  'GLBP',
  'QoS',
  'DNS',
  'DHCP',
  'Network Security',
  'Firewalls',
  'Network Automation',
  'Python',
  'React.js',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'Git',
  'CCNA',
  'Cybersecurity',
];
