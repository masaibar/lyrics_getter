//var lyrics=document.getElementById("lyrics").innerHTML.replace(/<br>/g, "\n").replace(/&amp;/g, "&");
//var title=document.getElementById('view_kashi')[0].getElementsByTagName('h2')[0].innerHTML;
var url=document.getElementById('ipad_kashi').getElementsByTagName('img')[0].src;

function asyncMethod(url, callback) {
	//console.log(url);
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	xhr.onload = function() {
		src = xhr.response;

		//console.log(src);

		callback("test");
	}
	xhr.send();
}

function copyToClipBoard(text) {
	var dummyDiv = document.createElement("div");
	dummyDiv.innerHTML = '<textarea id="copyTextarea">'+text+'</textarea>';

	//ページが下にスクロールされないようにlogoの下に擬似的にtextareaを作る
	var parentObject = document.getElementById("global_header");
	parentObject.appendChild(dummyDiv);

	//コピーするためにテキストエリアを選択状態にする
	var copyTextarea=document.getElementById("copyTextarea");
	copyTextarea.select();
	copyTextarea.focus();

	//クリップボードへの書き込みを実行、成功true/失敗falseが戻る
	var result = document.execCommand("Cut");

	//ダミーのtextareaが表示されないようにする
	copyTextarea.style.display="none";

	if(result == true) {
		alert("\""+title+ "\" の歌詞を\nクリップボードにコピーしました");
	} else {
		alert("コピーに失敗しました");
	}

	//コピーしたらダミーのテキストエリアを消す
	parentObject.removeChild(dummyDiv);

}

asyncMethod(url, function(result) {
	//console.log("callback called");

	//copyToClipBoard(result);

});

function getLyrics(src, title) {
	var src, req = new XMLHttpRequest();
	req.open("GET", src);
	req.onload = function() {
		src = req.response;
		console.log(src);

		var dom = document.createElement("dom");
		dom.innerHTML = src;

		var lyricsArray=dom.getElementsByTagName('text');
		console.log(lyricsArray);

		var lyrics = "";
		for (i=0; i< lyricsArray.length; i++) {
			console.log(lyricsArray[i].innerHTML);
			lyrics = lyrics + lyricsArray[i].innerHTML;
		}

		var dummyDiv = document.createElement("div");
		dummyDiv.innerHTML = '<textarea id="copyTextarea">'+lyrics+'</textarea>';

		//ページが下にスクロールされないようにlogoの下に擬似的にtextareaを作る
		var parentObject = document.getElementById("global_header");
		parentObject.appendChild(dummyDiv);

		//コピーするためにテキストエリアを選択状態にする
		var copyTextarea=document.getElementById("copyTextarea");
		copyTextarea.select();
		copyTextarea.focus();

		//クリップボードへの書き込みを実行、成功true/失敗falseが戻る
		var result = document.execCommand("Cut");

		//ダミーのtextareaが表示されないようにする
		copyTextarea.style.display="none";

		if(result == true) {
			alert("\""+title+ "\" の歌詞を\nクリップボードにコピーしました");
		} else {
			alert("コピーに失敗しました");
		}

		//コピーしたらダミーのテキストエリアを消す
		parentObject.removeChild(dummyDiv);
	}
	req.send();
}
//getLyrics(src, title);
