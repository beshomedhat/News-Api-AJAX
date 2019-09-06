

var category = "general"




function callAjax()
{
    let xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET",`https://newsapi.org/v2/top-headlines?country=eg&category=${category}&apiKey=f9485174523840359c74cf3d52ee3749`)

    xmlHttp.send();

    xmlHttp.onreadystatechange = function()
    {
        if(this.readyState==4 && this.status==200)
            {
                let allPostJson = JSON.parse(this.responseText);

                let allArticles = allPostJson.articles;
                let colls="";
                for(let i=0; i<allArticles.length; i++)
                    {
                        if(allArticles[i].urlToImage==null)
                            {
                                allArticles[i].urlToImage="images/1.png"
                            }
                        
                        colls+= `<div class="col-lg-3 col-md-6 text-center">
                                        <div class="card m-2" style="width: 18rem;">
                                          <img src="${allArticles[i].urlToImage}" class="card-img-top">
                                          <div class="card-body">
                                            <h5 class="card-title">${allArticles[i].title}</h5>
                                            <p class="card-text">${allArticles[i].description}</p>
                                            <a href="${allArticles[i].url}" class="btn btn-primary">Read more</a>
                                          </div>
                                        </div>
                                    </div>`
                    }
                document.getElementById("rowData").innerHTML=colls

            }
    }    
}

callAjax();

var AllLinks = document.getElementsByClassName("nav-link");

for(var i=0;i<AllLinks.length ;i++)
    {
        AllLinks[i].addEventListener("click",function(ev){
            
            
         category =  ev.target.innerHTML;
           
            callAjax()
            
            
        })
    }

