(function () {
  var nav = document.getElementById('toc-nav');
  if (!nav) return;

  var headings = document.querySelectorAll('.prose h2, .prose h3');
  if (headings.length === 0) { nav.closest('.toc-sidebar').style.display = 'none'; return; }

  headings.forEach(function (h, i) {
    if (!h.id) h.id = 'heading-' + i;
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    if (h.tagName === 'H3') a.classList.add('toc-h3');
    nav.appendChild(a);
  });

  var links = nav.querySelectorAll('a');

  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY + 100;
    var current = '';
    headings.forEach(function (h) {
      if (h.offsetTop <= scrollY) current = h.id;
    });
    links.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });
})();
