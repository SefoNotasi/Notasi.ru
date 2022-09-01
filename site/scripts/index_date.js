//###################################################################
// Author: ricocheting.com
// Version: v3.1
// Date: 2017-01-03
// Description: displays the amount of time until the "dateFuture" entered below.

var CDown = function() {
	this.state=0;// if initialized
	this.counts=[];// array holding countdown date objects and id to print to {d:new Date(2013,11,18,18,54,36), id:"countbox1"}
	this.interval=null;// setInterval object
}

CDown.prototype = {
	init: function(){
		this.state=1;
		var self=this;
		this.interval=window.setInterval(function(){self.tick();}, 1000);
	},
	add: function(date,id,text){
		this.counts.push({d:date,id:id,t:text});
		this.tick();
		if(this.state==0) this.init();
	},
	expire: function(idxs){
		for(var x in idxs) {
      // this.display(this.counts[idxs[x]], "2022");
			this.display(this.counts[idxs[x]], this.counts[idxs[x]].t);
			this.counts.splice(idxs[x], 1);
		}
	},
	format: function(r){
		var pre='',post='',divide=', ',
			out="";
		out += pre+(r.d<=9?'0':'')+r.d +""+((r.d==1)?"":"")+"•";
		out += pre+(r.h<=9?'0':'')+r.h +""+((r.h==1)?"":"")+":";
		out += pre+(r.m<=9?'0':'')+r.m +""+((r.m==1)?"":"")+":";
		out += pre+(r.s<=9?'0':'')+r.s +" "+((r.s==1)?"":"")+":";

		return out.substr(0,out.length-divide.length);
	},
	math: function(work){
		var	y=w=d=h=m=s=ms=0;

		ms=(""+((work%1000)+1000)).substr(1,3);
		work=Math.floor(work/1000);//kill the "milliseconds" so just secs

		y=Math.floor(work/31536000);//years (no leapyear support)
		w=Math.floor(work/604800);//weeks
		d=Math.floor(work/86400);//days
		work=work%86400;

		h=Math.floor(work/3600);//hours
		work=work%3600;

		m=Math.floor(work/60);//minutes
		work=work%60;

		s=Math.floor(work);//seconds

		return {y:y,w:w,d:d,h:h,m:m,s:s,ms:ms};
	},
	tick: function(){
		var now=(new Date()).getTime(),
			expired=[],cnt=0,amount=0;

		if(this.counts)
		for(var idx=0,n=this.counts.length; idx<n; ++idx){
			cnt=this.counts[idx];
			amount=cnt.d.getTime()-now;//calc milliseconds between dates

			// if time is already past
			if(amount<0){
				expired.push(idx);
			}
			// date is still good
			else{
				this.display(cnt, this.format(this.math(amount)));
			}
		}

		// deal with any expired
		if(expired.length>0) this.expire(expired);

		// if no active counts, stop updating
		if(this.counts.length==0) window.clearTimeout(this.interval);

	},
	display: function(cnt,msg){
		document.getElementById(cnt.id).innerHTML=msg;
	}
};

window.onload=function(){
	var cdown = new CDown();

  cdown.add(new Date(2023, 0, 1, 01, 01, 01), "year", "2022");
  cdown.add(new Date(2023, 1, 14, 02, 02, 02), "valentine", "Без тебя — нет меня, будь и буду я.");
  cdown.add(new Date(2023, 1, 23, 03, 03, 03), "shield", "Свет.");
	cdown.add(new Date(2023, 2, 8, 04, 04, 04), "spring", "Женщинам. С цветущим праздником очарования и красоты.");
	cdown.add(new Date(2023, 3, 25, 05, 05, 05), "dead", "<a href='../rip'>Легенду</a>.");
	cdown.add(new Date(2023, 4, 09, 06, 06, 06), "victory", "День Победы.");
	cdown.add(new Date(2023, 5, 19, 07, 07, 07), "growth", "<a href='../old#birth'>День рождения</a>.");
};