(function() {
	var EMPTY_STRING = "";
	var BEFORE_BEGIN = "beforebegin";
	var IMAGE_DATA = "{{image}}";
	var LINK_DATA = "{{link}}";
	var TITLE_DATA = "{{title}}";
	var SITE_DATA = "{{site}}";
	var SCROLL_EVENT = "scroll";
	var MAX_DIF = 888;
	var TEMPLATE = document.getElementById("item-template").innerHTML;
	var itemsInsert = document.getElementById("items-insert");
	var activeCall = {stillLoading: false}; // Boolean wrapped in object to allow for reference passing
	function addToPage(dataArray) {
		itemsInsert.insertAdjacentHTML(BEFORE_BEGIN, dataArray.map(function(data) {
			return TEMPLATE
				.split(IMAGE_DATA).join(data.image)
				.split(LINK_DATA).join(data.link)
				.split(TITLE_DATA).join(data.title)
				.split(SITE_DATA).join(data.site);
		}).join(EMPTY_STRING));
	}
	function loadMore() {
		if(activeCall.stillLoading) return;
		activeCall.stillLoading = true;
		window.fakeAjaxCall(addToPage, activeCall);
	}
	function isScrollBottom() {
		var height = document.height ||
				Math.max(document.body.scrollHeight,
				document.body.offsetHeight,
				document.documentElement.clientHeight,
				document.documentElement.scrollHeight,
				document.documentElement.offsetHeight);
		var position = document.body.scrollTop ||
				document.documentElement.scrollTop;
		if(height - position < MAX_DIF) loadMore();
	}
	window.addEventListener(SCROLL_EVENT, isScrollBottom, false);
	loadMore();
})();
