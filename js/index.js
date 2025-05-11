const header = document.getElementById("navbar");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 75) {
        if (scrollTop > lastScrollTop) {
            header.classList.add("scroll-up");
        } else {
            header.classList.remove("scroll-up");
        }
    }
    lastScrollTop = scrollTop;
});

function copyAddress() {
  const alertBox = document.getElementById("copy-alert");
  const address = document.getElementById("solana-address").innerText;
  navigator.clipboard.writeText(address).then(() => {
    alertBox.classList.remove("d-none");
    setTimeout(() => {
      alertBox.style.opacity = 1;
    }, 10);
    window.getSelection().removeAllRanges();
    setTimeout(() => {
      alertBox.style.opacity = 0;
      setTimeout(() => {
        alertBox.classList.add("d-none");
      }, 500);
    }, 3000);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.fade-on-scroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  images.forEach(img => {
    observer.observe(img);
  });
});