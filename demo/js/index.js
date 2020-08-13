const firstPage = document.getElementById("fist-page");
const number = document.getElementById("number");
const heart = document.getElementById("heart");
const music = document.getElementById('music');



// 播放音乐
music.play();
// 初始化数字翻牌器
numberFlop(
    CONFIG.number.start, 
    CONFIG.number.end, 
    CONFIG.number.interval, 
    CONFIG.number.speed
);
// 初始化桃心
heartIn();



// 数字翻牌
function numberFlop(start, end, interval, speed) {
    // 当前value数值
    const currentValue = Number(number.innerHTML);
    // 每次翻牌应该叠加数字
    const increase = Math.ceil((end - start) * speed);
    // 更新后的value数值
    const value = (currentValue + increase) > end ? end : (currentValue + increase);

    if (currentValue === end) {
        setTimeout(() => {
            firstPageOut();
        }, CONFIG.firstPageStayInterval * 1000);
        return;
    } else {
        number.innerHTML = value;
        // 控制结尾速率
        const compare = Math.ceil((interval / speed) / Number((end - currentValue)));
        const timeout = compare < interval ? interval : compare;
        setTimeout(() => {
            numberFlop(value, end, interval, speed);
        }, timeout);
    }
}
// 设置桃心的展示
function heartIn() {
    setTimeout(() => {
        // 进入动画
        heart.style.transform  = 'scale(1)';
        heart.style.opacity    = '1';
        heart.style.transition = `all ${CONFIG.heart.inInterval}s linear 0s`;
        // 设置闪烁动画
        heart.style['animation']         = `${CONFIG.heart.rate}s linear ${CONFIG.heart.inInterval}s infinite zoom`;
        heart.style['-moz-animation']    = `${CONFIG.heart.rate}s linear ${CONFIG.heart.inInterval}s infinite zoom`;
        heart.style['-webkit-animation'] = `${CONFIG.heart.rate}s linear ${CONFIG.heart.inInterval}s infinite zoom`;
    }, 0);
}
// 第一个页面消失动画
function firstPageOut() {
    const firstPageOutInterval = CONFIG.firstPageOutInterval;
    // 页面离开动画
    firstPage.style['animation']         = `${firstPageOutInterval}s linear 0s infinite firstPage-out`;
    firstPage.style['-moz-animation']    = `${firstPageOutInterval}s linear 0s infinite firstPage-out`;
    firstPage.style['-webkit-animation'] = `${firstPageOutInterval}s linear 0s infinite firstPage-out`;
    // 桃心离开动画
    heart.style['animation']         = `${firstPageOutInterval}s linear 0s infinite firstPage-heart-out`;
    heart.style['-moz-animation']    = `${firstPageOutInterval}s linear 0s infinite firstPage-heart-out`;
    heart.style['-webkit-animation'] = `${firstPageOutInterval}s linear 0s infinite firstPage-heart-out`;
    // 数字翻牌离开动画
    number.style['animation']         = `${firstPageOutInterval}s linear 0s infinite firstPage-number-out`;
    number.style['-moz-animation']    = `${firstPageOutInterval}s linear 0s infinite firstPage-number-out`;
    number.style['-webkit-animation'] = `${firstPageOutInterval}s linear 0s infinite firstPage-number-out`;
    
    setTimeout(() => {
        firstPage.style.display = 'none';
        typing();
    }, firstPageOutInterval * 1000);
}
// 打字
function typing() {
    new Typed('.typing', {
        strings: [CONFIG.typing.content],
        typeSpeed: CONFIG.typing.typeSpeed
    });
}
