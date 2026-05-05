/* ============================================
   Aten Inc — Shared scripts
   ============================================ */

// Mobile nav toggle
(function () {
  const burger = document.querySelector('.nav-burger');
  const drawer = document.querySelector('.mobile-drawer');
  if (!burger || !drawer) return;
  burger.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    drawer.style.display = isOpen ? 'block' : 'none';
  });
})();

// Scroll reveal
(function () {
  const els = document.querySelectorAll('.scroll-reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el) => io.observe(el));
})();

// Year stamp
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
