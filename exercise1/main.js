import { ProductManager } from "./ProductManager.js";
let productManager = new ProductManager();
let index;
let name = document.getElementById('name');
let type = document.getElementById('type');
let price = document.getElementById('price');
let quality = document.getElementById('quality');
let status = document.getElementById('stautus');
function updateButtonDelete() {
    let deleteStudent = document.getElementsByClassName('delete');
    for (let i = 0; i < deleteStudent.length; i++) {
        deleteStudent[i].addEventListener('click', () => {
            if (confirm('ban co muon xoa khong')) {
                index = deleteStudent[i].getAttribute('value');
                productManager.delete(+index);
                updateButtonDelete();
            }
        });
    }
}
document.getElementById('search').addEventListener('input', searchStudent);
//search
function searchStudent() {
    let searchInput = document.getElementById('search').value;
    let searchValue = productManager.listProduct.filter(value => {
        return value.name.toUpperCase().includes(searchInput.toUpperCase());
    });
    productManager.render(searchValue);
}
function editButtonStudent() {
    let editStudent = document.getElementsByClassName('edit');
    for (let i = 0; i < editStudent.length; i++) {
        editStudent[i].addEventListener('click', () => {
            index = editStudent[i].getAttribute('value');
            console.log('dfds', index);
            productManager.edit(+index);
            editButtonStudent();
        });
    }
    document.getElementById('edit').addEventListener('click', function () {
        productManager.listProduct[index].name = document.getElementById('name1').value;
        productManager.listProduct[index].type = document.getElementById('type1').value;
        productManager.listProduct[index].price = document.getElementById('price1').value;
        productManager.listProduct[index].quality = document.getElementById('quality1').value;
        productManager.listProduct[index].status = document.getElementById('stautus1').value;
        productManager.render(productManager.listProduct);
    });
}
function save() {
    productManager.add(name.value, type.value, price.value, quality.value, status.value);
    updateButtonDelete();
    editButtonStudent();
}
document.getElementById('add').addEventListener('click', save);
//# sourceMappingURL=main.js.map