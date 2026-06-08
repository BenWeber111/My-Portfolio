import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-[#ededed] min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full p-6 flex justify-between items-center bg-[#0a0a0a]/90 backdrop-blur-sm z-50">
        <h1 className="text-xl font-bold tracking-wider">Nexus</h1>
        <ul className="flex gap-6 text-sm font-medium">
          {["Home", "About", "Skills", "Projects", "Services", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-orange-400 transition"
                >
                  {item}
                </a>
              </li>
            ),
          )}
        </ul>
      </nav>

      {/* Hero Section - Updated for better spacing */}
      <section
        id="home"
        className="h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-10 gap-8 pt-24"
      >
        {/* Text Area */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hello, I'm <br className="hidden md:block" />
            <span className="text-orange-500">Benedict Asomani</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 mb-8">
            Aspiring Network Engineer specializing in Cybersecurity, AI, and
            Project Management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/Benedict_CV.pdf"
              download="BenedictAsomani_CV.pdf"
              className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-bold transition"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-full transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image Area */}
        <div className="relative w-48 h-48 md:w-96 md:h-96 shrink-0">
          <Image
            src="/mypic.jpeg"
            alt="Profile Picture"
            fill
            priority={true}
            className="rounded-full object-cover border-4 border-orange-500 shadow-2xl"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-10 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Who Am I */}
          <div>
            <h3 className="text-3xl font-bold mb-6">About Me</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              I am a dedicated Telecommunication Engineering student at KNUST
              with a passion for building secure and efficient digital
              infrastructures. My journey is driven by the intersection of
              robust network design and intelligent system automation.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Beyond engineering, I am an advocate for leveraging AI and data
              analysis to solve real-world community challenges. Whether it's
              optimizing network performance or securing systems, I strive for
              technical excellence in every project I undertake.
            </p>
          </div>

          {/* Education */}
          <div className="bg-[#111] p-8 rounded-2xl border border-gray-800">
            <h4 className="text-xl font-bold mb-6 text-orange-500">
              Education
            </h4>
            <div className="space-y-8">
              <div>
                <h5 className="font-bold text-lg">
                  B.Sc. Telecommunication Engineering
                </h5>
                <p className="text-gray-500">
                  Kwame Nkrumah University of Science and Technology (KNUST)
                </p>
                <span className="text-sm text-gray-600">2024 - Present</span>
              </div>
              <div className="border-t border-gray-800 pt-6">
                <h5 className="font-bold text-lg">
                  Professional Certifications
                </h5>
                <p className="text-gray-500">
                  CCNA (Cisco Certified Network Associate) - In Progress
                </p>
                <span className="text-sm text-gray-600">
                  Continuous Learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-10 bg-[#111]">
        <h3 className="text-3xl font-bold mb-12">Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Network Engineering",
              desc: "Proficient in TCP/IP, routing protocols, and LAN/WAN infrastructure.",
            },
            {
              title: "Cybersecurity",
              desc: "Focusing on network security, threat detection, and system hardening.",
            },
            {
              title: "AI and Machine Learning",
              desc: "Exploring intelligent solutions for network automation.",
            },
            {
              title: "Data Analysis",
              desc: "Expertise in Excel for project tracking and network performance reporting.",
            },
            {
              title: "Project Management",
              desc: "Experience in coordinating technical projects from concept to deployment.",
            },
            {
              title: "Linux/WSL",
              desc: "Daily driver for development and system administration tasks.",
            },
          ].map((skill) => (
            <div
              key={skill.title}
              className="p-8 border border-gray-800 rounded-xl hover:border-orange-500 transition-colors"
            >
              <h4 className="text-xl font-semibold mb-3 text-orange-400">
                {skill.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-10 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 border-l-4 border-orange-500 pl-4">
            Featured Projects
          </h3>

          <div className="space-y-12">
            {[
              {
                title: "MTN RAN Planning And Optimization",
                details:
                  "Focused on Radio Access Network (RAN) performance, utilizing Google Earth for site placement and azimuth analysis. Analyzed signal propagation and network evolution paths (GSM/3G/4G) to improve coverage density and reduce dropped calls in high-traffic sectors.",
              },
              {
                title: "Road Hazard Alert System",
                details:
                  "Developed a community-driven cloud-based alert system for the Abeka area. Integrated real-time data ingestion with AI to detect and report road hazards, reducing response times for local authorities through cloud-based communication protocols.",
              },
              {
                title: "Personal Home Network Lab (Cisco)",
                details:
                  "Designed and implemented an enterprise-grade virtual lab environment using Cisco Packet Tracer and GNS3. Configured VLANs, OSPF/EIGRP routing protocols, and SSH hardening to simulate real-world networking scenarios and CCNA exam objectives.",
              },
            ].map((proj, i) => (
              <div
                key={i}
                className="group border-b border-gray-800 pb-8 hover:border-orange-500 transition-colors"
              >
                <h4 className="text-2xl font-bold mb-3 text-orange-500">
                  {proj.title}
                </h4>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {proj.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-10">
        <h3 className="text-3xl font-bold mb-12">Professional Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Network Infrastructure",
              desc: "End-to-end network design, configuration, and troubleshooting for stable connectivity.",
            },
            {
              title: "Cybersecurity Audit",
              desc: "System hardening and vulnerability assessments to secure your digital assets.",
            },
            {
              title: "Data and AI Solutions",
              desc: "Advanced data analysis using Excel and AI-driven insights for business optimization.",
            },
            {
              title: "Technical Project Management",
              desc: "Coordinating complex engineering projects from planning through to execution.",
            },
            {
              title: "System Administration",
              desc: "Expert support for Linux/Ubuntu environments and WSL workflows.",
            },
            {
              title: "Consultancy",
              desc: "Professional advice on network expansion and hardware selection.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="group bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]"
            >
              <div className="mb-6 text-orange-500 text-3xl">{}⚡</div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Footer */}
      <footer
        id="contact"
        className="py-20 px-10 border-t border-gray-800 bg-[#0a0a0a]"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-10 text-center">
            Let's Connect
          </h3>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1 space-y-4">
              <p className="text-gray-400">
                Feel free to reach out for collaborations or opportunities in
                networking and security.
              </p>
              <a
                href="mailto:hello.alime@gmail.com"
                className="block text-orange-400 font-bold hover:underline"
              >
                benedictasomani492@gmail.com
              </a>
              <div className="flex gap-4 pt-4">
                {/* Social Links */}
                <a
                  href="https://www.linkedin.com/in/benedict-asomani-27a807364/"
                  className="hover:text-orange-500"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/BenWeber111/My-Portfolio.git"
                  className="hover:text-orange-500"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form
              action="https://formspree.io/f/xzdqrgqj"
              method="POST"
              className="flex-1 flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="p-3 bg-[#111] rounded border border-gray-800 focus:border-orange-500 outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="p-3 bg-[#111] rounded border border-gray-800 focus:border-orange-500 outline-none transition"
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                className="p-3 bg-[#111] rounded border border-gray-800 h-28 focus:border-orange-500 outline-none transition"
              ></textarea>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 py-3 rounded font-bold transition"
              >
                Send Message
              </button>
            </form>
          </div>
          <p className="text-center mt-20 text-gray-700 text-sm">
            © {new Date().getFullYear()} Benedict Asomani. Built for the future.
          </p>
        </div>
      </footer>
    </main>
  );
}
