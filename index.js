var productNameInput = document.getElementById('productName')
var productPriceInput = document.getElementById('productPrice')
var productCategoryInput = document.getElementById('productCategory')
var productDescInput = document.getElementById('productDesc')
var productSearchnput = document.getElementById('search')
var updateBtn = document.getElementById('updateBtn')
var addBtn = document.getElementById('addBtn')
var productList = []
var updateIndex;

if (localStorage.getItem('productList')) {
  productList = JSON.parse(localStorage.getItem('productList'))  //4 products
  displayProducts()
}



function createProduct() {
  if (nameValidation() && priceValidation() && categoryValidation() && descValidation()) {
    var product = {
      name: productNameInput.value,
      price: productPriceInput.value,
      category: productCategoryInput.value,
      desc: productDescInput.value
    }
    productList.push(product)
    localStorage.setItem('productList', JSON.stringify(productList))
    clear()
    displayProducts()
  }
}
function displayProducts() {
  var cartona = ''

  for (var i = 0; i < productList.length; i++) {
    cartona += `
           <tr>
            <td>${i + 1}</td>
            <td>${productList[i].name}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].category}</td>
            <td>${productList[i].desc}</td>
            <td><button onclick='deleteProduct(${i})' class='btn btn-danger'>Delete</button></td>
            <td><button onclick='kobry(${i})' class='btn btn-warning'>Update</button></td>
          </tr>
      `
  }

  document.getElementById('data').innerHTML = cartona

}



// includes    'ahmed'.includes('ahmt')

function searchProducts() {
//i
  var cartona = ''

  for (var i = 0; i < productList.length; i++) {
    if (productList[i].name.toLowerCase().includes(productSearchnput.value.toLowerCase())) {

      cartona += `
         <tr>
          <td>${i + 1}</td>
          <td>${productList[i].name}</td>
          <td>${productList[i].price}</td>
          <td>${productList[i].category}</td>
          <td>${productList[i].desc}</td>
          <td><button onclick='deleteProduct(${i})' class='btn btn-danger'>Delete</button></td>
          <td><button onclick='kobry(${i})' class='btn btn-warning'>Update</button></td>
        </tr>
    `
    }
  }

  document.getElementById('data').innerHTML = cartona
}







function deleteProduct(index) {
  productList.splice(index, 1)
  localStorage.setItem('productList', JSON.stringify(productList))
  displayProducts()
  console.log(productList);

}
function kobry(index) {
  updateIndex = index

  productNameInput.value = productList[index].name
  productPriceInput.value = productList[index].price
  productCategoryInput.value = productList[index].category
  productDescInput.value = productList[index].desc

  updateBtn.classList.remove('d-none')
  addBtn.classList.add('d-none')
}
function updateProduct() {
  productList[updateIndex].name = productNameInput.value
  productList[updateIndex].price = productPriceInput.value
  productList[updateIndex].category = productCategoryInput.value
  productList[updateIndex].desc = productDescInput.value

  displayProducts()
  clear()
  localStorage.setItem('productList', JSON.stringify(productList))

  updateBtn.classList.add('d-none')
  addBtn.classList.remove('d-none')

}
function clear() {
  productNameInput.value = null
  productPriceInput.value = null
  productCategoryInput.value = null
  productDescInput.value = null

  productNameInput.classList.remove('is-valid')
  productPriceInput.classList.remove('is-valid')
  productCategoryInput.classList.remove('is-valid')
  productDescInput.classList.remove('is-valid')
}



function priceValidation() {
  var regex = /^[1-9][0-9]{2}$/
  var text = productPriceInput.value
  var message = document.getElementById('priceMsg')

  if (regex.test(text)) {
    productPriceInput.classList.add('is-valid')
    productPriceInput.classList.remove('is-invalid')
    message.classList.add('d-none')

    return true
  } else {
    productPriceInput.classList.add('is-invalid')
    productPriceInput.classList.remove('is-valid')
    message.classList.remove('d-none')

    return false
  }
}
function nameValidation() {
  var regex = /^[A-Z][a-z]{3,15}$/
  var text = productNameInput.value
  var message = document.getElementById('nameMsg')

  if (regex.test(text)) {
    productNameInput.classList.add('is-valid')
    productNameInput.classList.remove('is-invalid')
    message.classList.add('d-none')

    return true
  } else {
    productNameInput.classList.add('is-invalid')
    productNameInput.classList.remove('is-valid')
    message.classList.remove('d-none')

    return false
  }
}
function categoryValidation() {
  var regex = /^(mobile|laptop|tv)$/
  var text = productCategoryInput.value
  var message = document.getElementById('categoryMsg')

  if (regex.test(text)) {
    productCategoryInput.classList.add('is-valid')
    productCategoryInput.classList.remove('is-invalid')
    message.classList.add('d-none')

    return true
  } else {
    productCategoryInput.classList.add('is-invalid')
    productCategoryInput.classList.remove('is-valid')
    message.classList.remove('d-none')

    return false
  }
}
function descValidation() {
  var regex = /^[A-Za-z0-9]{5,}$/
  var text = productDescInput.value
  var message = document.getElementById('descMsg')

  if (regex.test(text)) {
    productDescInput.classList.add('is-valid')
    productDescInput.classList.remove('is-invalid')
    message.classList.add('d-none')

    return true
  } else {
    productDescInput.classList.add('is-invalid')
    productDescInput.classList.remove('is-valid')
    message.classList.remove('d-none')

    return false
  }
}