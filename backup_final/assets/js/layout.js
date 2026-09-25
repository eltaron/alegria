/* ============================================================
   ALEGRIA - Shared Header / Footer / Mobile nav / Theme
   Usage: define before including this file:
     window.ALEGRIA = {
       assets: "../../assets",      // path to assets folder
       section: "front"|"erp"|"login",
       page: "landing"               // active page key
     };
   Pages must contain: <div id="alegria-header"></div>
                       <div id="alegria-footer"></div>
   ============================================================ */
(function () {
  'use strict';

  var CFG = window.ALEGRIA || {};
  var A = CFG.assets || 'assets';
  var section = CFG.section || 'front';
  var current = CFG.page || '';

  var FRONT = 'front/front/';
  var ERP = 'front/erp/';

  /* ---- Navigation definitions ---- */
  var NAV = {
    front: [
      { key: 'landing',  label: 'الرئيسية',    icon: 'fa-solid fa-house',          href: '../alegria_landing_page/code.html' },
      { key: 'menu',     label: 'المنيو الرقمي', icon: 'fa-solid fa-utensils',     href: '../alegria_digital_menu/code.html' },
      { key: 'cart',     label: 'السلة',       icon: 'fa-solid fa-cart-shopping',  href: '../cart_checkout_alegria/code.html' },
      { key: 'checkout', label: 'إتمام الطلب', icon: 'fa-solid fa-credit-card',    href: '../checkout_alegria/code.html' },
      { key: 'tracking', label: 'تتبع الطلب',  icon: 'fa-solid fa-truck-fast',     href: '../customer_orders_tracking_alegria/code.html' },
      { key: 'contact',  label: 'تواصل معنا',  icon: 'fa-solid fa-envelope',       href: '../contact_us_alegria/code.html' }
    ],
    erp: [
      { key: 'exec',       label: 'لوحة التشغيل', icon: 'fa-solid fa-gauge-high',     href: '../alegria_erp_1/code.html' },
      { key: 'inventory',  label: 'المخزون',      icon: 'fa-solid fa-boxes-stacked',  href: '../alegria_erp_2/code.html' },
      { key: 'hr',         label: 'الورديات',     icon: 'fa-solid fa-clock-rotate-left', href: '../hr_shifts_alegria_erp/code.html' },
      { key: 'pos',        label: 'نقاط البيع',   icon: 'fa-solid fa-cash-register',  href: '../pos_alegria/code.html' },
      { key: 'kds',        label: 'المطبخ (KDS)', icon: 'fa-solid fa-fire-burner',    href: '../kds_kitchen_display_system/code.html' },
      { key: 'reports',    label: 'التقارير',     icon: 'fa-solid fa-chart-column',   href: '../reports_analytics_alegria_erp/code.html' }
    ],
    erpMore: [
      { key: 'purchasing',     label: 'المشتريات',          icon: 'fa-solid fa-truck-field',    href: '../purchasing_suppliers_alegria_erp/code.html' },
      { key: 'suppliers',      label: 'الموردون والحسابات', icon: 'fa-solid fa-handshake',      href: '../suppliers_alegria_erp/code.html' },
      { key: 'recipes',        label: 'الوصفات والتكاليف', icon: 'fa-solid fa-clipboard-list', href: '../recipes_costing_alegria_erp/code.html' },
      { key: 'recipes-costing',label: 'تفصيل التكلفة BOM',  icon: 'fa-solid fa-scale-balanced', href: '../recipes_bom_costing_alegria_erp/code.html' },
      { key: 'roles',          label: 'مصفوفة الأدوار',    icon: 'fa-solid fa-shield-halved',  href: '../roles_matrix_alegria_erp/code.html' },
      { key: 'users',          label: 'المستخدمون',        icon: 'fa-solid fa-user-gear',      href: '../roles_permissions_alegria_erp/code.html' },
      { key: 'security',       label: 'سياسات الأمان',     icon: 'fa-solid fa-lock',           href: '../security_policies_alegria_erp/code.html' },
      { key: 'hr-employees',   label: 'الموظفون',          icon: 'fa-solid fa-users',          href: '../hr_employees_alegria_erp/code.html' },
      { key: 'hr-payroll',     label: 'الرواتب',           icon: 'fa-solid fa-money-check-dollar', href: '../hr_payroll_alegria_erp/code.html' },
      { key: 'treasury',       label: 'الخزينة',           icon: 'fa-solid fa-coins',          href: '../treasury_financials_alegria_erp/code.html' }
    ]
  };

  var isDark = (section === 'erp' || section === 'login');
  var brandName = (section === 'front') ? 'أليجريا كافيه ومطعم' : 'أليجريا للإدارة';
  var brandSub = (section === 'front') ? 'Alegria Cafe & Restaurant' : 'Alegria Haute ERP';

  /* ---------- Theme helpers ---------- */
  function currentTheme() {
    return (document.documentElement.getAttribute('data-bs-theme') === 'light') ? 'light' : 'dark';
  }
  function themeIcon(theme) {
    return (theme === 'dark') ? 'fa-sun' : 'fa-moon';
  }
  function setThemeIcons() {
    var t = currentTheme();
    var els = document.querySelectorAll('.theme-toggle i');
    for (var i = 0; i < els.length; i++) els[i].className = 'fa-solid ' + themeIcon(t);
  }

  function navLink(item) {
    var active = (item.key === current) ? ' active' : '';
    var icon = (section === 'front') ? '' : '<i class="' + item.icon + '"></i>';
    return '<a class="nav-link' + active + '" href="' + item.href + '">' +
      icon + item.label + '</a>';
  }

  function offcanvasLink(item) {
    var active = (item.key === current) ? ' active' : '';
    var icon = (section === 'front') ? '' : '<i class="' + item.icon + '"></i>';
    return '<a class="oc-nav-link' + active + '" href="' + item.href + '" style="border-inline-start:3px solid ' +
      (active ? 'var(--al-gold)' : 'transparent') + ';">' +
      icon + item.label + '</a>';
  }

  function brandHtml() {
    return '<a class="navbar-brand brand-logo me-3" href="' +
      (section === 'front' ? '../alegria_landing_page/code.html' :
        section === 'erp' ? '../alegria_erp_1/code.html' : '#') + '">' +
      '<img class="brand-img" src="' + A + '/logo.png" alt="' + brandName + ' - لوجو"/>' +
      '<span class="d-flex flex-column lh-sm">' +
      '<span style="font-size:1.05rem;">' + brandName + '</span>' +
      '<small class="brand-sub text-faint" style="font-size:.7rem;">' + brandSub + '</small>' +
      '</span></a>';
  }

  function sidebarToggleBtn() {
    return '<button type="button" class="sidebar-toggle-btn" data-toggle-sidebar aria-label="إظهار/إخفاء القائمة الجانبية" aria-expanded="true" title="القائمة الجانبية">' +
      '<i class="fa-solid fa-bars"></i></button>';
  }

  function sidebarOpenState() {
    return window.matchMedia('(min-width: 992px)').matches ?
      !document.body.classList.contains('sidebar-hidden') :
      document.body.classList.contains('sidebar-open');
  }

  function syncSidebarState() {
    var open = sidebarOpenState();
    var btns = document.querySelectorAll('.sidebar-toggle-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('active', open);
      btns[i].setAttribute('aria-expanded', open ? 'true' : 'false');
      var icon = btns[i].querySelector('i');
      if (icon) icon.className = 'fa-solid ' + (open ? 'fa-xmark' : 'fa-bars');
    }
  }

  function toggleSidebar() {
    var desktop = window.matchMedia('(min-width: 992px)').matches;
    if (desktop) {
      document.body.classList.toggle('sidebar-hidden');
    } else {
      document.body.classList.toggle('sidebar-open');
      document.body.style.overflow = document.body.classList.contains('sidebar-open') ? 'hidden' : '';
    }
    syncSidebarState();
  }

  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t || !t.closest) return;
    var btn = t.closest('[data-toggle-sidebar]');
    if (!btn) return;
    e.preventDefault();
    toggleSidebar();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (document.body.classList.contains('sidebar-open')) {
      document.body.classList.remove('sidebar-open');
      document.body.style.overflow = '';
      syncSidebarState();
    } else if (window.matchMedia('(min-width: 992px)').matches &&
      !document.body.classList.contains('sidebar-hidden')) {
      document.body.classList.add('sidebar-hidden');
      syncSidebarState();
    }
  });

  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t || !t.closest) return;
    var link = t.closest('.erp-sidebar .erp-link');
    if (!link) return;
    if (document.body.classList.contains('sidebar-open')) {
      document.body.classList.remove('sidebar-open');
      document.body.style.overflow = '';
      syncSidebarState();
    }
  });

  window.addEventListener('resize', function () {
    if (!window.matchMedia('(min-width: 992px)').matches) return;
    if (document.body.classList.contains('sidebar-open')) {
      document.body.classList.remove('sidebar-open');
      document.body.style.overflow = '';
    }
    syncSidebarState();
  });

  function themeToggleBtn() {
    if (section !== 'erp' && section !== 'login') return '';
    var t = themeIcon(currentTheme());
    return '<button type="button" class="theme-toggle" aria-label="تبديل المظهر" title="تبديل المظهر">' +
      '<i class="fa-solid ' + t + '"></i></button>';
  }

  /* ---------- ERP sidebar (all systems, replaces header nav) ---------- */
  function buildSidebar() {
    if (section !== 'erp') return;
    document.body.classList.add('erp-layout');

    var all = NAV.erp.concat(NAV.erpMore);
    function find(key) {
      for (var i = 0; i < all.length; i++) if (all[i].key === key) return all[i];
      return null;
    }
    var groups = [
      { label: 'التشغيل والصالة',     keys: ['exec', 'inventory', 'pos', 'kds', 'reports'] },
      { label: 'الموارد البشرية',     keys: ['hr', 'hr-employees', 'hr-payroll'] },
      { label: 'المالية والمشتريات', keys: ['treasury', 'purchasing', 'suppliers'] },
      { label: 'الوصفات والتكاليف',  keys: ['recipes', 'recipes-costing'] },
      { label: 'الصلاحيات والأمان',  keys: ['roles', 'users', 'security'] }
    ];
    var navInner = groups.map(function (g) {
      var links = g.keys.map(function (key) {
        var it = find(key);
        if (!it) return '';
        var act = (it.key === current) ? ' active' : '';
        return '<a class="erp-link' + act + '" href="' + it.href + '">' +
          '<i class="' + it.icon + '"></i><span>' + it.label + '</span></a>';
      }).join('');
      return '<div class="erp-group"><div class="erp-group-label">' + g.label + '</div>' + links + '</div>';
    }).join('');

    var aside = document.createElement('aside');
    aside.className = 'erp-sidebar';
    aside.id = 'erpSidebar';
    aside.innerHTML =
      '<div class="erp-sidebar-head">' +
      '<span class="brand-badge" style="width:36px;height:36px;font-size:1rem;"><i class="fa-solid fa-table-columns"></i></span>' +
      '<div class="d-flex flex-column lh-sm">' +
      '<strong style="font-size:.98rem;">لوحة الإدارة</strong>' +
      '<small class="text-faint" style="font-size:.7rem;">Alegria Haute ERP</small>' +
      '</div>' +
      '<button type="button" class="sidebar-close-btn d-lg-none" data-toggle-sidebar aria-label="إغلاق القائمة" title="إغلاق">' +
      '<i class="fa-solid fa-xmark"></i></button>' +
      '</div>' +
      '<nav class="erp-sidebar-nav">' + navInner + '</nav>' +
      '<div class="erp-sidebar-foot">' +
      '<a class="erp-link" href="../../front/alegria_landing_page/code.html">' +
      '<i class="fa-solid fa-earth-americas"></i><span>العودة للموقع</span></a>' +
      '</div>';
    document.body.appendChild(aside);

    var backdrop = document.createElement('div');
    backdrop.className = 'erp-sidebar-backdrop';
    backdrop.setAttribute('data-toggle-sidebar', '');
    document.body.appendChild(backdrop);
  }

  function notifBell() {
    return '<div class="dropdown notif-wrap">' +
      '<button type="button" class="erp-icon-btn notif-btn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="الإشعارات" title="الإشعارات">' +
      '<i class="fa-solid fa-bell"></i>' +
      '<span class="notif-dot">3</span></button>' +
      '<div class="dropdown-menu dropdown-menu-end erp-dropdown notif-menu">' +
      '<div class="dd-head"><strong>الإشعارات</strong><span class="badge-pill-custom badge-gold">3 جديدة</span></div>' +
      '<a class="drop-item" href="../alegria_erp_2/code.html">' +
      '<span class="drop-ic gold"><i class="fa-solid fa-boxes-stacked"></i></span>' +
      '<span class="drop-tx"><strong>مخزون حرج</strong><small>لحم ضاني بلدي - متبقي 6.5 كجم</small></span></a>' +
      '<a class="drop-item" href="../kds_kitchen_display_system/code.html">' +
      '<span class="drop-ic amber"><i class="fa-solid fa-fire-burner"></i></span>' +
      '<span class="drop-tx"><strong>تأخر تجهيز طلب</strong><small>كوردون بلو - المطبخ (KDS)</small></span></a>' +
      '<a class="drop-item" href="../hr_shifts_alegria_erp/code.html">' +
      '<span class="drop-ic green"><i class="fa-solid fa-user-clock"></i></span>' +
      '<span class="drop-tx"><strong>بداية وردية</strong><small>كريم عادل - 04:00 م</small></span></a>' +
      '<a class="drop-more" href="#">عرض كل الإشعارات</a>' +
      '</div></div>';
  }

  function profileMenu() {
    return '<div class="dropdown profile-wrap">' +
      '<button type="button" class="profile-btn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="الملف الشخصي" title="الملف الشخصي">' +
      '<span class="profile-avatar"><i class="fa-solid fa-user"></i></span>' +
      '<span class="d-none d-md-flex flex-column lh-sm profile-meta">' +
      '<strong>م. أحمد</strong><small>مدير المطعم</small></span>' +
      '<i class="fa-solid fa-chevron-down profile-caret"></i></button>' +
      '<div class="dropdown-menu dropdown-menu-end erp-dropdown profile-menu">' +
      '<div class="dd-head dd-head-user">' +
      '<span class="dd-avatar">أ</span>' +
      '<div class="lh-sm"><strong>م. أحمد الحسيني</strong><small>a.ahmed@alegria.eg</small></div></div>' +
      '<a class="drop-item" href="../hr_employees_alegria_erp/code.html">' +
      '<i class="fa-solid fa-address-card"></i>بيانات البروفايل</a>' +
      '<a class="drop-item" href="../roles_permissions_alegria_erp/code.html">' +
      '<i class="fa-solid fa-gear"></i>إعدادات الصلاحيات</a>' +
      '<div class="drop-sep"></div>' +
      '<a class="drop-item rose" href="../../login/code.html">' +
      '<i class="fa-solid fa-right-from-bracket"></i>تسجيل الخروج</a>' +
      '</div></div>';
  }

  function buildHeader() {
    var left = '';   // section-specific CTA / extra
    var navHtml = '';

    if (section === 'front') {
      navHtml = NAV.front.filter(function (it) { return it.key !== 'menu'; }).map(navLink).join('');
      var menuActive = (current === 'menu') ? ' active' : '';
      left = '<a class="btn btn-gold btn-sm rounded-pill px-3 header-menu-cta' + menuActive + '" href="../alegria_digital_menu/code.html">' +
        '<i class="fa-solid fa-utensils me-1"></i>المنيو الرقمي</a>';
    } else if (section === 'erp') {
      var erpHtml =
        '<header class="site-header erp-header">' +
        '<nav class="navbar navbar-alegria erp-navbar">' +
        '<div class="d-flex align-items-center gap-2 w-100 px-3 px-lg-4">' +
        sidebarToggleBtn() + brandHtml() +
        '<div class="d-flex align-items-center gap-2 ms-auto">' +
        themeToggleBtn() + notifBell() + profileMenu() +
        '</div></div></nav></header>';
      var erpEl = document.getElementById('alegria-header');
      if (erpEl) erpEl.innerHTML = erpHtml;
      buildSidebar();
      setThemeIcons();
      syncSidebarState();
      return;
    } else { // login
      left = '<a class="btn btn-ghost btn-sm" href="../../front/front/alegria_landing_page/code.html"><i class="fa-solid fa-earth-americas me-1"></i>العودة للموقع</a>';
    }

    var rightCta = themeToggleBtn() + left;

    var html =
      '<header class="site-header">' +
      '<nav class="navbar navbar-expand-lg navbar-alegria">' +
      '<div class="container">' + brandHtml() +
      '<button class="navbar-toggler d-lg-none ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#alegriaOffcanvas" aria-controls="alegriaOffcanvas" aria-label="القائمة">' +
      '<span class="navbar-toggler-icon"></span></button>' +
      '<div class="collapse navbar-collapse" id="alegriaNav">' +
      '<ul class="navbar-nav mb-2 mb-lg-0 align-items-lg-center">' + navHtml + '</ul>' +
      (rightCta ? '<div class="d-flex align-items-center gap-2 mt-2 mt-lg-0">' + rightCta + '</div>' : '') +
      '</div>' +
      '</div></nav></header>';

    var el = document.getElementById('alegria-header');
    if (el) el.innerHTML = html;

    buildOffcanvas(navHtml, left);
    setThemeIcons();
  }

  function buildOffcanvas(navHtml, left) {
    var inner = '';
    if (section === 'front') {
      inner = NAV.front.map(offcanvasLink).join('');
    } else if (section === 'erp') {
      inner = NAV.erp.map(offcanvasLink).join('') +
        '<div class="oc-group-label">إدارة ومالية</div>' +
        NAV.erpMore.map(offcanvasLink).join('') +
        '<a class="oc-nav-link" href="../../../front/front/alegria_landing_page/code.html"><i class="fa-solid fa-earth-americas"></i>العودة للموقع</a>';
    } else {
      inner = '<a class="oc-nav-link" href="../../front/front/alegria_landing_page/code.html"><i class="fa-solid fa-earth-americas"></i>العودة للموقع</a>' +
        '<a class="oc-nav-link" href="../../login/code.html"><i class="fa-solid fa-right-to-bracket"></i>بوابة الإدارة</a>';
    }

    var themeRow = (section === 'erp' || section === 'login') ?
      '<div class="oc-theme-row"><span><i class="fa-solid fa-circle-half-stroke me-2 text-gold"></i>المظهر الداكن</span>' + themeToggleBtn() + '</div>' : '';

    var off = document.createElement('div');
    off.className = 'offcanvas offcanvas-start offcanvas-alegria';
    off.tabIndex = -1;
    off.id = 'alegriaOffcanvas';
    off.setAttribute('aria-labelledby', 'alegriaOffcanvasLabel');
    off.innerHTML =
      '<div class="offcanvas-header">' +
      '<h5 class="offcanvas-title" id="alegriaOffcanvasLabel"><span class="brand-badge" style="width:34px;height:34px;font-size:1rem;"><i class="fa-solid fa-utensils"></i></span> ' + brandName + '</h5>' +
      '<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="إغلاق"></button>' +
      '</div>' +
      '<div class="offcanvas-body">' + inner + themeRow + '</div>';
    document.body.appendChild(off);
    setThemeIcons();
  }

  /* ---------- Bottom mobile app-bar ---------- */
  function cartBadgeCount() {
    try {
      var raw = localStorage.getItem('alegria-cart');
      if (!raw) return 0;
      raw = raw.trim();
      if (raw.charAt(0) === '[') {
        var arr = JSON.parse(raw), c = 0;
        for (var i = 0; i < arr.length; i++) c += (arr[i].count || 0);
        return c;
      }
      return parseInt(raw, 10) || 0;
    } catch (e) { return 0; }
  }

  function buildTabbar() {
    if (section === 'login') return;

    var items;
    if (section === 'front') {
      var cartCount = cartBadgeCount();
      items = [
        { key: 'landing',  label: 'الرئيسية', icon: 'fa-solid fa-house',          href: '../alegria_landing_page/code.html' },
        { key: 'menu',     label: 'المنيو',    icon: 'fa-solid fa-utensils',      href: '../alegria_digital_menu/code.html' },
        { key: 'cart',     label: 'السلة',     icon: 'fa-solid fa-cart-shopping', href: '../cart_checkout_alegria/code.html', count: cartCount },
        { key: 'tracking', label: 'التتبع',    icon: 'fa-solid fa-truck-fast',    href: '../customer_orders_tracking_alegria/code.html' },
        { key: 'contact',  label: 'تواصل',     icon: 'fa-solid fa-envelope',      href: '../contact_us_alegria/code.html' }
      ];
    } else {
      items = [
        { key: 'exec',      label: 'التشغيل',     icon: 'fa-solid fa-gauge-high',    href: '../alegria_erp_1/code.html' },
        { key: 'inventory', label: 'المخزون',     icon: 'fa-solid fa-boxes-stacked', href: '../alegria_erp_2/code.html' },
        { key: 'pos',       label: 'نقاط البيع',  icon: 'fa-solid fa-cash-register', href: '../pos_alegria/code.html' },
        { key: 'reports',   label: 'التقارير',    icon: 'fa-solid fa-chart-column',  href: '../reports_analytics_alegria_erp/code.html' },
        { key: '__more',    label: 'المزيد',      icon: 'fa-solid fa-bars-staggered', open: true }
      ];
    }

    var lis = items.map(function (it) {
      var active = (it.key === current) ? ' active' : '';
      var badge = (it.count && it.count > 0) ?
        '<span class="tab-count"><i class="' + it.icon + '"></i><span class="badge-mini">' + it.count + '</span></span>' :
        '<span class="tab-count"><i class="' + it.icon + '"></i></span>';
      var attrs = it.open ?
        (section === 'erp' ? ' data-toggle-sidebar' : ' data-bs-toggle="offcanvas" data-bs-target="#alegriaOffcanvas"') :
        ' href="' + it.href + '"';
      var tag = it.open ? 'button' : 'a';
      return '<' + tag + ' class="tab-link' + active + '"' + attrs + '>' + badge +
        '<span>' + it.label + '</span></' + tag + '>';
    }).join('');

    var bar = document.createElement('nav');
    bar.className = 'mobile-tabbar';
    bar.id = 'alegria-mobile-tabbar';
    bar.setAttribute('aria-label', 'التنقل السفلي');
    bar.innerHTML = '<div class="tabbar-inner">' + lis + '</div>';
    document.body.appendChild(bar);
    document.body.classList.add('has-tabbar');
  }

  function buildFooter() {
    var tagline = (section === 'front') ?
      'تجربة ضيافة فاخرة تمزج الأصالة بالابتكار، من تحضير القهوة الإسبيشال إلى أطباق المطبخ الشرقي والغربي الفاخر.' :
      'منصة الإدارة المتكاملة لمطاعم أليجريا؛ المبيعات والمخزون والموارد والتقارير في مكان واحد.';

    var center =
      '<div class="footer-center">' +
      '<img class="footer-logo" src="' + A + '/logo.png" alt="' + brandName + ' - لوجو"/>' +
      '<p class="footer-tagline">' + tagline + '</p>' +
      '<div class="footer-social" aria-label="تابعونا">' +
      '<a href="https://wa.me/" target="_blank" rel="noopener" aria-label="واتساب"><i class="fa-brands fa-whatsapp"></i></a>' +
      '<a href="#" aria-label="انستغرام"><i class="fa-brands fa-instagram"></i></a>' +
      '<a href="#" aria-label="تيك توك"><i class="fa-brands fa-tiktok"></i></a>' +
      '<a href="#" aria-label="فيسبوك"><i class="fa-brands fa-facebook-f"></i></a>' +
      '<a href="#" aria-label="إكس"><i class="fa-brands fa-x-twitter"></i></a>' +
      '</div>' +
      '<div class="footer-legal">' +
      '<a href="#">سياسة الخصوصية</a>' +
      '<span class="sep">|</span>' +
      '<a href="#">شروط الاستخدام</a>' +
      '</div>' +
      '</div>';

    var html = '<footer class="site-footer"><div class="container">' +
      center +
      '<div class="footer-bottom d-flex flex-wrap justify-content-center gap-2">' +
      '<span>© 2025 أليجريا كافيه ومطعم. جميع الحقوق محفوظة.</span>' +
      '<span class="footer-core">ALEGRIA CLOUD CORE v2.4.0</span></div>' +
      '</div></footer>';

    var el = document.getElementById('alegria-footer');
    if (el) el.innerHTML = html;
  }

  /* ---------- Theme toggle binding ---------- */
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t || !t.closest) return;
    var btn = t.closest('.theme-toggle');
    if (!btn) return;
    var next = (currentTheme() === 'dark') ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', next);
    try { localStorage.setItem('alegria-theme', next); } catch (err) {}
    setThemeIcons();
  });

  /* ---------- Scroll reveal (progressive enhancement) ---------- */
  function initReveal() {
    if (window.IntersectionObserver && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var els = document.querySelectorAll('.reveal');
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.12 });
      els.forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    }
  }

  /* ---------- Cart badge live update ---------- */
  document.addEventListener('alegria:cart', function () {
    if (section !== 'front') return;
    var n = cartBadgeCount();
    var tab = document.querySelector('.mobile-tabbar .tab-link[href*="cart_checkout"] .tab-count');
    if (!tab) return;
    var badge = tab.querySelector('.badge-mini');
    if (n > 0) {
      if (badge) { badge.textContent = n; }
      else {
        var b = document.createElement('span');
        b.className = 'badge-mini';
        b.textContent = n;
        tab.appendChild(b);
      }
    } else if (badge) {
      badge.remove();
    }
  });

  buildHeader();
  buildFooter();
  buildTabbar();
  initReveal();
})();