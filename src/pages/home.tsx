import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Landmark, History, Utensils, BookOpen, Send } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import { CountUp } from "@/components/ui-helpers";
import { GeometricDivider } from "@/components/geometric-divider";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-background pb-0 flex flex-col">
        {/* Hero Section */}
        <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/sea.jpg"
              alt="ميناء طرابلس"
              className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col items-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-kufi text-5xl md:text-7xl lg:text-9xl font-black text-white mb-6 drop-shadow-xl"
            >
              طرابلس
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="font-naskh text-xl md:text-3xl text-white/90 max-w-2xl mb-12 drop-shadow-md"
            >
              لؤلؤة المتوسط، حيث يعانق التاريخ زرقة البحر في أقدم مدن الساحل اللبناني.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Link 
                href="/places" 
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-kufi font-bold text-lg hover:bg-secondary/90 transition-all hover:-translate-y-1 hover:shadow-xl group"
              >
                اكتشف المدينة
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-24 bg-card text-card-foreground">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-kufi text-3xl md:text-5xl font-bold mb-6 text-primary">
                  تاريخ ينبض بالحياة
                </h2>
                <p className="font-naskh text-lg leading-loose text-muted-foreground mb-6 text-justify">
                  تعتبر طرابلس ثاني أكبر مدينة في لبنان، وهي تتميز بنسيج معماري فريد يجمع بين الآثار الصليبية والمدارس والمساجد المملوكية والأسواق العثمانية. كل حجر في هذه المدينة يروي قصة حضارة مرت من هنا وترك بصمتها.
                </p>
                <Link href="/history" className="font-kufi text-secondary font-bold hover:text-primary transition-colors inline-flex items-center gap-2">
                  اقرأ المزيد عن التاريخ <ArrowLeft className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img src="/images/castle.jpg" alt="قلعة طرابلس" className="w-full h-full object-cover" />
                <div className="absolute inset-0 border-4 border-secondary/20 rounded-2xl pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </section>

        <GeometricDivider />

        {/* Quick Navigation Cards */}
        <section className="py-12 container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/history" className="group bg-card border border-border p-8 rounded-3xl hover:border-primary transition-all hover:-translate-y-2 hover:shadow-xl text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <History className="w-8 h-8" />
              </div>
              <h3 className="font-kufi font-bold text-xl mb-2">التاريخ</h3>
              <p className="font-naskh text-muted-foreground text-sm">٣٥٠٠ عام من الحضارة</p>
            </Link>
            
            <Link href="/places" className="group bg-card border border-border p-8 rounded-3xl hover:border-primary transition-all hover:-translate-y-2 hover:shadow-xl text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                <Landmark className="w-8 h-8" />
              </div>
              <h3 className="font-kufi font-bold text-xl mb-2">الأماكن</h3>
              <p className="font-naskh text-muted-foreground text-sm">معالم أثرية ومساجد</p>
            </Link>
            
            <Link href="/food" className="group bg-card border border-border p-8 rounded-3xl hover:border-primary transition-all hover:-translate-y-2 hover:shadow-xl text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                <Utensils className="w-8 h-8" />
              </div>
              <h3 className="font-kufi font-bold text-xl mb-2">المأكولات</h3>
              <p className="font-naskh text-muted-foreground text-sm">عاصمة الحلويات اللبنانية</p>
            </Link>
            
            <Link href="/culture" className="group bg-card border border-border p-8 rounded-3xl hover:border-primary transition-all hover:-translate-y-2 hover:shadow-xl text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-foreground/10 rounded-full flex items-center justify-center text-foreground mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="font-kufi font-bold text-xl mb-2">الثقافة</h3>
              <p className="font-naskh text-muted-foreground text-sm">فنون وحرف وأسواق</p>
            </Link>
          </div>
        </section>

        {/* Animated Statistics */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="/images/mansouri.jpg" alt="pattern" className="w-full h-full object-cover mix-blend-overlay" />
          </div>
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-kufi text-4xl md:text-6xl font-black mb-2 text-secondary">
                  +<CountUp end={3500} />
                </div>
                <div className="font-naskh text-lg text-primary-foreground/80">عام من التاريخ</div>
              </div>
              <div>
                <div className="font-kufi text-4xl md:text-6xl font-black mb-2 text-secondary">
                  +<CountUp end={500} suffix=",000" />
                </div>
                <div className="font-naskh text-lg text-primary-foreground/80">نسمة عدد السكان</div>
              </div>
              <div>
                <div className="font-kufi text-4xl md:text-6xl font-black mb-2 text-secondary">
                  +<CountUp end={40} />
                </div>
                <div className="font-naskh text-lg text-primary-foreground/80">معلماً تاريخياً</div>
              </div>
              <div>
                <div className="font-kufi text-4xl md:text-6xl font-black mb-2 text-secondary">
                  +<CountUp end={30} />
                </div>
                <div className="font-naskh text-lg text-primary-foreground/80">مسجداً أثرياً</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Video Section */}
        <section className="py-24 container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-kufi text-4xl font-bold text-foreground mb-4">طرابلس من الجو</h2>
          <p className="font-naskh text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            ألقِ نظرة على جمال المدينة من زاوية مختلفة، حيث يتجاور البحر مع القلعة والأسواق.
          </p>
          <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-card">
            <iframe 
              className="absolute inset-0 w-full h-full" 
              src="https://www.youtube.com/embed/UxWIpOGVDlA" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <GeometricDivider />

        {/* Featured Gallery */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8 mb-12 text-center">
            <h2 className="font-kufi text-4xl font-bold text-foreground mb-4">روح المدينة</h2>
            <p className="font-naskh text-lg text-muted-foreground max-w-2xl mx-auto">
              من أزقة الأسواق العتيقة إلى رحابة البحر، مشاهد تختزل سحر طرابلس.
            </p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 px-4 md:px-8 pb-8">
            {[
              "/images/img1.jpg", 
              "/images/img2.jpg", 
              "/images/souks.jpg", 
              "/images/img4.jpg", 
              "/images/img5.jpg"
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="snap-center shrink-0 w-[80vw] sm:w-[40vw] md:w-[30vw] h-[60vh] rounded-2xl overflow-hidden relative group cursor-pointer"
              >
                <img src={src} alt="مشهد من طرابلس" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-card border-t border-border">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="font-kufi text-4xl font-bold text-center text-primary mb-16">ماذا قال الزوار؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "ليلى م.", country: "الرياض", text: "زرت طرابلس وانبهرت بأسواقها العريقة وكنافتها التي لا مثيل لها في العالم العربي." },
                { name: "خالد ر.", country: "دبي", text: "المدينة القديمة تحمل روحاً لا تجدها في أي مكان آخر في لبنان، رائحة التاريخ تعبق في كل زاوية." },
                { name: "سارة ح.", country: "القاهرة", text: "قلعة طرابلس والجامع المنصوري أعادا لي الإحساس بعمق التاريخ العربي والإسلامي الشامخ." }
              ].map((quote, idx) => (
                <div key={idx} className="bg-background p-8 rounded-3xl shadow-sm border border-border relative">
                  <span className="absolute top-4 right-4 text-secondary opacity-30 font-serif text-6xl">«</span>
                  <p className="font-naskh text-lg text-foreground/80 leading-relaxed mb-6 mt-4 relative z-10 text-justify">
                    {quote.text}
                  </p>
                  <div className="border-t border-border/50 pt-4 mt-auto">
                    <p className="font-kufi font-bold text-primary">{quote.name}</p>
                    <p className="font-naskh text-sm text-muted-foreground">{quote.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter & CTA Section */}
        <section className="py-32 relative overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-0 opacity-10">
            <img src="/images/mansouri.jpg" alt="pattern" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card/10 backdrop-blur-md p-12 rounded-3xl border border-primary-foreground/20 text-center"
            >
              <h2 className="font-kufi text-4xl font-bold mb-6">هل أنت مستعد لزيارة طرابلس؟</h2>
              <p className="font-naskh text-xl mb-10 text-primary-foreground/90 leading-relaxed">
                انضم إلينا في جولة سياحية تغوص بك في أعماق التاريخ، وتتذوق فيها أشهى الحلويات الشرقية، وتستمتع بنسيم البحر.
              </p>
              <Link 
                href="/visit" 
                className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 rounded-full font-kufi font-bold text-lg hover:bg-secondary hover:text-secondary-foreground transition-colors shadow-xl"
              >
                احجز موعداً الآن
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-foreground text-background p-12 rounded-3xl shadow-2xl"
            >
              <h3 className="font-kufi text-2xl font-bold mb-4">اشترك في نشرتنا</h3>
              <p className="font-naskh text-background/80 mb-8">
                احصل على أحدث الأخبار والفعاليات الثقافية في طرابلس مباشرة إلى بريدك الإلكتروني.
              </p>
              {subscribed ? (
                <div className="bg-secondary/20 border border-secondary text-secondary p-4 rounded-xl font-kufi font-bold text-center">
                  شكراً! سنبقيك على اطلاع بكل جديد طرابلس.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="أدخل بريدك الإلكتروني..." 
                    className="flex-1 bg-background text-foreground rounded-xl px-4 font-sans text-right focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                  <button type="submit" className="bg-secondary text-secondary-foreground p-4 rounded-xl hover:bg-secondary/90 transition-colors">
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </section>
      </main>
    </PageTransition>
  );
}
