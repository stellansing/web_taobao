function switchTab(index) {
    const tabs = ['tabRedPacket', 'tabTicket'];
    const contents = ['RedPacketList', 'TicketList'];
    const footers = ['footerRedPacket', 'footerTicket'];

    tabs.forEach(function(tabId, i){
        const tab = document.getElementById(tabId);
        const content = document.getElementById(contents[i]);
        const footer = document.getElementById(footers[i]);


        if (i === index - 1) {
            tab.classList.add('active');
            content.classList.add('active');
            footer.classList.add('active');

            const underline = document.querySelector('.underline');
            const lineWidth = tab.offsetWidth * 0.25;
            const lineLeft = tab.offsetLeft + ((tab.offsetWidth - lineWidth) / 2);
            underline.style.width = lineWidth + "px";
            underline.style.left = lineLeft + "px";
        } else {
            tab.classList.remove('active');
            content.classList.remove('active');
            footer.classList.remove('active');
        }
    });
}

window.onload = function() {
    switchTab(1);
}