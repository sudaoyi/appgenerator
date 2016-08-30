const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec
const execSync = require('child_process').execSync
const process = require('process')


var mkdir = function (dir) {
	exec('mkdir -p ' + dir, (e, stdout, stderr) => {
		if (e) { console.log(e); return };
	});
	console.log(`${dir} is done`);
}

var touch = function (file) {
	var fileObj = path.parse(file);
    var supDir=process.cwd();
	if (fileObj.dir) {
		try { execSync('mkdir -p ' + fileObj.dir) } catch (e) { console.log(e, file + ' fail to touch file'); return };
		try { process.chdir('./' + fileObj.dir) } catch (e) { console.log(e, file + ' fail to touch file'); return };
		try { execSync('touch ' + fileObj.base) } catch (e) { console.log(e, file + ' fail to touch file'); return };
		try { process.chdir(supDir) } catch (e) { console.log(e); return }
	} else {
		try { execSync('touch ' + fileObj.base) } catch (e) { console.log(e, file + ' fail to touch file'); return };
	}
}

var npminit = function (dlist) {
	try { execSync('npm init -y') } catch (e) { console.log(e); return }
	console.log(dlist);

	if (dlist['save']) {
		dlist['save'].forEach((v, i, a) => {
			exec('npm install --save ' + v, (e, stdout, stderr) => {
				if (e) { console.log(e); return };
			});
		})
	};
	if (dlist['save-dev']) {
		dlist['save-dev'].forEach((v, i, a) => {
			exec('npm install --save-dev ' + v, (e, stdout, stderr) => {
				if (e) { console.log(e); return };
			});
		});
	}
}

var npmStart = function (dlist, dir) {

	if (dir) {
		try { process.chdir(dir) } catch (e) { console.log(e); return }
		npminit(dlist);

		try { process.chdir('../') } catch (e) { console.log(e); return }
	} else {
		npminit(dlist);
	}
}
module.exports = { mkdir: mkdir, npmStart: npmStart, touch: touch };	
