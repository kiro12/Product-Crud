 


var productNameInp = document.getElementById("productName");
var productPriceInp = document.getElementById("productPrice");
var productCompanyInp = document.getElementById("productCompany");
var productDescInp = document.getElementById("productDesc");
var searchRow = document.getElementById("searchRow");
var searchInp = document.getElementById("searchInp");
var addBtn = document.getElementById("myBtn");

var productContainer;

if (localStorage.getItem("productContainer") === null) {
    
    productContainer=[]
}
else{
    productContainer= JSON.parse(localStorage.getItem("productContainer"))
     displayData()
}

searchInp.onkeyup = function()
{
    
    if(searchInp.value == '' || searchInp.value == undefined)
            {
            searchProduct("")
            }
    else{
    searchProduct(searchInp.value)
        }
}

function searchProduct(term){
     var cols ='';
   for(var i=0;i<productContainer.length;i++){
       
      
       if(productContainer[i].name.includes(term)){
           cols += ` <div class="col-md-3">
                        <div class="product">
                        <h2>`+productContainer[i].name+`</h2>
                        <p class="text-danger">`+productContainer[i].price+`</p>
                        <p class="text-info">`+productContainer[i].company+`</p>
                        <p>`+productContainer[i].desc+`</p>
                        <button class="btn btn-danger" onclick="deleteProduct(`+i+`)">delete</button>
                        <button class="btn btn-info" onclick="setForm(`+i+`)">update</button>
                    
                        </div>
                            </div>
                    `
    }
       searchRow.innerHTML=cols;
           
       }
       
       
       
   }
    
    





addBtn.onclick = function(){
    
    
    addProduct()
    displayData()
    
    clearForm()
    
    
}




function addProduct()
{
    var products =
        {
            name:productNameInp.value,
            price:productPriceInp.value,
            company:productCompanyInp.value,
            desc:productDescInp.value
        }
    productContainer.push(products);
    localStorage.setItem("productContainer",JSON.stringify(productContainer))
    }

function displayData(){
    
    var temp="" ;
    for(var i=0; i<productContainer.length;i++){
        
        temp+=` <div class="col-md-3">
                        <div class="product">
                        <h2>`+productContainer[i].name+`</h2>
                        <p class="text-danger">`+productContainer[i].price+`</p>
                        <p class="text-info">`+productContainer[i].company+`</p>
                        <p>`+productContainer[i].desc+`</p>
                        <button class="btn btn-danger" onclick="deleteProduct(`+i+`)">delete</button>
                        <button class="btn btn-info" onclick="setForm(`+i+`)">update</button>
                    
                        </div>
                            </div>
                    `
    }
    document.getElementById("myRow").innerHTML = temp;
    
}
function setForm(i){
   productNameInp.value = productContainer[i].name
   productPriceInp.value = productContainer[i].price
   productCompanyInp.value = productContainer[i].company
    productDescInp.value = productContainer[i].desc
    addBtn.innerHTML = "update product"
}
function deleteProduct(id){
    
    productContainer.splice(id,1);
        localStorage.setItem("productContainer",JSON.stringify(productContainer))

    displayData();
}
function clearForm(){
    
    var inputs = document.getElementsByClassName("form-control")
    
    for(var i=0 ; i<inputs.length;i++){
        
        inputs[i].value ="";
    }
}

