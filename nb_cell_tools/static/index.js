/**
 * Calysto Jupyter Notebooks Extensions
 *
 * Copyright (c) The Calysto Project
 * http://github.com/Calysto/notebook-extensions
 *
 * Released under the BSD Simplified License
 *
 **/

define(["require", "./jquery.dialogextend"], function (require, dialogextend) {

	function toggle_columns(evt, input_cell) {
		// Toggle code cells into two columns
		var cells = IPython.notebook.get_cells();
		var cell;

		if (input_cell == undefined) {
			cell = IPython.notebook.get_selected_cell();
		} else {
			cell = input_cell;
		}

		// only toggle columns/rows if code cell:
		if (cell.cell_type == "code") {
			// get the div cell:
			var div = cell.element;
			if (cell.metadata.format == "tab") {
				var toRemove = cell.element[0].getElementsByClassName("tabs");
				if (toRemove.length > 0) {
					var length = toRemove.length;
					for (var i = 0; i < length; i++) {
						toRemove[0].parentNode.removeChild(toRemove[0]);
					}
					cell.element[0].getElementsByClassName("input")[0].className = 'input';
					cell.element[0].getElementsByClassName("output_wrapper")[0].className = 'output_wrapper';
					cell.element[0].getElementsByClassName("input")[0].id = '';
					cell.element[0].getElementsByClassName("output_wrapper")[0].id = '';
					cell.metadata.format = "row";
				}
			}
			if (div.css("box-orient") == "vertical") {
				div.css("box-orient", "horizontal");
				div.css("flex-direction", "row");
				var input = div[0].getElementsByClassName("input")[0];
				input.style.width = "50%";
				var output = div[0].getElementsByClassName("output_wrapper")[0];
				output.style.width = "50%";
				cell.metadata.format = "column";
			} else {
				//default:
				div.css("box-orient", "vertical");
				div.css("flex-direction", "column");
				var input = div[0].getElementsByClassName("input")[0];
				input.style.width = "";
				var output = div[0].getElementsByClassName("output_wrapper")[0];
				output.style.width = "";
				cell.metadata.format = "row";
			}
		}
	}

	function toggle_tabs(evt, input_cell) {
		var style = document.getElementById("hangLeft");
		var pager = document.getElementById("pager");
		if(style){
			style.parentNode.removeChild(style);
			var playground = document.getElementById("playground");
			playground.parentNode.removeChild(playground);
		} else {
			// Push the notebook to the left:
			layout_left();
			var playground = document.createElement("div");
			playground.setAttribute("id", "playground");
			playground.innerHTML = '<iframe src="/proxy/8999/index_min.html#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.24774&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false"></iframe>';
			document.getElementsByTagName("body")[0].appendChild(playground);
			//http://jquery.10927.n7.nabble.com/resizing-iframe-inside-a-dialog-td124892.html#a124895
			//resize: function() { $('iframe').hide(); }, resizeStop: function() { $('iframe').show();
			//$('#example iframe').height($(this).height()-70)
			$("#playground").dialog({resizeStop: function() { $('#playground iframe').height("100%");  $('#playground iframe').width("100%");}});

			
		}
	}

	function checkForFormatting() {
		// Check to see if code cells have metadata formatting (two-column, tabs)
		// and toggle if they do.
		var cells = IPython.notebook.get_cells();
		for (var i = 0; i < cells.length; i++) {
			var cell = cells[i];
			if (cell.cell_type == "code") {
				if (cell.metadata.format == "tab") {
					toggle_tabs("temp", cell);
				} else if (cell.metadata.format == "column") {
					toggle_columns("temp", cell);
				}
			}
		}
	}

	var layout_left = function() {
		var style = document.createElement("style");
		style.setAttribute("id", "hangLeft");
		//style.innerHTML = "#notebook-container { width:50%; float:left !important;}; #playground { overflow: hidden;  position: relative; }; #playground iframe { border: 0; height: 100%; left: 0; position: absolute; top: 0; width: 100%; resize: both;overflow: auto; };";
		style.innerHTML = "#notebook-container { width:50%; float:left !important;}; #playground { overflow: hidden;  position: relative; }; #playground iframe { border: 0; height: 100%; left: 0; position: absolute; top: 0; width: 100%;  };";
		$(function() {
			$("#notebook-container").resizable({
				handles: 'e',
				//containment: '#container',
		
			});     
		});  
		document.getElementsByTagName("head")[0].appendChild(style);
	}

	var add_toolbar_buttons = function () {
		Jupyter.actions.register({
			'help': 'Enable left view.',
			'icon': 'fa-folder',
			'handler': toggle_tabs
		}, 'toggle_tabs', 'nb_cell_tools');

		Jupyter.actions.register({
			'help': 'Toggle two-column view on a code cell',
			'icon': 'fa-columns',
			'handler': toggle_columns
		}, 'toggle_columns', 'nb_cell_tools');

		IPython.toolbar.add_buttons_group([
			{
				'action': 'nb_cell_tools:toggle_tabs'
			},
			{
				'action': 'nb_cell_tools:toggle_columns'
			}
		], 'nb_cell_tools-buttons');
	};

	var load_ipython_extension = function () {

		// Allow resizing of notebook panel
		$([IPython.events]).on('kernel_ready.Kernel kernel_created.Session notebook_loaded.Notebook', function() {$( "#notebook-container" ).resizable({ghost: false});});
		
		$([IPython.events]).on('notebook_loaded.Notebook', function () {
			checkForFormatting();
		});

		// Put a button on the toolbar:
		if (!IPython.toolbar) {
			$([IPython.events]).on("app_initialized.NotebookApp", add_toolbar_buttons);
			return;
		} else {
			add_toolbar_buttons();
		}
	};

	return {
		load_ipython_extension: load_ipython_extension,
	};

});
