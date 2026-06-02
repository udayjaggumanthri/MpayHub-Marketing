import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  BookOpen, Sparkles, GraduationCap, Award, Users, Globe, Smartphone,
  ShieldCheck, Video, MessageCircle, Infinity as InfinityIcon,
  ArrowRight, Play, Star, Check,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "mPayHub — Master New Skills with Expert-Led Online Courses" },
      { name: "description", content: "Join 50,000+ learners worldwide. Expert-led online courses with industry certifications." },
      { property: "og:title", content: "mPayHub" },
      { property: "og:description", content: "Master new skills with expert-led online courses." },
    ],
  }),
  component: Index,
});

function FloatingIcon({ Icon, className }: { Icon: typeof BookOpen; className: string }) {
  return (
    <div className={`absolute size-14 rounded-2xl bg-white shadow-soft grid place-items-center ${className}`}>
      <Icon className="size-6 text-brand-blue" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 -z-0 opacity-60">
        <div className="absolute -top-20 -left-32 size-96 rounded-full bg-brand-teal/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-32 size-[28rem] rounded-full bg-brand-blue/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-28">
        <FloatingIcon Icon={BookOpen} className="left-6 top-32 hidden md:grid" />
        <FloatingIcon Icon={GraduationCap} className="right-12 top-20 hidden md:grid" />
        <FloatingIcon Icon={Sparkles} className="left-12 bottom-40 hidden md:grid" />
        <FloatingIcon Icon={Award} className="right-6 bottom-32 hidden md:grid" />

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-1.5 text-xs font-medium shadow-card">
            <Sparkles className="size-3.5 text-brand-blue" />
            <span className="rounded-full bg-brand-blue/10 px-2 py-0.5 text-brand-blue font-semibold">New</span>
            <span className="text-muted-foreground">AI-Powered Learning Platform</span>
          </div>
          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-[1.05] text-foreground">
            Master New Skills with{" "}
            <span className="text-gradient-brand">Expert-Led</span>{" "}
            Online Courses
          </h1>
          <p className="mt-7 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands of learners from India and across the globe. Learn at your own pace with world-class instructors and get certified in the skills that matter most.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="#courses" className="inline-flex items-center gap-2 rounded-full bg-brand-blue-deep text-white px-7 py-3.5 font-semibold shadow-soft hover:bg-brand-blue transition">
              Explore Courses <ArrowRight className="size-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-7 py-3.5 font-semibold hover:border-brand-blue transition">
              <Play className="size-4 fill-foreground" /> Watch Demo
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: Users, value: "50K+", label: "Active Learners" },
              { icon: Award, value: "200+", label: "Expert Instructors" },
              { icon: Globe, value: "100+", label: "Countries Reached" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-white p-6 shadow-card border border-border/60">
                <div className="mx-auto size-12 rounded-xl bg-accent grid place-items-center mb-3">
                  <s.icon className="size-5 text-brand-teal" />
                </div>
                <div className="text-3xl font-bold text-brand-blue">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <div className="text-xs font-semibold tracking-widest text-muted-foreground">TRUSTED BY LEARNERS FROM</div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              {[
                ["🇮🇳", "India"], ["🇺🇸", "USA"], ["🇬🇧", "UK"], ["🇦🇪", "UAE"], ["🇸🇬", "Singapore"],
              ].map(([f, n]) => (
                <div key={n} className="flex items-center gap-2 font-medium">
                  <span className="text-2xl">{f}</span> {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: Globe, title: "Learn Anywhere", desc: "Access courses from anywhere in the world. Our platform supports learners from India and 100+ countries." },
  { icon: Smartphone, title: "Mobile Learning", desc: "Download courses for offline access. Learn on-the-go with our iOS and Android apps." },
  { icon: Award, title: "Verified Certificates", desc: "Earn industry-recognized certificates that you can share on LinkedIn and with employers." },
  { icon: GraduationCap, title: "Expert Instructors", desc: "Learn from industry professionals with years of real-world experience in their fields." },
  { icon: InfinityIcon, title: "Lifetime Access", desc: "Purchase once, learn forever. Get lifetime access to course content and future updates." },
  { icon: ShieldCheck, title: "Secure Payments", desc: "Multiple payment options including UPI, cards, and net banking. SSL encrypted for your safety." },
  { icon: Video, title: "HD Video Content", desc: "Crystal clear video lessons with subtitles in multiple languages including Hindi and English." },
  { icon: MessageCircle, title: "Community Support", desc: "Join our vibrant community of learners. Get help from peers and instructors alike." },
];

function Features() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Why mPayHub</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Everything You Need to <span className="text-gradient-brand">Succeed</span></h2>
          <p className="mt-4 text-muted-foreground">Our platform is built with learners in mind. From flexible scheduling to world-class instructors, we have everything you need to achieve your goals.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white p-6 border border-border/60 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all">
              <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center mb-4">
                <f.icon className="size-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ["98%", "Student Satisfaction"], ["4.8/5", "Average Course Rating"],
            ["500K+", "Courses Completed"], ["24/7", "Support Available"],
          ].map(([v, l]) => (
            <div key={l} className="rounded-2xl bg-gradient-hero p-8 text-center border border-border/60">
              <div className="text-4xl font-bold text-gradient-brand">{v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const courses = [
  { title: "Full Stack Web Development Bootcamp", author: "Rahul Sharma", desc: "Master React, Node.js, MongoDB, and modern web technologies from scratch.", price: "₹89,999", old: "₹1.50L", off: "40% OFF", weeks: "24 weeks", level: "Beginner to Advanced", students: "45,200", rating: "4.9", tags: ["Bestseller", "Featured"] },
  { title: "Python for Data Science & ML", author: "Dr. Priya Patel", desc: "Learn Python, Pandas, NumPy, Scikit-learn, TensorFlow, and build production-ready ML models.", price: "₹79,999", old: "₹1.30L", off: "38% OFF", weeks: "20 weeks", level: "Intermediate", students: "38,500", rating: "4.8", tags: ["Bestseller", "Featured"] },
  { title: "UI/UX Design Masterclass", author: "Sarah Johnson", desc: "Design stunning interfaces with Figma, learn design systems, UX research, and prototyping.", price: "₹59,999", old: "₹99,999", off: "40% OFF", weeks: "16 weeks", level: "Beginner to Intermediate", students: "28,700", rating: "4.7", tags: ["Bestseller"] },
  { title: "Digital Marketing Complete Guide", author: "Amit Kumar", desc: "SEO, Social Media, Google Ads, Content Marketing, Analytics, and Growth Hacking mastery.", price: "₹49,999", old: "₹89,999", off: "44% OFF", weeks: "12 weeks", level: "Beginner", students: "52,100", rating: "4.6", tags: ["Bestseller"] },
  { title: "AWS Cloud Solutions Architect Pro", author: "David Anderson", desc: "Prepare for AWS certification and master cloud architecture, DevOps, and serverless tech.", price: "₹1.20L", old: "₹2.00L", off: "40% OFF", weeks: "20 weeks", level: "Advanced", students: "31,400", rating: "4.9", tags: ["Featured"] },
  { title: "Cybersecurity & Ethical Hacking", author: "Alex Chen", desc: "Learn penetration testing, network security, cryptography, and earn industry certifications.", price: "₹1.50L", old: "₹2.50L", off: "40% OFF", weeks: "22 weeks", level: "Advanced", students: "24,800", rating: "4.8", tags: ["Featured"] },
];

function Courses() {
  const cats = ["All Courses", "Web", "Data", "Design", "Business", "Languages", "Security"];
  return (
    <section id="courses" className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Popular Courses</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Explore Our <span className="text-gradient-brand">Course Catalog</span></h2>
          <p className="mt-4 text-muted-foreground">Choose from over 200+ courses designed by industry experts.</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 justify-center">
          {cats.map((c, i) => (
            <button key={c} className={`px-4 py-2 rounded-full text-sm font-medium border transition ${i === 0 ? "bg-brand-blue-deep text-white border-transparent" : "bg-white border-border hover:border-brand-blue"}`}>{c}</button>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <article key={c.title} className="rounded-2xl bg-white overflow-hidden border border-border/60 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all">
              <div className="relative aspect-video bg-gradient-brand">
                <div className="absolute inset-0 grid place-items-center text-white/90">
                  <BookOpen className="size-12 opacity-50" />
                </div>
                <div className="absolute top-3 left-3 flex gap-1.5">
                  {c.tags.map((t) => (
                    <span key={t} className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${t === "Bestseller" ? "bg-amber-400 text-amber-950" : "bg-white text-brand-blue"}`}>{t}</span>
                  ))}
                </div>
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded">{c.off}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span>⏱ {c.weeks}</span><span>•</span><span>{c.level}</span>
                </div>
                <h3 className="font-bold text-lg leading-snug">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">by {c.author}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">{c.desc}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex items-center gap-1"><Users className="size-3.5" /> {c.students}</span>
                    <span className="flex items-center gap-1"><Star className="size-3.5 fill-amber-400 text-amber-400" /> {c.rating}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold text-brand-blue">{c.price}</div>
                    <div className="text-xs text-muted-foreground line-through">{c.old}</div>
                  </div>
                  <button className="inline-flex items-center gap-1.5 bg-gradient-brand text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-95">
                    Enroll <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-7 py-3.5 font-semibold hover:border-brand-blue transition shadow-card">
            View All 200+ Courses <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

const plans = [
  { name: "Foundation", desc: "Perfect for beginners starting their learning journey", price: "₹39,999", old: "₹59,999", period: "6 months access", off: "33% OFF", features: ["Access to 25+ foundational courses", "HD video content", "Mobile app access", "Course completion certificates", "Community forum access", "Email support (48hr response)", "Downloadable resources"], cta: "Get Started" },
  { name: "Professional", desc: "For career-focused learners seeking industry skills", price: "₹99,999", old: "₹1.50L", period: "12 months access", off: "33% OFF", popular: true, features: ["Access to 100+ professional courses", "Project-based learning paths", "Industry-recognized certificates", "1-on-1 mentor sessions (4/month)", "Resume & portfolio review", "Job placement assistance", "Priority support (24hr response)", "Live doubt-clearing sessions", "Mock interviews with feedback"], cta: "Get Started" },
  { name: "Premium Elite", desc: "Complete transformation with personalized mentorship", price: "₹2.00L", old: "₹3.00L", period: "24 months access", off: "33% OFF", features: ["Unlimited course access", "Personalized learning roadmap", "Weekly 1-on-1 mentorship", "Guaranteed internship placement", "Real-world project experience", "Industry networking events", "Career transition support", "LinkedIn profile optimization", "Dedicated success manager", "Lifetime alumni network access"], cta: "Get Started" },
  { name: "Enterprise", desc: "For organizations training teams at scale", price: "₹4.00L", old: "₹6.00L", period: "Custom duration", off: "33% OFF", features: ["Everything in Premium Elite", "Custom course development", "Team analytics dashboard", "LMS integration support", "Dedicated account manager", "On-site training options", "White-label certificates", "Compliance & reporting tools", "Bulk enrollment (50+ seats)", "24/7 priority support"], cta: "Contact Sales" },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Investment Plans</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Invest in Your <span className="text-gradient-brand">Future</span></h2>
          <p className="mt-4 text-muted-foreground">Comprehensive programs from ₹39,999 to ₹4,00,000. Choose the plan that matches your career goals.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-2xl bg-white p-7 border-2 shadow-card flex flex-col ${p.popular ? "border-brand-blue shadow-soft" : "border-border/60"}`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-brand text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
              )}
              <div className="text-xs font-bold text-red-500">{p.off}</div>
              <h3 className="mt-2 text-2xl font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground min-h-[40px]">{p.desc}</p>
              <div className="mt-5">
                <div className="text-4xl font-bold text-brand-blue">{p.price}</div>
                <div className="mt-1 text-sm text-muted-foreground"><span className="line-through">{p.old}</span> · {p.period}</div>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2"><Check className="size-4 text-brand-teal flex-shrink-0 mt-0.5" /> <span>{f}</span></li>
                ))}
              </ul>
              <button className={`mt-7 w-full rounded-xl py-3 font-semibold transition ${p.popular ? "bg-gradient-brand text-white hover:opacity-95" : "bg-muted hover:bg-brand-blue hover:text-white"}`}>{p.cta}</button>
            </div>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {[
            ["30-Day Money Back", "Full refund, no questions asked"],
            ["Easy EMI Options", "0% interest, up to 12 months"],
            ["Lifetime Updates", "Free access to new content"],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl bg-muted/50 p-5 flex items-center gap-4">
              <div className="size-10 rounded-lg bg-white grid place-items-center"><ShieldCheck className="size-5 text-brand-teal" /></div>
              <div>
                <div className="font-semibold">{t}</div>
                <div className="text-xs text-muted-foreground">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { quote: "mPayHub transformed my career. The Full Stack course helped me land a job at a top tech company. The instructors are amazing and the content is up-to-date with industry standards.", course: "Full Stack Web Development", initials: "AV", name: "Aditya Verma", role: "Software Developer • Bangalore, India" },
  { quote: "As an international student, I was amazed by the quality of courses at such affordable prices. The Digital Marketing course gave me practical skills I use every day at work.", course: "Digital Marketing", initials: "SM", name: "Sarah Mitchell", role: "Marketing Manager • London, UK" },
  { quote: "The Python for Data Science course is exceptional. I went from knowing nothing about Python to building ML models in just 3 months!", course: "Python for Data Science", initials: "PS", name: "Priya Sharma", role: "Data Analyst • Bangalore, India" },
  { quote: "The UI/UX Design Masterclass was exactly what I needed to level up my skills. The project-based approach helped me build an impressive portfolio.", course: "UI/UX Design", initials: "JC", name: "James Chen", role: "UI Designer • Singapore" },
  { quote: "Got AWS certified thanks to mPayHub! The course was comprehensive and the practice exams were spot-on. Highly recommend for cloud computing.", course: "AWS Solutions Architect", initials: "RK", name: "Ravi Kumar", role: "Cloud Engineer • Hyderabad, India" },
  { quote: "I love that I can learn at my own pace. The mobile app is fantastic for learning during my commute. Already completed 5 courses and counting!", course: "Business English", initials: "ET", name: "Emma Thompson", role: "Freelancer • Toronto, Canada" },
];

function Testimonials() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Student Stories</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Trusted by Learners <span className="text-gradient-brand">Worldwide</span></h2>
          <p className="mt-4 text-muted-foreground">Join over 50,000 students who have transformed their careers with mPayHub.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white p-7 border border-border/60 shadow-card">
              <div className="flex gap-1 text-amber-400 mb-4">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">"{t.quote}"</p>
              <div className="mt-5 inline-block text-[11px] font-semibold text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded">{t.course}</div>
              <div className="mt-5 pt-5 border-t border-border flex items-center gap-3">
                <div className="size-11 rounded-full bg-gradient-brand grid place-items-center text-white font-bold text-sm">{t.initials}</div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[["4.9", "Average Rating"], ["50K+", "Happy Students"], ["100+", "Countries Reached"], ["98%", "Recommend Us"]].map(([v, l]) => (
            <div key={l} className="rounded-2xl bg-white p-7 text-center border border-border/60">
              <div className="text-4xl font-bold text-gradient-brand">{v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-12 md:p-16 text-center text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 size-64 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 right-1/4 size-64 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-medium">
              <Sparkles className="size-3.5" /> Start Your Learning Journey Today
            </div>
            <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">Ready to Transform <br/> Your Career?</h2>
            <p className="mt-5 text-white/90 max-w-xl mx-auto">Join 50,000+ learners from India and around the world. Get unlimited access to 200+ courses with our Pro plan.</p>
            <div className="mt-9 flex flex-wrap gap-4 justify-center">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-brand-blue-deep px-7 py-3.5 font-semibold hover:bg-white/95 transition">
                Start Free Trial <ArrowRight className="size-4" />
              </a>
              <a href="#courses" className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 backdrop-blur px-7 py-3.5 font-semibold hover:bg-white/20 transition">
                View All Courses
              </a>
            </div>
            <div className="mt-6 text-xs text-white/80">No credit card required • 7-day free trial • Cancel anytime</div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-xs">
              <div className="flex items-center gap-2"><ShieldCheck className="size-4" /> 256-bit SSL Secured</div>
              <div className="flex items-center gap-2"><Check className="size-4" /> 100% Money Back</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Courses />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
