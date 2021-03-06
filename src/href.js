/**
 * 超链接，支持get和post，参数直接传对象
 * @version 1.0.1
 * Created by tb on 2016/12/15.
 */
var Href = (function ()
{
    //get方式超链接
    function get(url, data)
    {
        var arr = [];
        for(var name in data)
        {
            arr.push(name + '=' + data[name]);
        }
        if(url.charAt(url.length-1) === '/')
        {
            url = url.substr(0, url.length-1);
        }
        window.location.href = url + '?' + arr.join('&');
    }
    //post方式超链接
    function post(url,data)
    {
        var form = document.createElement('form');
        form.method = 'post';
        form.action = url;
        form.style.display = 'none';
        if (data)
        {
            for(var name in data)
            {
                createInput(form, name, data[name]);
            }
        }
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
    }
    //创建form隐藏的数据项
    function createInput(form, name, value)
    {
        var input = document.createElement("input");
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
    }
    return {get:get, post:post};
})();