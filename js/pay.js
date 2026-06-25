document.addEventListener('DOMContentLoaded', function () {
    var radioAll = document.querySelectorAll('.radio');
    for (var i = 0; i < radioAll.length; i++) {
        radioAll[i].addEventListener('click', function () {
            for (var j = 0; j < radioAll.length; j++) {
                radioAll[j].classList.remove('checked');
            }
            this.classList.add('checked');
        });
    }

    document.querySelector('.pay-btn').addEventListener('click', function () {
        alert('支付功能开发中');
    });
});
