(function () {
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var info = document.getElementById('search-info');
  if (!input || !results) return;

  var posts = [];

  fetch('/search.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      posts = data;
      render(posts);
    });

  input.addEventListener('input', function () {
    var q = input.value.trim().toLowerCase();
    if (!q) { render(posts); return; }
    var filtered = posts.filter(function (p) {
      return (
        p.title.toLowerCase().includes(q) ||
        (p.tags && p.tags.some(function (t) { return t.toLowerCase().includes(q); })) ||
        (p.category && p.category.toLowerCase().includes(q)) ||
        (p.excerpt && p.excerpt.toLowerCase().includes(q))
      );
    });
    render(filtered, q);
  });

  function render(list, q) {
    if (q) {
      info.textContent = list.length + '개의 결과';
    } else {
      info.textContent = '전체 ' + list.length + '개';
    }

    if (list.length === 0) {
      results.innerHTML = '<p class="no-results">검색 결과가 없습니다.</p>';
      return;
    }

    results.innerHTML = list.map(function (p) {
      var thumb = p.thumbnail
        ? '<img class="card-thumbnail" src="' + p.thumbnail + '" alt="' + esc(p.title) + '">'
        : '<div class="card-thumb-placeholder"><span>' + esc(p.title.charAt(0)) + '</span></div>';

      var cat = p.category ? '<span class="card-category">' + esc(p.category) + '</span>' : '';

      var tags = (p.tags || []).slice(0, 2).map(function (t) {
        return '<span class="tag" style="font-size:0.7rem;padding:1px 7px;">' + esc(t) + '</span>';
      }).join('');

      return [
        '<article class="post-card">',
        '  <a href="' + p.url + '">' + thumb + '</a>',
        '  <div class="card-body">',
        '    ' + cat,
        '    <a href="' + p.url + '"><h3 class="card-title">' + esc(p.title) + '</h3></a>',
        p.excerpt ? '    <p class="card-excerpt">' + esc(p.excerpt) + '</p>' : '',
        '    <div class="card-meta">',
        '      <time>' + esc(p.date) + '</time>',
        tags ? '      <span class="meta-dot">·</span>' + tags : '',
        '    </div>',
        '  </div>',
        '</article>'
      ].join('\n');
    }).join('\n');
  }

  function esc(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
})();
