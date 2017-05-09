import Handlebars from 'handlebars';!function(){var n=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a.addNewAd=n({1:function(n,a,l,e,r){var s,t,o,i="";return t=null!=(t=l.manufacturers||(null!=a?a.manufacturers:a))?t:l.helperMissing,o={name:"manufacturers",hash:{},fn:n.program(2,r,0),inverse:n.noop,data:r},s="function"==typeof t?t.call(null!=a?a:n.nullContext||{},o):t,l.manufacturers||(s=l.blockHelperMissing.call(a,s,o)),null!=s&&(i+=s),i},2:function(n,a,l,e,r){var s,t=null!=a?a:n.nullContext||{},o=l.helperMissing,i=n.escapeExpression;return'                <option value="'+i((s=null!=(s=l.name||(null!=a?a.name:a))?s:o,"function"==typeof s?s.call(t,{name:"name",hash:{},data:r}):s))+'">'+i((s=null!=(s=l.name||(null!=a?a.name:a))?s:o,"function"==typeof s?s.call(t,{name:"name",hash:{},data:r}):s))+"</option>\r\n"},4:function(n,a,l,e,r){var s,t,o,i="";return t=null!=(t=l.months||(null!=a?a.months:a))?t:l.helperMissing,o={name:"months",hash:{},fn:n.program(5,r,0),inverse:n.noop,data:r},s="function"==typeof t?t.call(null!=a?a:n.nullContext||{},o):t,l.months||(s=l.blockHelperMissing.call(a,s,o)),null!=s&&(i+=s),i},5:function(n,a,l,e,r){var s,t=n.escapeExpression;return'                <option value="'+t((s=null!=(s=l.index||r&&r.index)?s:l.helperMissing,"function"==typeof s?s.call(null!=a?a:n.nullContext||{},{name:"index",hash:{},data:r}):s))+'">'+t(n.lambda(a,a))+"</option>\r\n"},7:function(n,a,l,e,r){var s,t,o,i="";return t=null!=(t=l.years||(null!=a?a.years:a))?t:l.helperMissing,o={name:"years",hash:{},fn:n.program(8,r,0),inverse:n.noop,data:r},s="function"==typeof t?t.call(null!=a?a:n.nullContext||{},o):t,l.years||(s=l.blockHelperMissing.call(a,s,o)),null!=s&&(i+=s),i},8:function(n,a,l,e,r){var s=n.lambda,t=n.escapeExpression;return'                <option value="'+t(s(a,a))+'">'+t(s(a,a))+"</option>\r\n"},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,r){var s,t=null!=a?a:n.nullContext||{};return'<h2 class="text-center page-title">New Ad</h2>\r\n<div id="new-ad-form">\r\n    <div class="form-group">\r\n        <label for="title">Title</label>\r\n        <input type="text" class="form-control" id="title" placeholder="Ex: Best car! (optional)">\r\n    </div>\r\n\r\n    <div class=form-group">\r\n        <label for="make">Make</label>\r\n        <select name="make" id="make" class="form-control">\r\n'+(null!=(s=l.each.call(t,a,{name:"each",hash:{},fn:n.program(1,r,0),inverse:n.noop,data:r}))?s:"")+'        </select>\r\n    </div>\r\n\r\n\r\n    <div class="form-group">\r\n        <label for="model">Model</label>\r\n        <input type="text" class="form-control" id="model" placeholder="Ex: M5">\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <label for="price">Price</label>\r\n        <input type="text" class="form-control" id="price" placeholder="Ex: 20000">\r\n    </div>\r\n\r\n\r\n    <div class=form-group">\r\n        <label for="fuel">Fuel type</label>\r\n        <select name="fuel" id="fuel" class="form-control">\r\n            <option value="Diesel">Diesel\r\n            <option value="Petrol">Petrol\r\n            <option value="Hybrid">Hybrid\r\n            <option value="Other">Other\r\n        </select>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <label for="power">Power</label>\r\n        <input type="text" class="form-control" id="power" placeholder="Ex: 250">\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <label for="mileage">Mileage</label>\r\n        <input type="text" class="form-control" id="mileage" placeholder="Ex: 1000">\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <label for="gearbox">Gearbox</label>\r\n\r\n        <select name="gearbox" id="gearbox" class="form-control">\r\n            <option value="Manual">Manual\r\n            <option value="Automatic">Automatic\r\n            <option value="Semi-automatic">Semi-automatic\r\n        </select>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <label for="manufactureDate">Manufacture date</label>\r\n        <select id="month" class="form-control">\r\n'+(null!=(s=l.each.call(t,a,{name:"each",hash:{},fn:n.program(4,r,0),inverse:n.noop,data:r}))?s:"")+'      \r\n        </select>\r\n\r\n        <select id="year" class="form-control">\r\n'+(null!=(s=l.each.call(t,a,{name:"each",hash:{},fn:n.program(7,r,0),inverse:n.noop,data:r}))?s:"")+'        </select>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <label for="image">Image url</label>\r\n        <input type="text" class="form-control" id="image">\r\n    </div>\r\n\r\n    <input type="submit" id="submitAdInfo-btn" value="Add" class="btn-block btn-lg btn-primary">\r\n</div>'},useData:!0}),a.currentAd=n({1:function(n,a,l,e,r){var s;return'        <label for="title">Title</label>\r\n        <input type="text" class="form-control" id="title" placeholder="Ex: Best car! (optional)" value="'+n.escapeExpression((s=null!=(s=l._title||(null!=a?a._title:a))?s:l.helperMissing,"function"==typeof s?s.call(null!=a?a:n.nullContext||{},{name:"_title",hash:{},data:r}):s))+'">\r\n'},3:function(n,a,l,e,r){var s,t,o,i="";return t=null!=(t=l.manuf||(null!=a?a.manuf:a))?t:l.helperMissing,o={name:"manuf",hash:{},fn:n.program(4,r,0),inverse:n.noop,data:r},s="function"==typeof t?t.call(null!=a?a:n.nullContext||{},o):t,l.manuf||(s=l.blockHelperMissing.call(a,s,o)),null!=s&&(i+=s),i},4:function(n,a,l,e,r){var s,t=null!=a?a:n.nullContext||{},o=l.helperMissing,i=n.escapeExpression;return'                <option value="'+i((s=null!=(s=l.name||(null!=a?a.name:a))?s:o,"function"==typeof s?s.call(t,{name:"name",hash:{},data:r}):s))+'">'+i((s=null!=(s=l.name||(null!=a?a.name:a))?s:o,"function"==typeof s?s.call(t,{name:"name",hash:{},data:r}):s))+"</option>\r\n"},6:function(n,a,l,e,r){var s;return'    <div class="form-group">\r\n        <label for="model">Model</label>\r\n        <input type="text" class="form-control" id="model" placeholder="Ex: M5" value="'+n.escapeExpression((s=null!=(s=l._model||(null!=a?a._model:a))?s:l.helperMissing,"function"==typeof s?s.call(null!=a?a:n.nullContext||{},{name:"_model",hash:{},data:r}):s))+'">\r\n    </div>\r\n'},8:function(n,a,l,e,r){var s;return'    <div class="form-group">\r\n        <label for="price">Price</label>\r\n        <input type="text" class="form-control" id="price" placeholder="Ex: 20000" value="'+n.escapeExpression((s=null!=(s=l._price||(null!=a?a._price:a))?s:l.helperMissing,"function"==typeof s?s.call(null!=a?a:n.nullContext||{},{name:"_price",hash:{},data:r}):s))+'">\r\n    </div>\r\n'},10:function(n,a,l,e,r){var s;return'    <div class="form-group">\r\n        <label for="power">Power</label>\r\n        <input type="text" class="form-control" id="power" placeholder="Ex: 250" value="'+n.escapeExpression((s=null!=(s=l._power||(null!=a?a._power:a))?s:l.helperMissing,"function"==typeof s?s.call(null!=a?a:n.nullContext||{},{name:"_power",hash:{},data:r}):s))+'">\r\n    </div>\r\n'},12:function(n,a,l,e,r){var s;return'    <div class="form-group">\r\n        <label for="mileage">Mileage</label>\r\n        <input type="text" class="form-control" id="mileage" placeholder="Ex: 1000" value="'+n.escapeExpression((s=null!=(s=l._mileage||(null!=a?a._mileage:a))?s:l.helperMissing,"function"==typeof s?s.call(null!=a?a:n.nullContext||{},{name:"_mileage",hash:{},data:r}):s))+'">\r\n    </div>\r\n'},14:function(n,a,l,e,r){var s,t,o,i="";return t=null!=(t=l.months||(null!=a?a.months:a))?t:l.helperMissing,o={name:"months",hash:{},fn:n.program(15,r,0),inverse:n.noop,data:r},s="function"==typeof t?t.call(null!=a?a:n.nullContext||{},o):t,l.months||(s=l.blockHelperMissing.call(a,s,o)),null!=s&&(i+=s),i},15:function(n,a,l,e,r){var s,t=n.escapeExpression;return'                <option value="'+t((s=null!=(s=l.index||r&&r.index)?s:l.helperMissing,"function"==typeof s?s.call(null!=a?a:n.nullContext||{},{name:"index",hash:{},data:r}):s))+'">'+t(n.lambda(a,a))+"</option>\r\n"},17:function(n,a,l,e,r){var s,t,o,i="";return t=null!=(t=l.years||(null!=a?a.years:a))?t:l.helperMissing,o={name:"years",hash:{},fn:n.program(18,r,0),inverse:n.noop,data:r},s="function"==typeof t?t.call(null!=a?a:n.nullContext||{},o):t,l.years||(s=l.blockHelperMissing.call(a,s,o)),null!=s&&(i+=s),i},18:function(n,a,l,e,r){var s=n.lambda,t=n.escapeExpression;return'                <option value="'+t(s(a,a))+'">'+t(s(a,a))+"</option>\r\n"},20:function(n,a,l,e,r){var s;return'    <div class="form-group">\r\n        <label for="image">Image url</label>\r\n        <input type="text" class="form-control" id="image" value="'+n.escapeExpression((s=null!=(s=l._urlImage||(null!=a?a._urlImage:a))?s:l.helperMissing,"function"==typeof s?s.call(null!=a?a:n.nullContext||{},{name:"_urlImage",hash:{},data:r}):s))+'">\r\n    </div>\r\n'},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,r){var s,t=null!=a?a:n.nullContext||{};return'<h2 class="text-center page-title">Edit Ad</h2>\r\n<div id="new-ad-form">\r\n\r\n    <div class="form-group">\r\n'+(null!=(s=l.with.call(t,null!=a?a.result:a,{name:"with",hash:{},fn:n.program(1,r,0),inverse:n.noop,data:r}))?s:"")+'    </div>\r\n\r\n    <div class=form-group">\r\n        <label for="make">Make</label>\r\n        <select name="make" id="make" class="form-control">\r\n'+(null!=(s=l.each.call(t,a,{name:"each",hash:{},fn:n.program(3,r,0),inverse:n.noop,data:r}))?s:"")+"        </select>\r\n    </div>\r\n\r\n"+(null!=(s=l.with.call(t,null!=a?a.result:a,{name:"with",hash:{},fn:n.program(6,r,0),inverse:n.noop,data:r}))?s:"")+"\r\n"+(null!=(s=l.with.call(t,null!=a?a.result:a,{name:"with",hash:{},fn:n.program(8,r,0),inverse:n.noop,data:r}))?s:"")+'\r\n    <div class=form-group">\r\n        <label for="fuel">Fuel type</label>\r\n        <select name="fuel" id="fuel" class="form-control">\r\n            <option value="Diesel">Diesel\r\n            <option value="Petrol">Petrol\r\n            <option value="Hybrid">Hybrid\r\n            <option value="Other">Other\r\n        </select>\r\n    </div>\r\n\r\n'+(null!=(s=l.with.call(t,null!=a?a.result:a,{name:"with",hash:{},fn:n.program(10,r,0),inverse:n.noop,data:r}))?s:"")+"\r\n"+(null!=(s=l.with.call(t,null!=a?a.result:a,{name:"with",hash:{},fn:n.program(12,r,0),inverse:n.noop,data:r}))?s:"")+'\r\n    <div class="form-group">\r\n        <label for="gearbox">Gearbox</label>\r\n\r\n        <select name="gearbox" id="gearbox" class="form-control">\r\n            <option value="Manual">Manual\r\n            <option value="Automatic">Automatic\r\n            <option value="Semi-automatic">Semi-automatic\r\n        </select>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <label for="manufactureDate">Manufacture date</label>\r\n        <select id="month" class="form-control">\r\n'+(null!=(s=l.each.call(t,a,{name:"each",hash:{},fn:n.program(14,r,0),inverse:n.noop,data:r}))?s:"")+'      \r\n        </select>\r\n\r\n        <select id="year" class="form-control">\r\n'+(null!=(s=l.each.call(t,a,{name:"each",hash:{},fn:n.program(17,r,0),inverse:n.noop,data:r}))?s:"")+"        </select>\r\n    </div>\r\n\r\n"+(null!=(s=l.with.call(t,null!=a?a.result:a,{name:"with",hash:{},fn:n.program(20,r,0),inverse:n.noop,data:r}))?s:"")+'\r\n    <input type="submit" id="submitAdInfo-btn" value="Update" class="btn-block btn-lg btn-primary">\r\n    \r\n</div>'},useData:!0}),a.home=n({1:function(n,a,l,e,r){var s,t=n.escapeExpression,o=null!=a?a:n.nullContext||{},i=l.helperMissing,p="function";return'            <div class="ad thumbnail" data-href="'+t(n.lambda(null!=a?a._id:a,a))+'">\r\n\r\n                <h3 class="text-center">'+t((s=null!=(s=l._title||(null!=a?a._title:a))?s:i,typeof s===p?s.call(o,{name:"_title",hash:{},data:r}):s))+"</h3>\r\n                <img src="+t((s=null!=(s=l._imageUrl||(null!=a?a._imageUrl:a))?s:i,typeof s===p?s.call(o,{name:"_imageUrl",hash:{},data:r}):s))+'>\r\n\r\n                <div class="left">\r\n                    <p>\r\n                        <span class="manufacturer"></span>\r\n                        <span class="info-field">Manufacturer:</span>\r\n                        <span>'+t((s=null!=(s=l._make||(null!=a?a._make:a))?s:i,typeof s===p?s.call(o,{name:"_make",hash:{},data:r}):s))+'</span>\r\n                    </p>\r\n                    <p>\r\n                        <span class="fuel"></span>\r\n                        <span class="info-field">Fuel:</span>\r\n                        <span>'+t((s=null!=(s=l._fuel||(null!=a?a._fuel:a))?s:i,typeof s===p?s.call(o,{name:"_fuel",hash:{},data:r}):s))+'</span>\r\n                    </p>\r\n                    <p>\r\n                        <span class="gearbox"></span>\r\n                        <span class="info-field">Gearbox:</span>\r\n                        <span>'+t((s=null!=(s=l._gearbox||(null!=a?a._gearbox:a))?s:i,typeof s===p?s.call(o,{name:"_gearbox",hash:{},data:r}):s))+'</span>\r\n                    </p>\r\n                    <p>\r\n                        <span class="manufactureDate"></span>\r\n                        <span class="info-field">Manufacture Date:</span>\r\n                        <span>'+t((s=null!=(s=l._manufactureDate||(null!=a?a._manufactureDate:a))?s:i,typeof s===p?s.call(o,{name:"_manufactureDate",hash:{},data:r}):s))+'</span>\r\n                    </p>\r\n                </div>\r\n                <div class="right">\r\n                    <p>\r\n                        <span class="mileage"></span>\r\n                        <span class="info-field">Mileage:</span>\r\n                        <span>'+t((s=null!=(s=l._mileage||(null!=a?a._mileage:a))?s:i,typeof s===p?s.call(o,{name:"_mileage",hash:{},data:r}):s))+'\r\n                    </p>\r\n                    <p>\r\n                        <span class="model"></span>\r\n                        <span class="info-field">Model:</span>\r\n                        <span>'+t((s=null!=(s=l._model||(null!=a?a._model:a))?s:i,typeof s===p?s.call(o,{name:"_model",hash:{},data:r}):s))+'</span>\r\n                    </p>\r\n                    <p>\r\n                        <span class="power"></span>\r\n                        <span class="info-field">Power:</span>\r\n                        <span>'+t((s=null!=(s=l._power||(null!=a?a._power:a))?s:i,typeof s===p?s.call(o,{name:"_power",hash:{},data:r}):s))+'</span>\r\n                    </p>\r\n                    <p>\r\n                        <span class="price"></span>\r\n                        <span class="info-field">Price:</span>\r\n                        <span>'+t((s=null!=(s=l._price||(null!=a?a._price:a))?s:i,typeof s===p?s.call(o,{name:"_price",hash:{},data:r}):s))+"</span>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n"},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,r){var s;return'<h3 class="page-title">The most recent ads</h3>\r\n<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\r\n    <div class="content">\r\n\r\n'+(null!=(s=l.each.call(null!=a?a:n.nullContext||{},a,{name:"each",hash:{},fn:n.program(1,r,0),inverse:n.noop,data:r}))?s:"")+"\r\n    </div>\r\n</div>"},useData:!0}),a.myAds=n({1:function(n,a,l,e,r){var s;return'<div class="row">\r\n    <div class="container-fluid col-lg-12 col-md-12 col-sm-12">\r\n'+(null!=(s=l.each.call(null!=a?a:n.nullContext||{},a,{name:"each",hash:{},fn:n.program(2,r,0),inverse:n.noop,data:r}))?s:"")+"    </div>\r\n</div>\r\n"},2:function(n,a,l,e,r){var s,t=n.escapeExpression,o=null!=a?a:n.nullContext||{},i=l.helperMissing,p="function";return'            <div class="ad thumbnail" data-href="'+t(n.lambda(null!=a?a._id:a,a))+'">\r\n                <div class="controls">\r\n                    <span class="delete"></span>\r\n                    <span class="edit"></span>\r\n                </div>\r\n                <h3 class="text-center">'+t((s=null!=(s=l._title||(null!=a?a._title:a))?s:i,typeof s===p?s.call(o,{name:"_title",hash:{},data:r}):s))+"</h3>\r\n                <img src="+t((s=null!=(s=l._imageUrl||(null!=a?a._imageUrl:a))?s:i,typeof s===p?s.call(o,{name:"_imageUrl",hash:{},data:r}):s))+'>\r\n\r\n                <div class="left">\r\n                    <p>\r\n                        <span class="manufacturer"></span>\r\n                        <span class="info-field">Manufacturer:</span>\r\n                        <span>'+t((s=null!=(s=l._make||(null!=a?a._make:a))?s:i,typeof s===p?s.call(o,{name:"_make",hash:{},data:r}):s))+'</span>\r\n                    </p>\r\n                    <p>\r\n                        <span class="fuel"></span>\r\n                        <span class="info-field">Fuel:</span>\r\n                        <span>'+t((s=null!=(s=l._fuel||(null!=a?a._fuel:a))?s:i,typeof s===p?s.call(o,{name:"_fuel",hash:{},data:r}):s))+'</span>\r\n                    </p>\r\n                    <p>\r\n                        <span class="gearbox"></span>\r\n                        <span class="info-field">Gearbox:</span>\r\n                        <span>'+t((s=null!=(s=l._gearbox||(null!=a?a._gearbox:a))?s:i,typeof s===p?s.call(o,{name:"_gearbox",hash:{},data:r}):s))+'</span>\r\n                    </p>\r\n                    <p>\r\n                        <span class="manufactureDate"></span>\r\n                        <span class="info-field">Manufacture Date:</span>\r\n                        <span>'+t((s=null!=(s=l._manufactureDate||(null!=a?a._manufactureDate:a))?s:i,typeof s===p?s.call(o,{name:"_manufactureDate",hash:{},data:r}):s))+'</span>\r\n                    </p>\r\n                </div>\r\n                <div class="right">\r\n                    <p>\r\n                        <span class="mileage"></span>\r\n                        <span class="info-field">Mileage:</span>\r\n                        <span>'+t((s=null!=(s=l._mileage||(null!=a?a._mileage:a))?s:i,typeof s===p?s.call(o,{name:"_mileage",hash:{},data:r}):s))+'</span>\r\n                    </p>\r\n                    <p>\r\n                        <span class="model"></span>\r\n                        <span class="info-field">Model:</span>\r\n                        <span>'+t((s=null!=(s=l._model||(null!=a?a._model:a))?s:i,typeof s===p?s.call(o,{name:"_model",hash:{},data:r}):s))+'</span>\r\n                    </p>\r\n                    <p>\r\n                        <span class="power"></span>\r\n                        <span class="info-field">Power:</span>\r\n                        <span>'+t((s=null!=(s=l._power||(null!=a?a._power:a))?s:i,typeof s===p?s.call(o,{name:"_power",hash:{},data:r}):s))+'</span>\r\n                    </p>\r\n                    <p>\r\n                        <span class="price"></span>\r\n                        <span class="info-field">Price:</span>\r\n                        <span>'+t((s=null!=(s=l._price||(null!=a?a._price:a))?s:i,typeof s===p?s.call(o,{name:"_price",hash:{},data:r}):s))+"</span>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n"},4:function(n,a,l,e,r){return'    <div class="container container-table">\r\n        <div class="row vertical-center-row">\r\n            <div class="text-center col-md-4 col-md-offset-4">\r\n                <h3>\r\n                    <p>You still don\'t have any ads.</p>\r\n                    <p>It\'s time to change that!</p>\r\n                </h3>\r\n            </div>\r\n        </div>\r\n    </div>\r\n'},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,r){var s;return'<h2 class="text-left page-title">My Ads</h2>\r\n'+(null!=(s=l.if.call(null!=a?a:n.nullContext||{},a,{name:"if",hash:{},fn:n.program(1,r,0),inverse:n.program(4,r,0),data:r}))?s:"")+"\r\n"},useData:!0}),a.profile=n({compiler:[7,">= 4.0.0"],main:function(n,a,l,e,r){var s;return'<h2 class="text-center page-title">Profile Page</h2>\r\n<div class="profile">\r\n\t<h3 class="text-center">'+n.escapeExpression((s=null!=(s=l.username||(null!=a?a.username:a))?s:l.helperMissing,"function"==typeof s?s.call(null!=a?a:n.nullContext||{},{name:"username",hash:{},data:r}):s))+"</h3>\r\n</div>"},useData:!0}),a.viewAd=n({compiler:[7,">= 4.0.0"],main:function(n,a,l,e,r){var s,t=null!=a?a:n.nullContext||{},o=l.helperMissing,i="function",p=n.escapeExpression;return'<div class="row">\r\n    <div class="ad">\r\n        <h3 class="text-center">'+p((s=null!=(s=l._title||(null!=a?a._title:a))?s:o,typeof s===i?s.call(t,{name:"_title",hash:{},data:r}):s))+'</h3>\r\n        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">\r\n            <img src='+p((s=null!=(s=l._imageUrl||(null!=a?a._imageUrl:a))?s:o,typeof s===i?s.call(t,{name:"_imageUrl",hash:{},data:r}):s))+'>\r\n        </div>\r\n\r\n        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">\r\n        <p>\r\n            <span class="manufacturer"></span>\r\n            <span class="info-field">Manufacturer:</span>\r\n            <span>'+p((s=null!=(s=l._make||(null!=a?a._make:a))?s:o,typeof s===i?s.call(t,{name:"_make",hash:{},data:r}):s))+'</span>\r\n        </p>\r\n        <p>\r\n            <span class="fuel"></span>\r\n            <span class="info-field">Fuel:</span>\r\n            <span>'+p((s=null!=(s=l._fuel||(null!=a?a._fuel:a))?s:o,typeof s===i?s.call(t,{name:"_fuel",hash:{},data:r}):s))+'</span>\r\n        </p>\r\n        <p>\r\n            <span class="gearbox"></span>\r\n            <span class="info-field">Gearbox:</span>\r\n            <span>'+p((s=null!=(s=l._gearbox||(null!=a?a._gearbox:a))?s:o,typeof s===i?s.call(t,{name:"_gearbox",hash:{},data:r}):s))+'</span>\r\n        </p>\r\n        <p>\r\n            <span class="manufactureDate"></span>\r\n            <span class="info-field">Manufacture Date:</span>\r\n            <span>'+p((s=null!=(s=l._manufactureDate||(null!=a?a._manufactureDate:a))?s:o,typeof s===i?s.call(t,{name:"_manufactureDate",hash:{},data:r}):s))+'</span>\r\n        </p>\r\n        <p>\r\n            <span class="mileage"></span>\r\n            <span class="info-field">Mileage:</span>\r\n            <span>'+p((s=null!=(s=l._mileage||(null!=a?a._mileage:a))?s:o,typeof s===i?s.call(t,{name:"_mileage",hash:{},data:r}):s))+'\r\n        </p>\r\n        <p>\r\n            <span class="model"></span>\r\n            <span class="info-field">Model:</span>\r\n            <span>'+p((s=null!=(s=l._model||(null!=a?a._model:a))?s:o,typeof s===i?s.call(t,{name:"_model",hash:{},data:r}):s))+'</span>\r\n        </p>\r\n        <p>\r\n            <span class="power"></span>\r\n            <span class="info-field">Power:</span>\r\n            <span>'+p((s=null!=(s=l._power||(null!=a?a._power:a))?s:o,typeof s===i?s.call(t,{name:"_power",hash:{},data:r}):s))+'</span>\r\n        </p>\r\n        <p>\r\n            <span class="price"></span>\r\n            <span class="info-field">Price:</span>\r\n            <span>'+p((s=null!=(s=l._price||(null!=a?a._price:a))?s:o,typeof s===i?s.call(t,{name:"_price",hash:{},data:r}):s))+"</span>\r\n        </p>\r\n    </div>\r\n</div>"},useData:!0}),a.welcomeMessage=n({1:function(n,a,l,e,r){var s;return"        <p>Welcome, "+n.escapeExpression((s=null!=(s=l.username||(null!=a?a.username:a))?s:l.helperMissing,"function"==typeof s?s.call(null!=a?a:n.nullContext||{},{name:"username",hash:{},data:r}):s))+'!</p>\r\n        <a href="#/profile/:id" id="profile">My Profile</a> |\r\n        <a href="#/logout" id="logout-btn">Logout</a>\r\n        <div class="buttons text-left">\r\n            <button id="addNewAd-btn" class="btn btn-info">Create new ad</button>\r\n            <button id="showMyAds-btn" class="btn btn-info">Show my ads</button>\r\n        </div>\r\n'},3:function(n,a,l,e,r){return'        <p>Welcome, Guest!</p>\r\n        <a href="#/login/">Login</a> |\r\n        <a href="#/register/">Register</a>\r\n        <h4 class="text-center">Please log in or register to view the ads</h4>\r\n'},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,r){var s;return'<div class="welcome-message">\r\n\r\n    <div class="col-lg-1 text-left">\r\n        <div class="home">\r\n            <a href="#/home" class="h1">Home</a>\r\n        </div>\r\n    </div>\r\n\r\n'+(null!=(s=l.if.call(null!=a?a:n.nullContext||{},null!=a?a.username:a,{name:"if",hash:{},fn:n.program(1,r,0),inverse:n.program(3,r,0),data:r}))?s:"")+"</div>"},useData:!0})}();
