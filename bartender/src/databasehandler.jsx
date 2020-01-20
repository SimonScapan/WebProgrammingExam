import $ from 'jquery';


export function getRecipe() {
let response
$.ajax({
    url: 'https://bartender-13f64.firebaseio.com' + '.json',
    dataType: "json",
    data: JSON.stringify(),
    type: 'POST',
    async: false,
    success: function (serverResponse) {
        console.log("Response: ", serverResponse);
        response = serverResponse;
    },
    error: function (serverResponse) {
        console.log("Response: ", serverResponse);
        response = serverResponse;
        debugger;
        throw new Error("Error during adding of given recipe");
    }
    });
return response;
}



