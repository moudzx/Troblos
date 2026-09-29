/* ==========================================================
   طرابلس — Tripoli, Lebanon
   Vanilla JavaScript (converted from React)
   ========================================================== */
(function () {
  "use strict";

  /* ---------- Icons (Lucide paths, inlined) ---------- */
  var ICONS = {
    "menu": '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
    "x": '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    "arrow-left": '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    "arrow-up": '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    "search": '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    "send": '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
    "landmark": '<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
    "history": '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
    "utensils": '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
    "book-open": '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
    "mail": '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    "message-circle": '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    "instagram": '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
    "facebook": '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    "alert": '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>'
  };

  function svg(name, cls) {
    return '<svg class="icon ' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
  }

  function hydrateIcons(root) {
    (root || document).querySelectorAll("[data-icon]").forEach(function (el) {
      if (el.dataset.done) return;
      el.innerHTML = svg(el.dataset.icon);
      el.dataset.done = "1";
    });
  }

  /* ---------- Shared chrome ---------- */
  var NAV = [
    { href: "index.html", page: "home", label: "الرئيسية" },
    { href: "history.html", page: "history", label: "التاريخ" },
    { href: "places.html", page: "places", label: "الأماكن" },
    { href: "food.html", page: "food", label: "المأكولات" },
    { href: "culture.html", page: "culture", label: "الثقافة" },
    { href: "visit.html", page: "visit", label: "زيارة" }
  ];

  var GEO_DIVIDER =
    '<div class="geo-divider"><svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M100 0L110 15L125 10L115 25L125 40L110 35L100 50L90 35L75 40L85 25L75 10L90 15L100 0Z" fill="hsl(185 63% 27%)" opacity="0.8"/>' +
    '<path d="M30 10L35 20L45 15L40 25L45 35L35 30L30 40L25 30L15 35L20 25L15 15L25 20L30 10Z" fill="hsl(30 54% 54%)" opacity="0.6"/>' +
    '<path d="M170 10L175 20L185 15L180 25L185 35L175 30L170 40L165 30L155 35L160 25L155 15L165 20L170 10Z" fill="hsl(30 54% 54%)" opacity="0.6"/>' +
    '<line x1="0" y1="25" x2="60" y2="25" stroke="hsl(185 63% 27%)" stroke-width="2" opacity="0.3"/>' +
    '<line x1="140" y1="25" x2="200" y2="25" stroke="hsl(185 63% 27%)" stroke-width="2" opacity="0.3"/>' +
    "</svg></div>";

  var page = document.body.dataset.page || "";

  function buildHeader() {
    var host = document.getElementById("site-header");
    if (!host) return;
    var desk = NAV.map(function (l) {
      return '<a href="' + l.href + '" class="nav-link' + (l.page === page ? " active" : "") + '">' + l.label + "</a>";
    }).join("");
    var mob = NAV.map(function (l) {
      return '<a href="' + l.href + '" class="m-link' + (l.page === page ? " active" : "") + '">' + l.label + "</a>";
    }).join("");

    host.innerHTML =
      '<header class="site-header" id="header"><div class="container header-inner">' +
      '<a href="index.html" class="brand"><span class="brand-name">طرابلس</span><span class="brand-dot"></span><span class="brand-tag">لؤلؤة المتوسط</span></a>' +
      '<nav class="desktop-nav">' + desk + '<a href="visit.html" class="nav-cta">احجز مساراً</a></nav>' +
      '<button class="menu-toggle" id="menu-toggle" aria-label="القائمة">' + svg("menu") + "</button>" +
      "</div></header>" +
      '<div class="mobile-nav" id="mobile-nav"><nav>' + mob + '<a href="visit.html" class="m-cta">احجز مساراً سياحياً</a></nav></div>';

    var toggle = document.getElementById("menu-toggle");
    var mobile = document.getElementById("mobile-nav");
    toggle.addEventListener("click", function () {
      var open = mobile.classList.toggle("open");
      toggle.innerHTML = svg(open ? "x" : "menu");
    });
    mobile.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobile.classList.remove("open");
        toggle.innerHTML = svg("menu");
      });
    });
  }

  function buildFooter() {
    var host = document.getElementById("site-footer");
    if (!host) return;
    var links = [
      ["index.html", "الرئيسية"], ["history.html", "التاريخ"], ["places.html", "الأماكن"],
      ["food.html", "المأكولات"], ["culture.html", "الثقافة"], ["visit.html", "حجز زيارة"]
    ].map(function (l) { return '<a href="' + l[0] + '">' + l[1] + "</a>"; }).join("");

    host.innerHTML =
      '<div class="divider-band">' + GEO_DIVIDER + "</div>" +
      '<footer class="site-footer"><div class="container">' +
      '<div class="footer-grid">' +
      '<div class="footer-about"><h3>طرابلس</h3><p>المدينة التي لا تنام، حيث يتعانق التاريخ مع البحر الأبيض المتوسط، وتتجسد الأصالة في كل حجر من أسواقها العتيقة. اكتشف لؤلؤة المتوسط وعاصمة الشمال اللبناني.</p></div>' +
      '<div class="footer-col"><h4>الصفحات</h4><nav>' + links + "</nav></div>" +
      '<div class="footer-col"><h4>تواصل معنا</h4><div class="footer-contact">' +
      '<a href="tel:+9616123456"><span>+961 6 123 456</span>' + svg("message-circle") + "</a>" +
      '<a href="mailto:info@tripoli-tourism.lb"><span>info@tripoli-tourism.lb</span>' + svg("mail") + "</a>" +
      "</div></div></div>" +
      '<div class="footer-bottom"><p>© ٢٠٢٥ موقع طرابلس — جميع الحقوق محفوظة.</p>' +
      '<div class="socials"><a href="#" aria-label="Instagram">' + svg("instagram") + '</a><a href="#" aria-label="Facebook">' + svg("facebook") + "</a></div></div>" +
      "</div></footer>" +
      '<div id="scroll-progress"></div>' +
      '<button id="back-to-top" aria-label="العودة إلى الأعلى">' + svg("arrow-up") + "</button>";

    document.getElementById("back-to-top").addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function injectDividers() {
    document.querySelectorAll("[data-divider]").forEach(function (el) { el.innerHTML = GEO_DIVIDER; });
  }

  /* ---------- Scroll behaviours ---------- */
  function initScroll() {
    var header = document.getElementById("header");
    var progress = document.getElementById("scroll-progress");
    var top = document.getElementById("back-to-top");
    var ticking = false;

    function update() {
      var y = window.scrollY || document.documentElement.scrollTop;
      if (header) header.classList.toggle("scrolled", y > 20);
      if (top) top.classList.toggle("show", y > 400);
      if (progress) {
        var max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.transform = "scaleX(" + (max > 0 ? Math.min(y / max, 1) : 0) + ")";
      }
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* ---------- Reveal on scroll ---------- */
  var revealObserver = null;
  function observeReveals(root) {
    var els = (root || document).querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealObserver.unobserve(e.target);
            if (e.target.dataset.count) runCount(e.target);
          }
        });
      }, { rootMargin: "0px 0px -50px 0px", threshold: 0.05 });
    }
    els.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Count up ---------- */
  function initCountUp() {
    var els = document.querySelectorAll("[data-count]");
    if (!els.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { io.unobserve(e.target); runCount(e.target); }
      });
    }, { rootMargin: "0px 0px -50px 0px" });
    els.forEach(function (el) { if (!el.classList.contains("reveal")) io.observe(el); });
  }
  function runCount(el) {
    if (el.dataset.ran) return;
    el.dataset.ran = "1";
    var end = parseInt(el.dataset.count, 10);
    var suffix = el.dataset.suffix || "";
    var duration = 2000, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = Math.floor(eased * end).toLocaleString("ar-EG") + suffix;
      if (p < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  /* ---------- Toast ---------- */
  function toast(title, description) {
    var host = document.getElementById("toast-host");
    if (!host) {
      host = document.createElement("div");
      host.id = "toast-host";
      document.body.appendChild(host);
    }
    var t = document.createElement("div");
    t.className = "toast";
    t.setAttribute("role", "status");
    t.innerHTML = '<div class="t1"></div><div class="t2"></div>';
    t.children[0].textContent = title;
    t.children[1].textContent = description;
    host.appendChild(t);
    setTimeout(function () {
      t.classList.add("out");
      setTimeout(function () { t.remove(); }, 350);
    }, 5000);
  }

  /* ==========================================================
     PAGE: HOME
     ========================================================== */
  function initHome() {
    var form = document.getElementById("news-form");
    var wrap = document.getElementById("news-wrap");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector("input");
      if (!input.value) return;
      wrap.innerHTML = '<div class="news-thanks">شكراً! سنبقيك على اطلاع بكل جديد طرابلس.</div>';
    });
  }

  /* ==========================================================
     PAGE: HISTORY
     ========================================================== */
  var TIMELINE = [
    { period: "الفينيقيون (1500 ق.م)", category: "فينيقي", desc: "أسسوها كمركز تجاري بحري، وعُرفت باسم 'أثل'. كانت نقطة التقاء بحرية هامة للسفن التجارية القادمة من أرجاء المتوسط.", color: "secondary" },
    { period: "الفترة الفارسية والهلنستية", category: "روماني", desc: "أُعيد تأسيسها وسُميت 'تريبوليس' أي المدن الثلاث، نظراً لكونها اتحاداً لثلاث مدن (صور، صيدا، وأرواد).", color: "primary" },
    { period: "الحكم الروماني", category: "روماني", desc: "ازدهرت كمركز تجاري واشتهرت بصناعة الزجاج والأرجوان، وشهدت بناء معابد ومسارح ومرافق عامة فخمة.", color: "accent" },
    { period: "الفتح الإسلامي (636م)", category: "إسلامي", desc: "أصبحت مركزاً إسلامياً مزدهراً في عهد الأمويين والعباسيين، وتطورت كحاضرة علمية وتجارية أساسية على الساحل.", color: "foreground" },
    { period: "الدولة الصليبية (1109–1289)", category: "مملوكي", desc: "أصبحت عاصمة مقاطعة طرابلس. شيّد فيها الصليبيون القلعة الشهيرة (قلعة سان جيل) التي لا تزال تهيمن على المدينة حتى اليوم.", color: "secondary", img: "images/castle.jpg" },
    { period: "المماليك (1289–1516)", category: "مملوكي", desc: "حررها السلطان قلاوون وأعاد بناءها. بنوا المدارس والمساجد والأسواق المملوكية العظيمة التي لا تزال تنبض بالحياة، لتصبح طرابلس العاصمة الثانية بعد القاهرة.", color: "primary", img: "images/mansouri.jpg" },
    { period: "العهد العثماني (1516–1918)", category: "عثماني", desc: "ازدهرت تجارياً وتركت إرثاً معمارياً عثمانياً غنياً من حمامات وخانات ومساجد، أبرزها حمام عز الدين والتكية المولوية.", color: "accent" }
  ];
  var ERAS = ["الكل", "فينيقي", "روماني", "إسلامي", "مملوكي", "عثماني", "حديث"];

  function initHistory() {
    var chipsHost = document.getElementById("era-chips");
    var listHost = document.getElementById("timeline");
    if (!chipsHost || !listHost) return;
    var active = "الكل";

    function renderChips() {
      chipsHost.innerHTML = ERAS.map(function (era) {
        return '<button class="chip' + (era === active ? " active" : "") + '" data-era="' + era + '">' + era + "</button>";
      }).join("");
    }
    function renderTimeline() {
      var items = TIMELINE.filter(function (t) { return active === "الكل" || t.category === active; });
      if (!items.length) {
        listHost.innerHTML = '<div class="empty-note">لا توجد أحداث في هذه الحقبة.</div>';
        return;
      }
      listHost.innerHTML = items.map(function (t) {
        return '<div class="t-item reveal" data-reveal="right">' +
          '<div class="t-dot ' + t.color + '"></div>' +
          '<div class="t-box"><div class="t-head"><h3>' + t.period + "</h3><span>" + t.category + "</span></div>" +
          "<p>" + t.desc + "</p>" +
          (t.img ? '<div class="t-img"><img src="' + t.img + '" alt="' + t.period + '" loading="lazy"></div>' : "") +
          "</div></div>";
      }).join("");
      observeReveals(listHost);
    }
    chipsHost.addEventListener("click", function (e) {
      var b = e.target.closest("[data-era]");
      if (!b) return;
      active = b.dataset.era;
      renderChips();
      renderTimeline();
    });
    renderChips();
    renderTimeline();
  }

  /* ==========================================================
     PAGE: PLACES
     ========================================================== */
  var PLACES = [
    { title: "قلعة طرابلس", category: "قلاع", image: "images/castle.jpg", desc: "بنيت في العهد الصليبي، ثم طوّرها المماليك، تطل على المدينة القديمة بأسوارها الشامخة وتحتوي على العديد من الأبراج والممرات السرية." },
    { title: "الجامع المنصوري الكبير", category: "مساجد", image: "images/mansouri.jpg", desc: "من أجمل المساجد المملوكية في الشرق الأوسط، بني عام 1294م بأمر من السلطان الأشرف خليل بن قلاوون، ويتميز بمئذنته الفريدة." },
    { title: "حمام النوري", category: "أسواق", image: "images/hammam.jpg", desc: "من أعرق الحمامات العثمانية في لبنان، لا يزال يحتفظ بزخارفه الأصلية وقبابه الزجاجية التي تسمح بنفاذ الضوء في مشهد ساحر." },
    { title: "أسواق طرابلس القديمة", category: "أسواق", image: "images/souks.jpg", desc: "متاهة من الأزقة المسقوفة تعبق بروائح البهارات والصابون: سوق الصاغة، سوق القمح، سوق العطارين، وسوق حراج المليء بالحياة." },
    { title: "جزيرة النخل", category: "طبيعة", image: "images/palm.jpg", desc: "محمية طبيعية على بعد كيلومترين من الشاطئ، موطن للسلاحف البحرية والطيور النادرة ومكان مثالي للسباحة في مياه صافية." },
    { title: "كورنيش البحر والميناء", category: "شواطئ", image: "images/sea.jpg", desc: "الواجهة البحرية الحيّة لمدينة الميناء (طرابلس البحرية) بمقاهيها ومطاعمها وصيادي السمك وحركة المراكب التي لا تهدأ." },
    { title: "مسجد الطينال", category: "مساجد", image: "images/taynal.jpg", desc: "مسجد مملوكي يعود للقرن الرابع عشر، يتميز بمئذنته الرشيقة وقبابه الخضراء وبوابته الحجرية المزخرفة غاية في الإتقان." },
    { title: "نهر أبو علي", category: "طبيعة", image: "images/abuali.jpg", desc: "شريان المدينة الذي ينبع من وادي قاديشا ويصبّ في البحر المتوسط وسط المدينة، وقد شهد على تاريخ طرابلس بحلوه ومره." },
    { title: "مسجد الطيطيل", category: "مساجد", image: "images/taynal.jpg", desc: "مسجد مملوكي من القرن الثالث عشر بمئذنته الفريدة وهندسته الرائعة التي تعكس دقة البناء في ذلك العصر." },
    { title: "مرسى الصيد القديم", category: "شواطئ", image: "images/sea.jpg", desc: "حيث يعود الصيادون عند الفجر بصيدهم الطازج، مشهد يجمع بين زرقة البحر وحركة القوارب الخشبية الملونة." },
    { title: "ملعب طرابلس", category: "الكل", image: "images/stadium.jpg", desc: "الملعب البلدي في قلب المدينة، واحة خضراء ومكان لتجمع أهالي المدينة في المناسبات الرياضية الكبرى." },
    { title: "السبع بحرات", category: "الكل", image: "images/saba3.jpg", desc: "ميدان شهير في وسط طرابلس الحديثة، يتميز بنوافير المياه التي تمنحه اسمه، ومحاط بالمقاهي والمحلات التجارية." }
  ];
  var CATEGORIES = ["الكل", "مساجد", "قلاع", "أسواق", "طبيعة", "شواطئ"];

  function initPlaces() {
    var grid = document.getElementById("places-grid");
    var chipsHost = document.getElementById("cat-chips");
    var search = document.getElementById("place-search");
    var lb = document.getElementById("lightbox");
    if (!grid) return;

    var term = "", cat = "الكل";

    function renderChips() {
      chipsHost.innerHTML = CATEGORIES.map(function (c) {
        return '<button class="chip' + (c === cat ? " active" : "") + '" data-cat="' + c + '">' + c + "</button>";
      }).join("");
    }
    function renderGrid() {
      var list = PLACES.filter(function (p) {
        var s = p.title.indexOf(term) !== -1 || p.desc.indexOf(term) !== -1;
        var c = cat === "الكل" || p.category === cat;
        return s && c;
      });
      if (!list.length) {
        grid.innerHTML = '<div class="no-results">لا توجد أماكن مطابقة للبحث.</div>';
        return;
      }
      grid.innerHTML = list.map(function (p, i) {
        return '<article class="place-card reveal" data-reveal="scale" style="--d:' + ((i % 4) * 0.1) + 's" data-title="' + p.title + '">' +
          '<div class="place-img"><img src="' + p.image + '" alt="' + p.title + '" loading="lazy"></div>' +
          '<div class="place-body"><div class="place-row"><h3>' + p.title + "</h3><span>" + p.category + "</span></div>" +
          "<p>" + p.desc + "</p></div></article>";
      }).join("");
      observeReveals(grid);
    }

    function openLightbox(p) {
      document.getElementById("lb-img").src = p.image;
      document.getElementById("lb-img").alt = p.title;
      document.getElementById("lb-cat").textContent = p.category;
      document.getElementById("lb-title").textContent = p.title;
      document.getElementById("lb-desc").textContent = p.desc;
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function closeLightbox() {
      lb.classList.remove("open");
      document.body.style.overflow = "";
    }

    chipsHost.addEventListener("click", function (e) {
      var b = e.target.closest("[data-cat]");
      if (!b) return;
      cat = b.dataset.cat;
      renderChips();
      renderGrid();
    });
    search.addEventListener("input", function () { term = search.value; renderGrid(); });
    grid.addEventListener("click", function (e) {
      var card = e.target.closest(".place-card");
      if (!card) return;
      var p = PLACES.filter(function (x) { return x.title === card.dataset.title; })[0];
      if (p) openLightbox(p);
    });
    lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
    document.getElementById("lb-close").addEventListener("click", closeLightbox);
    document.getElementById("lb-cta").addEventListener("click", closeLightbox);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLightbox(); });

    renderChips();
    renderGrid();
  }

  /* ==========================================================
     PAGE: VISIT
     ========================================================== */
  function initVisit() {
    var form = document.getElementById("visit-form");
    if (!form) return;

    var rules = {
      name: function (v) { return v.trim().length >= 2 ? "" : "الاسم يجب أن يكون حرفين على الأقل"; },
      phone: function (v) { return v.trim().length >= 8 ? "" : "رقم الهاتف غير صالح"; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "البريد الإلكتروني غير صالح"; },
      date: function (v) { return v ? "" : "الرجاء تحديد تاريخ الزيارة"; },
      destination: function (v) { return v ? "" : "الرجاء اختيار وجهة"; },
      groupSize: function (v) { return Number(v) >= 1 ? "" : "يجب أن يكون عدد الأفراد 1 على الأقل"; }
    };

    function setError(name, msg) {
      var field = form.querySelector('[data-field="' + name + '"]');
      if (!field) return;
      field.classList.toggle("invalid", !!msg);
      field.querySelector(".err").textContent = msg;
    }
    function validateField(name) {
      var el = form.elements[name];
      var msg = rules[name](el.value);
      setError(name, msg);
      return !msg;
    }

    Object.keys(rules).forEach(function (name) {
      var el = form.elements[name];
      el.addEventListener("input", function () {
        if (form.querySelector('[data-field="' + name + '"]').classList.contains("invalid")) validateField(name);
      });
      el.addEventListener("change", function () {
        if (form.querySelector('[data-field="' + name + '"]').classList.contains("invalid")) validateField(name);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      Object.keys(rules).forEach(function (name) { if (!validateField(name)) ok = false; });
      if (!ok) {
        var first = form.querySelector(".invalid input, .invalid select");
        if (first) first.focus();
        return;
      }
      var name = form.elements.name.value.trim();
      var date = form.elements.date.value;
      toast("تم استلام طلبك بنجاح!", "سنتواصل معك قريباً يا " + name + " لتأكيد الحجز ليوم " + date + ".");
      form.reset();
      form.elements.groupSize.value = 1;
      form.querySelector('input[name="tripType"][value="عائلي"]').checked = true;
    });
  }

  /* ---------- Boot ---------- */
  function boot() {
    buildHeader();
    buildFooter();
    injectDividers();
    hydrateIcons();
    initScroll();
    observeReveals();
    initCountUp();

    if (page === "home") initHome();
    if (page === "history") initHistory();
    if (page === "places") initPlaces();
    if (page === "visit") initVisit();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
