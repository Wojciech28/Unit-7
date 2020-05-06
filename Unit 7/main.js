
    
    const sectionLineCharts = document.querySelector('#traffic');
    const chart11 = document.querySelector('.chart1');
    const chart22 = document.querySelector('.chart2');
    const chart33 = document.querySelector('.chart3');
    const chart44 = document.querySelector('.chart4');
    const firstButton = document.querySelector('.hourly');
    const settingsArticle = document.querySelector('.settings');
    let outside = document.querySelector('.outside');
    let heading = document.querySelector('.btnheading');
    let inside = document.querySelector('.inside')
    let outside2 = document.querySelector('.outside2');
    let heading2 = document.querySelector('.btnheading2');
    let inside2 = document.querySelector('.inside2')

/*demo alert section*/

    const example1 = " <b> Alert: </b>   Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. <br>";
    const example2 = "<b> Alert notification: </b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";
    const sectionAlert = document.querySelector('#alert');
    const sectionAlert2 = document.querySelector('#alert2');
    const paragraph =document.querySelector('#paragraph')
    const paragraph2 = document.querySelector('#paragraph2')
    let notification = document.querySelector('#notification');
    
/* variables for local storage, message user and setting section*/

    const sendButton = document.querySelector('#searchSave2');
    const saveButton = document.querySelector('#save');
    const cancelButton = document.querySelector('#cancel')
    
    /*search1*/
        let search1 = document.querySelector('#search1');
        const storedSearch1 = localStorage.getItem('search1')

    /* search2*/

        let search2 = document.querySelector('#search2');
        const storedInput = localStorage.getItem('search2');

    /*message*/

        let messageText = document.querySelector('#message');
        const storedMessage = localStorage.getItem('textinput');


    /*select timezone*/
        let selectTimeZone = document.querySelector('#DropDownTimezone');
        const storedTimeZone = localStorage.getItem('text');

 /*                                          MAIN                                            */   

    /* alert section*/
        let alerts  = (section,p,text) => {
            section.style.display = "block";
            p.innerHTML=text;
            let button = document.createElement("img");
            button.classList.add("closeBtn");
            button.setAttribute("src","icons/times-solid.svg");
            p.appendChild(button);  
        }

        window.addEventListener('load',()=>{
            alerts(sectionAlert,paragraph,example1);
            notification.classList.add("ringing");
        });

        notification.addEventListener('click',()=>{
            alerts(sectionAlert2,paragraph2,example2);
            notification.classList.add("ringing");
        })

        
        
        sectionAlert.addEventListener('click',(e)=>{
            let btn= e.target;
            if(btn.tagName==="IMG"){
                sectionAlert.style.display="none";
                notification.classList.remove("ringing");

            }
            
        });
        
        sectionAlert2.addEventListener('click',(e)=>{
            let btn= e.target;
            if(btn.tagName==="IMG"){
                sectionAlert2.style.display="none";
                notification.classList.remove("ringing");
            }
        });

    
    /* line chart section */

        let clasListAdd = (c1,c2,c3,r1,r2)=>{

            c1.classList.add("chart");
            c2.classList.add("chart");
            c3.classList.add("chart");
            r1.classList.remove("chart");
            r2.classList.remove("hourly1");

        }

        sectionLineCharts.addEventListener('click', (e)=>{

            let btn = e.target;
            let expr = btn.className;

            switch(expr){
                case "hourly":
                clasListAdd(chart22,chart33,chart44,chart11,null);   
                break;

                case "daily":
                clasListAdd(chart11,chart33,chart44,chart22,firstButton);  
                break;

                case "weakly":
                clasListAdd(chart11,chart22,chart44,chart33,firstButton);  
                break;

                case "yearly":
                clasListAdd(chart11,chart22,chart33,chart44,firstButton);
                break;
            }
        });
    /*message section*/

    let emptyString = () => {

        if(search2.value!="" && messageText.value!=""){
            alert("Your message has been sent!")
            sendButton.style.backgroundColor="lightGreen"
            sendButton.value="Your message has been sent !"
            sendButton.style.color="black"
            search2.value="";
            messageText.value="";
        }else{
            
            alert("User isn’t selected or message field is empty !!! ");
        
        }

    }
    sendButton.addEventListener('click',emptyString);


    /*toggle btns section*/
        function btns (i,h,o){
            i.classList.toggle("translate");
            
            let btnStyle = (onoff,col1,col2) => {
                h.textContent= onoff;
                h.style.color = col1;
                o.style.backgroundColor= col2;
            }
            
            if(h.textContent==="ON"){
                btnStyle("OFF","gray","lightGray")
            }else{
                btnStyle("ON","white","rgb(43, 101, 184,1)")
            }

        }
        outside.addEventListener('click',()=>{
            btns(inside,heading,outside);
        });

        outside2.addEventListener('click',()=>{
            btns(inside2,heading2,outside2);
        });

    /* local storage*/


        /*functions*/
            const saveToLocalSearchFunct = () => {
                localStorage.setItem('search1',search1.value);

            }
            const saveToLocalStorage = () => {
                localStorage.setItem('search2',search2.value);
                localStorage.setItem('textinput',messageText.value);
                
            }

            const saveToLocalStorageSelect=()=>{
            localStorage.setItem('text',selectTimeZone.value);
            }

        /*listeners*/

            search1.addEventListener('keyup',(e)=>{
                let enterr = e.keyCode
                if(enterr===13){
                    saveToLocalSearchFunct();
                }

            })
            sendButton.addEventListener('click',saveToLocalStorage);
            saveButton.addEventListener('click',saveToLocalStorageSelect);

            cancelButton.addEventListener('click',()=>{
                selectTimeZone.value= "Select Time Zone";
                saveToLocalStorageSelect();
            })
        /*if statements*/

            const values = [search1, search2, messageText, selectTimeZone];
            const stored = [storedSearch1,storedInput,storedMessage,storedTimeZone];

            for(let i = 0; i<stored.length; i++){
                if(stored[i]){
                    values[i].value=stored[i];
                }
            }

        