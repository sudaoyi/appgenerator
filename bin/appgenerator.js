#!/usr/bin/env node
const mn = require('../mn.js');
const process = require('process');
const path = require('path');
const cfg = require('../config.js');
var dirs = process.argv.slice(2);



if (dirs.length == 0) {
   cfg.dirlist  && cfg.dirlist.forEach((v, i, a) => { mn.mkdir(v) });
   cfg.filelist && cfg.filelist.forEach((v, i, a) => { mn.touch(v) });
    mn.npmStart(cfg.npmlist)
} else {
    dirs.forEach((dv, di, da) => {
     cfg.dirlist  &&  cfg.dirlist.forEach((v, i, a) => { mn.mkdir(path.join(dv, v)) });
     cfg.filelist &&  cfg.filelist.forEach((v, i, a) => { mn.touch(path.join(dv, v)) });
        mn.npmStart(cfg.npmlist, dv)
    })
}
