(function() {
	var emptyString = "";
	var beforebegin = "beforebegin";
	var image = "{{image}}";
	var link = "{{link}}";
	var title = "{{title}}";
	var site = "{{site}}";
	var template = document.getElementById("item-template").innerHTML;
	var itemsInsert = document.getElementById("items-insert");
	function addToPage(dataArray) {
		itemsInsert.insertAdjacentHTML(beforebegin, dataArray.map(function(data) {
			return template
				.split(image).join(data.image)
				.split(link).join(data.link)
				.split(title).join(data.title)
				.split(site).join(data.site);
		}).join(emptyString));
	}
	var activeCall = {stillLoading: false};
	function loadMore() {
		if(activeCall.stillLoading) return;
		activeCall.stillLoading = true;
		window.fakeAjaxCall(addToPage, activeCall);
	}
	var maxDif = 880;
	function isScrollBottom() {
		var height = document.height ||
				Math.max(document.body.scrollHeight,
				document.body.offsetHeight,
				document.documentElement.clientHeight,
				document.documentElement.scrollHeight,
				document.documentElement.offsetHeight);
		var position = document.body.scrollTop ||
				document.documentElement.scrollTop;
		if(height - position < maxDif) loadMore();
	}
	var scrollEvent = "scroll";
	window.addEventListener(scrollEvent, isScrollBottom, false);
	loadMore();
})();
