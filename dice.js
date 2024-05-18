document.addEventListener('DOMContentLoaded',(event) => 
    {
    const canvas=document .getElementById('diceinCanvas');
    const ctx=canvas.getContext('2d');
    function drawingDice(number)
    {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.strokeRect(10,10,180,180);
        ctx.font='100px Script';
        ctx.textAlign='center';
        ctx.textBaseline='middle';
        ctx.fillText(number,canvas.width/2,canvas.height/2);
    }
    function getrandom()
    {
        return Math.floor(Math.random()*6)+1;
    
    }
    document.body.onkeyup=function(event){
        if(event.key==32||event.code=="Space"|| event.keycode==23)
            {
            const getrandomNumber=getrandom();
            drawingDice(getrandomNumber);
        }
    }
    drawingDice(getrandom());
    document.addEventListener('Keydown',onSpacePress);
    
    });