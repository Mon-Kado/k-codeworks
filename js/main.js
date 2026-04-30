/**
 * KADOMARU Codeworks - Main JavaScript
 */

// JSが有効であることを示すクラスを追加
document.documentElement.classList.add("js-enabled");

// ==============================================
// Splash Screen Animation
// ==============================================
const splashLogo = document.getElementById("splash-logo");
const splashCurtain = document.getElementById("splash-curtain");
const splashScreen = document.getElementById("splash-screen");
const splashBg = document.getElementById("splash-bg");
const mainHeader = document.getElementById("header");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const escapeHTML = (value) =>
  String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });

const runSplashSequence = () => {
  const progressBar = document.getElementById("splash-progress-bar");

  if (!splashLogo || !splashCurtain || !splashScreen || !splashBg || !mainHeader || !progressBar) {
    return;
  }

  if (prefersReducedMotion) {
    splashScreen.remove();
    mainHeader.classList.remove("opacity-0");
    return;
  }

  // ロゴアニメーション
  splashLogo.classList.add("animate-logo-in");

  // ロゴパルス効果
  setTimeout(() => {
    splashLogo.classList.add("animate-logo-pulse");
  }, 300);

  // ロゴを短く見せてからプログレスバー開始
  setTimeout(() => {
    progressBar.style.width = "100%";
  }, 700);

  // プログレスバー完了後にカーテンスライド
  setTimeout(() => {
    splashCurtain.classList.add("animate-curtain-slide");
  }, 1700);
  setTimeout(() => {
    splashLogo.style.display = "none";
    splashBg.style.display = "none";
    splashCurtain.classList.add("animate-curtain-fade");
    mainHeader.classList.remove("opacity-0");
  }, 2300);
  setTimeout(() => {
    splashScreen.remove();
  }, 2700);
};

document.addEventListener("DOMContentLoaded", () => {
  runSplashSequence();

  // 稼働状況の「今月」を動的に表示
  const currentMonthEl = document.getElementById("current-month");
  if (currentMonthEl) {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    currentMonthEl.textContent = `${year}年${month}月`;
  }

  // 納期例が古く見えないよう、閲覧月の翌月末を起点にする
  const deadlineInput = document.getElementById("deadline");
  if (deadlineInput) {
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    deadlineInput.placeholder = `例：${nextMonth.getFullYear()}年${nextMonth.getMonth() + 1}月末 / 未定`;
  }

  // ヒーロー写真スライドショー
  const slides = document.querySelectorAll(".hero-photo-slide");
  let currentSlide = 0;

  if (slides.length > 0) {
    setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 4000);
  }
});

