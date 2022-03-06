//                                                      1.	Data Class

class myData {
    public method: string;
    public uri: string;
    public version: string;
    public message: string;
    public response: string;
    public fulfilled: boolean;

    constructor(method: string, uri: string, version: string, message: string, response: string, fulffiled: boolean) {
        this.method = method
        this.uri = uri
        this.version = version
        this.message = message
        this.response = response
        this.fulfilled = false
    }
}

let data = new myData('GET', 'http://google.com', 'HTTP/1.1', '', 'undefined', false)
console.log(data);
