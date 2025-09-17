import Link from 'next/link';
import { Linkedin, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Rajwant Morya</h3>
            <p className="text-sm text-muted-foreground">
              Social Media Manager & Digital Marketing Specialist
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="#about" className="block text-sm text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link href="#services" className="block text-sm text-muted-foreground hover:text-primary">
                Services
              </Link>
              <Link href="#portfolio" className="block text-sm text-muted-foreground hover:text-primary">
                Portfolio
              </Link>
              <Link href="#contact" className="block text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/in/moryarajwant/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Twitter className="w-4 h-4" />
                Twitter
              </a>
              <a
                href="mailto:contact@rajwantmorya.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Get in Touch</h4>
            <p className="text-sm text-muted-foreground">
              Ready to elevate your social media presence? Let's talk about your goals and how I can help you achieve them.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Rajwant Morya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
