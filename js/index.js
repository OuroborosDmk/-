//根据日期来确定活动
window.onload=function(){
	var gg_1=document.getElementById("gg_1");
	var gg_1a=document.getElementById("gg_1a");
	var gg_2=document.getElementById("gg_2");
	var gg_3=document.getElementById("gg_3");
	var gg_3a=document.getElementById("gg_3a");
	var gg_4=document.getElementById("gg_4");
	var gg_5=document.getElementById("gg_5");

	function changeimg(){
		var time= new Date(),m,d;
		m=time.getMonth()+1;
		d=time.getDate();
		if(m==8&&d==3){
			alert("1");
			gg_1.src="./images/男人节.jpg";
			gg_1a.src="./images/男人节.jpg";
			gg_2.src="./images/男人节_a.jpg";
			gg_3.src="./images/男人节_b.jpg";
			gg_3a.src="./images/男人节_b.jpg";
			gg_4.src="./images/男人节.jpg";
			gg_5.src="./images/男人节_a.jpg";
			return;
		}
		else if(m==3&&d==8){
			
			return;
		}
		else if(m==11&&d==11){
			
			return;
		}
		else if(m==12&&d==12){
			
			return;
		}
		else{
			
			return;
		}
	}
	
	changeimg();
}