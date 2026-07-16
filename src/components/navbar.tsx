import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/history", label: "التاريخ" },
  { href: "/places", label: "الأماكن" },
  { href: "/food", label: "المأكولات" },
  { href: "/culture", label: "الثقافة" },
  { href: "/visit", label: "زيارة" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className={cn(
              "font-kufi font-bold text-2xl tracking-tighter transition-colors",
              isScrolled ? "text-primary" : "text-primary md:text-white"
            )}>
              طرابلس
            </span>
            <span className={cn(
              "hidden sm:inline-block w-1.5 h-1.5 rounded-full",
              isScrolled ? "bg-secondary" : "bg-secondary md:bg-white"
            )} />
            <span className={cn(
              "hidden sm:inline-block font-kufi text-sm font-medium",
              isScrolled ? "text-foreground" : "text-foreground md:text-white/90"
            )}>
              لؤلؤة المتوسط
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-kufi text-sm font-semibold transition-colors hover:text-secondary",
                  location === link.href
                    ? isScrolled ? "text-secondary" : "text-secondary md:text-white"
                    : isScrolled ? "text-foreground/80" : "text-foreground/80 md:text-white/80"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/visit"
              className={cn(
                "px-5 py-2.5 rounded-full font-kufi text-sm font-bold transition-transform hover:scale-105 active:scale-95",
                isScrolled 
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-white text-primary shadow-lg"
              )}
            >
              احجز مساراً
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "md:hidden p-2 rounded-md transition-colors",
              isScrolled ? "text-foreground hover:bg-muted" : "text-primary hover:bg-white/20"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="القائمة"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden flex flex-col overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 items-center pb-12">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "font-kufi text-2xl font-bold transition-colors w-full text-center py-4 border-b border-border",
                    location === link.href ? "text-primary" : "text-foreground/80 hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/visit"
                onClick={() => setIsOpen(false)}
                className="mt-6 w-full text-center px-6 py-4 bg-primary text-primary-foreground rounded-xl font-kufi font-bold text-xl"
              >
                احجز مساراً سياحياً
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
