"use strict";//厳格モードで実装

$(function(){
   //送信ボタンがクリックされたら
   $('#send').on('click',() =>{
     //テキスト内の文字を取得する
     const text = $('#text').val()
     //チャットエリアの要素を取得
     const chatArea =$('.chat_area')
     chatArea.append('<p>' + text +'</p>')
   })
})

