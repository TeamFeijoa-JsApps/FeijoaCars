import Handlebars from 'handlebars';
import 'jquery';

let templateEngine =(() => {

	function renderTemplate(name, context, destination) {
	    return $.get('/public/templates/'+name+'.hbs')
	    		.then(function(data) {
	    			let template = Handlebars.compile(data);
					let compiledTemplate = template(context);
	       			
	       			$(destination).html(compiledTemplate);
	    		});
	}

	return {
		renderTemplate
	}

})();	

export { templateEngine };
