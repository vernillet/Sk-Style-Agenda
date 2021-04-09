$('#btn-Menu').click(function(){
    
    if($('#btn-Menu').text() == 'close') {
        var menuModal = M.Modal.getInstance($('#menu'));
        menuModal.close();
    }

});