var ADSS = ADSS || {};
ADSS.EcApp = ADSS.EcApp || {};
ADSS.EcApp.SimpleBookMark = ADSS.EcApp.SimpleBookMark || {};
(function() {
	ADSS.EcApp.SimpleBookMark.KEY = "SimpleBookMark";
	ADSS.EcApp.SimpleBookMark.MAX_COUNT = 50;
	ADSS.EcApp.SimpleBookMark.MAX_AGE = 60 * 60 * 24 * 30;
	ADSS.EcApp.SimpleBookMark.add = function(prdCd) {
		var item = jQuery("#" + prdCd);
		item = item.html().replace(/[\n\r]/g,"");
		var cookies = ADSS.EcApp.SimpleBookMark.getCookies();
		var SimpleBookMark = cookies[ADSS.EcApp.SimpleBookMark.KEY];
		SimpleBookMark = SimpleBookMark ? JSON.parse(SimpleBookMark) : [];
		var position = SimpleBookMark.indexOf(prdCd);
		position > -1 && SimpleBookMark.splice(position, 1);
		SimpleBookMark.unshift(encodeURIComponent(prdCd));
		SimpleBookMark.length > ADSS.EcApp.SimpleBookMark.MAX_COUNT && SimpleBookMark.pop();
		document.cookie = ADSS.EcApp.SimpleBookMark.KEY + "=" + JSON.stringify(SimpleBookMark) + ";path=/;max-age=" + ADSS.EcApp.SimpleBookMark.MAX_AGE;
	}
	ADSS.EcApp.SimpleBookMark.getCookies = function() {
		var cookie = document.cookie;
		var cookies = cookie.split(";");
		var ret = {};
		for (var i in cookies) {
			var kv = cookies[i].split("=");
			ret[$.trim(kv[0])] = kv[1];
		}
		return ret;
	}
	ADSS.EcApp.SimpleBookMark.data = function() {
		var cookies = ADSS.EcApp.SimpleBookMark.getCookies();
		var list = cookies[ADSS.EcApp.SimpleBookMark.KEY] || "[]";
		return JSON.parse(list);
	}
	ADSS.EcApp.SimpleBookMark.remove = function(prdCd) {
		if (confirm("削除しますか？")) {
			var cookies = ADSS.EcApp.SimpleBookMark.getCookies();
			var SimpleBookMark = cookies[ADSS.EcApp.SimpleBookMark.KEY];
			SimpleBookMark = SimpleBookMark ? JSON.parse(SimpleBookMark) : [];
			var position = SimpleBookMark.indexOf(prdCd);
			position > -1 && SimpleBookMark.splice(position, 1);
			document.cookie = ADSS.EcApp.SimpleBookMark.KEY + "=" + JSON.stringify(SimpleBookMark) + ";path=/;max-age=" + ADSS.EcApp.SimpleBookMark.MAX_AGE;
			location.reload();
		}
	}
	ADSS.EcApp.SimpleBookMark.removeStatic = function(prdCd) {
		var cookies = ADSS.EcApp.SimpleBookMark.getCookies();
		var SimpleBookMark = cookies[ADSS.EcApp.SimpleBookMark.KEY];
		SimpleBookMark = SimpleBookMark ? JSON.parse(SimpleBookMark) : [];
		var position = SimpleBookMark.indexOf(prdCd);
		position > -1 && SimpleBookMark.splice(position, 1);
		document.cookie = ADSS.EcApp.SimpleBookMark.KEY + "=" + JSON.stringify(SimpleBookMark) + ";path=/;max-age=" + ADSS.EcApp.SimpleBookMark.MAX_AGE;
	}
})();


