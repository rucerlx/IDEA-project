var i=0,j=0,n=0,flag=0;
var odd=0,even=0;
var m=0,x=0,y=0,tmp=0,cnt=parseInt(0),res=1;
var ans=new Array();
function changepage(){
    //页面跳转
  window.location.href='LCS.html';
};
function checkx(){
    //检查输入的x是否为数字
    var num=document.getElementById("text-x").value;
    if (isNaN(num)){
        alert("Not a number!");
        alert("Pls Input Again");
        reload();
        return;
    }
    else{
        x=parseInt(num);
    } 
};
function checkn(){
     //检查输入的n是否为数字
    var num=document.getElementById("text-n").value;
    if (isNaN(num)){
        alert("Not a number!");
        alert("Pls Input Again");
        reload();
        return;
    }
    else{
        n=parseInt(num);
        odd1=parseInt((n+1)/2),odd2=parseInt((n-1)/2),even=parseInt(n/2);
    }
    if(!x){
        alert("请按下x对应的'submit'");
    }
};
function show1(){
    //显示初始样子
 var ctx = document.getElementById('tutorial').getContext('2d');
 ctx.beginPath();
 ctx.arc(30,30,30,0,Math.PI*2,true);
 ctx.strokeStyle = "#123456";
 ctx.stroke();
 var word=document.getElementById('tutorial').getContext('2d');
 word.font="20px Georgia";
 word.fillText(x+"^"+n,10,30);
 setTimeout(function(){judgeN();},1000);
};
function judgeN(){
       if(n%2){
        var word=document.getElementById('tutorial').getContext('2d');
        word.font="20px Georgia";
        word.fillText("an odd",80,30+j);
       tmp=1;//用来记录是奇数还是偶数
    }
    else{
         var word=document.getElementById('tutorial').getContext('2d');
        word.font="20px Georgia";
        word.fillText("an even",80,30+j); 
        tmp=2;
    }
    cnt=parseInt(n);
    y=parseInt(x);
     for(i=0;cnt>1;i=i+3){
          //记录最终结果
        if(cnt%2){
            ans[i]=cnt;
            ans[i+1]=parseInt((cnt+1)/2);
            ans[i+2]=parseInt((cnt-1)/2);
            res=parseInt(res*y);
            cnt=parseInt((cnt+1)/2);
        }
        else{
            ans[i]=cnt;
            cnt=parseInt(cnt/2);
            ans[i+1]=cnt;
            ans[i+2]=cnt;
        }
        y=parseInt(y*y);
        //console.log(cnt);

    }
    console.log(ans);
    setTimeout(function(){word.fillText("we can divide "+n,80,50+j);word.fillText("into 2 parts",80,70)},300);
    setTimeout(function(){divideN();},700);
};
function divideN(){
        var word=document.getElementById('tutorial').getContext('2d');
        word.font="20px Georgia";      
            for(i=0;i<ans.length;i=i+3,j=j+30){
                var ctx = document.getElementById('tutorial').getContext('2d');
                ctx.beginPath();
                ctx.moveTo(250,25+j);
                ctx.lineTo(270,25+j);
                ctx.stroke();
                ctx.moveTo(270,25+j);
            ctx.lineTo(270,15+j);
            ctx.lineTo(280,25+j);
            ctx.lineTo(270,35+j);
            ctx.lineTo(270,25+j);
            ctx.fill();
                word.fillText(x+"^"+ans[i]+"=("+x+"^"+ans[i+1]+")*("+x+"^"+ans[i+2]+")",290,30+j);
            }   
            finalans();
}
function finalans(){
    var word=document.getElementById('tutorial').getContext('2d');
        word.font="20px Georgia";
        word.fillText("Finally ",10,j+20);
        word.fillText(x+"^"+n+"="+y,10,j+40);
}
function reload(){
    window.location.reload();
};