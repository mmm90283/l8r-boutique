document.addEventListener('DOMContentLoaded', function() {
   
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close');
    
    if (modal && modalImg) {
        const productImages = document.querySelectorAll('.product-img');
        productImages.forEach(img => {
            img.addEventListener('click', function(e) {
                e.stopPropagation();
                modal.classList.add('active');
                modalImg.src = this.src;
            });
        });
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => modal.classList.remove('active'));
        }
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }
    
    const toTop = document.getElementById('toTop');
    if (toTop) {
        window.addEventListener('scroll', () => {
            toTop.style.display = window.scrollY > 300 ? 'flex' : 'none';
        });
        toTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    const filterButtons = document.querySelectorAll('.filters button');
    const productCards = document.querySelectorAll('.product-card');
    
    if (filterButtons.length > 0 && productCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const filterValue = this.dataset.filter;
                productCards.forEach(card => {
                    const cardCategory = card.dataset.category;
                    card.style.display = (filterValue === 'all' || cardCategory === filterValue) ? 'block' : 'none';
                });
            });
        });
    }
    
    const productsData = {
        1: { 
            name: "Сумка Devotoin small", 
            price: "18 990 ₽", 
            image: "images/bag1.jpg",
            desc: "Элегантная сумка, воплощающая роскошь и изысканность сицилийского стиля. Выполнена в чёрном цвете с эффектной золотой отделкой в стиле барокко — сложные орнаменты и цветочные мотивы украшают поверхность сумки, придавая ей королевский шарм.",
            features: ["Натуральная итальянская кожа", "Золотая фурнитура", "Орнамент в стиле барокко", "Ручная работа", "Размер: 25x18x10 см"],
            specs: { "Материал": "Натуральная кожа", "Размер": "25x18x10 см", "Страна": "Италия", "Вес": "0.8 кг" }
        },
        2: { 
            name: "Сумка Dolce Angel Cherub", 
            price: "20 000 ₽", 
            image: "images/bag2.jpg",
            desc: "Элегантная сумка из коллекции Dolce Box, воплощающая сицилийскую роскошь. Выполнена из бархата с элементами кожи и ткани. Украшена ручной росписью: на передней панели изображён ангел в окружении цветов, дополнено декоративными розами из окрашенной смолы.",
            features: ["Бархат + кожа", "Ручная роспись", "Декоративные розы из смолы", "Золотистая фурнитура", "Размер: 28x20x12 см"],
            specs: { "Материал": "Бархат, кожа", "Размер": "28x20x12 см", "Страна": "Италия", "Вес": "0.9 кг" }
        },
        3: { 
            name: "Сумка 3.5", 
            price: "15 990 ₽", 
            image: "images/bag4.jpg",
            desc: "Сумка, воплощающая в себе изысканность и экстравагантность итальянского дизайна. Украшена обилием декоративных элементов: сверкающими стразами, цветными камнями и объёмной цветочной композицией с центральным элементом в виде сердца.",
            features: ["Стразы и цветные камни", "Объёмная цветочная композиция", "Сердце в центре", "Съемный ремень", "Размер: 22x15x8 см"],
            specs: { "Материал": "Натуральная кожа", "Размер": "22x15x8 см", "Страна": "Италия", "Вес": "0.6 кг" }
        },
        4: { 
            name: "Сумка Barocco Clock", 
            price: "25 000 ₽", 
            image: "images/bag5.jpg",
            desc: "Элегантная сумка от культового итальянского бренда L8R, сочетающая в себе утончённость и изысканность. Основной акцент — изысканный кружевной узор белого цвета с цветочными мотивами, украшающий поверхность сумки.",
            features: ["Кружевной узор", "Цветочные мотивы", "Золотистая фурнитура", "Ручная работа", "Размер: 30x22x14 см"],
            specs: { "Материал": "Натуральная кожа", "Размер": "30x22x14 см", "Страна": "Италия", "Вес": "1.0 кг" }
        },
        5: { 
            name: "Сумка Sicily large", 
            price: "35 000 ₽", 
            image: "images/bag7.jpg",
            desc: "Сумка с леопардовым принтом. Фурнитура золотистого цвета. Есть короткая кожаная ручка. Застёжка — откидной клапан на магнитном замке. Внутри: одно основное отделение, карман на молнии и плоский открытый кармашек",
            features: ["Леопардовый принт", "Магнитный замок", "Отделение + карман на молнии", "Короткая ручка", "Размер: 35x25x15 см"],
            specs: { "Материал": "Натуральная кожа", "Размер": "35x25x15 см", "Страна": "Италия", "Вес": "1.2 кг" }
        },
        6: { 
            name: "Сумка Sicily Clock", 
            price: "17 990 ₽", 
            image: "images/bag8.jpg",
            desc: "Чёрная сумка с короткой ручкой на золотистой фурнитуре, украшена крупным рисунком циферблата часов с чёрными цифрами и стрелками на светлом фоне, окружённого золотистой декоративной рамкой и объёмными цветами розового и белого оттенков, а также одним крупным красным цветком в верхней части.",
            features: ["Циферблат с часами", "Объёмные цветы", "Короткая ручка", "Золотистая фурнитура", "Размер: 26x18x11 см"],
            specs: { "Материал": "Натуральная кожа", "Размер": "26x18x11 см", "Страна": "Италия", "Вес": "0.75 кг" }
        },
        7: { 
            name: "Клатч Marlene", 
            price: "21 490 ₽", 
            image: "images/bag3.jpg",
            desc: "Корпус украшен чёрным кружевным узором на светлом фоне. Верхняя часть оснащена металлической застёжкой в виде кастета с пятью кольцами, декорирована элементами: черепом, чёрным камнем и цветочным мотивом. Компактный аксессуар для вечернего образа",
            features: ["Кружевной узор", "Застёжка-кастет", "Декор с черепом", "Компактный размер", "Размер: 20x12x5 см"],
            specs: { "Материал": "Лакированная кожа", "Размер": "20x12x5 см", "Страна": "Италия", "Вес": "0.4 кг" }
        },
        8: { 
            name: "Клатч Dolce Box", 
            price: "9 990 ₽", 
            image: "images/bag6.jpg",
            desc: "Клатч из зелёного бархатного материала, украшен сложной вышивкой и аппликациями из страз и кристаллов. Центральный элемент декора — крупный розовый цветок, выполненный из гранёных камней и застёжка в виде двух золотых черепов",
            features: ["Бархат", "Вышивка стразами", "Розовый цветок из камней", "Застёжка-черепа", "Размер: 18x10x6 см"],
            specs: { "Материал": "Бархат, стразы", "Размер": "18x10x6 см", "Страна": "Италия", "Вес": "0.35 кг" }
        }
    };
    
    let productOverlay = document.getElementById('productOverlay');
    if (!productOverlay) {
        productOverlay = document.createElement('div');
        productOverlay.id = 'productOverlay';
        productOverlay.className = 'product-overlay';
        productOverlay.innerHTML = `
            <div class="product-horizontal-card">
                <div class="close-product-card">&times;</div>
                <div class="product-horizontal-content" id="productCardContent"></div>
            </div>
        `;
        document.body.appendChild(productOverlay);
    }
    
    function openProductCard(productId) {
        const product = productsData[productId];
        if (!product) return;
        
        const content = document.getElementById('productCardContent');
        if (!content) return;
        
        content.innerHTML = `
            <div class="product-gallery">
                <img src="${product.image}" alt="${product.name}" class="product-main-img" id="cardMainImg">
            </div>
            <div class="product-info-card">
                <h2>${product.name}</h2>
                <div class="product-price-card">${product.price}</div>
                <div class="product-desc-card">${product.desc}</div>
                <ul class="product-features-card">
                    ${product.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
                <div class="product-actions-card">
                    <button class="btn-gold" onclick="window.location.href='contact.html'">Записаться на примерку</button>
                    <button class="btn-dark" onclick="window.location.href='contact.html'">Задать вопрос</button>
                </div>
                <div class="specs-card">
                    <h4>Характеристики</h4>
                    <div class="specs-grid">
                        ${Object.entries(product.specs).map(([key, val]) => `
                            <div class="spec-item">
                                <span class="spec-label">${key}:</span>
                                <span class="spec-value">${val}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="product-meta-card">
                    <p><strong>📍 Доступно для примерки:</strong> г. Воронеж, ул. Плехановская, 15</p>
                    <p><strong>📦 Доставка:</strong> Самовывоз из бутика</p>
                </div>
            </div>
        `;
        
        productOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        const mainImg = document.getElementById('cardMainImg');
        if (mainImg && modal && modalImg) {
            mainImg.addEventListener('click', () => {
                modal.classList.add('active');
                modalImg.src = mainImg.src;
            });
        }
    }
    
    const closeProductCard = document.querySelector('#productOverlay .close-product-card');
    if (closeProductCard) {
        closeProductCard.addEventListener('click', () => {
            productOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    productOverlay.addEventListener('click', (e) => {
        if (e.target === productOverlay) {
            productOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    document.querySelectorAll('.product-card h3').forEach(title => {
        title.style.cursor = 'pointer';
        title.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = title.closest('.product-card');
            const detailBtn = card?.querySelector('.detail-btn');
            const productId = detailBtn?.dataset.id;
            if (productId) openProductCard(productId);
        });
    });
    
    document.querySelectorAll('.detail-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = btn.dataset.id;
            openProductCard(productId);
        });
    });
    
    function bindImageClick() {
        const productImages = document.querySelectorAll('.product-img');
        productImages.forEach(img => {
            img.removeEventListener('click', img.clickHandler);
            img.clickHandler = function(e) {
                e.stopPropagation();
                if (modal && modalImg) {
                    modal.classList.add('active');
                    modalImg.src = this.src;
                }
            };
            img.addEventListener('click', img.clickHandler);
        });
    }
    
    bindImageClick();
    
    const observer = new MutationObserver(function() {
        bindImageClick();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        }
    });
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('contactName')?.value.trim() || '';
            const email = document.getElementById('contactEmail')?.value.trim() || '';
            const message = document.getElementById('contactMessage')?.value.trim() || '';
            let isValid = true;
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');
            if (nameError) nameError.textContent = '';
            if (emailError) emailError.textContent = '';
            if (messageError) messageError.textContent = '';
            if (name.length < 2) {
                if (nameError) nameError.textContent = 'Имя должно содержать минимум 2 символа';
                isValid = false;
            }
            if (!email.includes('@') || !email.includes('.')) {
                if (emailError) emailError.textContent = 'Введите корректный email';
                isValid = false;
            }
            if (message.length < 5) {
                if (messageError) messageError.textContent = 'Сообщение должно быть минимум 5 символов';
                isValid = false;
            }
            const statusDiv = document.getElementById('formStatus');
            if (isValid) {
                if (statusDiv) {
                    statusDiv.textContent = '✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.';
                    statusDiv.className = 'form-status success';
                }
                contactForm.reset();
                setTimeout(() => {
                    if (statusDiv) statusDiv.textContent = '';
                }, 5000);
            } else {
                if (statusDiv) {
                    statusDiv.textContent = '❌ Пожалуйста, исправьте ошибки в форме';
                    statusDiv.className = 'form-status error';
                }
            }
        });
    }
    
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            const name = document.getElementById('name')?.value.trim() || '';
            const email = document.getElementById('email')?.value.trim() || '';
            const message = document.getElementById('message')?.value.trim() || '';
            let isValid = true;
            if (name.length < 2) {
                alert('Имя должно содержать минимум 2 символа');
                isValid = false;
            }
            if (!email.includes('@') || !email.includes('.')) {
                alert('Введите корректный email');
                isValid = false;
            }
            if (message.length < 5) {
                alert('Сообщение должно быть минимум 5 символов');
                isValid = false;
            }
            if (!isValid) e.preventDefault();
        });
    }
});

const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const products = document.querySelectorAll('.product-card');

if (searchInput) {
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            if (searchClear) searchClear.style.display = 'none';
        } else {
            if (searchClear) searchClear.style.display = 'block';
        }
        
        let foundCount = 0;
        
        products.forEach(product => {
            const title = product.querySelector('h3').textContent.toLowerCase();
            const price = product.querySelector('.product-price').textContent;
            
            if (title.includes(searchTerm) || price.includes(searchTerm)) {
                product.style.display = 'block';
                foundCount++;
            } else {
                product.style.display = 'none';
            }
        });
        
        let resultDiv = document.getElementById('searchResult');
        if (!resultDiv) {
            resultDiv = document.createElement('div');
            resultDiv.id = 'searchResult';
            resultDiv.className = 'search-result';
            searchInput.parentNode.insertAdjacentElement('afterend', resultDiv);
        }
        
        if (searchTerm !== '') {
            resultDiv.innerHTML = `🔍 Найдено товаров: ${foundCount}`;
            resultDiv.style.display = 'block';
        } else {
            resultDiv.style.display = 'none';
        }
    });
}

if (searchClear) {
    searchClear.addEventListener('click', function() {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
        searchInput.focus();
    });
}