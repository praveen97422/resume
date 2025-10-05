import { PlaceHolderImages } from '@/lib/placeholder-images';

export const contactDetails = {
  email: 'praveenraj9008@gmail.com',
  phone: '9742269389',
  linkedin: 'https://www.linkedin.com/in/praveen-raj-r-3a8459279/',
};

export const projects = [
  {
    name: 'Dreams',
    description: 'A comprehensive web application for managing dreams and goals, featuring user authentication and a sleek interface.',
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
    description: 'A clean and modern personal portfolio website designed to elegantly display creative work and professional achievements.',
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
  'Cybersecurity',
  'CCNA',
  'Routing & Switching',
  'Network Security',
  'Firewalls',
  'React.js',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'Tailwind CSS',
  'Git',
  'VLANs',
  'WAN Technologies',
  'BGP',
  'OSPF',
  'VPN',
  'DNS',
  'DHCP',
  'Network Automation',
  'QoS',
  'MPLS'
];
