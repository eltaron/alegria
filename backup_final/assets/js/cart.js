/* ============================================================
   ALEGRIA - Shared Cart (localStorage) — cross-page order
   API: window.Cart.items() / count() / total() / add() / setQty()
         / remove() / clear()   + document 'alegria:cart' event
   Theme: stored in 'alegria-cart' as JSON array.
   ============================================================ */
(function () {
  'use strict';
  var KEY = 'alegria-cart';

  function read() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return [];
      var d = JSON.parse(raw);
      return Array.isArray(d) ? d : [];
    } catch (e) { return []; }
  }
  function write(list) {
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {}
  }
  function emit() {
    var evt = document.createEvent('Event');
    evt.initEvent('alegria:cart', true, true);
    document.dispatchEvent(evt);
  }

  window.Cart = {
    items: read,
    count: function () {
      var c = 0;
      read().forEach(function (i) { c += (i.count || 0); });
      return c;
    },
    total: function () {
      var t = 0;
      read().forEach(function (i) { t += (i.count || 0) * (i.price || 0); });
      return t;
    },
    add: function (name, price, extra) {
      var list = read(), found = false;
      for (var k = 0; k < list.length; k++) {
        if (list[k].name === name) {
          list[k].count = (list[k].count || 0) + 1;
          list[k].price = price;
          found = true; break;
        }
      }
      if (!found) list.push({ name: name, price: price, count: 1, extra: extra || '' });
      write(list); emit(); return list;
    },
    setQty: function (name, qty) {
      var list = read();
      qty = parseInt(qty, 10) || 0;
      for (var k = 0; k < list.length; k++) {
        if (list[k].name === name) {
          list[k].count = qty;
          if (qty <= 0) list.splice(k, 1);
          break;
        }
      }
      write(list); emit(); return list;
    },
    remove: function (name) {
      var list = read();
      for (var k = list.length - 1; k >= 0; k--) {
        if (list[k].name === name) list.splice(k, 1);
      }
      write(list); emit(); return list;
    },
    clear: function () { write([]); emit(); }
  };
})();