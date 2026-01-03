import { FiCode, FiLayout, FiSmartphone, FiZap } from "react-icons/fi";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Node.js", level: 75 },
  { name: "TypeScript", level: 70 },
];

const services = [
  {
    icon: FiCode,
    title: "Web Development",
    description: "Building modern, scalable web applications with clean code.",
  },
  {
    icon: FiLayout,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive Design",
    description: "Ensuring perfect experience across all devices.",
  },
  {
    icon: FiZap,
    title: "Performance",
    description: "Optimizing for speed and best user experience.",
  },
];

function About() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-left mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-medium">About Me</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">Details & Skills</h2>
        </div>

        <div 
          className={`grid lg:grid-cols-2 gap-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* About Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              I'm a passionate Frontend Developer based in Bangladesh
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With over 3 years of experience in web development, I specialize in
              creating responsive, user-friendly websites and applications. I love
              turning complex problems into simple, beautiful solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines creativity with technical expertise to deliver
              high-quality digital experiences. I'm constantly learning and staying
              up-to-date with the latest technologies and best practices.
            </p>

            {/* Skills */}
            <div className="space-y-4 pt-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <service.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
