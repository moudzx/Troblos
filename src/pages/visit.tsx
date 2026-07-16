import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PageTransition } from "@/components/page-transition";

const visitSchema = z.object({
  name: z.string().min(2, { message: "الاسم يجب أن يكون حرفين على الأقل" }),
  phone: z.string().min(8, { message: "رقم الهاتف غير صالح" }),
  email: z.string().email({ message: "البريد الإلكتروني غير صالح" }),
  date: z.string().min(1, { message: "الرجاء تحديد تاريخ الزيارة" }),
  destination: z.string().min(1, { message: "الرجاء اختيار وجهة" }),
  groupSize: z.coerce.number().min(1, { message: "يجب أن يكون عدد الأفراد 1 على الأقل" }),
  tripType: z.string().min(1, { message: "الرجاء اختيار نوع الرحلة" })
});

export default function Visit() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof visitSchema>>({
    resolver: zodResolver(visitSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      date: "",
      destination: "",
      groupSize: 1,
      tripType: "عائلي"
    }
  });

  function onSubmit(values: z.infer<typeof visitSchema>) {
    toast({
      title: "تم استلام طلبك بنجاح!",
      description: `سنتواصل معك قريباً يا ${values.name} لتأكيد الحجز ليوم ${values.date}.`,
      className: "bg-primary text-primary-foreground border-none font-kufi",
    });
    form.reset();
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-kufi text-5xl font-black text-foreground mb-6">خطط لزيارتك</h1>
            <p className="font-naskh text-xl text-muted-foreground">اكتشف سحر طرابلس معنا، دعنا نرتب لك تفاصيل رحلتك.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
              <h3 className="font-kufi text-xl font-bold text-primary mb-4 border-b-2 border-secondary inline-block pb-2">لماذا تزور طرابلس؟</h3>
              <ul className="space-y-4 mt-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span className="font-naskh text-foreground/80">٣٥٠٠ عام من التاريخ المعماري في كل زقاق.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span className="font-naskh text-foreground/80">أفضل الحلويات والمأكولات في الشرق الأوسط.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span className="font-naskh text-foreground/80">ضيافة أهل الشمال الأصيلة وكرمهم المعهود.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm lg:col-span-2">
              <h3 className="font-kufi text-xl font-bold text-primary mb-4 border-b-2 border-accent inline-block pb-2">معلومات عملية</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="font-kufi font-bold text-foreground mb-1 text-sm text-muted-foreground">أفضل وقت للزيارة</h4>
                  <p className="font-naskh">الربيع (مارس–يونيو) والخريف (سبتمبر–نوفمبر)</p>
                </div>
                <div>
                  <h4 className="font-kufi font-bold text-foreground mb-1 text-sm text-muted-foreground">المسافة من بيروت</h4>
                  <p className="font-naskh">85 كم (ساعة ونصف بالسيارة تقريباً)</p>
                </div>
                <div>
                  <h4 className="font-kufi font-bold text-foreground mb-1 text-sm text-muted-foreground">العملة المعتمدة</h4>
                  <p className="font-naskh">الليرة اللبنانية والدولار الأمريكي</p>
                </div>
                <div>
                  <h4 className="font-kufi font-bold text-foreground mb-1 text-sm text-muted-foreground">اللغة المتداولة</h4>
                  <p className="font-naskh">العربية (الإنجليزية والفرنسية مفهومتان على نطاق واسع)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-border max-w-6xl mx-auto">
            
            {/* Form Side */}
            <div className="w-full md:w-2/3 p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-kufi text-3xl font-bold text-foreground mb-8">احجز جولتك السياحية</h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-kufi text-foreground text-sm">الاسم الكامل</FormLabel>
                            <FormControl>
                              <Input placeholder="أدخل اسمك" className="font-naskh bg-background h-12 rounded-xl text-right border-border" {...field} />
                            </FormControl>
                            <FormMessage className="font-kufi text-xs text-destructive" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-kufi text-foreground text-sm">رقم الهاتف</FormLabel>
                            <FormControl>
                              <Input placeholder="00961 00 000 000" className="font-sans bg-background h-12 rounded-xl text-right border-border" dir="ltr" {...field} />
                            </FormControl>
                            <FormMessage className="font-kufi text-xs text-destructive" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-kufi text-foreground text-sm">البريد الإلكتروني</FormLabel>
                            <FormControl>
                              <Input placeholder="email@example.com" className="font-sans bg-background h-12 rounded-xl text-right border-border" dir="ltr" {...field} />
                            </FormControl>
                            <FormMessage className="font-kufi text-xs text-destructive" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-kufi text-foreground text-sm">تاريخ الزيارة</FormLabel>
                            <FormControl>
                              <Input type="date" className="font-sans bg-background h-12 rounded-xl border-border w-full" {...field} />
                            </FormControl>
                            <FormMessage className="font-kufi text-xs text-destructive" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <FormField
                        control={form.control}
                        name="destination"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel className="font-kufi text-foreground text-sm">الوجهة المفضلة</FormLabel>
                            <FormControl>
                              <select className="w-full h-12 rounded-xl bg-background border border-border px-3 font-naskh outline-none focus:ring-2 focus:ring-primary" {...field}>
                                <option value="">اختر الوجهة...</option>
                                <option value="جولة كاملة في المدينة">جولة كاملة في المدينة</option>
                                <option value="المدينة القديمة والأسواق">المدينة القديمة والأسواق</option>
                                <option value="القلعة والمعالم التاريخية">القلعة والمعالم التاريخية</option>
                                <option value="الميناء وجزر النخل">الميناء وجزر النخل (رحلة بحرية)</option>
                                <option value="جولة تذوق الحلويات">جولة تذوق المأكولات والحلويات</option>
                              </select>
                            </FormControl>
                            <FormMessage className="font-kufi text-xs text-destructive" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="groupSize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-kufi text-foreground text-sm">عدد الأفراد</FormLabel>
                            <FormControl>
                              <Input type="number" min="1" className="font-sans bg-background h-12 rounded-xl text-center border-border" {...field} />
                            </FormControl>
                            <FormMessage className="font-kufi text-xs text-destructive" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="tripType"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="font-kufi text-foreground text-sm block">نوع الرحلة</FormLabel>
                          <FormControl>
                            <div className="flex gap-6">
                              <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" value="فردي" checked={field.value === "فردي"} onChange={field.onChange} className="text-primary focus:ring-primary accent-primary" />
                                <span className="font-naskh">فردي</span>
                              </label>
                              <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" value="عائلي" checked={field.value === "عائلي"} onChange={field.onChange} className="text-primary focus:ring-primary accent-primary" />
                                <span className="font-naskh">عائلي</span>
                              </label>
                              <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" value="جماعي" checked={field.value === "جماعي"} onChange={field.onChange} className="text-primary focus:ring-primary accent-primary" />
                                <span className="font-naskh">جماعي (مجموعة)</span>
                              </label>
                            </div>
                          </FormControl>
                          <FormMessage className="font-kufi text-xs text-destructive" />
                        </FormItem>
                      )}
                    />

                    <button
                      type="submit"
                      className="w-full h-14 mt-4 bg-primary text-primary-foreground rounded-xl font-kufi font-bold text-xl hover:bg-primary/90 transition-all hover:shadow-lg active:scale-[0.98]"
                    >
                      تأكيد الحجز
                    </button>

                  </form>
                </Form>
              </motion.div>
            </div>

            {/* Image Side */}
            <div className="w-full md:w-1/3 relative min-h-[300px] md:min-h-full">
              <img 
                src="/images/img0.jpg" 
                alt="طرابلس لبنان" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
            </div>

          </div>
        </div>
      </main>
    </PageTransition>
  );
}
