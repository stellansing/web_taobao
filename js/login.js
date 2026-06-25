// login.js
function handleLogin() {
    // 模拟登录点击事件
    console.log("用户点击了登录按钮");
    // 实际项目中这里通常会触发 API 请求
}

window.onload = function() {
    // 页面加载完成后可以执行一些初始化
    console.log("登录页加载完成");

    // 模拟倒计时效果（仅作为静态页面演示）
    const countdownEl = document.getElementById('countdownText');
    if(countdownEl) {
        // 静态页，这里只是打个标记，说明这个功能点逻辑预留
        countdownEl.setAttribute('data-status', 'counting');
    }
}