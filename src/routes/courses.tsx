import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { BookOpen, Users, Star, ArrowRight, Search } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Lumina Skill" },
      { name: "description", content: "Explore 200+ expert-led online courses across web development, data science, design, business, and more." },
      { property: "og:title", content: "Courses — Lumina Skill" },
      { property: "og:description", content: "200+ expert-led online courses." },
    ],
  }),
  component: CoursesPage,
});

const all = [
  { cat: "Web", title: "Full Stack Web Development Bootcamp", author: "Rahul Sharma", price: "₹89,999", old: "₹1.50L", off: "40% OFF", weeks: "24 weeks", level: "Beginner to Advanced", students: "45,200", rating: "4.9" },
  { cat: "Data", title: "Python for Data Science & ML", author: "Dr. Priya Patel", price: "₹79,999", old: "₹1.30L", off: "38% OFF", weeks: "20 weeks", level: "Intermediate", students: "38,500", rating: "4.8" },
  { cat: "Design", title: "UI/UX Design Masterclass", author: "Sarah Johnson", price: "₹59,999", old: "₹99,999", off: "40% OFF", weeks: "16 weeks", level: "Beginner+", students: "28,700", rating: "4.7" },
  { cat: "Business", title: "Digital Marketing Complete Guide", author: "Amit Kumar", price: "₹49,999", old: "₹89,999", off: "44% OFF", weeks: "12 weeks", level: "Beginner", students: "52,100", rating: "4.6" },
  { cat: "Web", title: "AWS Cloud Solutions Architect Pro", author: "David Anderson", price: "₹1.20L", old: "₹2.00L", off: "40% OFF", weeks: "20 weeks", level: "Advanced", students: "31,400", rating: "4.9" },
  { cat: "Security", title: "Cybersecurity & Ethical Hacking", author: "Alex Chen", price: "₹1.50L", old: "₹2.50L", off: "40% OFF", weeks: "22 weeks", level: "Advanced", students: "24,800", rating: "4.8" },
  { cat: "Business", title: "Financial Analysis & Investment Banking", author: "Neha Gupta", price: "₹99,999", old: "₹1.70L", off: "41% OFF", weeks: "18 weeks", level: "Intermediate", students: "19,600", rating: "4.7" },
  { cat: "Data", title: "Artificial Intelligence & Deep Learning", author: "Dr. Vikram Singh", price: "₹2.00L", old: "₹3.50L", off: "43% OFF", weeks: "28 weeks", level: "Advanced", students: "22,100", rating: "4.9" },
  { cat: "Web", title: "Mobile App Development with React Native", author: "James Miller", price: "₹74,999", old: "₹1.25L", off: "40% OFF", weeks: "18 weeks", level: "Intermediate", students: "33,500", rating: "4.7" },
  { cat: "Business", title: "Product Management Professional", author: "Lisa Thompson", price: "₹69,999", old: "₹1.20L", off: "42% OFF", weeks: "14 weeks", level: "Beginner+", students: "27,800", rating: "4.6" },
  { cat: "Web", title: "Blockchain & Web3 Development", author: "Michael Roberts", price: "₹1.80L", old: "₹3.00L", off: "40% OFF", weeks: "24 weeks", level: "Advanced", students: "15,400", rating: "4.8" },
  { cat: "Languages", title: "Japanese Language JLPT N5-N3", author: "Yuki Tanaka", price: "₹44,999", old: "₹79,999", off: "44% OFF", weeks: "30 weeks", level: "Beginner+", students: "14,700", rating: "4.7" },
];

function CoursesPage() {
  const cats = ["All Courses", "Web", "Data", "Design", "Business", "Languages", "Security"];
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <PageHeader eyebrow="Course Catalog" title="Explore Our" highlight="Course Catalog" description="Choose from over 200+ courses designed by industry experts. Prices range from ₹39,999 to ₹4,00,000." />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-10">
            <div className="flex flex-wrap gap-2">
              {cats.map((c, i) => (
                <button key={c} className={`px-4 py-2 rounded-full text-sm font-medium border transition ${i === 0 ? "bg-brand-blue-deep text-white border-transparent" : "bg-white border-border hover:border-brand-blue"}`}>{c}</button>
              ))}
            </div>
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input placeholder="Search courses..." className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-border text-sm focus:outline-none focus:border-brand-blue" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {all.map((c) => (
              <article key={c.title} className="rounded-2xl bg-white overflow-hidden border border-border/60 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all">
                <div className="relative aspect-video bg-gradient-brand">
                  <div className="absolute inset-0 grid place-items-center text-white/90"><BookOpen className="size-12 opacity-50" /></div>
                  <div className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white text-brand-blue">{c.cat}</div>
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded">{c.off}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span>⏱ {c.weeks}</span><span>•</span><span>{c.level}</span>
                  </div>
                  <h3 className="font-bold text-lg leading-snug">{c.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">by {c.author}</p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Users className="size-3.5" /> {c.students}</span>
                    <span className="flex items-center gap-1"><Star className="size-3.5 fill-amber-400 text-amber-400" /> {c.rating}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <div className="text-xl font-bold text-brand-blue">{c.price}</div>
                      <div className="text-xs text-muted-foreground line-through">{c.old}</div>
                    </div>
                    <Link to="/signup" className="inline-flex items-center gap-1.5 bg-gradient-brand text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-95">
                      Enroll <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}