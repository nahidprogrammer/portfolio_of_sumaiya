import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiChevronDown } from "react-icons/fi";
import profileImage from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-32 left-16 geometric-square animate-float hidden lg:block" />
      <div className="absolute top-40 right-20 w-32 h-32 border-2 border-primary/30 rounded-full hidden lg:block" />
      <div className="absolute top-48 right-40 w-8 h-8 border border-primary/40 rotate-45 hidden lg:block" />

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-up">
            <span className="badge-available">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for work
            </span>

            <div className="space-y-2">
              <p className="text-muted-foreground text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                SUM<span className="text-primary">IYA</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium flex items-center gap-2">
                <span className="text-muted-foreground">&lt;</span>
                Frontend Developer
                <span className="text-muted-foreground">/&gt;</span>
              </p>
            </div>

            <p className="text-muted-foreground max-w-md leading-relaxed">
              Crafting pixel-perfect, responsive web experiences with modern
              technologies. I turn complex problems into elegant, user-friendly
              solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="btn-primary">
                Let's Talk <FiArrowRight />
              </a>
              <a href="#projects" className="btn-outline">
                View Work
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6">
              <span className="text-muted-foreground text-sm">Follow me</span>
              <div className="w-8 h-px bg-muted-foreground/30" />
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label="Twitter"
                >
                  <FiTwitter size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* React Badge */}
              <span className="absolute -top-4 left-10 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium z-10 shadow-lg">
                React
              </span>

              {/* Profile Image with Ring */}
              <div className="profile-ring">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl">
                  <img
                    src={profileImage}
                    alt="SUMIYA - Frontend Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Experience Badge */}
              <span className="absolute -bottom-2 right-0 bg-card text-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-border">
                3+ Years Exp
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator - Centered at bottom */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-sm">Scroll Down</span>
        <FiChevronDown size={20} className="animate-bounce" />
      </div>
    </section>
  );
}

export default Hero;
