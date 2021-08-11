$(function () {
    $( "input" ).on( "click", function() {
        $('#log img').attr('src', $(this).html("input:checked").val());
    });
})



$(function () {
    getParam = window.location.toString();
// обрезаем до int ИД
    let id = getParam.substring(getParam.indexOf("=")+1);
    let category = whoCategory(getParam);

// возвращает наименование категории из строки GET параметра
    function whoCategory(get) {
        get = get.substring(get.indexOf("?"), get.indexOf("="))
        pos = get.indexOf("?")
        return numPage = pos === -1 ? '' : get.substring(1)
    }


    if (category === 'blog'){
        $('#article').load('template/blog.html')
    }else if (category === 'about') {
        $('#article').load('template/about.html')
    }else if (category === 'portfolio') {
        $('#article').load('template/portfolio.html')
    }else if(category === 'contact') {
        $('#article').load('template/contact.html')
    }
})
