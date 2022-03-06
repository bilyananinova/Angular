class myData {
    constructor(method, uri, version, message, response, fulffiled) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = response;
        this.fulfilled = false;
    }
}
let data = new myData('GET', 'http://google.com', 'HTTP/1.1', '', 'undefined', false);
console.log(data);
//# sourceMappingURL=dataClass.js.map