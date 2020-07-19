class Fetch {
    constructor(url, method, mode, headers, body) {
      this.url = url;
      this.method = method ;
      this.mode = mode ;
      this.headers = headers;
      this.body = body;
      this.responseData;
    }

    Call()
    {
            return (new Promise((resolve, reject) => {
                fetch(this.url,
                    {
                       method :this.method,
                       mode : this.mode,
                       headers : this.headers,
                       body : this.body
                    }).then((response) => {
                        return response.json();
                    }).then((data) => {
                        this.responseData = data;
                        resolve(this.responseData);
                    });
              
            }));
          

    }
    
  }

  class FetchBuilder {
    constructor(url) {
      this.url = url;
      this.headers = {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      };
      this.method = "Get" ;
      this.mode = 'cors' ;
    }

    setMethod(method) {
      this.method = method
      return this
    }

    setMode(mode) {
      this.mode = mode
      return this
    }

    setHeaders(headers) {
        this.headers = headers
        return this
    }

    setBody(body) {
      this.body = body
      return this
    }
    
    build() {
      return new Fetch(this.url, this.method, this.mode, this.headers, this.body);
    }
  }
  