import PageManager from "./page-manager";
import swal from './global/sweet-alert';

export default class Custom extends PageManager {

	onReady(){

		var products = this.context.products;

		// add all items to cart button
		// 
		$('#form-action-addToCart').on('click', event => {
			// console.log('add to cart');
			event.preventDefault();

		    const $addToCartBtn = $('#form-action-addToCart', $(event.target));
            const waitMessage = $addToCartBtn.context.data('waitMessage');


		    $addToCartBtn.context
			    .val(waitMessage)
                .prop('disabled', true);


			fetch('/api/storefront/cart', {
				credentials: 'include'
			}).then(function(response) {
				// console.log('get cart', response.json());
				return response.json();
			})
			.then(function(reponse) {
				products.forEach(function(product){

					// console.log('prodcuts',product.id);

					$.get("/cart.php?action=add&product_id="+product.id);

				});


	            swal.fire({
	                text: 'All items added to cart',
	                icon: 'warning',
	                showCancelButton: false,
	            }).then((result) => {
	                if (result.value) {
	                    window.location.reload();
	                }
	            });

				
			});

		});

		// cart remove button
		// 
        $('#cart-remove').on('click', event => {

            event.preventDefault();

            fetch('/api/storefront/cart', {

             	credentials: 'include'

            }).then(function(response) {

             	return response.json();

            })
            .then(function(myJson) {

                fetch('/api/storefront/carts/'+myJson[0].id, {
                    method: 'DELETE',
                });

            });

            swal.fire({
                text: 'All items removed from cart',
                icon: 'warning',
                showCancelButton: false,
            }).then((result) => {
                if (result.value) {
                    window.location.reload();
                }
            });

        });

	}

}