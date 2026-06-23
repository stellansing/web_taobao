function switchTab(index) {
    const tabs = ['tabDetail', 'tabReview'];
    const contents = ['detailContent', 'reviewContent'];
    
    tabs.forEach(function(tabId, i) {
        const tab = document.getElementById(tabId);
        const content = document.getElementById(contents[i]);
        
        if (i === index - 1) {
            tab.classList.add('active');
            content.classList.add('active');
            const underline = document.querySelector('.tabItem .tabUnderline');
            const lineWidth = tab.offsetWidth * 0.2;
            const lineLeft = tab.offsetLeft + ((tab.offsetWidth - lineWidth) / 2)-21;
            // 打印宽度和位置
            underline.style.width = lineWidth + "px";
            underline.style.left = lineLeft + "px";
        } else {
            tab.classList.remove('active');
            content.classList.remove('active');
        }
    });
}

window.onload = function() {
    switchTab(1);
    
    var backBtn = document.querySelector('.backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.location.href = 'orderMenu.html';
        });
    }
}
