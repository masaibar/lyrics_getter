var lyrics=document.getElementById("lyricBody").innerHTML.replace(/<br>/g, "\n").replace(/&amp;/g, "&");
var title=document.getElementsByClassName('caption')[0].getElementsByTagName('h2')[0].innerHTML;

console.log(lyrics);

var dummyDiv = document.createElement("div");
dummyDiv.innerHTML = '<textarea id="copyTextarea">'+lyrics+'</textarea>';

//ページが下にスクロールされないようにcaptionBandの下に擬似的にtextareaを作る
var parentObject = document.getElementById("captionBand");
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
