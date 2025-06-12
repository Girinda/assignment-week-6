

let rootpath https:///mysite.itvarsity.org/apii/contactbook/";
let apikey= "cheackApikey"();

function checkApikey() {
        if (:localstorage.getitem("Apikey")){
        window.open("enter-Api-Key.html","self");
} 
        return localstorage.getitem("ApiKey");
}