import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PageTransition } from "@/components/page-transition";
import { Search, X } from "lucide-react";
import { Link } from "wouter";

const PLACES = [
  {
    title: "قلعة طرابلس",
    category: "قلاع",
    image: "/images/castle.jpg",
    desc: "بنيت في العهد الصليبي، ثم طوّرها المماليك، تطل على المدينة القديمة بأسوارها الشامخة وتحتوي على العديد من الأبراج والممرات السرية."
  },
  {
    title: "الجامع المنصوري الكبير",
    category: "مساجد",
    image: "/images/mansouri.jpg",
    desc: "من أجمل المساجد المملوكية في الشرق الأوسط، بني عام 1294م بأمر من السلطان الأشرف خليل بن قلاوون، ويتميز بمئذنته الفريدة."
  },
  {
    title: "حمام النوري",
    category: "أسواق", // Close enough category
    image: "/images/hammam.jpg",
    desc: "من أعرق الحمامات العثمانية في لبنان، لا يزال يحتفظ بزخارفه الأصلية وقبابه الزجاجية التي تسمح بنفاذ الضوء في مشهد ساحر."
  },
  {
    title: "أسواق طرابلس القديمة",
    category: "أسواق",
    image: "/images/souks.jpg",
    desc: "متاهة من الأزقة المسقوفة تعبق بروائح البهارات والصابون: سوق الصاغة، سوق القمح، سوق العطارين، وسوق حراج المليء بالحياة."
  },
  {
    title: "جزيرة النخل",
    category: "طبيعة",
    image: "/images/palm.jpg",
    desc: "محمية طبيعية على بعد كيلومترين من الشاطئ، موطن للسلاحف البحرية والطيور النادرة ومكان مثالي للسباحة في مياه صافية."
  },
  {
    title: "كورنيش البحر والميناء",
    category: "شواطئ",
    image: "/images/sea.jpg",
    desc: "الواجهة البحرية الحيّة لمدينة الميناء (طرابلس البحرية) بمقاهيها ومطاعمها وصيادي السمك وحركة المراكب التي لا تهدأ."
  },
  {
    title: "مسجد الطينال",
    category: "مساجد",
    image: "/images/taynal.jpg",
    desc: "مسجد مملوكي يعود للقرن الرابع عشر، يتميز بمئذنته الرشيقة وقبابه الخضراء وبوابته الحجرية المزخرفة غاية في الإتقان."
  },
  {
    title: "نهر أبو علي",
    category: "طبيعة",
    image: "/images/abuali.jpg",
    desc: "شريان المدينة الذي ينبع من وادي قاديشا ويصبّ في البحر المتوسط وسط المدينة، وقد شهد على تاريخ طرابلس بحلوه ومره."
  },
  {
    title: "مسجد الطيطيل",
    category: "مساجد",
    image: "/images/taynal.jpg", // Reusing image since taynal was used twice in the prompt request loosely
    desc: "مسجد مملوكي من القرن الثالث عشر بمئذنته الفريدة وهندسته الرائعة التي تعكس دقة البناء في ذلك العصر."
  },
  {
    title: "مرسى الصيد القديم",
    category: "شواطئ",
    image: "/images/sea.jpg", // Reuse
    desc: "حيث يعود الصيادون عند الفجر بصيدهم الطازج، مشهد يجمع بين زرقة البحر وحركة القوارب الخشبية الملونة."
  },
  {
    title: "ملعب طرابلس",
    category: "الكل", // General
    image: "/images/stadium.jpg",
    desc: "الملعب البلدي في قلب المدينة، واحة خضراء ومكان لتجمع أهالي المدينة في المناسبات الرياضية الكبرى."
  },
  {
    title: "السبع بحرات",
    category: "الكل",
    image: "/images/saba3.jpg",
    desc: "ميدان شهير في وسط طرابلس الحديثة، يتميز بنوافير المياه التي تمنحه اسمه، ومحاط بالمقاهي والمحلات التجارية."
  }
];

const CATEGORIES = ["الكل", "مساجد", "قلاع", "أسواق", "طبيعة", "شواطئ"];

export default function Places() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [lightboxPlace, setLightboxPlace] = useState<typeof PLACES[0] | null>(null);

  const filteredPlaces = PLACES.filter(place => {
    const matchesSearch = place.title.includes(searchTerm) || place.desc.includes(searchTerm);
    const matchesCat = activeCategory === "الكل" || place.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <PageTransition>
      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="font-kufi text-5xl font-black text-foreground mb-6">أماكن لا تُنسى</h1>
            <p className="font-naskh text-xl text-muted-foreground leading-relaxed">
              استكشف معالم طرابلس التاريخية والطبيعية، حيث كل زاوية تخبئ حكاية، وكل معلم يروي فصلاً من أمجاد هذه المدينة العريقة.
            </p>
          </motion.div>

          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full font-kufi text-sm transition-all ${
                    activeCategory === cat 
                      ? "bg-secondary text-secondary-foreground shadow-md" 
                      : "bg-card border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="بحث في الأماكن..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-card border border-border text-foreground rounded-full pl-4 pr-12 py-3 font-kufi focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </div>

          {/* Places Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPlaces.map((place, index) => (
              <motion.div
                key={place.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                onClick={() => setLightboxPlace(place)}
                className="group rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={place.image} 
                    alt={place.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6 relative">
                  <div className="absolute top-0 right-6 left-6 h-[1px] bg-secondary/30" />
                  <div className="flex justify-between items-center mb-3 mt-2">
                    <h3 className="font-kufi text-xl font-bold text-primary">
                      {place.title}
                    </h3>
                    <span className="text-[10px] font-kufi px-2 py-1 bg-muted rounded-full text-muted-foreground">{place.category}</span>
                  </div>
                  <p className="font-naskh text-sm text-card-foreground/80 leading-relaxed text-justify line-clamp-3">
                    {place.desc}
                  </p>
                </div>
              </motion.div>
            ))}
            
            {filteredPlaces.length === 0 && (
              <div className="col-span-full text-center py-20">
                <p className="font-kufi text-xl text-muted-foreground">لا توجد أماكن مطابقة للبحث.</p>
              </div>
            )}
          </div>

        </div>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {lightboxPlace && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
              onClick={() => setLightboxPlace(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-card w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-4 left-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                  onClick={() => setLightboxPlace(null)}
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="w-full md:w-1/2 h-64 md:h-[500px]">
                  <img src={lightboxPlace.image} alt={lightboxPlace.title} className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <span className="font-kufi text-sm text-secondary mb-2 block">{lightboxPlace.category}</span>
                  <h2 className="font-kufi text-3xl md:text-4xl font-bold text-foreground mb-6">{lightboxPlace.title}</h2>
                  <p className="font-naskh text-lg text-muted-foreground leading-relaxed text-justify mb-8">
                    {lightboxPlace.desc}
                  </p>
                  <Link 
                    href="/visit" 
                    onClick={() => setLightboxPlace(null)}
                    className="mt-auto self-start bg-primary text-primary-foreground px-8 py-3 rounded-full font-kufi font-bold hover:bg-primary/90 transition-colors inline-block"
                  >
                    احجز زيارة لهذا المكان
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </PageTransition>
  );
}
