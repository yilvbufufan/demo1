
//之前写的关于生成历史记录的js，这个不能获取跨页面的历史记录，如果要生成记录可以用浏览器储存数据
//主要问题是我觉得这不是你们想要的历史记录【doge】
//视频浏览记录可能要后端的传参

/*
//获取链接id
function GetRequest() {
var url = location.search; //获取url中"?"符后的字串
var theRequest = new Object();
 if (url.indexOf("?") != -1) {
       var str = url.substr(1);
       strs = str.split("&");
       for (var i = 0; i < strs.length; i++) {
           theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
       }
   }
   return theRequest;}

//生成历史记录
   var id =GetRequest();
   var li = document.createElement('li')
   var lishiBox = document.getElementsByClassName('lishiBox')[0]
   var x;
   console.log(a);

   //判断id

   if(id==0){
    li.innerHTML = "返回首页"
}
else if(id==1){
    li.innerHTML = "历史记录"
}
else if(id==2){
    li.innerHTML = "示范用例"
}
else if(id==3){
    li.innerHTML = "正交表查询"
}

   li.style.backgroundColor = 'grey',
   li.style.width = '80%'
   //时间倒序
   lishiBox.insertBefore(li,lishiBox.children[0])
   console.log('记录生成')}
 */



    