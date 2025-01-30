//1 I'm doing on function.js, not edit any files.

//2 create list function that have one argument clients array. map() method to create a new array and iterate for client.
function list(clients){
    return clients.map(client => `
        <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name}
        <strong>${client.balance.toFixed(2)}</strong>
        </li>    
    `).join(''); // merge array into single string.
} //cause our numbers have .00 so I used toFixed(2) to show 2 decimal places.

//3
function order(clients, property){ //order will check each client and compare the property.
    return [...clients].sort((a,b) => a[property] > b[property] ? 1 : -1); //sort method will return property in ascending order. with 1 is greater than -1.
}

//4
function total(clients){ //reduce () have 4 function (reducer function, accumulator, current value, initial value). In this requirement, reduce method will sum all the balances. 
    return clients.reduce((sum, client) => sum + client.balance, 0); // ,0 will start from 0.
}

//5
function info(index){ // just filter first client by index.
    return clients.find(client => client.index === index);
}

//6 
function search(query) { //filter method will return new array that match client.name with query by using includes() method.
    return clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase())
    );
}