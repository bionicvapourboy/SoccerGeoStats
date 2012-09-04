if (!window.SGS) {
	
	window.SGS = {
			
		theme : 'ui-le-frog',
		
		providers : [
		             {html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='resources/images/gb.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Google Maps</span></div>", title: 'Google Maps', value: 'google' },
		             {html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='resources/images/gb.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Open Street Maps</span></div>", title: 'Open Street Maps', value: 'osm' },
		             {html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='resources/images/gb.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Bing</span></div>", title: 'Bing', value: 'bing' },
		            ],
			
		init : function() {
			
			$("#map_provider").jqxDropDownList({ 
				source: SGS.providers, 
				selectedIndex: 1, 
				width: '250px', 
				height: '25px', 
				theme: SGS.theme
			});
			
		}
			
	};
	
}