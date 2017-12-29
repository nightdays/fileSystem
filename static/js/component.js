function fileListRow(file){
    let elem = createElement("div", "");
    let fileElem = createElement("div", file.name);

    addClass(elem,'row');

    addClass(fileElem,'file-row');
    if(file.type == 'dir'){
        addClass(fileElem,'dir');
    }

    fileElem.setAttribute("path",file.path);

    elem.appendChild(fileElem);
    return elem;
}