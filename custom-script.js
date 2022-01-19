jQuery( document ).on( 'elementor/popup/show', () => {
    for(var i = 0; i < jQuery(".wpcf7-form").length ; i++)    {
     wpcf7.init(jQuery(".wpcf7-form")[i]);   
    }
});
