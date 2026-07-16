import { PageTransition } from "@/components/page-transition";
import { GeometricDivider } from "@/components/geometric-divider";
import { motion } from "framer-motion";

const SWEETS = [
  { name: "كنافة الجبن", desc: "أشهر حلويات طرابلس الصباحية، تُقدم ساخنة مع الكعك الطرابلسي الخاص وقطر السكر.", note: "المكونات: جبنة عكاوي، سميد، سمنة، فستق حلبي", img: "/images/img5.jpg" },
  { name: "سمبوسة بالعجوة", desc: "عجينة رقيقة محشوة بالتمر المتبل والمكسرات، من أساسيات الضيافة في الأعياد.", note: "المكونات: طحين، عجوة، جوز، سمن بلدي", img: "/images/img7.jpg" },
  { name: "حلاوة الجبن", desc: "حلوى طرية ومطاطية محشوة بالقشطة الطازجة وتذوب في الفم، تُزين بزهر الليمون.", note: "المكونات: جبنة، سميد، ماء زهر، قشطة", img: "/images/img8.jpg" },
  { name: "مدلوقة", desc: "قاعدة من السميد المحمص بالسمن والقطر، تعلوها طبقة غنية من القشطة والمكسرات.", note: "المكونات: سميد، قشطة بلدية، فستق، لوز", img: "/images/img9.jpg" },
];

export default function Food() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background pb-24">
        
        {/* Hero */}
        <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/saba3.jpg" alt="المأكولات الطرابلسية" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-kufi text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-xl"
            >
              عاصمة الحلويات
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-naskh text-xl md:text-3xl text-white/90 max-w-2xl mx-auto"
            >
              رحلة في عالم المذاق الطرابلسي الأصيل، حيث تتوارث العائلات أسرار النكهة منذ مئات السنين.
            </motion.p>
          </div>
        </section>

        <div className="sticky top-20 z-40 bg-card/80 backdrop-blur-md border-b border-border py-4 shadow-sm">
          <div className="container mx-auto px-4 flex justify-center gap-6 overflow-x-auto hide-scrollbar">
            <a href="#sweets" className="font-kufi text-primary font-bold hover:text-secondary whitespace-nowrap transition-colors">حلويات طرابلس</a>
            <a href="#dishes" className="font-kufi text-primary font-bold hover:text-secondary whitespace-nowrap transition-colors">الطبخ الأصيل</a>
            <a href="#coffee" className="font-kufi text-primary font-bold hover:text-secondary whitespace-nowrap transition-colors">قهوة طرابلس</a>
          </div>
        </div>

        {/* Sweets Section */}
        <section id="sweets" className="py-24 container mx-auto px-4 md:px-8 pt-32 -mt-20">
          <div className="text-center mb-16">
            <h2 className="font-kufi text-4xl font-bold text-primary mb-4">حلويات طرابلس الشهيرة</h2>
            <p className="font-naskh text-lg text-muted-foreground">صناعة الحلويات هنا ليست مهنة، بل فن يتوارثه الأبناء عن الآباء.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SWEETS.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border flex flex-col sm:flex-row group"
              >
                <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                  <h3 className="font-kufi text-2xl font-bold text-secondary mb-2">{item.name}</h3>
                  <p className="font-naskh text-foreground/80 mb-4 leading-relaxed">{item.desc}</p>
                  <p className="font-kufi text-xs text-muted-foreground bg-muted/50 p-2 rounded-lg border border-border/50">{item.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <GeometricDivider />

        {/* Traditional Dishes & Restaurants */}
        <section id="dishes" className="py-24 container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-kufi text-4xl font-bold text-primary mb-8 border-b-2 border-secondary pb-4 inline-block">الطبخ الطرابلسي الأصيل</h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                  <h3 className="font-kufi text-xl font-bold text-foreground mb-2">الكبة الطرابلسية</h3>
                  <p className="font-naskh text-muted-foreground">تتنوع بين المقلية والمشوية بالصينية، وتتميز بتتبيلتها الخاصة من نعناع وسبع بهارات.</p>
                </div>
                <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                  <h3 className="font-kufi text-xl font-bold text-foreground mb-2">المغربية والحمص</h3>
                  <p className="font-naskh text-muted-foreground">أطباق شعبية غنية، حيث يُطبخ الحمص الشامي بأسلوب مميز ويقدم مع الكمون والزيت البلدي.</p>
                </div>
                <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                  <h3 className="font-kufi text-xl font-bold text-foreground mb-2">التبولة الشمالية</h3>
                  <p className="font-naskh text-muted-foreground">تختلف قليلاً عن تبولة بيروت بزيادة نسبة البرغل الخشن والاعتماد على دبس الرمان.</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-kufi text-4xl font-bold text-primary mb-8 border-b-2 border-secondary pb-4 inline-block">المطاعم والأسواق الشهيرة</h2>
              <div className="relative p-8 rounded-3xl bg-primary text-primary-foreground overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-10">
                  <img src="/images/souks.jpg" className="w-full h-full object-cover" alt="pattern" />
                </div>
                <div className="relative z-10 space-y-6">
                  <div>
                    <h4 className="font-kufi text-xl font-bold text-secondary">شارع الإسكندر</h4>
                    <p className="font-naskh text-primary-foreground/80 mt-2">شارع يضج بالحياة ويضم أعرق مطاعم الفول والحمص والفتة.</p>
                  </div>
                  <div>
                    <h4 className="font-kufi text-xl font-bold text-secondary">سوق العطارين</h4>
                    <p className="font-naskh text-primary-foreground/80 mt-2">حيث تختلط روائح التوابل والأعشاب، وتجد أقدم محلات العطارة التي تورّد للمطاعم بهاراتها السرية.</p>
                  </div>
                  <div>
                    <h4 className="font-kufi text-xl font-bold text-secondary">الميناء (الكورنيش)</h4>
                    <p className="font-naskh text-primary-foreground/80 mt-2">موطن مطاعم المأكولات البحرية الطازجة التي تأتي مباشرة من شباك الصيادين.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <GeometricDivider />

        {/* Coffee Culture */}
        <section id="coffee" className="py-24 bg-card">
          <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
            <h2 className="font-kufi text-4xl font-bold text-foreground mb-6">قهوة طرابلس .. طقس يومي</h2>
            <p className="font-naskh text-xl text-muted-foreground leading-relaxed mb-12">
              القهوة في طرابلس ليست مجرد مشروب، بل هي طقس اجتماعي يجمع الناس في ساحات المدينة وعلى الكورنيش. من القهوة العربية المطحونة مع الهيل والمغلية على نار هادئة، إلى "قهوة الحليب" المرافقة لكعكة الصباح.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-64 rounded-2xl overflow-hidden shadow-md">
                 <img src="/images/img4.jpg" alt="مقهى طرابلسي" className="w-full h-full object-cover" />
              </div>
              <div className="h-64 rounded-2xl overflow-hidden shadow-md">
                 <img src="/images/img6.jpg" alt="جلسة قهوة" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