// ==============================================
// Works Modal
// ==============================================
const worksData = {
  bedroute: {
    category: "Web App",
    title: "退院支援管理ツール「Bedroute」",
    image: "img/bedroute.png",
    description: "転院調整を見える化するWebアプリ。現場の手間を減らすため、空床情報と受け入れ条件を整理しました。",
    role: "企画・設計・開発（フルスタック）",
    techs: ["React", "Vite", "TypeScript", "Supabase", "Tailwind CSS"],
    points: [
      "現場課題から要件を整理",
      "空床マップとカレンダーを実装",
      "受け入れ条件を見える化",
      "権限とデータ管理を設計",
    ],
    status: "β版公開中",
    url: "https://bedroute.jp/mypage",
  },
  onomichi: {
    category: "LP / 課題制作",
    title: "デイトラ課題LP「SnapOnomichi」",
    image: "img/onomichi.png",
    description:
      "デイトラの課題として取り組んだLPです。実案件ではなく、指定デザインをもとにレスポンシブ対応と動きの実装を行いました。",
    role: "課題対応：コーディング・レスポンシブ調整",
    techs: ["HTML", "CSS", "JavaScript", "FLOCSS", "BEM"],
    points: [
      "指定デザインの再現",
      "レスポンシブ表示を調整",
      "FLOCSS / BEMでCSS管理",
      "スクロール演出を実装",
    ],
    status: "デイトラ課題",
    url: "https://onomichi-k-codeworks.com/",
  },
  blog: {
    category: "Media",
    title: "個人運営ブログメディア",
    image: "img/kadomaru-codeworks_logo_main.png",
    description: "医療・福祉向けの個人メディア。検索意図に合わせて、記事構成と内部導線を整理しています。",
    role: "企画・執筆・サイト運営・SEO対策",
    techs: ["WordPress", "Google Analytics", "Search Console", "Canva"],
    points: [
      "検索意図から構成を作成",
      "読みやすい導線を設計",
      "内部リンクを整理",
      "専門知識を記事に反映",
    ],
    status: "運営中",
    url: "https://kadofuku.com",
  },
  genel: {
    category: "Corporate",
    title: "GeneL inc. コーポレートサイト",
    image: "img/genel-top.png",
    description: "IT企業のコーポレートサイト。構成検討から参加し、採用ページのコーディングを担当しました。",
    role: "ワイヤーフレーム・デザイン参加・recruitページコーディング（チーム開発）",
    techs: ["HTML", "CSS", "JavaScript", "Figma"],
    points: [
      "ワイヤーフレームを作成",
      "採用ページのUIを実装",
      "チーム開発で品質管理",
      "FVアニメーションを実装",
    ],
    status: "公開中",
    url: "https://www.gene-l.co.jp/recruit",
  },
};

function openWorksModal(id) {
  const data = worksData[id];
  if (!data) return;

  const modal = document.getElementById("works-modal");
  const body = document.getElementById("works-modal-body");
  const closeButton = modal.querySelector(".works-modal-close");

  body.innerHTML = `
        <img src="${escapeHTML(data.image)}" alt="${escapeHTML(data.title)}" class="works-modal-image">
        <div class="works-modal-info">
            <span class="works-modal-category">${escapeHTML(data.category)}</span>
            <h3 class="works-modal-title">${escapeHTML(data.title)}</h3>
            <p class="works-modal-desc">${escapeHTML(data.description)}</p>
            
            <div class="works-modal-section">
                <h4><i class="fa-solid fa-user"></i> 制作種別 / 対応範囲</h4>
                <p style="color: #475569; font-size: 14px;">${escapeHTML(data.role)}</p>
            </div>
            
            <div class="works-modal-section">
                <h4><i class="fa-solid fa-code"></i> 使用技術</h4>
                <div class="works-modal-tags">
                    ${data.techs.map((tech) => `<span class="works-modal-tag">${escapeHTML(tech)}</span>`).join("")}
                </div>
            </div>
            
            <div class="works-modal-section">
                <h4><i class="fa-solid fa-lightbulb"></i> 工夫したポイント</h4>
                <div class="works-modal-points">
                    <ul>
                        ${data.points.map((point) => `<li>${escapeHTML(point)}</li>`).join("")}
                    </ul>
                </div>
            </div>

            ${
              data.url
                ? `
                <a href="${escapeHTML(data.url)}" target="_blank" rel="noopener" class="works-modal-link">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> サイトを見る
                </a>
            `
                : `
                <span style="display: inline-block; background: #f1f5f9; color: #64748b; padding: 12px 24px; border-radius: 8px; font-size: 14px;">
                    <i class="fa-solid fa-clock"></i> ${escapeHTML(data.status)}
                </span>
            `
            }
        </div>
    `;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  closeButton?.focus();
}

function closeWorksModal() {
  const modal = document.getElementById("works-modal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// モーダル外クリックで閉じる
document.getElementById("works-modal").addEventListener("click", (e) => {
  if (e.target.id === "works-modal") {
    closeWorksModal();
  }
});

// ESCキーで閉じる
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeWorksModal();
  }
});

// ==============================================
// Fade In Animation
// ==============================================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

// ==============================================
// Mobile Menu
// ==============================================
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

