import React from 'react';
import { Facebook, Instagram, Linkedin, Rss, Youtube } from 'lucide-react';

interface SocialLink {
  name: string;
  href: string;
  bgColor: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  { 
    name: 'Facebook', 
    href: '#', 
    bgColor: 'bg-[#485a96]', 
    icon: <Facebook size={20} fill="currentColor" stroke="none" /> 
  },
  { 
    name: 'X', 
    href: '#', 
    bgColor: 'bg-[#0f1419]', 
    icon: <span className="text-xl font-bold">𝕏</span> 
  },
  { 
    name: 'LinkedIn', 
    href: '#', 
    bgColor: 'bg-[#238cc8]', 
    icon: <Linkedin size={20} fill="currentColor" stroke="none" /> 
  },
  { 
    name: 'Instagram', 
    href: '#', 
    bgColor: 'bg-[#d62d51]', 
    icon: <Instagram size={22} /> 
  },
  { 
    name: 'Flickr', 
    href: '#', 
    bgColor: 'bg-[#ff0084]', 
    icon: (
      <div className="flex gap-1">
        <div className="w-2 h-2 rounded-full bg-white" />
        <div className="w-2 h-2 rounded-full bg-white opacity-80" />
      </div>
    ) 
  },
  { 
    name: 'RSS', 
    href: '#', 
    bgColor: 'bg-[#f29111]', 
    icon: <Rss size={22} /> 
  },
  { 
    name: 'YouTube', 
    href: '#', 
    bgColor: 'bg-[#ff0000]', 
    icon: <Youtube size={22} fill="currentColor" stroke="none" /> 
  },
];

export const SocialBar: React.FC = () => {
  return (
    <div className="flex items-center gap-2 p-6 bg-[#0f172a] w-fit">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          aria-label={link.name}
          className={`
            ${link.bgColor} 
            w-8 h-8
            flex items-center justify-center 
            text-white 
            transition-all 
            duration-200 
            hover:brightness-110 
            hover:scale-105
          `}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};