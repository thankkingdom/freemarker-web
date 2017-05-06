<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.8.1.min.js"></script>
<script type="text/javascript" src="static/scripts/simpleBookmark.js"></script>
<script type="text/javascript">
	$(function() {
		var params = new Array();
		params.push('wt=json');

		var bookmarkCookie = ADSS.EcApp.SimpleBookMark.getCookies();
		if (bookmarkCookie.SimpleBookMark) {
			var bookmarks = $.parseJSON(bookmarkCookie.SimpleBookMark);
			if (bookmarks.length > 0) {
				params.push('rows=50');
				params.push('fq=cd:(' + bookmarks.join('+OR+') + ')');
				//params.push('fq=-stnum:0');

				var template = _.template($('#template').html());
				var $container = $('#itemContainer');

				$.ajax({
					url : '/ise/select',
					data : params.join('&'),
					dataType : "json",
				}).done(
						function(data, status, xhr) {
							var numFound = data.response.numFound;
							var rows = 1 * data.responseHeader.params.rows;
							var start = 1 * data.responseHeader.params.start;
							numFound = numFound || 0;
							$container.html('');

							if (numFound > 0) {
								var lost = false;
								var dataArray = new Array(numFound);

								_.each(data.response.docs, function(doc) {
									var index = $.inArray(doc.cd, bookmarks);
									if (index > -1) {
										dataArray[index] = doc;
									}
								});

								_.each(dataArray, function(doc) {
									$container.append(template({
										doc : doc
									}));
								});
								$("#list ul#itemContainer").children("li")
										.tile(5);
								var minus = 0;
								for ( var i in bookmarks) {
									if (dataArray[i]) {
										continue;
									}
									ADSS.EcApp.SimpleBookMark
											.removeStatic(bookmarks[i]);
									minus++;
								}
								if (minus > 0) {
									alert("販売終了商品が存在しました。");
									var c = parseInt(jQuery(".circle").html(),
											10)
											- minus;
									jQuery(".circle").html(c);
								}
								dataArray = [];
							}
						});
			}
		}
	});
</script>
</head>
<body>
	<ul class="member>
	<li class="nav03">
		<a href="https://gocart.jp/bookmark/"><span class="circle">0</span></a>
		</li>
	</ul>
	<div id="contents">
		<div id="bookmark">
			<!-- bookmark -->
			<div id="bread">
				<!--パンくず-->
				<ol>
					<li><a href="/">TOP</a></li>
					<li>あとで見る一覧</li>
				</ol>
			</div>
			<!--/パンくず-->
			<h2>BOOKMARK LIST</h2>
			<p class="title">
				<span>あとで見る一覧</span>
			</p>
			<div id="list">
				<ul id="itemContainer">
				</ul>
			</div>
		</div>
		<!-- /bookmark -->
	</div>
	<!-- /contents -->

</body>
</html>