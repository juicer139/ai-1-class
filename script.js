document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    let slideInterval;

    // 显示指定幻灯片
    function showSlide(n) {
        // 移除当前活动幻灯片的 active 类
        slides[currentSlide].classList.remove('active');
        
        // 计算新的幻灯片索引
        currentSlide = (n + slides.length) % slides.length;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        
        // 添加新的 active 类
        slides[currentSlide].classList.add('active');
    }

    // 下一张幻灯片
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // 上一张幻灯片
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // 开始自动播放
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 2000);
    }

    // 停止自动播放
    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // 添加按钮事件监听器
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopSlideShow();
        startSlideShow(); // 重新开始计时
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopSlideShow();
        startSlideShow(); // 重新开始计时
    });

    // 鼠标悬停时暂停轮播
    const slider = document.querySelector('.slider-section');
    slider.addEventListener('mouseenter', stopSlideShow);
    slider.addEventListener('mouseleave', startSlideShow);

    // 初始化第一张幻灯片并开始播放
    showSlide(0);
    startSlideShow();

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}); 