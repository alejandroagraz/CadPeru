jQuery(document).ready(function () {
    jQuery('#nav-icon1').click(function(e){
        e.preventDefault();    
        cerrar();
    });

    jQuery(".contenedor-preguntas .item-tipo-pregunta").click(function(e){
    	e.preventDefault();  
    	jQuery(".contenedor-preguntas .item-tipo-pregunta,.contenedor-preguntas .acordion,.contenedor-preguntas .contenido-general").removeClass("activo");
    	var indicador = jQuery(".contenedor-preguntas .item-tipo-pregunta").index(this);
    	jQuery(".contenedor-preguntas .acordion").eq(indicador).addClass("activo");
    	jQuery(".contenedor-preguntas .contenido-general").eq(indicador).addClass("activo");
			
    	jQuery(this).addClass("activo");
    });

    jQuery(".contenedor-preguntas .acordion").click(function(e){
    	e.preventDefault(); 
    	var indicador = jQuery(".contenedor-preguntas .acordion").index(this);
    	jQuery(".contenedor-preguntas .contenido-general article").eq(indicador).slideToggle();
    	jQuery(this).toggleClass("activo");
    });
 });

jQuery(window).resize(function(){
	if(jQuery(window).width() > 767)
	{
		jQuery(".contenedor-preguntas .contenido-general article").show();    
	}
})

function cerrar()
{
    jQuery("#nav-icon1").toggleClass('open');
    jQuery(".collapse.navbar-collapse").toggleClass('in');
    jQuery("body").toggleClass("has-active-menu");
}