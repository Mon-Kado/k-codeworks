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

const runSplashSequence = () => {
  const progressBar = document.getElementById("splash-progress-bar");

  // ロゴアニメーション
  splashLogo.classList.add("animate-logo-in");

  // ロゴパルス効果
  setTimeout(() => {
    splashLogo.classList.add("animate-logo-pulse");
  }, 300);

  // ロゴを1秒見せてからプログレスバー開始（1.8秒で完了）
  setTimeout(() => {
    progressBar.style.width = "100%";
  }, 1500);

  // プログレスバー完了後にカーテンスライド（カーテンが完全に覆うまでロゴ表示）
  setTimeout(() => {
    splashCurtain.classList.add("animate-curtain-slide");
  }, 3500);
  setTimeout(() => {
    splashLogo.style.display = "none";
    splashBg.style.display = "none";
    splashCurtain.classList.add("animate-curtain-fade");
    mainHeader.classList.remove("opacity-0");
  }, 4500);
  setTimeout(() => {
    splashScreen.remove();
  }, 4900);
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
    description:
      "医療ソーシャルワーカーとして働く中で感じた「転院調整業務の非効率さ」を解決するために開発中のWebアプリケーション。電話・FAX中心のアナログな業務フローをデジタル化し、地域の空床情報をリアルタイムで共有します。",
    role: "企画・設計・開発（フルスタック）",
    techs: ["React", "Vite", "TypeScript", "Supabase", "Tailwind CSS"],
    points: [
      "現場の課題を起点にした要件定義・UI設計",
      "リアルタイム病床マップ・空床カレンダー実装",
      "医療処置・ADL・費用などの受け入れ条件の見える化",
      "患者情報のセキュリティを考慮したSupabase設計",
    ],
    status: "β版公開中",
    url: "https://bedroute.jp/mypage",
  },
  onomichi: {
    category: "LP",
    title: "尾道観光キャンペーンLP「SnapOnomichi」",
    image: "img/onomichi.png",
    description:
      "デイトラのWeb制作コース課題として制作した観光キャンペーンランディングページ。「写真映えスポットをシェアしよう」というコンセプトのもと、スクロールアニメーションを駆使した没入感のあるビジュアルデザインに仕上げました。",
    role: "デザイン・コーディング（デイトラ課題）",
    techs: ["HTML", "CSS", "JavaScript", "FLOCSS", "BEM"],
    points: [
      "観光地の雰囲気を伝えるファーストビューのビジュアル設計",
      "スクロールに連動したCSSアニメーションの実装",
      "FLOCSSによるCSS設計・BEM記法の徹底",
      "スマートフォンファーストのレスポンシブ対応",
    ],
    status: "公開中",
    url: "https://onomichi-k-codeworks.com/",
  },
  blog: {
    category: "Media",
    title: "個人運営ブログメディア",
    image:
      "https://images.unsplash.com/photo-1499750310159-5410055491be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description:
      "医療・福祉の現場で働く方に向けた情報発信メディア「かどふく」。SEOを意識した記事設計で月間10万PVを達成し、アフィリエイト収益化も実現。副業収入の柱のひとつに成長しました。",
    role: "企画・執筆・サイト運営・SEO対策",
    techs: ["WordPress", "Google Analytics", "Search Console", "Canva"],
    points: [
      "検索意図を捉えたキーワード選定で月間10万PV達成",
      "読みやすさを重視した記事構成・内部リンク設計",
      "アフィリエイト収益化の仕組み構築",
      "医療・福祉分野の専門知識を活かしたコンテンツ設計",
    ],
    status: "運営中",
    url: "https://kadofuku.com",
  },
  genel: {
    category: "Corporate",
    title: "GeneL inc. コーポレートサイト",
    image: "img/genel-top.png",
    description:
      "AIと人の力で未来のサービスを共に創るIT企業「GeneL inc.」のコーポレートサイト。ワイヤーフレーム策定から参加し、デザイン段階の議論を経て、recruitページのコーディングを担当しました。",
    role: "ワイヤーフレーム・デザイン参加・recruitページコーディング（チーム開発）",
    techs: ["HTML", "CSS", "JavaScript", "Figma"],
    points: [
      "企画段階からワイヤーフレームを作成し、デザインの方向性に関与",
      "採用ページでブランドイメージを損なわないレイアウト・アニメーション実装",
      "チーム開発フローに沿ったコードレビュー・品質管理",
      "スクロールアニメーションを用いた没入感のあるFV実装",
    ],
    status: "公開中",
    url: "https://www.gene-l.co.jp/recruit",
  },
  chatbot: {
    category: "Web App",
    title: "チャットボット移行支援",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description:
      "GeneL inc.との受託案件として取り組んだチャットボット実装プロジェクト。Tag+システムを活用し、複数クライアントサイトへのチャットボット設置・デザイン調整・動作検証を担当しました。",
    role: "Tag+実装・デザイン調整・動作検証（GeneL inc. 受託）",
    techs: ["JavaScript", "CSS", "Tag+", "チャットボットAPI"],
    points: [
      "Tag+システムを活用したチャットボットの複数サイト展開",
      "各サイトのブランドに合わせたUIカスタマイズ",
      "本番・ステージング環境での動作検証",
      "クライアント向け操作マニュアルの作成",
    ],
    status: "完了",
    url: null,
  },
};

function openWorksModal(id) {
  const data = worksData[id];
  if (!data) return;

  const modal = document.getElementById("works-modal");
  const body = document.getElementById("works-modal-body");

  body.innerHTML = `
        <img src="${data.image}" alt="${data.title}" class="works-modal-image">
        <div class="works-modal-info">
            <span class="works-modal-category">${data.category}</span>
            <h3 class="works-modal-title">${data.title}</h3>
            <p class="works-modal-desc">${data.description}</p>
            
            <div class="works-modal-section">
                <h4><i class="fa-solid fa-user"></i> 担当範囲</h4>
                <p style="color: #475569; font-size: 14px;">${data.role}</p>
            </div>
            
            <div class="works-modal-section">
                <h4><i class="fa-solid fa-code"></i> 使用技術</h4>
                <div class="works-modal-tags">
                    ${data.techs.map((tech) => `<span class="works-modal-tag">${tech}</span>`).join("")}
                </div>
            </div>
            
            <div class="works-modal-section">
                <h4><i class="fa-solid fa-lightbulb"></i> 工夫したポイント</h4>
                <div class="works-modal-points">
                    <ul>
                        ${data.points.map((point) => `<li>${point}</li>`).join("")}
                    </ul>
                </div>
            </div>

            ${
              data.url
                ? `
                <a href="${data.url}" target="_blank" rel="noopener" class="works-modal-link">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> サイトを見る
                </a>
            `
                : `
                <span style="display: inline-block; background: #f1f5f9; color: #64748b; padding: 12px 24px; border-radius: 8px; font-size: 14px;">
                    <i class="fa-solid fa-clock"></i> ${data.status}
                </span>
            `
            }
        </div>
    `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeWorksModal() {
  const modal = document.getElementById("works-modal");
  modal.classList.remove("active");
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

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

// メニュー内リンククリックで閉じる
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuBtn.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

// ESCキーでメニューを閉じる
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
    mobileMenuBtn.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
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
  const progress = (scrollTop / docHeight) * 100;
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
        const displayValue = value.length > 100 ? value.substring(0, 100) + "..." : value;
        contentHTML += `
                    <div class="border-b border-gray-200 pb-2">
                        <p class="text-text-gray text-xs mb-1">${labels[key]}</p>
                        <p class="text-text-dark font-medium whitespace-pre-wrap">${displayValue}</p>
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
