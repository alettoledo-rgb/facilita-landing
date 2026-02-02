// Scroll suave para links internos do tipo #secao
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href");
    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// FAQ Accordion
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const answer = item.querySelector(".faq-answer");
    const isOpen = btn.getAttribute("aria-expanded") === "true";

    // Fecha todos antes de abrir o clicado (opcional, mas deixa limpo)
    document.querySelectorAll(".faq-item").forEach((otherItem) => {
      const otherBtn = otherItem.querySelector(".faq-question");
      const otherAnswer = otherItem.querySelector(".faq-answer");
      otherBtn.setAttribute("aria-expanded", "false");
      otherAnswer.hidden = true;
      otherItem.classList.remove("open");
    });

    // Se estava fechado, abre
    if (!isOpen) {
      btn.setAttribute("aria-expanded", "true");
      answer.hidden = false;
      item.classList.add("open");
    }
  });
});
