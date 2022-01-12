/* EX11) Write a function to add a new link into the navbar */
const addNewLink = function(content){
    let newLink = document.querySelector('.nav')
    console.log(newLink)
    //let a = document.createElement('a')
    //a.classList.add('text-muted')
    //a.innerText = 'Sports'
    //newLink.appendChild(a)
    const a = `<a class="p-2 text-muted" href="#">${content}</a>`
    newLink.innerHTML += a
    
    
}
addNewLink('sports')

/*EX12) Write a function to change the color of the main title*/

const changeTitleColor = function(){
    const titleColor = document.querySelector(".jumbotron h1")
    titleColor.style.color = "white"

}
changeTitleColor()
         /* EX13) Write a function to change the background of the jumbotron*/

const changeBackgroundColor = function() {
    const backgroundColor = document.querySelector(".jumbotron")
    backgroundColor.classList.remove("bg-dark")
    backgroundColor.style.backgroundColor = 'red'
}
changeBackgroundColor()

/* EX14) Write a function to remove all the links under "Elsewhere"*/
const removeLinks = function(){
    const links = document.querySelector(".blog-sidebar div:last-of-type ol")
    console.log(links)
    links.innerHTML = ""
}
removeLinks()

/* EX16) Write a function to remove the "Search" magnifying glass icon*/
const removeSearchIcon = function(){
    const searchIcon = document.querySelector(".blog-header svg") 
    console.log(searchIcon)
    searchIcon.innerHTML = ""
}
removeSearchIcon()

/*
          EX15) Write a function to change the column size for heading in jumbotron
          
          EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
          EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
          EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
          EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
      */