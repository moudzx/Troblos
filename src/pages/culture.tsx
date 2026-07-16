import { PageTransition } from "@/components/page-transition";
import { GeometricDivider } from "@/components/geometric-divider";
import { motion } from "framer-motion";

export default function Culture() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background pb-24">
        
        {/* Hero */}
        <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/mansouri.jpg" alt="ثقافة طرابلس" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-primary/60 to-transparent mix-blend-multiply" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-kufi text-5xl md:text-7xl font-black text-white mb-6"
            >
              روح الثقافة
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-naskh text-xl md:text-3xl text-white/90 max-w-2xl mx-auto"
            >
              مدينة حيث الفنون، الحرف اليدوية، والأسواق العتيقة تنسج معاً لوحة حية من التراث اللبناني الأصيل.
            </motion.p>
          </div>
        </section>

        {/* Arts & Crafts */}
        <section className="py-24 container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-kufi text-4xl font-bold text-primary mb-4">الفنون والحرف اليدوية</h2>
            <p className="font-naskh text-lg text-muted-foreground max-w-2xl mx-auto">حرفيون يتوارثون مهنهم عبر الأجيال، يحافظون على أصالة الصناعات التقليدية في خانات المدينة القديمة.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -10 }} className="bg-card rounded-2xl p-8 border border-border shadow-lg text-center">
              <div className="w-20 h-20 mx-auto bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6 border-2 border-secondary border-dashed">
                <span className="font-kufi text-2xl font-bold">١</span>
              </div>
              <h3 className="font-kufi text-2xl font-bold text-foreground mb-4">صابون الغار الطرابلسي</h3>
              <p className="font-naskh text-muted-foreground">صناعة عريقة تُستخدم فيها زيوت الزيتون والغار الطبيعية وتُعتق لأشهر، مما يمنحها رائحة مميزة وجودة عالية.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-card rounded-2xl p-8 border border-border shadow-lg text-center">
               <div className="w-20 h-20 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 border-2 border-primary border-dashed">
                <span className="font-kufi text-2xl font-bold">٢</span>
              </div>
              <h3 className="font-kufi text-2xl font-bold text-foreground mb-4">النقش على النحاس</h3>
              <p className="font-naskh text-muted-foreground">في سوق النحاسين، لا يزال صوت المطارق الصغيرة يتردد لتزيين الأواني والصواني بأجمل الزخارف العربية.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-card rounded-2xl p-8 border border-border shadow-lg text-center">
               <div className="w-20 h-20 mx-auto bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6 border-2 border-accent border-dashed">
                <span className="font-kufi text-2xl font-bold">٣</span>
              </div>
              <h3 className="font-kufi text-2xl font-bold text-foreground mb-4">صناعة الزجاج المنفوخ</h3>
              <p className="font-naskh text-muted-foreground">حرفة تعود للعهد الروماني والمملوكي، حيث تُشكل قطع الزجاج الفنية يدوياً أمام أفران النار الملتهبة.</p>
            </motion.div>
          </div>
        </section>

        <GeometricDivider />

        {/* Traditional Souks */}
        <section className="py-24 bg-foreground text-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="font-kufi text-4xl font-bold text-secondary">الأسواق التراثية</h2>
                <p className="font-naskh text-lg text-background/80 leading-relaxed text-justify">
                  تشكل أسواق طرابلس القديمة القلب النابض للمدينة، وهي متاهة من الأزقة المسقوفة والعقود الحجرية التي تفوح منها عبق التاريخ. كل سوق متخصص بمهنة، مما يجعل التجول فيها رحلة عبر الزمن.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-background/20 p-4 rounded-xl hover:bg-background/5 transition-colors">
                    <h4 className="font-kufi font-bold text-primary-foreground mb-1">سوق الصاغة</h4>
                    <p className="font-naskh text-sm text-background/60">أجمل المشغولات الذهبية</p>
                  </div>
                  <div className="border border-background/20 p-4 rounded-xl hover:bg-background/5 transition-colors">
                    <h4 className="font-kufi font-bold text-primary-foreground mb-1">خان الخياطين</h4>
                    <p className="font-naskh text-sm text-background/60">الأزياء والعباءات التراثية</p>
                  </div>
                  <div className="border border-background/20 p-4 rounded-xl hover:bg-background/5 transition-colors">
                    <h4 className="font-kufi font-bold text-primary-foreground mb-1">سوق العطارين</h4>
                    <p className="font-naskh text-sm text-background/60">عالم التوابل والأعشاب</p>
                  </div>
                  <div className="border border-background/20 p-4 rounded-xl hover:bg-background/5 transition-colors">
                    <h4 className="font-kufi font-bold text-primary-foreground mb-1">سوق الحدادين</h4>
                    <p className="font-naskh text-sm text-background/60">الحرف الحديدية الثقيلة</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/images/souks.jpg" alt="أسواق طرابلس" className="w-full h-full object-cover" />
                <div className="absolute inset-0 border-4 border-secondary/30 rounded-3xl pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Festivals & Music */}
        <section className="py-24 container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="bg-card p-10 rounded-3xl shadow-lg border-t-4 border-primary h-full">
                <h3 className="font-kufi text-3xl font-bold text-foreground mb-6">المهرجانات والأحداث</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-kufi font-bold text-primary text-lg">الأسواق الرمضانية</h4>
                      <p className="font-naskh text-muted-foreground mt-1">تتحول المدينة القديمة في ليالي رمضان إلى مهرجان من الأضواء والأناشيد والمأكولات الشعبية.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-kufi font-bold text-primary text-lg">مهرجان طرابلس الدولي</h4>
                      <p className="font-naskh text-muted-foreground mt-1">يستضيف عروضاً موسيقية وفنية وثقافية من مختلف أنحاء العالم.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-kufi font-bold text-primary text-lg">عيد الفطر والأضحى</h4>
                      <p className="font-naskh text-muted-foreground mt-1">احتفالات تعم الساحات مع الفرق النحاسية والأراجيح الخشبية التقليدية.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="bg-card p-10 rounded-3xl shadow-lg border-t-4 border-accent h-full">
                <h3 className="font-kufi text-3xl font-bold text-foreground mb-6">الموسيقى والتعليم</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                    <div>
                      <h4 className="font-kufi font-bold text-primary text-lg">المقام الطرابلسي</h4>
                      <p className="font-naskh text-muted-foreground mt-1">تتميز المدينة بتراث غني من الإنشاد الديني والموشحات التي تُؤدى في الزوايا الصوفية والمساجد.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                    <div>
                      <h4 className="font-kufi font-bold text-primary text-lg">الدبكة الشمالية</h4>
                      <p className="font-naskh text-muted-foreground mt-1">تختلف الدبكة في طرابلس والشمال بإيقاعها السريع وحيويتها العالية التي تعكس طاقة أهل المنطقة.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                    <div>
                      <h4 className="font-kufi font-bold text-primary text-lg">جامعة طرابلس والمتاحف</h4>
                      <p className="font-naskh text-muted-foreground mt-1">تضم المدينة مؤسسات تعليمية عريقة ومتاحف تحفظ المخطوطات والآثار التي تروي مجدها العلمي.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </section>

      </main>
    </PageTransition>
  );
}
