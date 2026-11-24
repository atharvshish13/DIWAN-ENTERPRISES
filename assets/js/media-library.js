(() => {
  const mediaFiles = [
    'Photoes/Skit Activity (2).jpeg',
    'Photoes/Skit Activity (3).jpeg',
    'Photoes/Skit Activity (5).jpeg',
    'Photoes/Skit Activity (6).jpeg',
    'Photoes/Skit Activity 1.jpeg',
    'Photoes/Skit Activity 4.jpeg',
    'Photoes/Skit Activity.mp4',
    'Photoes/Photo Updte 24 nov 2026/All photos/Organize Meeting.png',
    'Photoes/Photo Updte 24 nov 2026/All photos/Amul Van Branding/1.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Amul Van Branding/2.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Amul Van Branding/3.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Amul Van Branding/4.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Box sheep photos/1.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Box sheep photos/2.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Box sheep photos/3.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Box sheep photos/4.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Box sheep photos/5.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Box sheep photos/6.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Box sheep photos/7.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Box sheep photos/8.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Demo Van Activity/Apache Demo.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Demo Van Activity/Apache.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Demo Van Activity/Demo Van Activity.png',
    'Photoes/Photo Updte 24 nov 2026/All photos/Demo Van Activity/TVS Apache.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/L-Shape Photos/1.jpeg',
    'Photoes/Photo Updte 24 nov 2026/All photos/L-Shape Photos/2.jpeg',
    'Photoes/Photo Updte 24 nov 2026/All photos/L-Shape Photos/3.jpeg',
    'Photoes/Photo Updte 24 nov 2026/All photos/L-Shape Photos/4.jpeg',
    'Photoes/Photo Updte 24 nov 2026/All photos/L-Shape Photos/5.jpeg',
    'Photoes/Photo Updte 24 nov 2026/All photos/LED Van/1.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/LED Van/2.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/LED Van/3.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/LED Van/4.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Shop Branding/1.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Shop Branding/2.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Shop Branding/Acrylic Board.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Shop Branding/Shop Branding.png',
    'Photoes/Photo Updte 24 nov 2026/All photos/Shop Branding/Shop Installation.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Stall Branding/1.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Stall Branding/2.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Stall Branding/3.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/T-Shape Van/1.jpeg',
    'Photoes/Photo Updte 24 nov 2026/All photos/T-Shape Van/2.jpeg',
    'Photoes/Photo Updte 24 nov 2026/All photos/T-Shape Van/3.jpeg',
    'Photoes/Photo Updte 24 nov 2026/All photos/T-Shape Van/4.jpeg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Wall Rap Photo/1.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Wall Rap Photo/2.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Wall Rap Photo/3.jpg',
    'Photoes/Photo Updte 24 nov 2026/All photos/Wall Rap Photo/4.jpg',
    'Photoes/WhatsApp Unknown 2026-11-23 at 9.59.29 PM/Gazebo Tent (2).jpeg',
    'Photoes/WhatsApp Unknown 2026-11-23 at 9.59.29 PM/Gazebo Tent (3).jpeg',
    'Photoes/WhatsApp Unknown 2026-11-23 at 9.59.29 PM/Gazebo Tent.jpeg',
    'Photoes/WhatsApp Unknown 2026-11-23 at 9.59.29 PM/Skit Activity.jpeg',
    'Photoes/WhatsApp Unknown 2026-11-23 at 9.59.29 PM/TVS Branding Cup (2).jpeg',
    'Photoes/WhatsApp Unknown 2026-11-23 at 9.59.29 PM/TVS Branding Cup.jpeg',
  ].map(path => {
    const fileName = path.split('/').pop();
    const parent = path.split('/').slice(-2, -1)[0];
    const isVideo = /\.mp4$/i.test(path);
    return { path, title: fileName, category: parent === 'Photoes' ? 'Recent Activities' : parent, type: isVideo ? 'video' : 'photo' };
  });

  function initializeMediaLibrary() {
    document.querySelectorAll('[data-media-library]').forEach(grid => {
      const tabs = grid.parentElement.querySelector('[data-media-tabs]');
      if (!tabs || grid.dataset.built) return;
      grid.dataset.built = 'true';

      const photoCount = mediaFiles.filter(item => item.type === 'photo').length;
      const videoCount = mediaFiles.filter(item => item.type === 'video').length;
      const filters = [
        { type: 'all', label: `All Media (${mediaFiles.length})` },
        { type: 'photo', label: `Photos (${photoCount})` },
        { type: 'video', label: `Videos (${videoCount})` },
      ];
      tabs.innerHTML = filters.map((filter, index) =>
        `<button class="media-tab${index === 0 ? ' active' : ''}" type="button" data-media-filter="${filter.type}" aria-pressed="${index === 0}">${filter.label}</button>`
      ).join('');

      grid.innerHTML = mediaFiles.map(item => {
        const src = encodeURI(item.path);
        const content = item.type === 'video'
          ? `<video controls preload="metadata" playsinline aria-label="${item.title}"><source src="${src}" type="video/mp4">Your browser does not support video playback.</video>`
          : `<a href="${src}" target="_blank" rel="noopener" aria-label="Open ${item.title} photo"><img src="${src}" alt="${item.title}" loading="lazy"></a>`;
        return `<article class="media-library-card" data-media-type="${item.type}" aria-label="${item.title}">
          ${content}
          <div class="media-library-caption">
            <span class="media-library-kind">${item.category} · ${item.type}</span>
            <span class="media-library-name">${item.title}</span>
          </div>
        </article>`;
      }).join('');

      tabs.addEventListener('click', event => {
        const button = event.target.closest('[data-media-filter]');
        if (!button) return;
        const type = button.dataset.mediaFilter;
        tabs.querySelectorAll('[data-media-filter]').forEach(tab => {
          const isActive = tab === button;
          tab.classList.toggle('active', isActive);
          tab.setAttribute('aria-pressed', String(isActive));
        });
        grid.querySelectorAll('[data-media-type]').forEach(card => {
          card.hidden = type !== 'all' && card.dataset.mediaType !== type;
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMediaLibrary);
  } else {
    initializeMediaLibrary();
  }
})();
