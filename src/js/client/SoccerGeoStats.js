if (!window.SGS) {
	
	window.SGS = {
			
		theme : 'ui-le-frog',
		
		providers : [
		             {html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='resources/images/gb.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Google Maps</span></div>", title: 'Google Maps', value: 'google' },
		             {html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='resources/images/gb.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Open Street Maps</span></div>", title: 'Open Street Maps', value: 'osm' },
		             {html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='resources/images/gb.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Bing</span></div>", title: 'Bing', value: 'bing' },
		            ],
		            
		championships : [
		    		     {html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='resources/images/it.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Italy</span></div>", title: 'Italy', value: 'it' }
		    		    ],
		    		    
		rounds : [
		          {html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='resources/images/it.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Round 1</span></div>", title: 'Round 1', value: '1' }
		    	 ],
		    	 
		matches : [
		           {html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='resources/images/it.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Please Select...</span></div>", title: 'Round 1', value: null },
		           {html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='resources/images/it.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Napoli - Fiorentina</span></div>", title: 'Napoli - Fiorentina', value: 'nap-fio' },
		           {html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='resources/images/it.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Lazio - Palermo</span></div>", title: 'Lazio - Palermo', value: 'laz-pal' },
		           {html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='resources/images/it.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Inter - Roma</span></div>", title: 'Inter - Roma', value: 'int-rom' },
		 		  ],
			
		init : function() {
			
			$("#map_provider").jqxDropDownList({ 
				source: SGS.providers, 
				selectedIndex: 1, 
				width: '250px', 
				height: '25px', 
				theme: SGS.theme
			});
			
			$("#list_championship").jqxDropDownList({ 
				source: SGS.championships, 
				selectedIndex: 0, 
				width: '250px', 
				height: '25px', 
				theme: SGS.theme
			});
			
			$("#list_round").jqxDropDownList({ 
				source: SGS.rounds, 
				selectedIndex: 0, 
				width: '250px', 
				height: '25px', 
				theme: SGS.theme
			});
			
			$("#list_match").jqxDropDownList({ 
				source: SGS.matches, 
				selectedIndex: 0, 
				width: '250px', 
				height: '25px', 
				theme: SGS.theme
			});
			
		}
			
	};
	
}