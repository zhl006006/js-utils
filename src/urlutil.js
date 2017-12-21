/**
 * url功能
 * Created by tb on 2017/2/16.
 */
var URLUtil = (function ()
{
    var o = {};
    /**
     * 获取url的参数
     * @param url
     * @returns {object}
     */
    o.getQuery = function(url)
    {
        if(typeof url !== 'string')
        {
            return null;
        }
        var query=url.match(/[^\?]+\?([^#]*)/,'$1');
        if(!query || !query[1])
        {
            return null;
        }
        var kv=query[1].split('&');
        var map={};
        for(var i=0,len=kv.length;i<len;i++)
        {
            var result=kv[i].split('=');
            var key=result[0],value=result[1];
            map[key]=value ||(typeof value==='string'?null:true);
        }
        return map;
    };
    /**
     * 获取url的描点
     * @param url
     * @returns {string}
     */
    o.getAnchor = function(url)
    {
        if (typeof url !== 'string')
        {
            return null;
        }
        var query = url.split("#");
        if (!query || !query[1])
        {
            return null;
        }
        return query[1];
    };
    /**
     * 解决多标签浏览器返回到标签主页问题
     * @param defUrl
     */
    o.historyBack = function (defUrl)
    {
        if(document.referrer)
        {
            window.location.href = document.referrer;
        }
        else
        {
            window.location.href = defUrl;
        }
    };
    return o;
})();