import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from "react-icons/fi";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-header py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-header-foreground">
            SUM<span className="text-primary">IYA</span>
          </a>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-header-foreground/20 flex items-center justify-center text-header-foreground/70 hover:text-primary hover:border-primary transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-header-foreground/20 flex items-center justify-center text-header-foreground/70 hover:text-primary hover:border-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-header-foreground/20 flex items-center justify-center text-header-foreground/70 hover:text-primary hover:border-primary transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-header-foreground/60 text-sm flex items-center gap-1">
            © {currentYear} SUMIYA. Made with <FiHeart className="text-primary" size={14} /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
