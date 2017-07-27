		window.onload=function(){
			var picbox=document.getElementById("picbox");
			var list=document.getElementById("list");
			var button=document.getElementById("buttons").getElementsByTagName("span");
			var prex=document.getElementById("prev");
			var next=document.getElementById("next");
			var index=1;
			var getanimation=false;//在图片翻动的时候阻止图片的翻动
			var getinterval=3000;//设置轮播延时
			var timer;//设置定时器

			function animation(changebox){
				buttonshow();
				getanimation=true;
				var time=400;
				var interval=10;
				var speed=changebox/(time/interval);
				var left=parseInt(list.style.left)+changebox;
				function execute(){
					if((speed<0&&parseInt(list.style.left)>left)||(speed>0&&parseInt(list.style.left)<left)){
						list.style.left=parseInt(list.style.left)+speed+"px";
						setTimeout(execute,interval);//在移动到目标位置前不断调用函数
					}
					else{
						list.style.left=left+"px";
						if(left>-790){
							list.style.left="-2370px";
						}
						if(left<-2370){
							list.style.left="-790px";
						}//循环效果
						getanimation=false;
					}
				}
				execute();
			}//动画效果

			prex.onclick=function(){
				if(getanimation){
					return;
				}
				index-=1;
				if(index==0){
					index=3;
				}
				animation(790);
				
			}//向上一张图片翻动

			next.onclick=function(){
				if(getanimation){
					return;
				}
				index+=1;
				if(index==4){
					index=1;
				}
				animation(-790);
				
			}//向下一张图片翻动

			function buttonshow(){
				for(var i=0;i<button.length;i++){
					if(button[i].className='on'){
						button[i].className='';
					}
				}
				button[index-1].className='on';
			}//实现索引点随着图片的变动而变动
			
			function totate(){
				timer=setTimeout(function(){
					next.onclick();
					totate();
				},getinterval);
			}//定时器

			function stoptotate(){
				timer=clearTimeout(timer);
			}//清除定时器

			for(var i=0;i<button.length;i++){
                button[i].onmouseover=function(){
                    if(getanimation){
                        return;
                    }
                    if(this.className=='on'){
                        return;
                    }
                    var myIndex=parseInt(this.getAttribute('index'));
                    var offset=-790*(myIndex-index);

                    animation(offset);
                    index=myIndex;
                    buttonshow();
                }
            }

			picbox.onmouseover=stoptotate;
            picbox.onmouseout=totate;
            totate();
		}