import Vue from 'vue'
const getStyle = function (obj, attr) {
    return document.defaultView.getComputedStyle(obj, null)[attr] || 0;
}
// 图片自适应
function adaptive(el) {
    const parent = el.parentElement;
    el.style.height = 'auto'
    el.style.width = 'auto'
    el.onload = function () {
        // 算出父级盒子的边框
        let borderWidth = Math.ceil(parseFloat(getStyle(parent, 'borderWidth')))
        const Pwidth = parent.offsetWidth - 2 * borderWidth;
        const Pheight = parent.offsetHeight - 2 * borderWidth;
        const width = el.offsetWidth;
        const height = el.offsetHeight;
        el.style.marginLeft = 0
        el.style.marginTop = 0
        // 横图
        if (width > height) {
            if (width >= Pwidth) {
                let proportion = width / Pwidth;
                el.style.maxWidth = '100%'
                el.style.height = 'auto'
                el.style.marginTop = (Pheight - height / proportion) / 2 - borderWidth + 'px'
            } else {
                el.style.marginLeft = (Pwidth - width) / 2 + borderWidth + 'px'
                el.style.marginTop = (Pheight - height) / 2 + borderWidth + 'px'
            }
        } else {
            // 竖图
            if (height >= Pheight) {
                let proportion = height / Pheight;
                el.style.maxHeight = '100%'
                el.style.width = 'auto'
                el.style.marginLeft = (Pwidth - width / proportion) / 2 + borderWidth + 'px'
            } else {
                el.style.marginLeft = (Pwidth - width) / 2 + borderWidth + 'px'
                el.style.marginTop = (Pheight - height) / 2 + borderWidth + 'px'
            }
        }
    }
}
Vue.directive('img-adaptive', {
    update: adaptive,
    inserted: adaptive
})