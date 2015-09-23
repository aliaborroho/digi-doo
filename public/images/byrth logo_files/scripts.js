/*-------------------------------------------
  *Filename:		scripts-v1.0.js
  *Description:		hipster logo generator js
  *Version:			1.0 (11-24-2014)
  *Website:			hipsterlogogenerator.com
  *Author:			Elijah Zapien (elijahzapien.com)
-------------------------------------------*/
$(document).ready(function () {

	//====================================
	//=====================browser support
	//====================================
	// canvas svg insert browser support checker
	/*function supportsToDataURL(){
		var c = document.createElement("canvas");
		var data = c.toDataURL("image/png");
		return (data.indexOf("data:image/png") == 0);
	}*/

	//safari alert
	/*if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		$("#unsupported-browser-alert").css("display", "block");
	}*/

	// get svg file data
	/*$.get('./js/test.svg', function (data) {

		// strip opening
		var output = data.replace('<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="900px" height="750px">', '');

		// strip ending
		var output = output.replace('</svg>', '');

		// test output
		console.log(output);

	}, 'text');*/

	/*$.get('test.svg', function (svg) {
		console.log(svg);
	}, 'text');*/

	//====================================
	//=============================loading
	//====================================
	function setLoading(target, effect) {
		$(target).append('\
			<div class="loading-frame"><div class="loading-frame-bg"></div><h3><span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span></h3></div>');
		if (effect === "fade") {
			$(".loading-frame").fadeIn(400);
		} else {
			$(".loading-frame").css("display", "block");
		}
	}

	function clearLoading() {
		$(".loading-frame").fadeOut(400, function () {
			$(this).remove();
		});
	}

	//====================================
	//============================HLG logo
	//====================================
	var fontLibrary = ["abrahamLincoln", "arvil", "bender", "blanch", "governor", "haymaker", "homestead", "lavanderia", "mensh", "ribbon", "sullivan", "wisdomScript", "chunkFive", "corki", "intro", "lobster", "RBNo2", "rex", "silverfake", "weston"];
	var hlgLogoFontSetRandNum = Math.floor(Math.random() * fontLibrary.length);
	$('#hlg-logo a').css('font-family', fontLibrary[hlgLogoFontSetRandNum]);

	//====================================
	//=================================nav
	//====================================
	$("nav div.bordered-text").on("click", function () {
		if (!$(this).hasClass("bordered-text-focus")) {
			var targetSection = $(this).attr("id").replace("nav-", "").replace("-btn", "");
			$('nav div.bordered-text').removeClass('bordered-text-focus');
			$(this).addClass('bordered-text-focus');
			$("#content-wrapper section").stop(true, true).fadeOut(400);
			$('#' + targetSection).delay(400).fadeIn(400);
		}
	});

	//====================================
	//==============================groups
	//====================================
	var graphicGroups = ["base", "swag", "text", "pizzazz"],
		lastGroupMarker = graphicGroups.length - 1,
		currentGroupCounter = 0,
		targetGroup = graphicGroups[currentGroupCounter];

	//====================================
	//====================graphics library
	//====================================
	var graphicsLibrary = [];

	//====================================
	//========================base library
	//====================================
	var baseLibrary,
		baseShape;

	function importBaseLibrary() {
		// init loading
		setLoading("#subgroup-options-frame", "fade");

		// request
		var xmlhttp = new XMLHttpRequest();
		var url = "libraries/base-shapes.txt";

		xmlhttp.onreadystatechange = function () {
			// success
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				// import base library
				baseLibrary = JSON.parse(xmlhttp.responseText);
				// push to graphics library
				for (i = 0; i < baseLibrary.length; i++) {
					graphicsLibrary.push(baseLibrary[i]);
				}
				// log success
				console.log("**Success** - base resources imported to graphics library.");
				// import subgroup options
				importSubgroupOptions();
				// clear loading
				clearLoading();
			}

			// error
			if (xmlhttp.readyState == 4 && xmlhttp.status == 404) {
				// alert user
				alert("**404 Error** - base shape resources not found.\n\nPlease report this issue to contact@hipsterlogogenerator.com if it continues after clearing your browser's cache and refreshing the page.");
				// log error
				console.log("**404 Error** - base resources not found.");
				// clear loading
				clearLoading();
			}

		}
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}

	//call import base library
	importBaseLibrary();

	//====================================
	//========================swag library
	//====================================
	var swagLibrary;

	function importSwagLibrary(baseShape) {
		// init loading
		setLoading("#subgroup-options-frame", "fade");

		// request
		var xmlhttp = new XMLHttpRequest();
		var url = "libraries/swag/" + baseShape + ".txt";

		// display base shape
		var displayBaseShape = baseShape.replace(/-/g, " ");

		xmlhttp.onreadystatechange = function () {
			// success
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				// import target library
				swagLibrary = JSON.parse(xmlhttp.responseText);
				// push to graphics library
				for (i = 0; i < swagLibrary.length; i++) {
					graphicsLibrary.push(swagLibrary[i]);
				}
				// log success
				console.log("**Success** - " + displayBaseShape + " swag resources imported to graphics library.");
				// import subgroup options
				importSubgroupOptions();
				// clear loading
				clearLoading();
			}

			// error
			if (xmlhttp.readyState == 4 && xmlhttp.status == 404) {
				// alert user
				alert("**404 Error** - " + displayBaseShape + " swag resources not found.\n\nPlease report this issue to contact@hipsterlogogenerator.com if it continues after clearing your browser's cache and refreshing the page.");
				// log error
				console.log("**404 Error** - " + displayBaseShape + " swag resources not found");
				// clear loading
				clearLoading();
			}

		}
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}

	//====================================
	//========================text library
	//====================================
	var textLibrary;

	function importTextLibrary(baseShape) {
		// init loading
		setLoading("#subgroup-options-frame", "fade");

		// request
		var xmlhttp = new XMLHttpRequest();
		var url = "libraries/text/" + baseShape + ".txt";

		// display base shape
		var displayBaseShape = baseShape.replace(/-/g, " ");

		xmlhttp.onreadystatechange = function () {
			// success
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				// import target library
				textLibrary = JSON.parse(xmlhttp.responseText);
				// push to graphics library
				for (i = 0; i < textLibrary.length; i++) {
					graphicsLibrary.push(textLibrary[i]);
				}
				// log success
				console.log("**Success** - " + displayBaseShape + " text resources imported to graphics library.");
				// import logo-graphic fonts
				importFontLibrary();
				// import subgroup options
				importSubgroupOptions();
				// clear loading
				clearLoading();
			}

			// error
			if (xmlhttp.readyState == 4 && xmlhttp.status == 404) {
				// alert user
				alert("**404 Error** - " + displayBaseShape + " text resources not found.\n\nPlease report this issue to contact@hipsterlogogenerator.com if it continues after clearing your browser's cache and refreshing the page.");
				// log error
				console.log("**404 Error** - " + displayBaseShape + " text resources not found");
				// clear loading
				clearLoading();
			}

		}
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}

	//====================================
	//========================font library
	//====================================
	var fontLibrary;

	function importFontLibrary() {
		// request
		var xmlhttp = new XMLHttpRequest();
		var url = "libraries/fonts.txt";

		xmlhttp.onreadystatechange = function () {
			// success
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				// import font library
				fontLibrary = JSON.parse(xmlhttp.responseText);
				// log success
				console.log("**Success** - font resources imported successfully.");
			}

			// error
			if (xmlhttp.readyState == 4 && xmlhttp.status == 404) {
				// alert user
				alert("**404 Error** - font resources not found.\n\nPlease report this issue to contact@hipsterlogogenerator.com if it continues after clearing your browser's cache and refreshing the page.");
				// log error
				console.log("**404 Error** - font resources not found");
			}

		}
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}

	//====================================
	//=====================pizzazz library
	//====================================
	var pizzazzLibrary;

	function importPizzazzLibrary() {
		// set loading
		setLoading("#subgroup-options-frame", "fade");

		// request
		var xmlhttp = new XMLHttpRequest();
		var url = "libraries/pizzazz.txt";

		xmlhttp.onreadystatechange = function () {
			// success
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				// import pizzazz library
				pizzazzLibrary = JSON.parse(xmlhttp.responseText);
				// push to graphics library
				for (i = 0; i < pizzazzLibrary.length; i++) {
					graphicsLibrary.push(pizzazzLibrary[i]);
				}
				// log success
				console.log("**Success** - pizzazz resources imported to graphics library.");
				// import subgroup options
				importSubgroupOptions();
				// clear loading
				clearLoading();
			}

			// error
			if (xmlhttp.readyState == 4 && xmlhttp.status == 404) {
				// alert user
				alert("**404 Error** - pizzazz resources not found.\n\nPlease report this issue to contact@hipsterlogogenerator.com if it continues after clearing your browser's cache and refreshing the page.");
				// log error
				console.log("**404 Error** - pizzazz resources not found");
				// clear loading
				clearLoading();
			}

		}
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}

	//====================================
	//================================next
	//====================================
        var updateAlertVisible = true;
	$("#next-btn").on("click", function () {
		//base shape
		if (!baseShape) {
			alert("Please select a base shape to begin");
			return;
		}

                if (updateAlertVisible === true){
                   updateAlertVisible = false;
                   $("#update-alert").fadeOut(400);
                }

		//set next
		if (currentGroupCounter < lastGroupMarker) {
			currentGroupCounter++;
			targetGroup = graphicGroups[currentGroupCounter];
			updateGroupfocus(targetGroup);
			groupSelectionReset();
		}

		//swag
		if (targetGroup === "swag") {
			importSwagLibrary(baseShape);
		}

		//text
		if (targetGroup === "text") {
			importTextLibrary(baseShape);
		}

		//pizzazz
		if (targetGroup === "pizzazz") {
			importPizzazzLibrary();
		}

		//last
		if (currentGroupCounter === lastGroupMarker) {
			//enable generate btn
			$(this).fadeOut(400, function () {
				$(this).attr("id", "subgroup-options-generate-btn").html("Generate Logo").fadeIn(400);
				$(this).off("click");
			});
		}
	});

	// direct group selection
	// in testing
	$("#group-options-frame").delegate(".bordered-text:not(#base-group-btn,#group-options-generate-btn)", "click", function () {
		//might remove feature because going back to swag after changing color adds default black graphic again.
		//could add script that auto adds selected logo graphic color.
		//would need to save current color to var for reference.
	});

	// update focused group
	function updateGroupfocus(targetGroup) {
		$("#group-options-frame .bordered-text").removeClass("bordered-text-focus");
		$("#group-options-frame #" + targetGroup + "-group-btn").addClass("bordered-text-focus");
	}

	// fade out graphics options frame and re-align body
	function groupSelectionReset() {
		if ($("#graphic-options-frame").css("display") === "block") {
			$("#graphic-options-frame").fadeOut(400, function () {
				$("#content-wrapper").css('width', '1125px');
			});
			$("body,html").animate({
				scrollLeft: 0
			}, 400);
		}
	}

	//====================================
	//===============================group
	//====================================
	//import subgroup options for target group
	function importSubgroupOptions() {
		var targetSubgroups = [],
			btnSvg,
			btnSvg64;

		//direct import if empty, fade effect if content is currently inside
		if ($("#subgroup-options-frame #subgroup-options").html() === "") {
			appendSubgroupOptions();
		} else {
			$("#subgroup-options-frame #subgroup-options").fadeOut(400, function () {
				$(this).empty();
				appendSubgroupOptions();
				$(this).fadeIn(400);
			});
		}

		//append subgroup options
		function appendSubgroupOptions() {
			//append subgroup options for target group
			for (i = 0; i < graphicsLibrary.length; i++) {
				if (graphicsLibrary[i].group === targetGroup && targetSubgroups.indexOf(graphicsLibrary[i].subgroup) === -1) {
					//add first appearance to target subgroups list (only first needs to be appended)
					targetSubgroups[targetSubgroups.length] = graphicsLibrary[i].subgroup;

					//svg background - subgroup option btn
					if (graphicsLibrary[i].subgroupBtnSvg) {
						btnSvg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 100 100">' + graphicsLibrary[i].subgroupBtnSvg + '</svg>';
						btnSvg64 = window.btoa(btnSvg);
						$("#subgroup-options-frame #subgroup-options").append('<div id="' + graphicsLibrary[i].subgroup + '-subgroup-btn" class="btn"></div>');
						$("#" + graphicsLibrary[i].subgroup + "-subgroup-btn").css("background-image", "url('data:image/svg+xml;base64," + btnSvg64 + "')");
					}

					//text - subgroup option btn
					if (graphicsLibrary[i].subgroupBtnText) {
						$("#subgroup-options-frame #subgroup-options").append('<div id="' + graphicsLibrary[i].subgroup + '-subgroup-btn" class="btn"><span>' + graphicsLibrary[i].subgroupBtnText + '</span></div>');
					}
				}
			}
		}
	}

	//====================================
	//===========================subgroups
	//====================================
	var targetSubgroup;

	//import graphic options for targeted subgroup
	function graphicOptionsImport(targetSubgroup) {
		var btnSvg,
			btnSvg64;

		//hide all special graphic options
		$(".special-graphic-option").css("display", "none");

		//empty graphic-options
		$("#graphic-options-frame #graphic-options").empty();

		//color
		if (targetSubgroup.indexOf('color') > -1) {
			$("#" + targetSubgroup + "-selector").css("display", "block");
			//clear loading
			clearLoading();
			return;
		}

		//bg-image
		if (targetSubgroup === "bg-image") {
			for (i = 0; i < graphicsLibrary.length; i++) {
				if (graphicsLibrary[i].group === targetGroup && graphicsLibrary[i].subgroup === targetSubgroup) {
					if (graphicsLibrary[i].graphicBtnText) {
						//text - graphic option btn (none btn)
						$("#graphic-options-frame #graphic-options").append(
							'<div id="' + graphicsLibrary[i].id + '-graphic-btn" class="btn"><span>' + graphicsLibrary[i].graphicBtnText + '</span></div>');
					} else {
						//image background - graphic option btn
						$("#graphic-options-frame #graphic-options").append(
							'<div id="' + graphicsLibrary[i].id + '-graphic-btn" class="btn btn-image-bg"></div>');
						//set bg for imported graphic option btn
						$("#" + graphicsLibrary[i].id + "-graphic-btn").css("background-image", "url('" + graphicsLibrary[i].graphicSvg + "')");
					}
				}

				//highlight btn if it is currently on display in logo-graphic
				if ($("#logo-graphic-frame #logo-graphic #pizzazz image").attr("id") === (graphicsLibrary[i].id + "-svg")) {
					$("#" + graphicsLibrary[i].id + "-graphic-btn").addClass("btn-focus");
				}
			}

			//highlight "none" btn if logo-graphic currently has no bg image
			if ($("#logo-graphic-frame #logo-graphic #pizzazz image").attr("xlink:href") === "") {
				$("#bg-image-none-graphic-btn").addClass("btn-focus");
			}

			//clear loading
			clearLoading();

			return;
		}

		//filter
		if (targetSubgroup === "filter") {
			//reference bg-image data currently in logo-graphic
			var logoGraphicBgImageData = $("#logo-graphic-frame #logo-graphic #pizzazz image").attr("xlink:href");

			for (i = 0; i < graphicsLibrary.length; i++) {
				if (graphicsLibrary[i].group === targetGroup && graphicsLibrary[i].subgroup === targetSubgroup) {

					//append graphic option btn with btn text
					$("#graphic-options-frame #graphic-options").append(
						'<div id="' + graphicsLibrary[i].id + '-graphic-btn" class="btn"><span>' + graphicsLibrary[i].graphicBtnText + '</span></div>');

					//if a background image is currently on display in logo-graphic
					if (logoGraphicBgImageData != "") {
						if (graphicsLibrary[i].filterId === "none") {
							btnSvg =
								'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="90px" height="75px" viewBox="0 0 600 500">\
									<image x="0" y="0" width="100%" height="100%" xlink:href="' + logoGraphicBgImageData + '"/>\
								</svg>';
						} else {
							btnSvg =
								'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="90px" height="75px" viewBox="0 0 600 500">\
									<defs>\
										<filter id="btn-filter-' + graphicsLibrary[i].filterId + '">\
											' + graphicsLibrary[i].filterDef + '\
										</filter>\
									</defs>\
									<image x="0" y="0" width="100%" height="100%" filter="url(#btn-filter-' + graphicsLibrary[i].filterId + ')" xlink:href="' + logoGraphicBgImageData + '"/>\
								</svg>';
						}

						//append logo-graphic bg image to btn, and special hover/focus div (to fix box-shadow issue)
						$("#" + graphicsLibrary[i].id + "-graphic-btn").addClass("btn-svg").append(btnSvg).append('<div class="btn-svg-inner-shadow"></div>');
					}

					//highlight btn if target filter is currently on display in logo-graphic
					if ($("#logo-graphic-frame #logo-graphic #pizzazz image").attr("filter") === "url(#" + graphicsLibrary[i].filterId + ")") {
						$("#" + graphicsLibrary[i].id + "-graphic-btn").addClass("btn-focus");
					}
				}
			}

			//highlight none if no filter is currently on display in logo-graphic
			if (!$("#logo-graphic-frame #logo-graphic #pizzazz image").attr("filter")) {
				$("#filter-none-graphic-btn").addClass("btn-focus");
			}

			//clear loading
			clearLoading();

			return;
		}

		//default subgroup handler
		for (i = 0; i < graphicsLibrary.length; i++) {
			if (graphicsLibrary[i].group === targetGroup && graphicsLibrary[i].subgroup === targetSubgroup) {
				//svg background - graphic option btn
				if (graphicsLibrary[i].graphicBtnSvg) {
					//get btn graphic
					btnSvg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 100 100">' + graphicsLibrary[i].graphicBtnSvg + '</svg>';
					btnSvg64 = window.btoa(btnSvg);
					//append graphic option btn
					$("#graphic-options-frame #graphic-options").append(
						'<div id="' + graphicsLibrary[i].id + '-graphic-btn" class="btn"></div>');
					//set bg for imported graphic option btn
					$("#" + graphicsLibrary[i].id + "-graphic-btn").css("background-image", "url('data:image/svg+xml;base64," + btnSvg64 + "')");
				}

				//text - graphic option btn
				if (graphicsLibrary[i].graphicBtnText) {
					//append graphic option btn with text only
					$("#graphic-options-frame #graphic-options").append('<div id="' + graphicsLibrary[i].id + '-graphic-btn" class="btn"><span>' + graphicsLibrary[i].graphicBtnText + '</span></div>');
				}

				//highlight btn if it is currently on display in logo-graphic
				if ($("#logo-graphic-frame #logo-graphic #" + graphicsLibrary[i].id + "-svg").length) {
					$("#" + graphicsLibrary[i].id + "-graphic-btn").addClass("btn-focus");
				}
			}
		}

		//clear loading
		clearLoading();
	}

	//handles subgroup option selections
	$("#subgroup-options-frame #subgroup-options").delegate(".btn", "click", function () {
		//base handler
		if (targetGroup === "base") {
			var targetGraphicId = $(this).attr("id").replace("-subgroup-btn", ""),
				targetGraphicSvgId = targetGraphicId + "-svg",
				targetGraphicPos = graphicsLibrary.map(function (e) {
					return e.id;
				}).indexOf(targetGraphicId),
				targetSvgScript = graphicsLibrary[targetGraphicPos].svg,
				svgImport = '<g id="' + targetGraphicSvgId + '">' + targetSvgScript + '</g>';

			if ($("#" + targetGraphicSvgId).length === 0) {
				$(this).addClass("btn-focus");
				$(this).siblings(".btn").removeClass("btn-focus");
				$("#logo-graphic-frame #" + targetGroup).empty().append(svgImport);
				logoGraphicRefresh(targetGraphicSvgId);
				baseShape = targetGraphicId;
			}

			return;
		}

		//set loading
		setLoading("#graphic-options-frame", "fade");

		//get target subgroup
		targetSubgroup = $(this).attr("id").replace("-subgroup-btn", "");

		//highlight target subgroup
		$("#subgroup-options-frame #subgroup-options .btn").removeClass("btn-focus");
		$(this).addClass("btn-focus");

		//somehow combine with default functionality? a lot of same script is being used
		//move textGraphicOptionImport to outer function. call that if targetGroup === text? call graphicOptionsImport else?
		//text handler
		if (targetGroup === "text") {
			var targetTextId = $(this).attr("id").replace("-subgroup-btn", ""),
				targetGraphicSvgId = targetTextId + "-svg",
				targetTextInputId = targetTextId + "-input",
				targetGraphicPos = graphicsLibrary.map(function (e) {
					return e.id;
				}).indexOf(targetTextId),
				targetTextInput = graphicsLibrary[targetGraphicPos].graphicInput,
				targetSvgScript = graphicsLibrary[targetGraphicPos].graphicSvg;

			if (targetTextId === "text-clear-all") {
				$("#logo-graphic-frame #logo-graphic #text").empty();
				//reset window
				groupSelectionReset();
				//clear loading
				clearLoading();
				return;
			}

			function textGraphicsOptionImport() {
				//hide all special graphic options if on display
				$(".special-graphic-option").css("display", "none");

				//empty graphic-options
				$("#graphic-options-frame #graphic-options").empty();

				//text inputs===
				//place inputs
				$("#graphic-options-frame #graphic-options").append('Text<br />' + targetTextInput);

				//place svg text if not already
				if (!$("#" + targetGraphicSvgId).length) {
					$("#logo-graphic-frame #logo-graphic #text").append(targetSvgScript);
					logoGraphicRefresh(targetGraphicSvgId);
				}

				//place text options default font if not already
				var font = $("#" + targetGraphicSvgId).attr("font-family").replace(/'/g, "");
				if ($("#" + font + "-base64").length === 0) {
					var fontLibraryPos = fontLibrary.map(function (e) {
							return e.fontId;
						}).indexOf(font),
						targetFontBase64 = fontLibrary[fontLibraryPos].fontBase64;

					$("#logo-graphic-frame #logo-graphic defs").append('\
						<g id="' + font + '-base64">\
							<style type="text/css">\
								@font-face {\
									font-family: "' + font + '";\
									src: url(data:application/x-font-woff;charset=utf-8;base64,' + targetFontBase64 + ' format("woff");\
									font-weight: normal;\
									font-style: normal;\
								}\
							</style>\
						</g>');
				}

				//set text input values
				$("#graphic-options-frame #graphic-options input").each(function () {
					var targetTextId = $(this).attr("id").replace("-input", "") + "-svg",
						targetCurrentText = $("#logo-graphic-frame #logo-graphic #text #" + targetTextId).text();
					//insert value
					$(this).val(targetCurrentText);
				});

				//edit inputs===
				//place inputs
				//$("#graphic-options-frame #graphic-options").append('Press "enter" to apply:<br />');
				$("#graphic-options-frame #graphic-options").append('Font Size: <input id="text-font-size-input" type="text" maxlength="3" title="Press Enter to Apply">');
				$("#graphic-options-frame #graphic-options").append('X: <input id="text-x-coordinate-input" type="text" maxlength="3" title="Press Enter to Apply"> &nbsp;');
				$("#graphic-options-frame #graphic-options").append('Y: <input id="text-y-coordinate-input" type="text" maxlength="3" title="Press Enter to Apply">');
				//set text input values
				var fontSize = $("#logo-graphic-frame #logo-graphic #text #" + targetTextId + "-svg").attr("font-size"),
					fontCoordinates = $("#logo-graphic-frame #logo-graphic #text #" + targetTextId + "-svg").attr("transform").replace("translate(", "").replace(")", ""),
					fontXCoordinate = fontCoordinates.substring(0, fontCoordinates.indexOf(",")),
					fontYCoordinate = fontCoordinates.substring(fontCoordinates.indexOf(",") + 1, fontCoordinates.length);
				$("#graphic-options-frame #graphic-options input#text-font-size-input").val(fontSize);
				$("#graphic-options-frame #graphic-options input#text-x-coordinate-input").val(fontXCoordinate);
				$("#graphic-options-frame #graphic-options input#text-y-coordinate-input").val(fontYCoordinate);

				//font options===
				$("#graphic-options-frame #graphic-options").append('<div id="font-options"></div>');
				for (i = 0; i < fontLibrary.length; i++) {
					var fontId = fontLibrary[i].fontId,
						fontBtnText = fontLibrary[i].btnText;
					$("#graphic-options-frame #graphic-options #font-options").append('\
						<div id="' + fontId + '-graphic-btn" class="btn">\
							<span>' + fontBtnText + '</span>\
						</div>');
				}
				//set current font
				var textOptionsCurrentFont = $("#" + targetGraphicSvgId).attr("font-family").replace(/'/g, "");
				$("#" + textOptionsCurrentFont + "-graphic-btn").addClass("btn-focus");

				//single line black ribbon check
				//temp - need cleaner fix
				var swagIds = [];
				$("#logo-graphic-frame #logo-graphic #swag g:not(#logo-graphic-frame #logo-graphic #swag g g)").each(function () {
					var targetId = $(this).attr("id");
					if (targetId.indexOf("ribbon") > -1) {
						swagIds[swagIds.length] = $(this).attr("id");
					}
				});
				if (targetTextId.indexOf("single") > -1 && $("#logo-graphic-frame #logo-graphic #base g").attr("id").indexOf("outline") > -1 && swagIds.length > 0) {
					$("#" + targetGraphicSvgId).attr("fill", "#FFFFFF");
				}
			}

			//import graphic options for target subgroup
			if ($("#graphic-options-frame").css("display") === "none") {
				textGraphicsOptionImport();
				//resize window
				$("#content-wrapper").css('width', '1320px');
				var leftPos = $(document).outerWidth() - $(window).width();
				$("body,html").animate({
					scrollLeft: leftPos
				}, 400);
			} else {
				$("#graphic-options-frame").stop(true, true).fadeOut(400, function () {
					textGraphicsOptionImport();
				});
			}

			//bring in graphic options frame
			$("#graphic-options-frame").fadeIn(400);

			//clear loading
			clearLoading();

			return;
		}

		//default handler
		//import graphic options for target subgroup
		if ($("#graphic-options-frame").css("display") === "none") {
			//bring in graphic options frame
			$("#graphic-options-frame").fadeIn(400);
			//resize window
			$("#content-wrapper").css('width', '1320px');
			var leftPos = $(document).outerWidth() - $(window).width();
			$("body,html").animate({
				scrollLeft: leftPos
			}, 400);
			//import graphic options
			graphicOptionsImport(targetSubgroup);
		} else {
			graphicOptionsImport(targetSubgroup);
		}
	});

	//====================================
	//=====================graphic options
	//====================================
	//handles graphic option selections
	$("#graphic-options-frame #graphic-options").delegate(".btn", "click", function () {
		var targetId = $(this).attr("id").replace("-graphic-btn", ""),
			graphicsLibraryPos = graphicsLibrary.map(function (e) {
				return e.id;
			}).indexOf(targetId);

		if (graphicsLibraryPos != -1) {
			var targetGraphicSubgroup = graphicsLibrary[graphicsLibraryPos].subgroup,
				exportGraphicSvgId = targetId + "-svg";
		}

		//special group handlers
		if (targetGroup === "swag") {
			var targetGraphicSvg = graphicsLibrary[graphicsLibraryPos].graphicSvg,
				exportSvg = '<g id="' + exportGraphicSvgId + '">' + targetGraphicSvg + '</g>';

			if ($("#" + exportGraphicSvgId).length === 0) {
				//highlight selected btn
				$(this).addClass("btn-focus");
				//remove any graphics options with the same subgroup currently on display
				clearTargetSubgroupGraphics(targetGroup, targetGraphicSubgroup);
				//place graphic option
				//special handler for ribbons. ribbons need to always be on top of other swag.
				if (targetGraphicSubgroup === "ribbon") {
					//var targetGraphicClipping = graphicsLibrary[graphicsLibraryPos].graphicClipping;
					//("#logo-graphic-frame #logo-graphic defs").append(targetGraphicClipping);
					//$("#logo-graphic-frame #logo-graphic #base").attr("clip-path","url(#graphic-clipping)");
					//$("#logo-graphic-frame #logo-graphic #swag").attr("clip-path","url(#graphic-clipping)");
					$("#logo-graphic-frame #logo-graphic #" + targetGroup).append(exportSvg);
				} else {
					$("#logo-graphic-frame #logo-graphic #" + targetGroup).prepend(exportSvg);
				}
				//refresh logo graphic with newly placed element animation
				logoGraphicRefresh(exportGraphicSvgId);
			} else {
				$(this).removeClass("btn-focus");
				$("#" + exportGraphicSvgId).css("opacity", 0);
				setTimeout(function () {
					$("#" + exportGraphicSvgId).remove();
				}, 400);
			}

			return;
		}

		if (targetGroup === "text") {
			var fontLibraryPos = fontLibrary.map(function (e) {
					return e.fontId;
				}).indexOf(targetId),
				targetFontBase64 = fontLibrary[fontLibraryPos].fontBase64,
				targetFontBtnText = fontLibrary[fontLibraryPos].btnText;

			//highlight selected btn
			$(this).addClass("btn-focus");
			$(this).siblings(".btn").removeClass("btn-focus");

			if ($("#" + targetId + "-base64").length === 0) {
				$("#logo-graphic-frame #logo-graphic defs").append('\
					<g id="' + targetId + '-base64">\
						<style type="text/css">\
							@font-face {\
								font-family: "' + targetId + '";\
								src: url(data:application/x-font-woff;charset=utf-8;base64,' + targetFontBase64 + ' format("woff");\
								font-weight: normal;\
								font-style: normal;\
							}\
						</style>\
					</g>');
			}

			$("#" + targetSubgroup + "-svg").attr("font-family", "'" + targetId + "'");
			$("#" + targetSubgroup + "-svg").css("font-family", targetId);
		}

		if (targetGroup === "pizzazz") {
			//highlight selected btn
			$(this).addClass("btn-focus");
			$(this).siblings(".btn").removeClass("btn-focus");
			//special subgroup handlers
			if (targetGraphicSubgroup === "bg-image") {
				if (graphicsLibrary[graphicsLibraryPos].id === "bg-image-none") {
					//remove bg image from logo-graphic
					$("#logo-graphic-frame #logo-graphic #pizzazz image").fadeOut(400, function () {
						$("#logo-graphic-frame #logo-graphic #pizzazz image").removeAttr("id").attr("xlink:href", "").css("display", "block");
					});
				} else {
					//get bg image svg
					var targetGraphicSvg = graphicsLibrary[graphicsLibraryPos].graphicSvg;
					//if not currently placed in logo-graphic insert bg image. else remove
					if ($("#" + exportGraphicSvgId).length === 0) {
						//place image href
						$("#logo-graphic-frame #logo-graphic #pizzazz image").attr({
							"id": exportGraphicSvgId,
							"xlink:href": targetGraphicSvg
						});
						//refresh logo graphic with newly placed element animation
						logoGraphicRefresh(exportGraphicSvgId);
					} else {
						$(this).removeClass("btn-focus");
						$("#" + exportGraphicSvgId).fadeOut(400, function () {
							$(this).removeAttr("id").attr("xlink:href", "");
							$("#logo-graphic-frame #logo-graphic #pizzazz image").css("display", "block");
						});
					}
				}
				return;
			}
			if (targetGraphicSubgroup === "filter") {
				var filterId = graphicsLibrary[graphicsLibraryPos].filterId,
					filterDef = graphicsLibrary[graphicsLibraryPos].filterDef;
				//clear filters
				$("#logo-graphic-frame #logo-graphic defs filter").remove();
				if (filterId === "none") {
					$("#logo-graphic-frame #logo-graphic #pizzazz image").removeAttr("filter");
				} else {
					//append filter def
					$("#logo-graphic-frame #logo-graphic defs").append('<filter id="' + filterId + '">' + filterDef + '</filter>');
					//apply filter def to bg-image
					$("#logo-graphic-frame #logo-graphic #pizzazz image").attr("filter", "url(#" + filterId + ")");
					//refresh
					logoGraphicRefresh();
				}
				return;
			}

			return;
		}
	});

	//logo-graphic refresh, and element fade in effect if supplied
	function logoGraphicRefresh(newLogoGraphicElement) {
		$("#logo-graphic-frame").html($("#logo-graphic-frame").html());
		if (newLogoGraphicElement) {
			$("#" + newLogoGraphicElement).css({
				"display": "none",
				"-webkit-transition": "all 0",
				"transition": "all 0"
			});
			$("#" + newLogoGraphicElement).fadeIn(400, function () {
				$(this).removeAttr('style');
			});
			$("#logo-graphic-frame").html($("#logo-graphic-frame").html());
			if (newLogoGraphicElement) {
				$("#" + newLogoGraphicElement).css({
					"display": "none",
					"-webkit-transition": "all 0",
					"transition": "all 0"
				});
				$("#" + newLogoGraphicElement).fadeIn(400, function () {
					$(this).removeAttr('style');
				});
			}
		}
	};

	//clear a target subgroup's graphics function
	function clearTargetSubgroupGraphics(targetGroup, targetGraphicSubgroup) {
		for (i = 0; i < graphicsLibrary.length; i++) {
			if (graphicsLibrary[i].group === targetGroup && graphicsLibrary[i].subgroup === targetGraphicSubgroup) {
				if ($("#logo-graphic-frame #logo-graphic #" + targetGroup + " #" + graphicsLibrary[i].id + "-svg").length) {
					$("#logo-graphic-frame #logo-graphic #" + graphicsLibrary[i].id + "-svg").remove();
					$("#" + graphicsLibrary[i].id + "-graphic-btn").removeClass("btn-focus");
				}
			}
		}
	};

	//====================================
	//================================text
	//====================================
	$('#graphic-options-frame #graphic-options').on("keyup", "input", function () {
		var targetTextInput = String($(this).attr('id')),
			targetText = targetTextInput.replace("-input", ""),
			targetTextSvg = targetText + "-svg",
			userInput = $(this).val();
		//insert input
		//safari bug
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
			$('#logo-graphic-frame #logo-graphic #text #' + targetTextSvg).text(userInput);
		} else {
			$('#logo-graphic-frame #logo-graphic #text #' + targetTextSvg).html(userInput);
		}
	});

	$("#graphic-options-frame #graphic-options").on("change", "input#text-font-size-input", function () {
		var targetTextSvg = targetSubgroup + "-svg",
			userInput = $(this).val();
		$('#logo-graphic-frame #logo-graphic #text #' + targetTextSvg).attr("font-size", userInput);
	});
	$("#graphic-options-frame #graphic-options").on("change", "input#text-x-coordinate-input", function () {
		var targetTextSvg = targetSubgroup + "-svg",
			userInput = $(this).val(),
			targetTextTransformSettings = $('#logo-graphic-frame #logo-graphic #text #' + targetTextSvg).attr("transform"),
			targetTextYCoordinate = targetTextTransformSettings.substring(targetTextTransformSettings.indexOf(",") + 1, targetTextTransformSettings.length - 1),
			targetTextTransformNewSettings = "translate(" + userInput + "," + targetTextYCoordinate + ")";

		//set new transform settings
		$('#logo-graphic-frame #logo-graphic #text #' + targetTextSvg).attr("transform", targetTextTransformNewSettings);

	});
	$("#graphic-options-frame #graphic-options").on("change", "input#text-y-coordinate-input", function () {
		var targetTextSvg = targetSubgroup + "-svg",
			userInput = $(this).val(),
			targetTextTransformSettings = $('#logo-graphic-frame #logo-graphic #text #' + targetTextSvg).attr("transform"),
			targetTextXCoordinate = targetTextTransformSettings.substring(targetTextTransformSettings.indexOf("(") + 1, targetTextTransformSettings.indexOf(",")),
			targetTextTransformNewSettings = "translate(" + targetTextXCoordinate + "," + userInput + ")";

		//set new transform settings
		$('#logo-graphic-frame #logo-graphic #text #' + targetTextSvg).attr("transform", targetTextTransformNewSettings);
	});

	/*$("#graphic-options-frame #graphic-options").delegate(".decrease-btn","click",function(){
		fontSize(targetSubgroup,"subtract",2);
	});
	$("#graphic-options-frame #graphic-options").delegate(".increase-btn","click",function(){
		fontSize(targetSubgroup,"add",2);
	});

	function fontSize(element,symbol,increment){
		var currentFontSize = parseInt($("#" + targetSubgroup + "-svg").attr("font-size")),
			newFontSize = currentFontSize;
		if (symbol === "add"){
			newFontSize = newFontSize + increment;
		}
		if (symbol === "subtract"){
			newFontSize = newFontSize - increment;
		}
		$("#" + targetSubgroup + "-svg").attr("font-size",newFontSize);
	}

	function fontIntercepts(element,coordinate,symbol,increment){
		var currentFontSize = parseInt($("#" + targetSubgroup + "-svg").attr("font-size")),
			newFontSize = currentFontSize;
	}*/

	//====================================
	//===============================color
	//====================================
	//logo color
	var targetLogoColorGroup = "direct-element-color";

	$("#logo-color-select").spectrum({
		color: "#000000",
		flat: true,
		showPalette: true,
		showButtons: false,
		showSelectionPalette: true,
		clickoutFiresChange: true,
		//localStorageKey: "spectrum.palette",
		chooseText: "Save Color",
		move: function (color) {
			if (targetLogoColorGroup === "direct-element-color") {
				if (focusedSvgElement) {
					//text elements
					if (focusedSvgElement.indexOf('text') > -1) {
						$("#" + focusedSvgElement).attr("fill", color.toHexString());
						return;
					}
					//default
					$("#" + focusedSvgElement + " path, " +
						"#" + focusedSvgElement + " line, " +
						"#" + focusedSvgElement + " polyline, " +
						"#" + focusedSvgElement + " polygon, " +
						"#" + focusedSvgElement + " rect, " +
						"#" + focusedSvgElement + " circle").each(function () {
						var element = $(this);
						logoGraphicColorSet(element, color.toHexString());
					});
				}
			}
			if (targetLogoColorGroup === "base-color") {
				$("#logo-graphic-frame #logo-graphic #base path, #logo-graphic-frame #logo-graphic #base line, #logo-graphic-frame #logo-graphic #base polygon, #logo-graphic-frame #logo-graphic #base rect, #logo-graphic-frame #logo-graphic #base circle").each(function () {
					var element = $(this);
					logoGraphicColorSet(element, color.toHexString());
				});
			}
			if (targetLogoColorGroup === "swag-color") {
				$("#logo-graphic-frame #logo-graphic #swag path, #logo-graphic-frame #logo-graphic #swag line, #logo-graphic-frame #logo-graphic #swag polyline, #logo-graphic-frame #logo-graphic #swag polygon, #logo-graphic-frame #logo-graphic #swag rect, #logo-graphic-frame #logo-graphic #swag circle").each(function () {
					var element = $(this);
					logoGraphicColorSet(element, color.toHexString());
				});
			}
			if (targetLogoColorGroup === "text-color") {
				$("#logo-graphic-frame #logo-graphic #text text").attr("fill", color.toHexString());
			}
		},
		change: function (color) {
			$("#logo-color-select").spectrum("set", color.toHexString());
		}
	});

	$("#logo-color-selector .btn").on("click", function () {
		$("#logo-color-selector .btn").removeClass("btn-focus");
		$(this).addClass("btn-focus");
		targetLogoColorGroup = $(this).attr("id").replace("-selector-btn", "");
	});

	//bg color
	$("#bg-color-select").spectrum({
		color: "rgba(255,255,255,0.0)",
		flat: true,
		showPalette: true,
		showButtons: false,
		showSelectionPalette: true,
		clickoutFiresChange: true,
		showAlpha: true,
		maxSelectionSize: 3,
		//localStorageKey: "spectrum.palette",
		palette: [
			["rgba(255,255,255,0.0)", "rgba(255,255,255,1.0)", "rgba(0,0,0,1.0)"]
		],
		chooseText: "Save Color",
		move: function (color) {
			var spectrumBgColor = color.toHexString();
			var spectrumBgColorOpacity = color.toRgb();
			spectrumBgColorOpacity = spectrumBgColorOpacity.a;
			$("#logo-graphic-frame #logo-graphic #pizzazz rect").attr({
				"opacity": spectrumBgColorOpacity,
				"fill": spectrumBgColor
			});
		},
		change: function (color) {
			$("#bg-color-select").spectrum("set", color.toRgbString());
		}
	});

	function logoGraphicColorSet(element, color) {
		//grab current color
		var targetGraphicFillColor = element.attr("fill");
		var targetGraphicStrokeColor = element.attr("stroke");
		//only fill, only stroke, both fill and stroke present
		if (!targetGraphicStrokeColor || targetGraphicStrokeColor === "none") {
			element.attr("fill", color);
		} else if (!targetGraphicFillColor || targetGraphicFillColor === "none") {
			element.attr("stroke", color);
		} else if ((targetGraphicStrokeColor && targetGraphicStrokeColor != "none") && (targetGraphicFillColor && targetGraphicFillColor != "none")) {
			element.attr({
				"fill": color,
				"stroke": color
			});
		}
	}

	//====================================
	//=========direct element color change
	//====================================
	//select svg element
	var svgElementInFocus = false,
		directElementSubgroup = "logo-color",
		unfocusOpacity = 0.2,
		focusedSvgElement;

	//hover temporary focus
	$("#logo-graphic-frame").on("mouseenter", "#logo-graphic #base g, #logo-graphic #swag g, #logo-graphic #text g", function () {
		if (targetSubgroup === directElementSubgroup) {
			//focus element
			logoGraphicElementFocus($(this));
		}
	}).on("mouseleave", "#logo-graphic #base g, #logo-graphic #swag g, #logo-graphic #text g", function () {
		if (targetSubgroup === directElementSubgroup) {
			//reset focus
			logoGraphicElementUnFocus();
		}
	});

	//click set focus
	$("#logo-graphic-frame").delegate("#logo-graphic #base g, #logo-graphic #swag g, #logo-graphic #text g", "click", function () {
		if (targetSubgroup === directElementSubgroup) {
			//set element in focus marker
			if (!svgElementInFocus) {
				svgElementInFocus = true;
			}
			//focus element
			logoGraphicElementFocus($(this));
			//save focused element
			var targetSvgGroupId = $(this).attr("id");
			focusedSvgElement = targetSvgGroupId;
		}
	});

	//unfocus
	$("#subgroup-options-frame #subgroup-options").delegate(".btn", "click", function () {
		if (targetGroup === "pizzazz" && targetSubgroup != directElementSubgroup) {
			logoGraphicAllElementsUnFocus();
		}
	});
	$("#graphic-options-frame").delegate(".btn", "click", function () {
		if (targetGroup === "pizzazz" && $(this).attr("id") != "direct-element-color-selector-btn") {
			logoGraphicAllElementsUnFocus();
		}
	});
	$("#logo-graphic-frame").delegate("#logo-graphic #pizzazz", "click", function () {
		logoGraphicAllElementsUnFocus();
	});

	//functions
	function logoGraphicElementFocus(targetElement) {
		$("#logo-graphic-frame #logo-graphic #base g:not(#logo-graphic-frame #logo-graphic #base g g), #logo-graphic-frame #logo-graphic #swag g:not(#logo-graphic-frame #logo-graphic #swag g g), #logo-graphic-frame #logo-graphic #text g:not(#logo-graphic-frame #logo-graphic #text g g)").css("opacity", unfocusOpacity);
		//if base shape is solid do not drop its opacity
		if ($("#logo-graphic-frame #logo-graphic #base g").attr("id").indexOf("solid") > -1) {
			$("#logo-graphic-frame #logo-graphic #base g").css("opacity", 1.0);
		}
		$(targetElement).css("opacity", 1.0);
		$(targetElement).children("g").css("opacity", 1.0).removeAttr("style");
	}

	function logoGraphicElementUnFocus() {
		//focus reset
		if (!svgElementInFocus) {
			$("#logo-graphic-frame #logo-graphic #base g, #logo-graphic-frame #logo-graphic #swag g, #logo-graphic-frame #logo-graphic #text g").css("opacity", 1.0).removeAttr("style");
		}
		if (svgElementInFocus) {
			//reset all un-focused back to low opacity
			$("#logo-graphic-frame #logo-graphic #base g:not(#logo-graphic-frame #logo-graphic #base g g), #logo-graphic-frame #logo-graphic #swag g:not(#logo-graphic-frame #logo-graphic #swag g g), #logo-graphic-frame #logo-graphic #text g:not(#logo-graphic-frame #logo-graphic #text g g)").css("opacity", unfocusOpacity);
			//set focus
			if ($("#logo-graphic-frame #logo-graphic #base g").attr("id").indexOf("solid") > -1) {
				$("#logo-graphic-frame #logo-graphic #base g").css("opacity", 1.0);
			}
			$("#" + focusedSvgElement).css("opacity", 1.0).removeAttr("style");
		}
	}

	function logoGraphicAllElementsUnFocus() {
		if (svgElementInFocus) {
			svgElementInFocus = false;
			$("#logo-graphic-frame #logo-graphic #base g, #logo-graphic-frame #logo-graphic #swag g, #logo-graphic-frame #logo-graphic #text g").css("opacity", 1.0).removeAttr("style");
			focusedSvgElement = null;
		}
	}

	//====================================
	//==============================result
	//====================================
	var resultHeaderLibrary =
		[
			"That&acute;s some grade A swag.",
			"You are truly a swag master.",
			"Oh Snaps! That&acute;s hip yo.",
			"Oh no you didn&acute;t just drop that much swag.",
			"Boom...Swag..<br />..Boom.",
			"You crazy Hipster you.",
			"Good job! now let&acute;s get a pbr."
		],
		resultRatingLibrary = [3, 4, 5],
		resultHeaderRandNum = Math.floor(Math.random() * resultHeaderLibrary.length),
		resultRatingRandNum = Math.floor(Math.random() * resultRatingLibrary.length),
		resultHeader = resultHeaderLibrary[resultHeaderRandNum],
		resultRating = resultRatingLibrary[resultRatingRandNum];

	function setResult(header, rating) {
		//header
		$("#result-header").html(header);
		//hipstometer
		$('#hipstometer-frame h2 span').html(rating);
		for (i = 1; i <= rating; i++) {
			$("#hipstometer-bar-" + i).addClass("hipstometer-bar-highlight");
		}
	}

	//====================================
	//============================generate
	//====================================
	var svg,
		usedFonts;

	//generate logo function
	function generateLogo() {
		//grab timestamp of generation
		var timeStamp = new Date().getTime();

		//remove element focus if still active
		svgElementInFocus = false;
		focusedSvgElement = null;
		$("#logo-graphic-frame #logo-graphic #base g, #logo-graphic-frame #logo-graphic #swag g, #logo-graphic-frame #logo-graphic #text g").css("opacity", 1.0).removeAttr("style");

		//generate result rating
		setResult(resultHeader, resultRating);

		//set loading
		setLoading("#subgroup-options-frame", "fade");
		setLoading("#graphic-options-frame", "fade");

		//two fadeOut calls to fix multiple callbacks
		$("#graphic-options-frame, #subgroup-options-frame").fadeOut(400);
		$("#group-options-frame").fadeOut(400, function () {
			//generator section reset
			$("#group-options-frame, #subgroup-options-frame, #graphic-options-frame").remove();
			//resize to fit result text
			$("#content-wrapper").css('width', '1130px');
			$("#result-text").fadeIn(400);
		});

		//remove un-used fonts
		usedFonts = [];
		$("#logo-graphic-frame #logo-graphic #text g").each(function () {
			var targetFont = $(this).attr("font-family").replace(/'/g, "");
			if (usedFonts.indexOf(targetFont) === -1) {
				usedFonts[usedFonts.length] = targetFont;
			}
		});
		$("#logo-graphic-frame #logo-graphic defs g").each(function () {
			var targetId = $(this).attr("id");
			if (targetId.indexOf("base64") > -1) {
				targetId = targetId.replace("-base64", "");
				if (usedFonts.indexOf(targetId) === -1) {
					$(this).remove();
				}
			}
		});

		//remove un-used bg image filters
		var logoGraphicBgImageFilter = $("#logo-graphic-frame #logo-graphic #pizzazz image").attr("filter");
		var logoGraphicClipping = $("#logo-graphic-frame #logo-graphic defs #graphic-clipping").length;
		if ($("#logo-graphic-frame #logo-graphic defs").text() === "") {
			$("#logo-graphic-frame #logo-graphic defs").remove();
		}

		//remove un-used logo-graphic groups
		if ($("#bg-image-svg").attr("xlink:href") === "") {
			$("#bg-image-svg").remove();
		}
		if ($("#bg-color-svg").attr("fill") === "none" || $("#bg-color-svg").attr("fill") === "") {
			$("#bg-color-svg").remove();
		}
		if ($("#logo-graphic-frame #logo-graphic #pizzazz image").length === 0 && $("#logo-graphic-frame #logo-graphic #pizzazz rect").length === 0) {
			$("#pizzazz").remove();
		}
		if ($("#swag").html() === "") {
			$("#swag").remove();
		}
		if ($("#text").html() === "") {
			$("#text").remove();
		}

		//secure to save svg script to svg var?
		svg = $("#logo-graphic-frame").html();

		//png 600x500
		var logoGraphicImage = new Image();
		logoGraphicImage.src = "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent(svg)));
		//logoGraphicImage.src = "data:image/svg+xml;base64," + window.btoa(svg);

		logoGraphicImage.onload = function () {
			var logoGraphicCanvas = document.createElement('canvas');
			logoGraphicCanvas.width = logoGraphicImage.width;
			logoGraphicCanvas.height = logoGraphicImage.height;

			var context = logoGraphicCanvas.getContext('2d');
			context.drawImage(logoGraphicImage, 0, 0);

			//logoGraphicUrl created as global var for blog submission option
			logoGraphicUrl = logoGraphicCanvas.toDataURL('image/png');

			//convert to png
			var logoGraphicPng = new Image();
			logoGraphicPng.src = logoGraphicUrl;
			logoGraphicPng.onload = function () {
				//reset logo-graphic frame with generated logo png
				$("#logo-graphic-frame").empty().append(logoGraphicPng);
			}

			//add submit to blog btn
			$("#result-links").prepend('<a id="submit-to-blog-btn" href="#submit-to-blog">Submit to HLG blog</a>');

			//add agree to terms checkbox
			$("#result-links").prepend('<div id="agree-with-terms-checkbox-frame"><input id="accept-terms-checkbox" name="accept-terms-checkbox" type="checkbox" value="" checked> I agree with the <span>terms of service</span></div>');

			//add purchase svg btn
			$("#result-links").prepend('<div id="svg-purchase-btn">Download - SVG (2400 x 2000) $5.00</div>');

			//add purchase png btn
			$("#result-links").prepend('<div id="png-purchase-btn">Download - PNG (2400 x 2000) $5.00</div>');

			//add free download png btn
			$("#result-links").prepend('<a id="png-download-btn" class="download-btn" href="#download-png" target="_blank" download="hipsterlogogenerator_logo.png">Download - PNG (600 x 500) Free</a>');

			//set png download btn
			$("#png-download-btn").attr({
				"download": "hipsterlogogenerator_" + timeStamp + ".png",
				"href": logoGraphicUrl
			});
		}
	}

	$("#subgroup-options-frame").delegate("#subgroup-options-generate-btn", "click", function () {
		if (!swagLibrary) {
			alert("Nice. Keeping it minimal.\nI like your style, but there's nothing to generate.");
		}
		if (swagLibrary && currentGroupCounter === lastGroupMarker && $(this).length) {
			generateLogo();
		} else {
			alert("Sorry, can't generate yet.");
		}
	});

	//====================================
	//==============purchase random string
	//====================================
	//db id random string function
	function randomString(length, chars) {
		var result = '';
		for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
		return result;
	}

	//====================================
	//========================purchase svg
	//====================================
	var svgData,
		dbId;

	$("#result-links").delegate("#svg-purchase-btn", "click", function () {
		if ($("#accept-terms-checkbox").is(":checked")) {
			//set loading
			setLoading("#result-text", "fade");
			//store svgData
			if (!svgData) {
				svgData = svg.replace('<svg version="1.1" id="logo-graphic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="600px" height="500px" viewBox="0 0 900 750">', '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="logo-graphic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2400px" height="2000px" viewBox="0 0 900 750" xml:space="preserve">');
				svgData = svgData.replace(/\n/g, ' ').replace(/\s+/g, ' ').replace(' <?xml', '<?xml');
				svgData = "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent(svgData)));
				//svgData = "data:image/svg+xml;base64," + window.btoa(svgData);
			}
			//create unique DB Id
			dbId = randomString(35, '01234567890123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
			//run purchase request
			$.ajax({
				type: "POST",
				url: "php/submit-to-purchases.php",
				data: {
					imgBase64: svgData,
					dbId: dbId
				},
				success: function (text) {
					if (text === "New Unconfirmed Record Created Successfully") {
						top.dg.startFlow('php/external/checkout.php?dbId=' + dbId);
						console.log("**Success** - New unconfirmed entry created");
					} else {
						console.log("**Success With Error** - No new unconfirmed entry created: " + text);
						alert("Error Initializing Purchase. Please Try Again.");
					}
					//clear loading
					clearLoading();
				},
				error: function (text) {
					//close dg flow
					if (top.dg.isOpen() == true) {
						top.dg.closeFlow();
					}
					//alert user of error
					alert("An error occured while trying to initialize payment. Please try again.");
					//record error in console
					console.log("**Error** - No new unconfirmed entry created: " + text);
					//clear loading
					clearLoading();
				}
			})
		} else {
			alert("You must agree with the terms of service to download or purchase.");
		}
	});

	//====================================
	//========================purchase png
	//====================================
	var pngData,
		pngDataUrl,
		pngLogoGraphicUrl,
		pngDbId;

	$("#result-links").delegate("#png-purchase-btn", "click", function () {
		if ($("#accept-terms-checkbox").is(":checked")) {
			//set loading
			setLoading("#result-text", "fade");
			//store pngData
			if (!pngData) {
				pngData = svg.replace('<svg version="1.1" id="logo-graphic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="600px" height="500px" viewBox="0 0 900 750">', '<svg version="1.1" id="logo-graphic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2400px" height="2000px" viewBox="0 0 900 750">');
				pngData = pngData.replace(/\n/g, ' ').replace(/\s+/g, ' ').replace(' <?xml', '<?xml');
				pngDataUrl = "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent(pngData)));
			}
			//png 2400x2000
			var logoGraphicImage = new Image();
			logoGraphicImage.src = pngDataUrl;
			logoGraphicImage.onload = function () {
				var logoGraphicCanvas = document.createElement('canvas');
				logoGraphicCanvas.width = logoGraphicImage.width;
				logoGraphicCanvas.height = logoGraphicImage.height;

				var context = logoGraphicCanvas.getContext('2d');
				context.drawImage(logoGraphicImage, 0, 0);

				pngLogoGraphicUrl = logoGraphicCanvas.toDataURL('image/png');

				//convert to png
				var logoGraphicPng = new Image();
				logoGraphicPng.src = pngLogoGraphicUrl;
				logoGraphicPng.onload = function () {
					//create unique DB Id
					pngDbId = randomString(35, '01234567890123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
					//run purchase request
					$.ajax({
						type: "POST",
						url: "php/png-submit-to-purchases.php",
						data: {
							imgBase64: pngLogoGraphicUrl,
							dbId: pngDbId
						},
						success: function (text) {
							if (text === "New Unconfirmed Record Created Successfully") {
								top.dg.startFlow('php/external/png/checkout.php?dbId=' + pngDbId);
								console.log("**Success** - New unconfirmed entry created");
							} else {
								console.log("**Success With Error** - No new unconfirmed entry created: " + text);
								alert("Error Initializing Purchase. Please Try Again.");
							}
							//clear loading
							clearLoading();
						},
						error: function (text) {
							//close dg flow
							if (top.dg.isOpen() == true) {
								top.dg.closeFlow();
							}
							//alert user of error
							alert("An error occured while trying to initialize payment. Please try again.");
							//record error in console
							console.log("**Error** - No new unconfirmed entry created: " + text);
							//clear loading
							clearLoading();
						}
					})
				}
			}
		} else {
			alert("You must agree with the terms of service to download or purchase.");
		}
	});

	//====================================
	//=========purchase confirmation alert
	//====================================
	$("#logo-graphic-frame").delegate("#confirmed-purchase-alert-close-btn", "click", function () {
		$("#confirmed-purchase-alert-frame").fadeOut(400);
	});

	//====================================
	//===========agree to terms validators
	//====================================
	var originalSvgDownloadHref,
		downloadSvgBtnDisabled = false;

	$("#result-links").delegate("#svg-download-btn", "click", function () {
		if (!$("#accept-terms-checkbox").is(":checked")) {
			originalSvgDownloadHref = $(this).attr("href");
			$(this).attr("href", "javascript: void(0)");
			downloadSvgBtnDisabled = true;
			alert("You must agree with the terms of service to download or purchase.");
		} else {
			if (downloadSvgBtnDisabled) {
				$(this).attr("href", originalSvgDownloadHref);
				downloadSvgBtnDisabled = false;
			}
		}
	});

	var originalPngDownloadHref,
		downloadPngBtnDisabled = false;

	$("#result-links").delegate("#png-download-btn", "click", function () {
		if (!$("#accept-terms-checkbox").is(":checked")) {
			originalPngDownloadHref = $(this).attr("href");
			$(this).attr("href", "javascript: void(0)");
			downloadPngBtnDisabled = true;
			alert("You must agree with the terms of service to download or purchase.");
		} else {
			if (downloadPngBtnDisabled) {
				$(this).attr("href", originalPngDownloadHref);
				downloadPngBtnDisabled = false;
			}
		}
	});

	//result agree checkbox - view terms btn
	$("#result-links").delegate("#agree-with-terms-checkbox-frame span", "click", function () {
		$('nav div.bordered-text').removeClass('bordered-text-focus');
		$("#nav-terms-btn").addClass('bordered-text-focus');
		$("#content-wrapper section").stop(true, true).fadeOut(400);
		$('#terms').delay(400).fadeIn(400);
	});

	//====================================
	//======================submit to blog
	//====================================
	var blogSubmission,
		successfulBlogSubmission = 0;

	$("#result-links").delegate("#submit-to-blog-btn", "click", function () {
		if (successfulBlogSubmission == 0) {
			if (!blogSubmission) {
				blogSubmission = logoGraphicUrl;
			}
			$.ajax({
				type: "POST",
				url: "php/submit-to-blog.php",
				data: {
					imgBase64: blogSubmission
				},
				success: function (text) {
					if (text === "") {
						$("#submit-to-blog-btn").removeAttr("style").html("Thank you for your submission!");
						successfulBlogSubmission = 1;
						console.log("**Successful blog submission**");
					} else {
						$("#submit-to-blog-btn").css({
							"color": "#F00",
							"border-color": "#000"
						}).html("Submission unsuccessful. Click here to try again.");
						console.log("**Error** - " + text);
					}
				},
				error: function (text) {
					$("#submit-to-blog-btn").css({
						"color": "#F00",
						"border-color": "#000"
					}).html("Submission unsuccessful. Click here to try again.");
					console.log("**Error** - " + text);
				}
			})

		}
	});
});