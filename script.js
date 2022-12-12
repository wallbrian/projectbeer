

/* About page Scroller */

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

/* Shop Purchase*/

let shopList=[];
function jumperList(){
	document.getElementById("shopMain").innerHTML=shopList.toString();
}
function addToEndJumper(){
	shopList.push("Jumper");
	jumperList();
}

function removeFromEndJumper(){
	+shopList.pop();
	jumperList();
}

let shopList2=[];
function tshirtList(){
	document.getElementById("shopMain2").innerHTML=shopList2.toString();
}
function addToEndTshirt(){
	shopList2.push("Tshirt");
	tshirtList();
}
function removeFromEndTshirt(){
	shopList2.pop();
	tshirtList();
}

function purchase(){
	
	let jumperAmount = Object.keys(shopList).length;
	let jumperPrice = (jumperAmount * 10);
	let tshirtAmount = Object.keys(shopList2).length;
	let tshirtPrice = (tshirtAmount * 5);
	let totalPrice = jumperPrice + tshirtPrice;
	
	alert("Thanks for your order! \n-------------------------- \n"  +shopList +"\n" +shopList2 +"\n--------------------------" +"\nYour total is €" +totalPrice +"\nYour item(s) will be delivered in 5 working days!" );
}


/* Age Checker */

/*
Added by James - Start
*/
function message(){
	var name=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.match(mailformat)){
	alert(name+", thank you for your query. We will contact you via "+email+" shortly.");
	}
	else
	{
	alert("Please input a valid e-mail address");
	}
}

$(document).ready(function () {
    var age = {};
      $('#ageModal').modal('show');
      initAge();

    // starts the age verification process
    function initAge() {
      var month = 0;
      var day = 0;
      var year = 0;

      $("#age-submit").on("click", function () {
        age['month'] = $("#verify-month").val();
        age['day'] = $("#verify-day").val();
        age['year'] = $("#verify-year").val();
        checkDate();
      });
    }
    // Check to see if user entered a valid date...
    function checkDate() {
      if (age.month == 'none' || age.day == 'none' || age.year == 'none') {
        // Fade in the error...
        $('#modal-error').css('visibility', 'visible').hide().fadeIn('slow');

        // changes the background color of the select if invalid
        if (age.month == 'none') {
          $("#verify-month").css('background', 'rgba(223,32,44,0.5)');
          // Look for change of value and change background color when valid
          $("#verify-month").on('change', function () {
            if ($("#verify-month").val() == 'none') {
              $("#verify-month").css('background', 'rgba(223,32,44,0.5)');
            } else {
              $("#verify-month").css('background', 'white');
            }
          });
        }

        // changes the background color of the select if invalid
        if (age.day == 'none') {
          $("#verify-day").css('background', 'rgba(223,32,44,0.5)');
          // Look for change of value and change background color when valid
          $("#verify-day").on('change', function () {
            if ($("#verify-day").val() == 'none') {
              $("#verify-day").css('background', 'rgba(223,32,44,0.5)');
            } else {
              $("#verify-day").css('background', 'white');
            }
          });
        }

        // changes the background color of the select if invalid
        if (age.year == 'none') {
          $("#verify-year").css('background', 'rgba(223,32,44,0.5)');
          // Look for change of value and change background color when valid
          $("#verify-year").on('change', function () {
            if ($("#verify-year").val() == 'none') {
              $("#verify-year").css('background', 'rgba(223,32,44,0.5)');
            } else {
              $("#verify-year").css('background', 'white');
            }
          });
        }
      } else {
        oldEnough();
      }
    }
    // Compares age entered with todays date 18 years ago...
    function oldEnough() {
      var ageLimit = moment().subtract(18, 'years').calendar();
      var birthDate = age.month + " " + age.day + " " + age.year;
      var oldEnough = moment(birthDate, "MM DD YYYY").isBefore(ageLimit, 'day');

      if (oldEnough) {
        $('#ageModal').modal('hide');
      } else {
        /*Augmented script by James */
		let tooYoung=confirm("Sorry, you are not old enough - you will be redirected to another page");
		function redirect(){
		window.location="https://www.rte.ie/kids/";	
		}
		if (tooYoung){
			redirect(tooYoung);
		}
	  }
	}
	
});

