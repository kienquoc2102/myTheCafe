const menu = document.querySelectorAll('.title')
const tabMenu = document.querySelectorAll('.tab-content')

// Duyet va them CSS
menu.forEach(function(element, index, array) {
    element.onclick = function() {
        element.classList.add('changeTitle')
        tabMenu[index].classList.add('show')
        tabMenu[index].classList.remove('hidden')
        var restMenu = []
        var restTitle = []
        for(let i = 0; i < array.length; i++)
        {
                if(element !== array[i])
                {
                    restMenu.push(tabMenu[i])
                    restTitle.push(array[i])
                }
        }
        for (let i = 0; i < restTitle.length; i++)
        {
            restTitle[i].classList.remove('changeTitle')
            restMenu[i].classList.remove('show')
            restMenu[i].classList.add('hidden')
        }
    }
});