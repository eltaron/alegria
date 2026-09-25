/* ============================================================
   ALEGRIA - Shared interactive helpers (jQuery + SweetAlert2 + DataTables)
   ============================================================ */
(function ($) {
  'use strict';

  if (!window.Swal) {
    // fallback if sweetalert2.all bundle not loaded
    window.Swal = window.swal || null;
  }

  /* ---------- Global helper API ---------- */
  window.Al = window.Al || {
    /* success/error/info/warning toast-like alerts */
    ok: function (title, msg) {
      Swal.fire({ icon: 'success', title: title || 'تم بنجاح', text: msg || '', confirmButtonColor: '#0f8a5f' });
    },
    err: function (title, msg) {
      Swal.fire({ icon: 'error', title: title || 'حدث خطأ', text: msg || '', confirmButtonColor: '#c0392b' });
    },
    info: function (title, msg) {
      Swal.fire({ icon: 'info', title: title || 'تنويه', text: msg || '' });
    },
    warn: function (title, msg) {
      Swal.fire({ icon: 'warning', title: title || 'انتبه', text: msg || '', confirmButtonColor: '#c59b27' });
    },
    /* confirm then callback */
    confirm: function (title, msg, onYes, options) {
      var opt = options || {};
      Swal.fire({
        icon: opt.icon || 'question',
        title: title || 'هل أنت متأكد؟',
        text: msg || '',
        showCancelButton: true,
        confirmButtonText: opt.confirmText || 'نعم، متأكد',
        cancelButtonText: 'إلغاء',
        confirmButtonColor: opt.color || '#c59b27',
        reverseButtons: true
      }).then(function (r) { if (r.isConfirmed && typeof onYes === 'function') onYes(); });
    },
    /* success check toast (auto-dismissed) */
    toast: function (msg, icon) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: icon || 'success',
        title: msg,
        showConfirmButton: false,
        timer: 2200,
        timerProgressBar: true
      });
    },
    /* prompt dialog returning input */
    prompt: function (title, place, onOk) {
      Swal.fire({
        title: title,
        input: 'text',
        inputPlaceholder: place || '',
        inputAttributes: { autocapitalize: 'off' },
        showCancelButton: true,
        confirmButtonText: 'حفظ',
        cancelButtonText: 'إلغاء',
        reverseButtons: true
      }).then(function (r) { if (r.isConfirmed && typeof onOk === 'function') onOk(r.value); });
    },

    /* ---------- DataTables helper ---------- */
    initDataTables: function () {
      if (typeof $.fn.DataTable === 'undefined') return;
      $('table[data-datatable]').each(function () {
        var $t = $(this);
        if ($.fn.DataTable.isDataTable($t)) return;
        var opts = $t.data('datatable-opts') || {};
        $t.DataTable($.extend({
          language: {
            url: null,
            processing: 'جاري التحميل...',
            search: 'بحث:',
            lengthMenu: 'عرض _MENU_ سجل',
            info: 'عرض _START_ إلى _END_ من أصل _TOTAL_ سجل',
            infoEmpty: 'لا توجد سجلات',
            infoFiltered: '(مصفاة من _MAX_ سجل)',
            loadingRecords: 'جارٍ التحميل...',
            zeroRecords: 'لا توجد نتائج مطابقة',
            emptyTable: 'لا توجد بيانات في الجدول',
            paginate: { first: 'الأول', previous: 'السابق', next: 'التالي', last: 'الأخير' },
            aria: { sortAscending: ': تفعيل للترتيب التصاعدي', sortDescending: ': تفعيل للترتيب التنازلي' }
          },
          order: opts.order || [],
          pageLength: opts.pageLength || 10,
          responsive: false,
          lengthMenu: [5, 10, 25, 50, 100]
        }, opts));
      });
    }
  };

  /* ---------- URL helper for swal/confirm on links ---------- */
  function bindConfirmables() {
    $(document).on('click', '[data-sw-confirm]', function (e) {
      var $el = $(this);
      if ($el.hasClass('sw-confirmed')) return; // already handled by href follow
      e.preventDefault();
      var data = $el.data();
      window.Al.confirm(data.swTitle || 'تأكيد العملية', data.swMsg || '', function () {
        window.Al.toast(data.swMsg || 'تم تنفيذ العملية بنجاح', 'success');
        var href = $el.attr('href') || data.swHref;
        var tag = $el.prop('tagName').toLowerCase();
        if (href && href !== '#' && href !== '') {
          if (tag === 'a') { window.location.href = href; }
        }
        if (data.swFollow === false) { /* stay */ }
      }, { color: data.swColor, confirmText: data.swConfirmText });
    });
  }

  /* ---------- Autoclose alerts (bootstrap) ---------- */
  function bindAutoClose() {
    $(document).on('click', '[data-al-close]', function () {
      var t = parseFloat($(this).data('al-close')) || 0;
      var $wrap = $(this).closest('.alert');
      if (t) setTimeout(function () { $wrap.fadeOut('fast'); }, t);
      else $wrap.fadeOut('fast');
    });
  }

  /* ---------- Init ---------- */
  $(function () {
    window.Al.initDataTables();
    bindConfirmables();
    bindAutoClose();
  });

})(jQuery);