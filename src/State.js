
class State {
    constructor() {
        this.cash = null;
        this.update();
    }

    update = () => {
        const self = this;
        const xmlhttp = new XMLHttpRequest();
        // TODO адрес бека в конфигурационный файл
        const theUrl = "http://10.91.6.2:8080/flashget";
        xmlhttp.open("POST", theUrl);
        xmlhttp.send(JSON.stringify({operation: 'flashget', id: "1"}));
        xmlhttp.onload = function (r) {
            self.onload(this.responseText)
        };
    };

    onload = data => {
        data = JSON.parse(data);

       this.cash = data.accounts[0].cash;
       this.firstName = data.firstName;
       this.lastName = data.lastName;
       this.accounts = data.accounts;
       // this.
        // {\"name\":\"AndrUr\",\"type\":\"Corporation\",\"cash\":\"8.4223232E7\"} , {\"name\":\"AndrFis\",\"type\":\"Individual\",\"cash\":\"4232134.0\"}"}
       const el = document.getElementById('id-balance');
       if (el)
           el.innerText = this.cash;
    }
}

export default State;