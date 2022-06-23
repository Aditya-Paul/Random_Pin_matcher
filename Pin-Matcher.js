var generatePin_display = document.getElementById('Generate_part')
        var click_on_generatePin = document.getElementById('generate')
        var submit_display = document.getElementById('display')
        var click_on_digit = document.querySelectorAll('.digit')
         
        click_on_generatePin.addEventListener('click',createpin)
        function createpin(){
            var val = Math.floor(1000 + Math.random() * 9000);
            generatePin_display.innerText = val
            console.log(val)
        }

        for(digits of click_on_digit){
            digits.addEventListener('click',confirm_the_pin)
        }
        
        function confirm_the_pin(){
            var digit_value = this.innerText

            if( digit_value == "Submit Pin"){
                if(submit_display.innerText == generatePin_display.innerText){
                    // alert('Valid pin')
                    document.getElementById('pin_match').style.display = "block";
                }
                else{
                    // alert('Invalid Pin')
                    document.getElementById('didnt_match').style.display = "block";
                }
                return (submit_display.innerText = "", generatePin_display.innerText = "")
            }
            if ( digit_value == "C"){
                submit_display.innerText = submit_display.innerText.slice(0,-1);
            }
            else{
                submit_display.innerText += digit_value
            }
        }