import { motion } from "framer-motion";
import { useState } from "react";
import { PageTransition } from "@/components/page-transition";
import { GeometricDivider } from "@/components/geometric-divider";

const TIMELINE = [
  {
    period: "الفينيقيون (1500 ق.م)",
    category: "فينيقي",
    desc: "أسسوها كمركز تجاري بحري، وعُرفت باسم 'أثل'. كانت نقطة التقاء بحرية هامة للسفن التجارية القادمة من أرجاء المتوسط.",
    color: "bg-secondary"
  },
  {
    period: "الفترة الفارسية والهلنستية",
    category: "روماني",
    desc: "أُعيد تأسيسها وسُميت 'تريبوليس' أي المدن الثلاث، نظراً لكونها اتحاداً لثلاث مدن (صور، صيدا، وأرواد).",
    color: "bg-primary"
  },
  {
    period: "الحكم الروماني",
    category: "روماني",
    desc: "ازدهرت كمركز تجاري واشتهرت بصناعة الزجاج والأرجوان، وشهدت بناء معابد ومسارح ومرافق عامة فخمة.",
    color: "bg-accent"
  },
  {
    period: "الفتح الإسلامي (636م)",
    category: "إسلامي",
    desc: "أصبحت مركزاً إسلامياً مزدهراً في عهد الأمويين والعباسيين، وتطورت كحاضرة علمية وتجارية أساسية على الساحل.",
    color: "bg-foreground"
  },
  {
    period: "الدولة الصليبية (1109–1289)",
    category: "مملوكي",
    desc: "أصبحت عاصمة مقاطعة طرابلس. شيّد فيها الصليبيون القلعة الشهيرة (قلعة سان جيل) التي لا تزال تهيمن على المدينة حتى اليوم.",
    color: "bg-secondary",
    img: "/images/castle.jpg"
  },
  {
    period: "المماليك (1289–1516)",
    category: "مملوكي",
    desc: "حررها السلطان قلاوون وأعاد بناءها. بنوا المدارس والمساجد والأسواق المملوكية العظيمة التي لا تزال تنبض بالحياة، لتصبح طرابلس العاصمة الثانية بعد القاهرة.",
    color: "bg-primary",
    img: "/images/mansouri.jpg"
  },
  {
    period: "العهد العثماني (1516–1918)",
    category: "عثماني",
    desc: "ازدهرت تجارياً وتركت إرثاً معمارياً عثمانياً غنياً من حمامات وخانات ومساجد، أبرزها حمام عز الدين والتكية المولوية.",
    color: "bg-accent"
  }
];

const ERAS = ["الكل", "فينيقي", "روماني", "إسلامي", "مملوكي", "عثماني", "حديث"];

export default function History() {
  const [activeEra, setActiveEra] = useState("الكل");

  const filteredTimeline = TIMELINE.filter(item => 
    activeEra === "الكل" || item.category === activeEra
  );

  return (
    <PageTransition>
      <main className="min-h-screen bg-background pt-24 pb-24">
        {/* Header */}
        <div className="container mx-auto px-4 md:px-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden mb-12 shadow-2xl"
          >
            <img src="/images/imgHistory.jpg" alt="تاريخ طرابلس" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent flex flex-col justify-end p-8 md:p-16">
              <h1 className="font-kufi text-4xl md:text-6xl font-black text-white mb-4">تاريخ طرابلس</h1>
              <p className="font-naskh text-xl text-white/90 max-w-2xl">
                ثاني أكبر مدينة في لبنان، تتمتع بتاريخ عريق يمتد لأكثر من 3500 عام عبر حضارات متعاقبة، نقشت كل منها اسمها على حجارتها.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 mt-12">
            {/* Quick Facts Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-card border border-border rounded-3xl p-8 sticky top-32 shadow-sm">
                <h3 className="font-kufi text-2xl font-bold text-primary mb-6 border-b-2 border-secondary pb-4">حقائق سريعة</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="font-naskh text-muted-foreground font-bold">التأسيس:</span>
                    <span className="font-naskh">1500 ق.م (الفينيقيون)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="font-naskh text-muted-foreground font-bold">أصل التسمية:</span>
                    <span className="font-naskh">تريبوليس (المدن الثلاث)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="font-naskh text-muted-foreground font-bold">المدينة القديمة:</span>
                    <span className="font-naskh">+160 معلماً تاريخياً</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="font-naskh text-muted-foreground font-bold">التراث:</span>
                    <span className="font-naskh">مرشحة للتراث العالمي (يونيسكو)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content & Timeline */}
            <div className="lg:w-2/3">
              {/* Filters */}
              <div className="flex flex-wrap gap-2 mb-12">
                {ERAS.map(era => (
                  <button
                    key={era}
                    onClick={() => setActiveEra(era)}
                    className={`px-4 py-2 rounded-full font-kufi text-sm transition-all ${
                      activeEra === era 
                        ? "bg-primary text-primary-foreground shadow-md" 
                        : "bg-card border border-border text-foreground hover:bg-muted"
                    }`}
                  >
                    {era}
                  </button>
                ))}
              </div>

              {/* Timeline */}
              <div className="relative border-r-2 border-border pr-8 space-y-16">
                {filteredTimeline.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute -right-[41px] w-5 h-5 rounded-full ${item.color} border-4 border-background`} />

                    {/* Content Box */}
                    <div className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="font-kufi text-2xl font-bold text-primary">
                          {item.period}
                        </h3>
                        <span className="px-3 py-1 bg-muted rounded-full font-kufi text-xs text-muted-foreground">
                          {item.category}
                        </span>
                      </div>
                      
                      <p className="font-naskh text-muted-foreground leading-relaxed text-justify mb-6">
                        {item.desc}
                      </p>

                      {item.img && (
                        <div className="w-full h-48 rounded-xl overflow-hidden mt-4">
                          <img src={item.img} alt={item.period} className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
                
                {filteredTimeline.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground font-kufi">
                    لا توجد أحداث في هذه الحقبة.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <GeometricDivider />

        {/* Additional Info Section */}
        <div className="container mx-auto px-4 md:px-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl h-[400px]"
            >
              <img src="/images/img0.jpg" alt="مدينة طرابلس" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-kufi text-3xl font-bold text-foreground mb-6">إرث المماليك</h2>
              <p className="font-naskh text-lg text-muted-foreground leading-relaxed text-justify mb-6">
                تعتبر طرابلس المدينة المملوكية الثانية في العالم بعد القاهرة من حيث التراث المعماري. المدارس والمساجد والحمامات والخانات التي بُنيت في هذا العهد تشكل قلب المدينة القديمة النابض، حيث تتزين الجدران بالمقرنصات والزخارف الهندسية البديعة والخط العربي الأصيل.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
