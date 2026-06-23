// 主Tab切换（点餐/评价/商家）
function switchMainTab(index) {
    const tabs = document.querySelectorAll('.mainTab');
    const panels = [
        document.querySelector('.OrderPanel'),
        document.querySelector('.CommentPanel'),
        document.querySelector('.ShopPanel')
    ];
    const underline = document.querySelector('.tabUnderline');

    tabs.forEach(function(tab, i) {
        if (i === index - 1) {
            tab.classList.add('active');
            panels[i].classList.add('active');
            // 计算下划线位置与宽度，与参考代码逻辑一致
            const tabWidth = tab.offsetWidth;
            const lineWidth = tabWidth * 0.5;
            const lineLeft = tab.offsetLeft + ((tabWidth - lineWidth) / 2);
            underline.style.width = lineWidth + "px";
            underline.style.left = lineLeft + "px";
        } else {
            tab.classList.remove('active');
            panels[i].classList.remove('active');
        }
    });
}

// 左侧分类切换
function switchCategory(index) {
    const categories = document.querySelectorAll('.categoryItem');
    categories.forEach(function(cat, i) {
        if (i === index - 1) {
            cat.classList.add('active');
        } else {
            cat.classList.remove('active');
        }
    });
}

// 页面加载完成后初始化
window.onload = function() {
    // 默认选中第一个主Tab
    switchMainTab(1);

    // 返回按钮点击事件 - 退回首页
    document.querySelector('.backBtn').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // 绑定主Tab点击事件
    const mainTabs = document.querySelectorAll('.mainTab');
    mainTabs.forEach(function(tab, index) {
        tab.addEventListener('click', function() {
            switchMainTab(index + 1);
        });
    });

    // 绑定分类点击事件
    const categoryItems = document.querySelectorAll('.categoryItem');
    categoryItems.forEach(function(item, index) {
        item.addEventListener('click', function() {
            switchCategory(index + 1);
        });
    });

    // 滚动监听：goodsList到达topNav时，topNav背景变白 + mini外送/自取标签渐变显示
    const topNav = document.querySelector('.topNav');
    const goodsList = document.querySelector('.goodsList');
    const deliveryTab = document.querySelector('.deliveryTypeTab');
    const navMiniTab = document.getElementById('navMiniTab');

    function handleScroll() {
        const navBottom = topNav.getBoundingClientRect().bottom;
        const goodsTop = goodsList.getBoundingClientRect().top;

        // topNav背景变白
        if (goodsTop <= navBottom) {
            topNav.style.backgroundColor = 'white';
        } else {
            topNav.style.backgroundColor = 'transparent';
        }

        // mini标签渐变显示：从deliveryTypeTab距离topNav底部100px时开始淡入
        const tabTop = deliveryTab.getBoundingClientRect().top;
        const fadeStart = navBottom + 100; // 距nav底部100px时开始显示
        const fadeEnd = navBottom;          // 到nav底部时完全显示

        if (tabTop <= fadeStart && tabTop > fadeEnd) {
            // 渐变区间，计算opacity
            const progress = (fadeStart - tabTop) / (fadeStart - fadeEnd);
            navMiniTab.style.opacity = progress;
        } else if (tabTop <= fadeEnd) {
            navMiniTab.style.opacity = 1;
        } else {
            navMiniTab.style.opacity = 0;
        }
    }
    // globle.css中body设置了overflow-y:auto，滚动事件可能在body而非window上
    window.addEventListener('scroll', handleScroll);
    document.body.addEventListener('scroll', handleScroll);
};