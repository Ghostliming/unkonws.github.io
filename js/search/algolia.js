$(function(){$("a.social-icon.search").on("click",function(){$("body").css("width","100%"),$("body").css("overflow","hidden"),$(".search-dialog").velocity("stop").velocity("transition.expandIn",{duration:300,complete:function(){$(".ais-search-box--input").focus()}}),$(".search-mask").velocity("stop").velocity("transition.fadeIn",{duration:300}),document.addEventListener("keydown",function i(e){"Escape"==e.code&&(a(),document.removeEventListener("keydown",i))})});var a=function(){$("body").css("overflow","auto"),$(".search-dialog").velocity("stop").velocity("transition.expandOut",{duration:300}),$(".search-mask").velocity("stop").velocity("transition.fadeOut",{duration:300})};$(".search-mask, .search-close-button").on("click",a);var i=GLOBAL_CONFIG.algolia;if(!(i.appId&&i.apiKey&&i.indexName))return console.error("Algolia setting is invalid!");var e=instantsearch({appId:i.appId,apiKey:i.apiKey,indexName:i.indexName,searchParameters:{hitsPerPage:i.hits.per_page||10},searchFunction:function(a){$("#algolia-search-input").find("input").val()&&a.search()}});e.addWidget(instantsearch.widgets.searchBox({container:"#algolia-search-input",reset:!1,magnifier:!1,placeholder:GLOBAL_CONFIG.algolia.languages.input_placeholder})),e.addWidget(instantsearch.widgets.hits({container:"#algolia-hits",templates:{item:function(a){return'<a href="'+(a.permalink?a.permalink:GLOBAL_CONFIG.root+a.path)+'" class="algolia-hit-item-link">'+a._highlightResult.title.value+"</a>"},empty:function(a){return'<div id="algolia-hits-empty">'+GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/,a.query)+"</div>"}},cssClasses:{item:"algolia-hit-item"}})),e.addWidget(instantsearch.widgets.stats({container:"#algolia-stats",templates:{body:function(a){return"<hr>"+GLOBAL_CONFIG.algolia.languages.hits_stats.replace(/\$\{hits}/,a.nbHits).replace(/\$\{time}/,a.processingTimeMS)+'<span class="algolia-logo pull-right">  <img src="'+GLOBAL_CONFIG.root+'img/algolia.svg" alt="Algolia" /></span>'}}})),e.addWidget(instantsearch.widgets.pagination({container:"#algolia-pagination",scrollTo:!1,showFirstLast:!1,labels:{first:'<i class="fa fa-angle-double-left"></i>',last:'<i class="fa fa-angle-double-right"></i>',previous:'<i class="fa fa-angle-left"></i>',next:'<i class="fa fa-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",active:"current",disabled:"disabled-item"}})),e.start()});