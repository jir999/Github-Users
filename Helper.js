function FillData(fetchCaller) {
    fetchCaller.Call()
    .then(() => {
      DrowData(dataCaller.responseData);
    })
  }

  function DrowData(data){

    UserInstance.setData = data.map((user) => ( new User(user.id, user.avatar_url, user.login, user.html_url)));

    for(let i=0; i<UserInstance.userList.length; i++){
               
        let currentUser = UserInstance.userList[i];
                      
        const div = document.getElementById("d");

        const innerdiv = document.createElement("div");

        innerdiv.setAttribute("id","innerdiv" + (i+1));

        innerdiv.setAttribute("class","user");

        const btn = document.createElement("button");

        btn.innerText = "Delete";

        btn.setAttribute("id","button" + (i+1));

        const login = document.createElement("span"); 

        const image = document.createElement('img');

        image.src = currentUser.avatar;

        login.append(currentUser.login);

        const bottomdiv = document.createElement("div");

        bottomdiv.setAttribute("style","display: flex; justify-content: space-around; height: max-content;");

        login.setAttribute("style","font-size: 28px;");

        btn.setAttribute("style","font-size: 14px; font-weight: bold;");

        btn.setAttribute("onclick", "removeColumn("+(i+1)+")");

        bottomdiv.appendChild(login);

        bottomdiv.appendChild(btn);

        innerdiv.appendChild(image);

        innerdiv.appendChild(bottomdiv);

        div.appendChild(innerdiv);

    }
  }


  function removeColumn(Id) {
    let div = document.getElementById("d");

    let d_nested = document.getElementById("innerdiv" + Id);

    let throwawayNode = div.removeChild(d_nested);
  }