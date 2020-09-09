/*****************************************
File: Assignment_6_Nguyen.html
Author: Thuy Tien Nguyen
Assignment: 6
Create Date: 7/17/2019
Last Modified: 7/27/2019
****************************************/

$(document).ready(function() 
{ 
	$("#mysubmit").click(
		function () 
		{
			var myHTML;
			
			$("#first_error").text("");
			$("#last_error").text("");
			$("#gender_error").text("");
			$("#years_error").text("");
			$("#message").text(""); 
			
			var myfirst = $("#first_name").val().trim(); 
			$("#first_name").val(myfirst);
			var mylast = $("#last_name").val().trim(); 
			$("#last_name").val(mylast);
			
			var radioButton = $("input[name='gender']:checked").val();
			var selectOptions = $("#years option:selected").val();
			
			//check if first name is empty or not
			if (myfirst == "" ) 
			{ 
				$("#first_error").text("You must Enter a First Name"); 
			    $("#first_name").focus();
				return;
			}
				
			//check if last name is empty or not	
			if (mylast == "" ) 
			{ 
				$("#last_error").text("You must Enter a Last Name"); 
				$("#last_name").focus();
				return;
				
			}
			
			//check if gender is checked or not
			if(!$("input[name='gender']").is(":checked"))
			{ 
				$("#gender_error").text("You must choose a Gender"); 
				return;
	
			}
			
			//format printing value for radioButton
			if($("input[name='gender']:checked").val() == "M")
			{
				radioButton = "Male"
			}
			
			if($("input[name='gender']:checked").val() == "F")
			{
				radioButton = "Female"
			}
				
			//check if years option	is selected or not
			if($("#years option[value='-']").is(":selected") || !$("#years option").is(":selected"))
			{ 
				$("#years_error").text("You must select a number"); 
				return;
			}
			
			//printing HTML format
			myHTML = "<h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Employment Stats for " + myfirst + " " + mylast + "</h3><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You are a: " +
			radioButton + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You have: " + selectOptions + " years experience<br><br><br><br><br>";
			
			$("#message").css("background-color", "yellow");
			$("#message").html(myHTML);
					
		
		}); //end of click handler

}); // END OF READY
	

