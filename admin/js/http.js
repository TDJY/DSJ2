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
        user_edit: baseURL + '/admin/user/edit',
        category_list: baseURL + '/admin/category/list',
        category_add: baseURL + '/admin/category/add',
        category_edit: baseURL + '/admin/category/edit',
        category_delete: baseURL + '/admin/category/delete',
        article_query: baseURL + '/admin/article/query',
        article_delete: baseURL + '/admin/article/delete',
        article_publish: baseURL + '/admin/article/publish',//文章发布
        article_search: baseURL + '/admin/article/search',//文章信息查询
        article_edit: baseURL + '/admin/article/edit',//文章编辑
        comment_list: baseURL + '/admin/comment/search',//文章评论列表
        comment_pass: baseURL + '/admin/comment/pass',//文章评论通过
        comment_reject: baseURL + '/admin/comment/reject',//文章评论不通过
        comment_delete: baseURL + '/admin/comment/delete',//文章评论删除
        data_info: baseURL + '/admin/data/info',
        data_article: baseURL + '/admin/data/article',
        data_category: baseURL + '/admin/data/category',
        data_visit: baseURL + '/admin/data/visit',
        index_search: baseURL + '/admin/index/search',
        index_category: baseURL + '/admin/index/category',
        index_hotpic: baseURL + '/admin/index/hotpic',
        index_rank: baseURL + '/admin/index/rank',
        index_latest: baseURL + '/admin/index/latest',
        index_latest_comment: baseURL + '/admin/index/latest_comment',
        index_attention: baseURL + '/admin/index/attention',
        index_artitle: baseURL + '/admin/index/artitle',
        index_post_comment: baseURL + '/admin/index/post_comment',
        index_post_comment: baseURL + '/admin/index/post_comment',
    }
    //将接口暴露出去
    window.BigNew = BigNew

    // var baseURL = 'http://localhost:8080/api/v1'
    // var BigNew = {
    //     baseURL:baseURL,//基地址
    //     user_login:      baseURL + '/admin/user/login',//用户登录
    //     user_info:       baseURL + '/admin/user/info',//用户信息
    //     user_detail:     baseURL + '/admin/user/detail',//用户详情
    //     user_edit:       baseURL + '/admin/user/edit',//用户编辑
    //     category_list:   baseURL + '/admin/category/list',//文章类别查询
    //     category_add:    baseURL + '/admin/category/add',//文章类别新增
    //     category_search: baseURL + '/admin/category/search',//文章类别搜索
    //     category_edit:   baseURL + '/admin/category/edit',//文章类别编辑
    //     category_delete: baseURL + '/admin/category/delete',//文章类别删除
    //     article_query:   baseURL + '/admin/article/query',//文章搜索
    //     article_publish: baseURL + '/admin/article/publish',//文章发布
    //     article_search:  baseURL + '/admin/article/search',//文章信息查询
    //     article_edit:    baseURL + '/admin/article/edit',//文章编辑
    //     article_delete:  baseURL + '/admin/article/delete',//文章删除
    //     comment_list:    baseURL + '/admin/comment/search',//文章评论列表
    //     comment_pass:    baseURL + '/admin/comment/pass',//文章评论通过
    //     comment_reject:  baseURL + '/admin/comment/reject',//文章评论不通过
    //     comment_delete:  baseURL + '/admin/comment/delete',//文章评论删除
    // };

    // //暴露接口
    // w.BigNew = BigNew;

})(window);