const setMobileMenuState = (isOpen) => {
  mobileMenuBtn.classList.toggle("active", isOpen);
  mobileMenu.classList.toggle("active", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
};

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.setAttribute("aria-expanded", "false");
  mobileMenuBtn.addEventListener("click", () => {
    setMobileMenuState(!mobileMenu.classList.contains("active"));
  });

  // メニュー内リンククリックで閉じる
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setMobileMenuState(false);
    });
  });
}

// ESCキーでメニューを閉じる
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenu?.classList.contains("active")) {
    setMobileMenuState(false);
  }
});

// ==============================================
// Works Tab Switching
// ==============================================
const worksTabs = document.querySelectorAll(".works-tab");
const worksItems = document.querySelectorAll(".works-item");

worksTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // アクティブタブの切り替え
    worksTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.dataset.category;

    // アイテムのフィルタリング
    worksItems.forEach((item) => {
      if (category === "all" || item.dataset.category === category) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

// ==============================================
// Rich Scroll Animations
// ==============================================

// Reveal Animation
const revealElements = document.querySelectorAll(
  ".reveal-up, .reveal-left, .reveal-right, .reveal-scale, .stagger-children, .section-title, .underline-animation"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ==============================================
// Count Up Animation
// ==============================================
const countElements = document.querySelectorAll(".count-up");

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
        entry.target.classList.add("counted");
        const target = parseInt(entry.target.dataset.target);
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();

        const updateCount = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(start + (target - start) * easeOut);
          entry.target.textContent = current;

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            entry.target.textContent = target;
          }
        };
        requestAnimationFrame(updateCount);
      }
    });
  },
  { threshold: 0.5 }
);

countElements.forEach((el) => countObserver.observe(el));

// ==============================================
// Mouse Glow Effect (PC Only)
// ==============================================
if (window.innerWidth > 768) {
  const glow = document.createElement("div");
  glow.classList.add("glow-effect");
  document.body.appendChild(glow);

  let mouseX = 0,
    mouseY = 0;
  let glowX = 0,
    glowY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    glow.classList.add("active");
  });

  document.addEventListener("mouseleave", () => {
    glow.classList.remove("active");
  });

  // スムーズな追従
  const animateGlow = () => {
    glowX += (mouseX - glowX) * 0.1;
    glowY += (mouseY - glowY) * 0.1;
    glow.style.left = glowX + "px";
    glow.style.top = glowY + "px";
    requestAnimationFrame(animateGlow);
  };
  animateGlow();
}

// ==============================================
// Card Tilt Effect
// ==============================================
document.querySelectorAll(".tilt-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    card.style.setProperty("--rotateX", rotateX + "deg");
    card.style.setProperty("--rotateY", rotateY + "deg");
  });

  card.addEventListener("mouseleave", () => {
    card.style.setProperty("--rotateX", "0deg");
    card.style.setProperty("--rotateY", "0deg");
  });
});

// ==============================================
// Scroll Progress Bar
// ==============================================
const progressBar = document.createElement("div");
progressBar.style.cssText =
  "position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,#0A3A78,#c9a466);z-index:9999;transition:width 0.1s ease;width:0";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = progress + "%";
});

// ==============================================
// Header Scroll Effect
// ==============================================
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ==============================================
// Contact Form - Confirm & Submit
// ==============================================
const contactForm = document.getElementById("contact-form");
const confirmModal = document.getElementById("confirm-modal");
const successModal = document.getElementById("success-modal");
const confirmContent = document.getElementById("confirm-content");
const confirmSubmitBtn = document.getElementById("confirm-submit-btn");
const fileInput = document.getElementById("file-input");
const fileFeedback = document.getElementById("file-feedback");

