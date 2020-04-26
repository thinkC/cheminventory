$(document).ready(() => {
    $.getJSON('/api/inventory')
        .then(addInventories)
        .catch((err) => {
            console.log(err)
        });

    $('#btnSub').on('click', function (e) {
        e.preventDefault();
        createInventory();
    })
})

const addInventories = (inventories) => {
    inventories.forEach((inventory) => {
        console.log(inventory.inventoryname)
        addInventory(inventory)
    })
}

function createInventory() {
    let newInventoryName = $('#inventoryname').val();
    let newInventoryCode = $('#inventorycode').val();
    let newLotnumber = $('#lotnumber').val();
    let newManuDate = $('#manudate').val();
    let newExpireDate = $('#expiredate').val();
    let newInitialQty = $('#initialqty').val();
    let newReqqty = $('#reqqty').val();
    let newTotal = $('#total').val();
    let newCountry = $('#country').val();
    let newManifestId = $('#manifestid').val();
    $.post('/api/inventory', {
        inventoryname: newInventoryName,
        inventorycode: newInventoryCode,
        lotnumber: newLotnumber,
        manufacturedate: newManuDate,
        expiredate: newExpireDate,
        initialquantity: newInitialQty,
        requestedquantity: newReqqty,
        totalremaining: newTotal,
        country: newCountry,
        manifestid: newManifestId

    })
        .then((newInventory) => {
            //Console.log(newInventory
            addInventory(newInventory)

            //make the input empty after submit
            let newInventoryName = $('#inventoryname').val('');
            let newInventoryCode = $('#inventorycode').val('');
            let newLotnumber = $('#lotnumber').val('');
            let newManuDate = $('#manudate').val('');
            let newExpireDate = $('#expiredate').val('');
            let newInitialQty = $('#initialqty').val('');
            let newReqqty = $('#reqqty').val('');
            let newTotal = $('#total').val('');
            let newCountry = $('#country').val('');
            let newManifestId = $('#manifestid').val('');
        })
}

function addInventory(inventory) {
    let newInventory = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${inventory.inventoryname}</h5>
            <p class="card-text">${inventory.lotnumber}</p>
            <p class="card-text">${inventory.country}</p>
            <a href="#" class="btn btn-primary">View Details</a>
        </div>
    </div>
        `
    $('#top').append(newInventory)
}

// document.addEventListener('DOMContentLoaded', function () {
//     fetch('http://localhost:3001/api/inventory')
//         .then((response) => {
//             //console.log(response)
//             return response.json()
//         })
//         .then((data) => {
//             console.log(data)
//         })
// })

