/**
 * KADOMARU Codeworks - Main JavaScript
 */

// ==============================================
// Splash Screen Animation
// ==============================================
const splashLogo = document.getElementById('splash-logo');
const splashCurtain = document.getElementById('splash-curtain');
const splashScreen = document.getElementById('splash-screen');
const splashBg = document.getElementById('splash-bg');
const mainHeader = document.getElementById('header');

const runSplashSequence = () => {
    const progressBar = document.getElementById('splash-progress-bar');
    const logoShine = document.getElementById('logo-shine');

    // ロゴアニメーション
    splashLogo.classList.add('animate-logo-in');
    
    // ロゴシャイン効果
    setTimeout(() => { 
        splashLogo.classList.add('animate-logo-pulse');
        if (logoShine) {
            logoShine.style.transition = 'transform 0.8s ease';
            logoShine.style.transform = 'translateX(100%)';
        }
    }, 600);

    // タイプライター完了後（0.8s delay + 1.8s = 2.6s）にプログレスバー開始
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 2800);
    
    // プログレスバー完了後（2.8s + 2.2s = 5s）にカーテン
    setTimeout(() => { splashCurtain.classList.add('animate-curtain-slide'); }, 5200);
    setTimeout(() => {
        splashLogo.style.display = 'none';
        splashBg.style.display = 'none';
        splashCurtain.classList.add('animate-curtain-fade');
    }, 5800);
    setTimeout(() => {
        splashScreen.remove();
        mainHeader.classList.remove('opacity-0');
    }, 6000);
};

document.addEventListener('DOMContentLoaded', () => {
    runSplashSequence();

    // ヒーロー写真スライドショー
    const slides = document.querySelectorAll('.hero-photo-slide');
    let currentSlide = 0;
    
    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 4000);
    }
});

