console.log("this is output");


let result = {

    "tag": "",
    "free": false,
    "role": false,
    "user": "koshikbmiot123",
    "email": "koshikbmiot123@gst.sies.edu.in",
    "score": 0.8,
    "state": "deliverable",
    "domain": "gst.sies.edu.in",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true

}



submitBtn.addEventListener("click", async(e) => {
    e.preventDefault()
    console.log("clicked");
    let outblock = document.getElementById("outb");
    let upper = document.getElementById("up");
    outblock.style.display = "grid";
    outb.innerHTML = `<img src="loding.gif" alt="" class="loding">`
    let key = "ema_live_HaO0WbW2u1trcHKhc1khlJVaM9EcH5kCIICmlcVr"
    let email = document.getElementById("input").value;
    
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res= await fetch(url);
    let result = await res.json()
    let str = ``

    
    outb.innerHTML =` <div class="upper" id="up">
          <img src="emaillogo.png" alt="">
          <div class="upper_info" id="info">
              <h2 id="ema">EMAIL:  abc@gmail.com</h2>
              <h2 id="st">STATE: abc </h2>
              <p>Detects mailboxes that are temporarily unavailable, for example, due to being over quota.</p>
          </div>
       </div>
       <div class="lower" id="all_test">
            <div class="test">
               <h3>Test</h3>
               <h2>Result</h2>
            </div>
            
       </div>`
    for (key of Object.keys(result)) {
        if(result[key] != "" && result[key] != " "){
            if(key == "email"){
                ema.innerHTML =` EMAIL:  ${result[key]}`
            }
            else if (key == "state") {
                st.innerHTML = `STATE: ${result[key]}`
                if( result[key] == "undeliverable"){
                   up.style.background ="linear-gradient(to right, #f78d2d 0%, #cb333b 100%)"
                }
            }else{
                str = str + `<div class="test">
               <h3>${key}</h3>
               <h2>${result[key]}</h2>
            </div> `
            }
        
         }
    }

    console.log(str)
    all_test.innerHTML = str
    
})




