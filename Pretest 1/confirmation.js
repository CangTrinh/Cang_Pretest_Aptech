        
        document.reset;
        document.getElementById("form").onsubmit = function exportAlert(e){
            e.preventDefault();
            var form = document.getElementById('form');
            // Chon gioi tinh
            getGender = document.querySelector(".gender:checked").value;
            // Chon so thich
            var h = 'Your hobbies: ';
            var getHobbies = document.getElementsByName('hobbies');
                for(let i = 0; i < getHobbies.length; i++){
                    if(getHobbies[i].checked){
                        h = h + getHobbies[i].value + ' | ';
                    }
            }
            //get tuoi cua member
            var newDob = new Date(document.getElementById("dob").value)
            var age = newDob.getFullYear();
            var newAge = 2020 - age;
            //So sanh tuoi cua member
            if(newAge>17){
                 alert ('Member information: ' + "\n-----------------\n" 
                + "Full name: " + form.fullName.value + "\n"
                + "Gender: "+ getGender +"\n"+ h
                +"\nYour birth day: "+ form.dob.value +"\nYour address: "+ form.address.value +"\nYour email: "
                + form.email.value +"\nYour telephone: "+ form.phoneNumber.value  + "\nYou live in: "
                + form.city.value +"\nYou said: "+ form.comment.value);
                
            }
            else{
                // alert("You are not enough registered age"); ---> kiem tra sai sot neu ham duoi bi loi
                document.getElementById("alertAge").innerHTML = "Member age must be 17-year old or above!";         
            }
        }