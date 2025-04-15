const translations = {
  en: {
    greeting: "Welcome to my 3D Portfolio",
    aboutTitle: "About Me",
    aboutText: "I’m a 3D model designer from Sri Lanka skilled in modeling, unwrapping, and texturing using Blender and Illustrator. Fluent in Sinhala, Japanese, and English.",
    portfolioTitle: "My Work",
    contactTitle: "Contact Me",
    seeMore: "See more on ArtStation",
    buyNow: "Buy now on CgTrader",
    nameLabel: "Name:",
    emailLabel: "Email:",
    messageLabel: "Message:",
    sendButton: "Send Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Your message"
  },
  si: {
    greeting: "මගේ 3D පෝර්ට්ෆෝලියෝ වෙත සාදරයෙන් පිළිගනිමු",
    aboutTitle: "මට පිළිබඳව",
    aboutText: "මම ශ්‍රී ලංකාවේ සිටින 3D මාදිලි නිර්මාණ ශිල්පියෙකු වන අතර Blender සහ Illustrator භාවිතයෙන් 3D මාදිලි නිර්මාණය, UV unwrapping සහ texturing ක්‍රියාකාරකම් වලට දක්ෂයි. මම සිංහල, ජපන් සහ ඉංග්‍රීසි භාෂා සෙරිනි.",
    portfolioTitle: "මගේ කර්යයන්",
    contactTitle: "සම්බන්ධ වන්න",
    seeMore: "තවත් බලන්න - ArtStation",
    buyNow: "මිලදී ගන්න - CgTrader",
    nameLabel: "නම:",
    emailLabel: "ඊමේල්:",
    messageLabel: "පණිවිඩය:",
    sendButton: "පණිවිඩය යවන්න",
    namePlaceholder: "ඔබේ නම",
    emailPlaceholder: "ඔබේ ඊමේල් ලිපිනය",
    messagePlaceholder: "ඔබේ පණිවිඩය"
  },
  ja: {
    greeting: "私の3Dポートフォリオへようこそ",
    aboutTitle: "私について",
    aboutText: "私はスリランカ出身の3Dモデルデザイナーで、BlenderとIllustratorを使用したモデリング、UVアンラッピング、テクスチャリングに熟練しています。シンハラ語、日本語、英語が話せます。",
    portfolioTitle: "私の作品",
    contactTitle: "連絡先",
    seeMore: "もっと見る - ArtStation",
    buyNow: "今すぐ購入 - CgTrader",
    nameLabel: "名前:",
    emailLabel: "メール:",
    messageLabel: "メッセージ:",
    sendButton: "メッセージを送信",
    namePlaceholder: "あなたの名前",
    emailPlaceholder: "あなたのメール",
    messagePlaceholder: "あなたのメッセージ"
  }
};

const switchLanguage = (lang) => {
  // Text content
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Placeholder content
  document.querySelectorAll("[data-placeholder]").forEach(el => {
    const key = el.getAttribute("data-placeholder");
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
};

// Language dropdown listener
document.getElementById("languageSwitcher").addEventListener("change", (e) => {
  switchLanguage(e.target.value);
});

// Dark/Light mode toggle with icon change
document.getElementById("toggleMode").addEventListener("click", () => {
  const body = document.body;
  const icon = document.getElementById("modeIcon");

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    icon.className = "fas fa-sun";
  } else {
    icon.className = "fas fa-moon";
  }
});

// Auto-update year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("currentYear");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});