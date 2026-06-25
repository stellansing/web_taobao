function switchDelivery(index) {
    const tabs = document.querySelectorAll('.deliveryTab .tabItem');
    tabs.forEach(function(tab, i){
        if (i === index - 1) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

window.onload = function() {
    switchDelivery(1);
}