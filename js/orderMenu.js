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
};