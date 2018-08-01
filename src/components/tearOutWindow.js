export const createBlankTearout = (name, yPosition) => {
    var onSucess = (e) => {
        console.log('successfully creatd a window');
    }
    var onFail = (e) => {
        console.log("Fail",e);
    }
    return new fin.desktop.Window({
        "name": "tearout"+name,
        "defaultWidth":300,
        "defaultHeight":80,
        'defaultTop': yPosition,
        "autoshow":true,
        "opacity":1,
        "url": "http://localhost/tearOut.html",
        "frame":true,
        "resizable":true,
        "maximizable":true,
        "saveWindowState":false,
        "showTaskbarIcon":false},onSucess,onFail)
}