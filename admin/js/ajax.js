/* 沙箱模式 */
(function (window) {

    //练习代码
    //每个页面只进行一次的声明，防止反复声明
    const token = localStorage.getItem('token');
    $.ajaxSetup({
        //在xhr.send()之前设置的参数
        beforeSend(xhr) {
            if (!token) {
                alert('即将跳转到登录页面')
                location.href = './login.html'
            }
            if (location.href.indexOf('login.html') === -1) {
                xhr.setRequestHeader('Authorization', token)
            }
        }
    })
    //封装路径，利用对象设置，并且进行暴露
    const baseURL = 'http://localhost:8080/api/v1';
    const BigNew = {
        data_info: baseURL + '/admin/data/info',
        data_article: baseURL + '/admin/data/article',
        data_category: baseURL + '/admin/data/category',
        data_visit: baseURL + '/admin/data/visit'
    }
    //将接口暴露出去
    window.BigNew = BigNew

})(window);