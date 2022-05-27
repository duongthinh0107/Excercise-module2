import { Product } from "./Product.js";
export class ProductManager {
    constructor() {
        this.listProduct = [];
    }
    add(name, type, price, quality, status) {
        let product = new Product(name, type, price, quality, status);
        this.listProduct.push(product);
        this.render(this.listProduct);
    }
    render(arr) {
        let html = "";
        // productManager.sort(arr)
        //this.selectionSort(arr)
        if (arr.length === 0) {
            html += "<tr>";
            html += "<td>No Data</td>";
            html += "</tr>";
        }
        else {
            for (let i = 0; i < arr.length; i++) {
                html += "<tr>";
                html += `<td>${i + 1}</td>`;
                html += `<td>${arr[i].name}</td>`;
                html += `<td>${arr[i].type}</td>`;
                html += `<td>${arr[i].price}</td>`;
                html += `<td>${arr[i].quality}</td>`;
                html += `<td>${arr[i].status}</td>`;
                html += `<td>
                     <button class="delete" value="${i}"><a href="#" class=""  title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE5C9;</i></a></button>
                     <button  data-toggle="modal" data-target="#exampleModal1" id="btn-edit" value="${i}" class="edit">
                     <a href="#" class="settings" title="Settings" data-toggle="tooltip" id=""><i class="material-icons">&#xE8B8;</i></a>
                     </button>
                    </td>`;
                html += "</tr>";
            }
        }
        document.getElementById('tbody').innerHTML = html;
    }
    delete(index) {
        this.listProduct.splice(index, 1);
        this, this.render(this.listProduct);
    }
    edit(index) {
        document.getElementById('name1').value = this.listProduct[index].name;
        document.getElementById('type1').value = this.listProduct[index].type;
        document.getElementById('price1').value = this.listProduct[index].price;
        document.getElementById('quality1').value = this.listProduct[index].quality;
        document.getElementById('stautus1').value = this.listProduct[index].status;
        document.getElementById('index').value = index;
        console.log(index);
    }
}
//# sourceMappingURL=ProductManager.js.map