var bidaddManager = (function(formHelper) {
    function add() {
        console.log("deeksha");
        var form = $('#add-bid-form')[0];
        var bid = $(form).find('input[name=BidPrice]').val();
        var productid = $(this).attr('data-id');
        var form_data = new FormData(form);
	form_data.append('csrfmiddlewaretoken', $("input[name='csrfmiddlewaretoken']").val());
	console.log(form_data);        

        formHelper.clearErrors.call(form);

        function onSuccess(data, status, xhr) {
		 


	    var el = $('<li/>');
            el.addClass('collection-item').html(
                productid + " " + bid + "<a class='right'>" + "abc" + "</a>"
            );
            $('#course-list').append(el);



	    console.log("sharma");
            $('#addbid').closeModal();
            formHelper.clear.call(form);
        }

        $.ajax({
            url : '/products/product/bid/' + productid + '/',
            type: 'POST',
            dataType: 'json',
            data: form_data,
            processData: false,
            contentType: false,
            success: onSuccess,
            error: formHelper.handleErrors.bind(form),
        });
    }

    return {
        init : function()  {
            $('#add-bid-btn').click(add);
        }
    };
})(AjaxFormHelper);
