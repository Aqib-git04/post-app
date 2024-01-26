
function postBtn(){

    document.getElementById("hide").style.display='block';
    var postPara=document.getElementById("post-para");
    postPara.disabled = true;
     var hideitems=document.getElementById("items");
     hideitems.style.display='none';
}

function boldText() {

   var postPara=document.getElementById("post-para");
   var checkFont=postPara.style.fontWeight;
   postPara.style.fontWeight=(checkFont==='bold')?'normal':'bold'

  }

  function italicText() {

    var postPara=document.getElementById("post-para");
    var checkFont=postPara.style.fontStyle;
    postPara.style.fontStyle=(checkFont==='italic')?'normal':'italic'
 
   }
  
   function underlineText() {

    var postPara=document.getElementById("post-para");
    var checkFont=postPara.style.textDecoration;
    postPara.style.textDecoration=(checkFont==='underline')?'none':'underline'
 
   }

   function textCenter() {

    var textElement= document.getElementById("post-para");
    var checkText=textElement.style.textAlign;
    textElement.style.textAlign =(checkText === 'center')?'left':'center'

   }




function changeBackground() {

    var postContents = document.getElementById("content");
      postContents.style.backgroundImage = 'url(' + event.target.src + ')';
    
  }
  

function likebtn() {

    var likebtn = document.getElementById("like");
    var checkcolor = likebtn.style.color;

    likebtn.style.color = (checkcolor === 'blue') ? 'rgb(96, 103, 112)' : 'blue';

  }

  
function selectEmoji()

{
    var textElement= document.getElementById("post-para");
    textElement.value +=event.target.value;
    
}

function colorPicker()

{
    var textElement= document.getElementById("post-para");
    textElement.style.color=event.target.value

}

function fontRange()

{
    var textElement= document.getElementById("post-para");
     textElement.style.fontSize=event.target.value+'px';
    
}

