$(document).ready(function() {

       $('form').on('submit', function(e) {
            e.preventDefault();
            const nomeNovoItem = $('#texto-nova-tarefa').val();
            const novoItem = $(`<li style="display: none;
                                text-decoration: none;">${nomeNovoItem}</li>`);
            $(`
                <div class="link-tarefa" />
                </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(1000);
            $('#texto-nova-tarefa').val('');
    })
    
    $('ul').on('click', 'li', function() {
        $(this).css('text-decoration', 'line-through');
        
    });

})
