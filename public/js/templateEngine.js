import Handlebars from 'handlebars';
import 'jquery';
// import { templates } from 'templates';

let templateEngine =(() => {

	function renderTemplate(name, context, destination) {
	    return $.get('/public/templates/' +name+ '.handlebars')
	    		.then(function(data) {
	    			let template = Handlebars.compile(data);
					let compiledTemplate = template(context);
	       			
	       			$(destination).html(compiledTemplate);
	    		});
	}

	function getTemplate(name, context, destination) {
		let compiledTemplate = Handlebars.templates[name],
	    	output = compiledTemplate(context);

    	$(destination).html(output);
	}

	return {
		renderTemplate,
		getTemplate
	}

})();	

export { templateEngine };
