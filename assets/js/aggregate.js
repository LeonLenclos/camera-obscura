function getURLAnchor(url) {		
    return url.includes('#')?decodeURI(url.split('#')[1]) : null;
}

function getNextSiblingUntilSameTag(element){

   let currentSibling = element.nextSibling;
   let siblings = [];
   do{
      siblings.push(currentSibling);
      currentSibling = currentSibling.nextSibling;
   } while (currentSibling && currentSibling.tagName !== element.tagName)
   return siblings;
}

function fetchArticle(adress){
  return fetch(adress)
  .then((rep)=>{
    if(rep.ok) return rep.text();
    else throw new Error(`Impossible de récupérer la source (href: ${adress})`);
   })
  .then((text)=>{
    let doc = new DOMParser().parseFromString(text, "text/html");
    let article;
    let anchor = getURLAnchor(adress);
    if(!anchor){
      article = doc.querySelector('article.markdown-body');
    }
    else {
      let masterElement = doc.getElementById(anchor);
      if(!masterElement) throw new Error(`Impossible de trouver l'ancre ${anchor} (href: ${adress})`);
      article = document.createElement('article');
      let elements = getNextSiblingUntilSameTag(masterElement);
      elements.forEach(e=>article.append(e));
    }
    return article; 
   })
   .catch((error)=>{
      let article = document.createElement('article');
      article.classList.add('error');
      article.innerHTML=error;
      return article;
   })
}

function replaceContent(){
	anchors = document.querySelectorAll('.markdown-body a');
	Array.from(anchors).forEach(a=>{
	fetchArticle(a.href)
	.then((article)=>a.replaceWith(article));
	});
}

document.addEventListener('DOMContentLoaded',replaceContent);
