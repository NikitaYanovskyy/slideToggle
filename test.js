const toggleSlide = (ul) =>{
    const UlChildren = ul.children
    //Loop through all li elements
    for (const li of UlChildren) {
        li.style.overflowY = 'hidden'
        li.style.transition = `max-height 0.5s ease-in-out`
        li.style.maxHeight = `${li.offsetHeight}px`

        //Click event for span
        addClickEvent(li, li.children[0], `${li.offsetHeight}px`)
        
        //Check all child ul elements and call the toggleSlide function on them
        if(li.children[1]){
            for (let i = 1; i < li.children.length; i++) {
                toggleSlide(li.children[i])
            }
        } 
    }     
}

function addClickEvent(li, span, height){
        span.addEventListener('click', ()=>{
            //Hide or show list
            //Check if list is hidden
            if(li.style.maxHeight === height){
                //Show list
                li.style.maxHeight = `${span.offsetHeight}px`
            }else{
                //Hide list
                li.style.maxHeight = height
            }
        })
}

const ul = document.querySelector('.ul');
//call toggleSlide function on first ul
toggleSlide(ul);


function anagram(word1 , word2){
    if(word1.length === word2.length){
        const length = word1.length;
        var i = 0;
        for (let index = 0; index < word1.lengtt; index++) {
            const element = array[index];
            
        }
        while(i < word1.length){
            for (let j = 0; j < length - i; j++) {
                if(word1[i] === word2[j]){
                    return true
                }else{
                    return false
                }
            }
            i++;
        }
    }else{
        return false
    }
}