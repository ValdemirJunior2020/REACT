let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let gitObject = JSON.parse(this.responseText);
    
    for(i=0;i<gitObject.length;i++){
      
      document.getElementById("gitBio").append(gitObject[i].name +" ");

    }
  }
};
gitHubRequest.open("GET", "https://api.github.com/users/ValdemirJunior2020/repos", true);
gitHubRequest.send();
  



