
        


$.ajax({
    url: 'https://017c-146-70-102-188.ngrok-free.app/api/EcommerceProduct/GetProductCategories',

    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420",
    },
    method: 'GET',
    dataType: 'json',

    success: function (data) {
        console.log(data);
        const parentData = data.filter((value, index) => {
            return !value.ParentId;
        })
        const childData = data.filter((value, index) => {
            return value.ParentId;
        })
        console.log("ParentData", parentData);
        console.log("ChildData", childData);
        parentData.map(test => {


            let ParentNullList = document.getElementById("a")


            console.log("ParentNullList", ParentNullList);

            let cdata = childData.map((value,index) => {
                return test.Id == value.ParentId ? `<option> > ${value.Name}</option>` : false
             })
            ParentNullList.insertAdjacentHTML('beforeend',
                `<option> ${test.Name}</option> <br> ${cdata}`
            );
            $('.js-data-example-ajax').select2({
                placeholder: "Select a Parent",
                allowClear: true
            })
        })
    }
})






// Variations API





$.ajax({
    url: 'https://017c-146-70-102-188.ngrok-free.app/api/EcommerceProduct/GetProductVariations',

    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420",
    },
    method: 'GET',
    dataType: 'json',

    success: function (data) {
       
        console.log(data);

       
        const parentData = data.filter((value, index) => {
            return value.AttributeId
        })
        const childData = data.filter((value, index) => {
            return value.AttributeId;
        })
        console.log("ParentData", parentData);
        console.log("ChildData", childData);
        let uniqueChars = [];
        parentData.map(test => {

            if (!uniqueChars.includes(test.AttributeName)) {

            uniqueChars.push(test.AttributeName);

            let ParentNullList = document.getElementById("aa")

            console.log("ParentNullList", ParentNullList);
            
            let cdata = childData.map((value,index) => {
                return test.AttributeId == value.AttributeId ? `<option> > ${value.Name}</option>` : false
             })
            ParentNullList.insertAdjacentHTML('beforeend',
                `<option> ${test.AttributeName}</option> <br> ${cdata}`
            );
            }
            $('.js').select2({
                placeholder: "Select a Variation",
                allowClear: true
            })
        })
    }
})






















//SELECT2 Product Categories Parent



// $.ajax({
//             url: 'https://2dc4-203-128-17-5.ngrok-free.app/api/EcommerceProduct/GetProductCategories',

//             headers: {
//                 'Content-Type': 'application/json',
//                 "ngrok-skip-browser-warning": "69420",
//             },
//             method: 'GET',
//             dataType: 'json',

//             success: function (data) {
//                 console.log(data);
//                 const parentData = data.filter((value, index) => {
//                     return !value.ParentId;
//                 })
        
//                 console.log("ParentData2", parentData);
        
        
        
        
//                 parentData.map(test => {


//                     let ParentNullList = document.getElementById("ProductCategories")


//                     console.log("ParentNullList2", ParentNullList);

            
//                     ParentNullList.insertAdjacentHTML('beforeend',
//                         `<option> ${test.Name}</option> <br> `
//                     );
          
           

         
//                 })
//                 $('.Categories').select2({
//                     placeholder: "Select a Product",
//                     allowClear: true,
//                 })
//                 $(".Categories").click(function() { $('.Categories-Child').select2() 
    
//                 const childData = data.filter((value, index) => {
//                     return value.ParentId;
//                 })
       
//                 console.log("ChildData", childData);
        
//                 let cdata = childData.map((value,index) => {
//                         return test.Id == value.ParentId ? `<option> > ${value.Name}</option>` : false
//                      })
//                     ParentNullList.insertAdjacentHTML('beforeend',
//                         `<option> ${test.Name}</option> <br> ${cdata}`
//                     );
            
    
//             });

        

//             }
//         })
       




$.ajax({
url: 'https://017c-146-70-102-188.ngrok-free.app/api/EcommerceProduct/GetProductCategories',
headers: {
'Content-Type': 'application/json',
"ngrok-skip-browser-warning": "69420",
},
method: 'GET',
dataType: 'json',
success: function (data) {
console.log(data);
const parentData = data.filter((value, index) => {
    return !value.ParentId;
});
const childData = data.filter((value, index) => {
    return value.ParentId;
});
console.log("ParentData", parentData);
console.log("ChildData", childData);


let parentDropdown = $('#ProductCategories');
parentData.forEach(parent => {
    parentDropdown.append(`<option value ="${parent.Id}">${parent.Name}</option>`);
});
parentDropdown.select2({
    placeholder: "Select a Parent",
    allowClear: true
});


let childDropdown = $('#ProductCategories-Child');
parentDropdown.on('select2:select', function (e) {
   
    childDropdown.empty();
    childDropdown.append('<option></option>');
    // Add child options
    let parentId = e.params.data.id;
    childData.forEach(child => {
        if (child.ParentId == parentId) {
            childDropdown.append(`<option >${child.Name}</option>`);
        }
    });
    childDropdown.select2({
        placeholder: "Select a Child",
        allowClear: true,
       
    });
});
}
});



