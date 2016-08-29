const fs=require('fs')
const path=require('path')
const exec=require('child_process').exec
const execSync=require('child_process').execSync
const process=require('process')


var mkdir=function(dir){
	  exec('mkdir -p '+dir,(e,stdout,stderr)=>{
			if(e){console.log(e);return};
		});
	 console.log(`${dir} is done`);
	}

var npminit=function(dlist){
	try{ execSync('npm init -y')}catch(e){console.log(e);return}	
	console.log(dlist);

	if(dlist['save']){
	   dlist['save'].forEach((v,i,a)=>{
	   	    exec('npm install --save '+v,(e,stdout,stderr)=>{
			   if(e){console.log(e);return};
			});
		})};
	if(dlist['save-dev']){
	   dlist['save-dev'].forEach((v,i,a)=>{
	   	    exec('npm install --save-dev '+v,(e,stdout,stderr)=>{
			   if(e){console.log(e);return};
			});
		   });
		}
	}
	
var npmStart=function(dlist,dir){
	if(dir){try{process.chdir(dir)}catch(e){console.log(e)}	  
	  	npminit(dlist);

	   try{process.chdir('../')}catch(e){console.log(e)}	  
	}else{
		npminit(dlist);}
	}
module.exports={mkdir:mkdir,npmStart:npmStart};	
