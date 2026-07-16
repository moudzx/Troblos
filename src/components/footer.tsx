import { Link } from "wouter";
import { GeometricDivider } from "./geometric-divider";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <>
      <div className="bg-foreground text-primary pt-8">
        <GeometricDivider />
      </div>
      <footer className="bg-foreground text-background py-16 border-t border-primary/20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            <div className="space-y-4 md:col-span-2">
              <h3 className="font-kufi text-2xl font-bold text-secondary">طرابلس</h3>
              <p className="font-naskh text-background/80 leading-relaxed max-w-sm text-justify">
                المدينة التي لا تنام، حيث يتعانق التاريخ مع البحر الأبيض المتوسط،
                وتتجسد الأصالة في كل حجر من أسواقها العتيقة. اكتشف لؤلؤة المتوسط وعاصمة الشمال اللبناني.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-kufi text-lg font-bold text-primary-foreground">الصفحات</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/" className="font-kufi text-sm text-background/70 hover:text-secondary transition-colors w-fit">الرئيسية</Link>
                <Link href="/history" className="font-kufi text-sm text-background/70 hover:text-secondary transition-colors w-fit">التاريخ</Link>
                <Link href="/places" className="font-kufi text-sm text-background/70 hover:text-secondary transition-colors w-fit">الأماكن</Link>
                <Link href="/food" className="font-kufi text-sm text-background/70 hover:text-secondary transition-colors w-fit">المأكولات</Link>
                <Link href="/culture" className="font-kufi text-sm text-background/70 hover:text-secondary transition-colors w-fit">الثقافة</Link>
                <Link href="/visit" className="font-kufi text-sm text-background/70 hover:text-secondary transition-colors w-fit">حجز زيارة</Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="font-kufi text-lg font-bold text-primary-foreground">تواصل معنا</h4>
              <div className="flex flex-col gap-3 font-kufi text-sm text-background/70">
                <a href="tel:+9616123456" className="flex items-center gap-2 hover:text-secondary transition-colors" dir="ltr" style={{ justifyContent: 'flex-end' }}>
                  <span>+961 6 123 456</span>
                  <FaWhatsapp className="w-4 h-4" />
                </a>
                <a href="mailto:info@tripoli-tourism.lb" className="flex items-center gap-2 hover:text-secondary transition-colors" dir="ltr" style={{ justifyContent: 'flex-end' }}>
                  <span>info@tripoli-tourism.lb</span>
                  <FaEnvelope className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-kufi text-xs text-background/50">
              © ٢٠٢٥ موقع طرابلس — جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-secondary hover:text-foreground transition-all">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-secondary hover:text-foreground transition-all">
                <FaFacebookF className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
