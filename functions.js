//2
function list(clients){
    return clients.map(client => `
        <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name}
        <strong>${client.balance.toFixed(2)}</strong>
        </li>    
    `).join('');
}

//3
function order(clients, property){
    return [...clients].sort((a,b) => a[property] > b[property] ? 1 : -1);
}

//4
function total(clients){
    return clients,reduce((sum, client) => sum + client.balance, 0);
}