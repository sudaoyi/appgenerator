#!/usr/bin/env node 
const mn=require('../mn.js');
const process=require('process');
const path=require('path');
const cfg=require('../config.js');
var dirs=process.argv.slice(2);

var dirlist=['bin','doc','test','model','views'];
var npmlist={save:['suba','sui'],
            'save-dev':['li','su']}

if(dirs.length==0){
   cfg.dirlist.forEach((v,i,a)=>{ mn.mkdir(v)});
   mn.npmStart(cfg.npmlist)
}else{	   
   dirs.forEach((dv,di,da)=>{
	cfg.dirlist.forEach((v,i,a)=>{mn.mkdir(path.join(dv,v))});
	mn.npmStart(cfg.npmlist,dv)
   })
}
