$(document.ready(() => {
    $('.add-to-cart').on('click', addToCart);
}));

function addToCart() {
    let id = $(this).data(id);
    let quantity = 1;
    $.ajax({
        url: '/cart',
        type: 'POST',
        data: { id, quantity },
        success: function (result) {
            $('#cart-badge').html(result.totalQuantity)
        }
    })
}