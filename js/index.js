function clickMenu(index){

    if(index===1){
        document.getElementById('MenuHome').style.color='#FF6200'
        document.getElementById('MenuOrder').style.color='#454C5D'
        document.getElementById('MenuMy').style.color='#454C5D'
    }else if (index===2){
        document.getElementById('MenuHome').style.color='#454C5D'
        document.getElementById('MenuOrder').style.color='#FF6200'
        document.getElementById('MenuMy').style.color='#454C5D'

    }else{
        document.getElementById('MenuHome').style.color='#454C5D'
        document.getElementById('MenuOrder').style.color='#454C5D'
        document.getElementById('MenuMy').style.color='#FF6200'

    }
}
