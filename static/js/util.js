(function(w){
    
    
        w.createElement = function(elem,text,pnode){
            var elem = document.createElement(elem);
            var text = document.createTextNode(text);
            elem.appendChild(text);
            if(pnode){
                pnode.appendChild(elem);
            }
            return elem;
        }

        w.addClass = function(elem,className) {
            let reg = new RegExp(className , 'ig');
            let elemClass = elem.className;
            if(!reg.test(elemClass)){
                elem.className = elemClass + " " + className;
            }
            elem.className = elem.className.trim();
        }

        w.removeClass = function(elem,className) {
            let reg = new RegExp(className , 'ig');
            let elemClass = elem.className;
            if(reg.test(elemClass)){
                elem.className = elem.className.replace(className, '');
            }
            elem.className = elem.className.trim();
        }
    
    
    
    
        w.request = function(url,method,data) {
            return new Promise(function(resolve){
                var xhr = new XMLHttpRequest();
                xhr.open(method,url);
                xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                xhr.onload = function(e){
                    resolve(JSON.parse(e.currentTarget.responseText));
                }
                xhr.send(JSON.stringify(data));
            });
        }
    
        if(navigator.platform.indexOf("Linux")>-1) {
            w.url = "http://www.nightdays.net/fs/";
        }else{
            w.url = "http://localhost/fs/";
        }
    
        w.post = function(path){
            return function(data){
                return request(url + path,"post",data);
            }
        }
    
    
        w.api = {
            getFileList : post("getFileList")
        }
    
    })(window);