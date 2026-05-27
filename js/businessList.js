function switchTab(index) {
    const tabs = ['tabAll', 'tabGoing', 'tabRefund'];
    const contents = ['orderAll', 'orderGoing', 'orderRefound'];

    tabs.forEach(function(tabId, i){
        const tab = document.getElementById(tabId);
        const content = document.getElementById(contents[i]);

        if (i === index - 1) {
            tab.classList.add('active');
            content.classList.add('active');
            const underline = document.querySelector('.menu .underline');
            const lineWidth = tab.offsetWidth * 0.2;
            const lineLeft = tab.offsetLeft + ((tab.offsetWidth - lineWidth) / 2);
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
}