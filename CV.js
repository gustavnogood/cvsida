async function populate() {

    const requestURL = './cv.json';
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const workplace = await response.json();
  
    populateWork(workplace);
}

  function populateWork(obj) {
    const section = document.querySelector('main');
    const works = obj.work;
  
    for (const work of works) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h4');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH2.textContent = work.name;
      myPara1.textContent = `Arbetsplats: ${work.name}`;
      myPara2.textContent = `Längd: ${work.lenght}`;
      myPara3.textContent = `Titel: ${work.type}`;
  
    
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
}


  populate();