(function() {
	window.fakeAjaxCall = function(callback, activeCall) {
		var data = [
			{
				title: "TSA throws out child's Buzz Lightyear souvenir",
				link: "http://wwmt.com/news/nation-world/tsa-throws-out-child39s-buzz-lightyear-souvenir#.VkyOJ3YrIS1",
				site: "ABC West Michigan",
				image: "http://i.imgur.com/9HK4t3M.jpg"
			},
			{
				title: "Study about butter, funded by butter industry, finds that butter is bad for you",
				link: "http://www.smh.com.au/national/health/study-about-butter-funded-by-butter-industry-finds-that-butter-is-bad-for-you-20150809-giuuia.html",
				site: "The Sydney Morning Harald",
				image: "http://i.imgur.com/SjGm913.jpg"
			},
			{
				title: "Yes, he really did: State Sen. Paul Sanford sets up GoFundMe account to solve state\'s budget woes",
				link: "http://whnt.com/2015/08/10/help-with-the-states-budget-shortfall-donate-to-its-gofundme-account/",
				site: "CBS Huntsville",
				image: "http://i.imgur.com/Rh15His.jpg"
			},
			{
				title: "Goonies house shut down after owner gets sick of people doing Truffle Shuffle on lawn",
				link: "http://www.independent.co.uk/arts-entertainment/films/news/goonies-house-shut-down-after-owner-gets-sick-of-people-doing-the-truffle-shuffle-on-the-lawn-10462363.html",
				site: "Independent",
				image: "http://i.imgur.com/IBJIvtf.jpg"
			},
			{
				title: "Dog accidentally runs US half-marathon, finishes in an impressive seventh place",
				link: "http://www.9news.com.au/world/2016/01/25/12/38/dog-accidentally-runs-us-half-marathon-finishes-in-an-impressive-seventh-place",
				site: "9News Austrailia",
				image: "http://i.imgur.com/LfpeVXn.jpg"
			},
			{
				title: "\"Rent a Crowd\" Company Admits Politicians Are Using Their Service",
				link: "http://libertychat.com/2015/06/rent-a-crowd-company-admits-politicians-are-using-their-service/",
				site: "LibertyChat",
				image: "http://i.imgur.com/pYYVXON.jpg"
			},
			{
				title: "Police pull over self-driving Google car for doing 25mph in a 35mph zone",
				link: "http://arstechnica.co.uk/tech-policy/2015/11/google-self-driving-car-pulled-over-for-not-going-fast-enough/",
				site: "Ars Technica",
				image: "http://i.imgur.com/B4bSvPo.jpg"
			},
			{
				title: "AT&T wants to know why a town is building a 1Gbps network when it already offers 6Mbps DSL",
				link: "https://bgr.com/2014/12/03/att-vs-municipal-fiber/",
				site: "Boy Genius Report",
				image: "http://i.imgur.com/QfvLwNi.jpg"
			},
			{
				title: "Nintendo of America Hires Bowser as New VP of Sales",
				link: "http://www.businesswire.com/news/home/20150520005475/en/Nintendo-America-Hires-Bowser-VP-Sales#.VVyYtfmUePt",
				site: "Business Wire",
				image: "http://i.imgur.com/pizRyBE.jpg"
			},
			{
				title: "Fire extinguisher factory destroyed in massive blaze",
				link: "http://www.foxnews.com/us/2015/03/20/chicago-fire-extinguisher-factory-destroyed-in-massive-blaze.html",
				site: "Fox News",
				image: "http://i.imgur.com/gigTasl.jpg"
			},
			{
				title: "Police called after men dressed as traffic cones block road",
				link: "http://www.itv.com/news/london/2015-11-02/men-dress-as-traffic-cones-block-road-like-traffic-cones/",
				site: "ITV",
				image: "http://i.imgur.com/I70yn8z.jpg"
			},
			{
				title: "Weatherman pronounces 'Llanfairpwllgwyngyllgogerychwyrndrob-wllllantysiliogogogoch' flawlessly on live TV",
				link: "http://www.cbc.ca/news/trending/weatherman-liam-dutton-pronounces-llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch-perfectly-1.3221414",
				site: "CBC News",
				image: "http://i.imgur.com/wkYy962.jpg"
			},
			{
				title: "Voters can pick 'none of the above' thanks to this Whitby-Oshawa byelection candidate",
				link: "http://www.cbc.ca/news/canada/toronto/vote-none-of-the-above-byelection-1.3426783",
				site: "CBC News",
				image: "http://i.imgur.com/YXOXgmk.jpg"
			},
			{
				title: "Haydock high school holds funeral for its resident lab skeleton 'Arthur' after discovering his bones were real",
				link: "http://www.liverpoolecho.co.uk/news/liverpool-news/haydock-high-school-holds-funeral-10544450",
				site: "Echo Liverpool",
				image: "http://i.imgur.com/PcojTTE.jpg"
			},
			{
				title: "Lil Wayne Attended an Anti-Violence Charity Basketball Game & Fought a Referee",
				link: "http://radio.com/2015/06/01/lil-wayne-anti-violence-basketball-referee-fight/",
				site: "Radio",
				image: "http://i.imgur.com/uYa9qYI.jpg"
			},
			{
				title: "South Korea Punishes Kim Jong Un With K-Pop for Nuclear Test",
				link: "http://www.bloomberg.com/news/articles/2016-01-07/south-korea-to-inflict-k-pop-blasts-on-kim-jong-un-for-nuke-test",
				site: "Bloomberg Business",
				image: "http://i.imgur.com/RaPOJCe.jpg"
			},
			{
				title: "Chicago Bulls player who signed a $95 million contract removed the rearview mirror in his car so that he can't look 'back'",
				link: "http://www.businessinsider.com/jimmy-butler-car-rearview-mirror-2015-10",
				site: "Business Insider",
				image: "http://i.imgur.com/627EeVR.jpg"
			},
			{
				title: "Man tries to 'time travel', drives his car straight through the wall of a shopping centre",
				link: "http://i100.independent.co.uk/article/man-tries-to-time-travel-drives-his-car-straight-through-the-wall-of-a-shopping-centre--WkzRTabTse",
				site: "Independent i100",
				image: "http://i.imgur.com/DexnTgD.jpg"
			},
			{
				title: "Breaking Bad Creator: Stop Throwing Pizzas at Walter White\'s House",
				link: "http://time.com/3740595/breaking-bad-vince-gilligan-pizza/",
				site: "Time",
				image: "http://i.imgur.com/rtjYUUy.jpg"
			},
			{
				title: "Comcast customer tries to cancel service, gets put on hold for over 3 hours until office closes",
				link: "http://bgr.com/2014/08/13/why-is-comcast-so-bad-11/",
				site: "Boy Genius Report",
				image: "http://i.imgur.com/Yi9T51O.jpg"
			},
			{
				title: "We don\'t need to drink less soda, according to research funded by Coca-Cola",
				link: "https://www.washingtonpost.com/news/wonk/wp/2015/08/11/the-worlds-largest-seller-of-sugary-drinks-is-telling-people-how-to-lose-weight/",
				site: "The Washington Post",
				image: "http://i.imgur.com/Nl33cvf.jpg"
			},
			{
				title: "Ebola Nurse: Stop calling me the 'Ebola Nurse'",
				link: "http://www.nj.com/healthfit/index.ssf/2014/11/kaci_hickox_puts_politicians_on_blast_in_op-ed_piece.html",
				site: "True New Jersey",
				image: "http://i.imgur.com/0HXDo6V.jpg"
			},
			{
				title: "Mr. T Lands Home Improvement Show 'I Pity the Tool'",
				link: "http://www.hollywoodreporter.com/live-feed/mr-t-lands-home-improvement-782994",
				site: "The Hollywood Reporter",
				image: "http://i.imgur.com/7gFvf3B.jpg"
			},
			{
				title: "Man starts gas station blaze trying to kill spider with lighter",
				link: "http://www.fox2detroit.com/news/local-news/24780872-story",
				site: "Fox Detroit",
				image: "http://i.imgur.com/V4UIUON.jpg"
			},
			{
				title: "No joke: Guatemalan comedian wins presidency in landslide",
				link: "http://www.reuters.com/article/us-guatemala-election-idUSKCN0SJ04G20151026",
				site: "Reuters",
				image: "http://i.imgur.com/2VkIfon.jpg"
			}
		];
		for(var i = data.length - 1; i >= 0; --i) {
			var j = Math.floor(Math.random() * data.length);
			var temp = data[i];
			data[i] = data[j];
			data[j] = temp;
		}
		setTimeout(function() {
			activeCall.stillLoading = false;
			callback(data);
		}, 1000);
	}
})();