// ==============================================
// Works Modal
// ==============================================
const worksData = {
    bedroute: {
        category: 'Web App',
        title: '退院支援管理ツール「Bedroute」',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: '医療ソーシャルワーカーとして働く中で感じた「転院調整業務の非効率さ」を解決するために開発中のWebアプリケーション。電話・FAX中心のアナログな業務フローをデジタル化し、患者さんの転院先マッチングを効率化します。',
        role: '企画・設計・開発（フルスタック）',
        techs: ['React', 'Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
        points: [
            '現場の課題を起点にした要件定義',
            'MSW業務フローを熟知した上でのUI設計',
            '患者情報のセキュリティを考慮した設計',
            'レスポンシブ対応でスマホからも操作可能'
        ],
        status: '開発中',
        url: null
    },
    clinic: {
        category: 'Corporate',
        title: 'クリニックサイト制作',
        image: 'https://images.unsplash.com/photo-1516574187841-693083f69382?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: '内科・小児科クリニックのコーポレートサイト。高齢の患者さんにも見やすいデザインと、スタッフが更新しやすいWordPress構成を両立しました。',
        role: 'デザイン・コーディング・WordPress構築',
        techs: ['WordPress', 'PHP', 'SCSS', 'JavaScript', 'Figma'],
        points: [
            '文字サイズ・コントラストに配慮したアクセシビリティ設計',
            '診療時間・お知らせをスタッフが簡単に更新可能',
            'Googleマップ・予約システム連携',
            'スマートフォン最適化でどの世代も使いやすく'
        ],
        status: '公開中',
        url: '#'
    },
    blog: {
        category: 'Media',
        title: '個人運営ブログメディア',
        image: 'https://images.unsplash.com/photo-1499750310159-5410055491be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: '医療・福祉の現場で働く方に向けた情報発信メディア。SEOを意識した記事設計で、月間10万PVを達成しました。',
        role: '企画・執筆・サイト運営・SEO対策',
        techs: ['WordPress', 'Google Analytics', 'Search Console', 'Canva'],
        points: [
            '検索意図を捉えたキーワード選定',
            '読みやすさを重視した記事構成',
            '内部リンク設計によるサイト回遊率向上',
            'アフィリエイト収益化の仕組み構築'
        ],
        status: '運営中',
        url: '#'
    },
    recruit: {
        category: 'LP',
        title: '訪問看護ステーション採用LP',
        image: 'https://images.unsplash.com/photo-1576091160550-217358c7e618?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: '看護師・理学療法士の採用を目的としたランディングページ。「働く人の声」を中心に構成し、応募率向上に貢献しました。',
        role: 'デザイン・コーディング・コピーライティング',
        techs: ['HTML', 'SCSS', 'JavaScript', 'FLOCSS', 'BEM'],
        points: [
            'スタッフインタビューを軸にした信頼感のある構成',
            '応募フォームまでの導線を最適化',
            'スマートフォンファーストのレスポンシブ設計',
            '採用担当者が更新しやすいシンプルな構造'
        ],
        status: '公開中',
        url: '#'
    },
    nursing: {
        category: 'Corporate',
        title: '特別養護老人ホーム サイト制作',
        image: 'https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: '特別養護老人ホームの施設紹介サイト。ご家族が安心して施設を選べるよう、施設の雰囲気や職員の想いが伝わるデザインを心がけました。',
        role: 'デザイン・コーディング・写真選定',
        techs: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
        points: [
            '温かみのある配色とやさしい印象のデザイン',
            '施設見学予約フォームの設置',
            'アクセス情報・周辺環境の分かりやすい表示',
            'ご家族目線での情報設計'
        ],
        status: '公開中',
        url: '#'
    },
    chatbot: {
        category: 'Web App',
        title: 'チャットボット移行支援',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: '既存のチャットボットシステムを新プラットフォームへ移行するプロジェクト。複数サイトへの展開と、デザインの統一を担当しました。',
        role: 'システム移行・デザイン調整・動作検証',
        techs: ['JavaScript', 'CSS', 'Tag+', 'チャットボットAPI'],
        points: [
            '既存データを損なわない安全な移行手順の策定',
            '各サイトのデザインに合わせたUI調整',
            '複数サイト横断での一括テスト実施',
            'クライアントへの操作マニュアル作成'
        ],
        status: '完了',
        url: null
    }
};

function openWorksModal(id) {
    const data = worksData[id];
    if (!data) return;

    const modal = document.getElementById('works-modal');
    const body = document.getElementById('works-modal-body');

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
                    ${data.techs.map(tech => `<span class="works-modal-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="works-modal-section">
                <h4><i class="fa-solid fa-lightbulb"></i> 工夫したポイント</h4>
                <div class="works-modal-points">
                    <ul>
                        ${data.points.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                </div>
            </div>

            ${data.url ? `
                <a href="${data.url}" target="_blank" rel="noopener" class="works-modal-link">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> サイトを見る
                </a>
            ` : `
                <span style="display: inline-block; background: #f1f5f9; color: #64748b; padding: 12px 24px; border-radius: 8px; font-size: 14px;">
                    <i class="fa-solid fa-clock"></i> ${data.status}
                </span>
            `}
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeWorksModal() {
    const modal = document.getElementById('works-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// モーダル外クリックで閉じる
document.getElementById('works-modal').addEventListener('click', (e) => {
    if (e.target.id === 'works-modal') {
        closeWorksModal();
    }
});

// ESCキーで閉じる
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeWorksModal();
    }
});

// ==============================================
// Fade In Animation
// ==============================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ==============================================
// Mobile Menu
// ==============================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// メニュー内リンククリックで閉じる
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

// ESCキーでメニューを閉じる
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// ==============================================
// Works Tab Switching
// ==============================================
const worksTabs = document.querySelectorAll('.works-tab');
const worksItems = document.querySelectorAll('.works-item');

worksTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // アクティブタブの切り替え
        worksTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const category = tab.dataset.category;

        // アイテムのフィルタリング
        worksItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// ==============================================
// Rich Scroll Animations
// ==============================================

// Reveal Animation
const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .stagger-children, .section-title, .underline-animation');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ==============================================
// Count Up Animation
// ==============================================
const countElements = document.querySelectorAll('.count-up');

const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
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
}, { threshold: 0.5 });

countElements.forEach(el => countObserver.observe(el));

// ==============================================
// Mouse Glow Effect (PC Only)
// ==============================================
if (window.innerWidth > 768) {
    const glow = document.createElement('div');
    glow.classList.add('glow-effect');
    document.body.appendChild(glow);

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        glow.classList.add('active');
    });

    document.addEventListener('mouseleave', () => {
        glow.classList.remove('active');
    });

    // スムーズな追従
    const animateGlow = () => {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        glow.style.left = glowX + 'px';
        glow.style.top = glowY + 'px';
        requestAnimationFrame(animateGlow);
    };
    animateGlow();
}

// ==============================================
// Card Tilt Effect
// ==============================================
document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        card.style.setProperty('--rotateX', rotateX + 'deg');
        card.style.setProperty('--rotateY', rotateY + 'deg');
    });

    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--rotateX', '0deg');
        card.style.setProperty('--rotateY', '0deg');
    });
});

// ==============================================
// Scroll Progress Bar
// ==============================================
const progressBar = document.createElement('div');
progressBar.style.cssText = 'position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,#0A3A78,#c9a466);z-index:9999;transition:width 0.1s ease;width:0';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = progress + '%';
});

// ==============================================
// Header Scroll Effect
// ==============================================
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