if (fileInput && fileFeedback) {
  const updateFileFeedback = () => {
    const files = Array.from(fileInput.files);
    fileFeedback.textContent = files.length
      ? `${files.length}件のファイルを選択中：${files.map((file) => file.name).join("、")}`
      : "";
  };

  fileInput.addEventListener("change", () => {
    updateFileFeedback();
  });

  const fileDrop = fileInput.closest(".file-drop");

  fileDrop?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fileInput.click();
    }
  });

  fileDrop?.addEventListener("dragover", (e) => {
    e.preventDefault();
    fileDrop.classList.add("is-dragging");
  });

  fileDrop?.addEventListener("dragleave", () => {
    fileDrop.classList.remove("is-dragging");
  });

  fileDrop?.addEventListener("drop", (e) => {
    e.preventDefault();
    fileDrop.classList.remove("is-dragging");
    fileInput.files = e.dataTransfer.files;
    updateFileFeedback();
  });
}

// フォーム送信時に確認モーダルを表示
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // 必須項目のチェック
    const name = contactForm.querySelector('[name="name"]').value;
    const email = contactForm.querySelector('[name="email"]').value;
    const subject = contactForm.querySelector('[name="subject"]').value;
    const message = contactForm.querySelector('[name="message"]').value;
    const privacy = contactForm.querySelector("#privacy").checked;

    if (!name || !email || !subject || !message) {
      alert("必須項目を入力してください。");
      return;
    }

    if (!privacy) {
      alert("プライバシーポリシーへの同意が必要です。");
      return;
    }

    // 確認内容を生成
    const formData = new FormData(contactForm);
    let contentHTML = "";

    const labels = {
      name: "お名前",
      email: "メールアドレス",
      subject: "件名",
      budget: "予算の目安",
      deadline: "ご希望納期",
      message: "相談内容",
      reference_urls: "参考URL",
      contact_method: "連絡手段",
    };

    for (const [key, value] of formData.entries()) {
      if (value && labels[key]) {
        const displayValue = String(value).length > 100 ? String(value).substring(0, 100) + "..." : String(value);
        contentHTML += `
                    <div class="border-b border-gray-200 pb-2">
                        <p class="text-text-gray text-xs mb-1">${escapeHTML(labels[key])}</p>
                        <p class="text-text-dark font-medium whitespace-pre-wrap">${escapeHTML(displayValue)}</p>
                    </div>
                `;
      }
    }

    confirmContent.innerHTML = contentHTML;
    confirmModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });
}

// 確認モーダルを閉じる
function closeConfirmModal() {
  confirmModal.classList.add("hidden");
  document.body.style.overflow = "";
}

// フォームを実際に送信
async function submitForm() {
  const btn = confirmSubmitBtn;
  const originalText = btn.innerHTML;

  // ボタンをローディング状態に
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 送信中...';
  btn.disabled = true;

  try {
    const formData = new FormData(contactForm);
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      // 成功
      closeConfirmModal();
      successModal.classList.remove("hidden");
      contactForm.reset();
      if (fileFeedback) fileFeedback.textContent = "";
      btn.innerHTML = originalText;
      btn.disabled = false;
    } else {
      throw new Error("送信に失敗しました");
    }
  } catch (error) {
    alert("送信に失敗しました。もう一度お試しください。");
    btn.innerHTML = originalText;
    btn.disabled = false;
  }
}

// 完了モーダルを閉じる
function closeSuccessModal() {
  successModal.classList.add("hidden");
  document.body.style.overflow = "";
}

// ===================================
// ワークフローセクション アニメーション
// ===================================
const workflowSection = document.getElementById("workflow");
if (workflowSection) {
  const workflowLines = workflowSection.querySelectorAll(".workflow-line");
  const workflowCards = workflowSection.querySelectorAll(".workflow-card");

  const workflowObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 接続線のアニメーション
          workflowLines.forEach((line, index) => {
            setTimeout(() => {
              line.classList.add("revealed");
            }, index * 300);
          });

          // カードのアニメーション（順番に表示）
          workflowCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("revealed");
            }, 400 + index * 100);
          });

          workflowObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  workflowObserver.observe(workflowSection);
}
