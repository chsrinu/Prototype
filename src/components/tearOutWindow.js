export const createBlankTearout = () => {
    var onSucess = (e) => {
        console.log('successfully creatd a window');
    }
    var onFail = (e) => {
        console.log("Fail",e);
    }
    return new fin.desktop.Application({
        "name": "tearout",
        "uuid": "OpenfinPOC1",
        "url": "about:blank",
    },onSucess,onFail)
}