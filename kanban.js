first_todo = [
    "うんこを食べる",
    "まんこを磨く",
    "フェイ"
]

nomal_todo = [
    "普通の食事"
]

doing = [
    "頑張る",
    "チンカス綺麗にする"
]

done = [
    "童貞"
]

lists = [
    first_todo,
    nomal_todo,
    doing,
    done
]

places = [
    "first",
    "normal",
    "doingHolder",
    "doneHolder"
]

function makeevent(text) {
    html_code = "<div class=\"event\"><p class=\"event_text\">"+text+"</p><div class=\"close_button\"><i class=\"fas fa-times-circle\"></i></div></div>"
    return html_code
}

function makehtml() {
    for(let i = 0; i < lists.length; i++) {
        html_code = ""
        for( let j = 0; j < lists[i].length; j++) {
            html_code += makeevent(lists[i][j])
        }
        element = document.getElementById(places[i])
        element.innerHTML = html_code
    }
    
}

event_text = ""

function repeat(){
    $('.event').draggable({
        helper: 'clone',//クローン（残像）を出す設定
        start: function(){
            $(this).hide();//ドラッグ中はクローン元を消す 
            parent = $(this).parent()
            event_text = this.textContent
            parent_id = parent.attr('id')
            delete_index = places.indexOf(parent_id);
            new_index = lists[delete_index].indexOf(event_text)
            lists[delete_index].splice( new_index, 1 );
            console.log(this.textContent) //event内容取得
            console.log("消しました")   
        }
    })
    $(".draggable").droppable({
        //ドロップOKの要素を指定
        accept :".event" ,
        //ドロップ時の動作
        drop : function(){
            console.log("fuck!!")
            console.log(this)
            id = $(this).attr('id')
            console.log(id)
            index = places.indexOf(id);
            lists[index].push(event_text)
            makehtml()
            repeat()
        }
    })
}

$(function() {
    repeat()
})

makehtml()

