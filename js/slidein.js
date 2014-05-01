var endSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
<<<<<<< HEAD
	foxkeh.setAttribute("class", "slidein");
	//foxkeh()のclassをslideinに変更
=======
	foxkeh.setAttribute("class", "");
};

var startSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.setAttribute("class", "slidein");

	foxkeh.addEventListener("animationend", endSlideinFoxkeh);
	//イベントハンドラの登録：endSlideinFoxkeh　イベント、要素：animationend, foxkeh
	
>>>>>>> origin/make_slidein_retriable
};

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
//イベントハンドラの対象を取得　
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
//イベントハンドラの登録：startSlideinFoxkeh　イベント、要素：click, slideinFoxkehButton (#slidein-foxkeh button)
//ボタンがクリックされたらstartSlideinFoxkehが実行

