$(document).ready(function(){
    var siteUrl = $('#shop-url').val();
    // console.log($("#shop-url"));
    // console.log(location.url)
    // console.log(111111111111111111112222222222)
 
    let plainIdAutoFill = setInterval(()=>{
        let planIdInput = document.querySelector('input[name="plan-id"]');
        let plainId = $('.plan-id').text().trim();
        if((planIdInput)){
            planIdInput.value = plainId;
            planIdInput.setAttribute('disabled',true)
        }
        clearInterval(plainIdAutoFill)
    },500)
})