# appgenerator

###  Getting Started

Make sure you have installed npm

        npm install appgenerator -g 

### Usage

1.If you want to set up devlepment environment in local directory

        appgenerator
2.If you want to set up many devlepment environment 
    
        appgenerator [dir1] [dir2] [dir3]
 These environment is same *except* package.json

### Advanced Usage

   You can custom the config.json file  in current directory or parent directory.

#### For Example
    //config.json
    {"dirlist":["bin","doc","test","model","views"],
    "filelist":["app.js","views/header/index.html"],
    "npmlist":{"save":["express","nunjucks"],
              "save-dev":["webpack","webpack-dev-server","json-loader"]
              }
    }


  

### License

This is license under the [MIT License](https://mit-license.org/)
