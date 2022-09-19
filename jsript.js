
    function entierAleatoire(min, max)
    {
     return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    async function getUser(url){
      var entier = entierAleatoire(1, 100);
      console.log(entier);
      let p1 = document.getElementById("citation");
      let p2 = document.getElementById("auteur");
      let user = await fetch(url);
      let user2 = await user.json();
         console.log(user2[entier].text);
         console.log(user2[entier].author);
         p1.textContent = user2[entier].text;
         if (user2[entier].author == null){
          p2.textContent = "Inconnu";
         }
         else{
          p2.textContent = user2[entier].author;
         }
    }

    getUser("https://type.fit/api/quotes");
    let url="https://type.fit/api/quotes";