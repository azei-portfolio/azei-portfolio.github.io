document.addEventListener('DOMContentLoaded', function() {
    console.log('滑动插件已加载！');
});

window.addEventListener('wheel', function(e) {
    if (e.deltaY > 0) {
        console.log('向下滑动');
    } else {
        console.log('向上滑动');
    }
});
