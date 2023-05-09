    let imgg=document.getElementById('imma');      //reading image
    let inputile=document.getElementById('MyFile');   //reading file
    let imgs=document.getElementById('imm');
    inputile.onchange=function(){
        imgg.src=URL.createObjectURL(inputile.files[0]);
    }
    
function generate()
{
   //  Reading personal details  and obj of resume
    var namee=document.getElementById("name").value;
    var emaill=document.getElementById('email').value;
    var addrr=document.getElementById('addess').value;    
    var phnoo=document.getElementById('phoneno').value; 
    var datt=document.getElementById('dte').value;
    var objj=document.getElementById('obj').value;  
    
    
    // reading educational details
    var ye11=document.getElementById('ye1').value; 
    var ye011=document.getElementById('ye01').value; 
    var in11=document.getElementById('in1').value;
    var cgp=document.getElementById('gpa').value; 
    var perr1=document.getElementById('per1').value; 

    var ye22=document.getElementById('ye21').value;  
    var ye022=document.getElementById('ye22').value; 
    var in22=document.getElementById('in2').value; 
    var perr2=document.getElementById('per2').value; 

    // Reading work experiences
    var ye33=document.getElementById('ye31').value; 
    var ye033=document.getElementById('ye32').value; 
    var compa=document.getElementById('company').value; 
    var jobtit=document.getElementById('jobtitle').value; 
    var jobdes=document.getElementById('jobdesc').value; 
    var awardss=document.getElementById('awards').value; 

    // Reading skills 
     
    var skil1=document.getElementById('sk1').value; 
    var skil2=document.getElementById('sk2').value; 
    var skil3=document.getElementById('sk3').value; 

    // Reading Hobbies mWindow.document.write();
    var hoob1=document.getElementById('hb1').value; 
    var hoob2=document.getElementById('hb2').value; 
    var hoob3=document.getElementById('hb3').value; 

    var k= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var s = /^[0-9]+$/;
    
      
    if(namee=="" || emaill=="" || addrr=="" || phnoo=="" || objj=="")
    {
        alert("Please Fill Personal Details");
    } 
    else if(ye11=="" || ye011=="" || in11 =="" || cgp=="" || perr1=="")
    {
        alert("Please Fill SSC  Details \nIf not studied place 0");
    }
    else if(ye22=="" || ye022=="" ||  in22=="" || perr2=="")
    {
        alert("Please Fill Higher Education details");
    }
    else if(ye33=="" || ye033=="" || compa=="" || jobtit=="" || jobdes=="" || awardss=="")
    {
        alert("Please Fill company detials");
    }
    else if(skil1=="" || skil2=="" || skil3=="" )
    {
        alert("Please Fill skills");
    }
    else if(hoob1=="" || hoob2=="" || hoob3=="")
    {
        alert("Please Fill Hobbies");
    } 
    else if(emaill.match(k)!=emaill )
    {
        alert("Enter correct Email address");
    }
    else if(phnoo.match(s)!=phnoo)
    {
        alert("Enter correct Phone number");
    }
    // else if(ye11.length(4)!==ye11.length && ye011.length(4)!==ye011.length && ye22.length(4) && ye022.length(4) && ye33.length(4) && ye033.length(4))
    // {
    //     alert("Please Enter Correct Year");
    // }
    else{
        alert("Registered");
        var mWindow = window.open("", "MsgWindow", "width=1000 ,height=1000");
    }
    // var mWindow = window.open("", "MsgWindow", "width=1000 ,height=1000");
    //reading image
   
   //writing html page into java script to generate resuem
    mWindow.document.write('<html> <head> <meta charset="UTF-8" /> <title>Resume</title> <meta name="viewport" content="width=device-width initial-scale=1" >');
    mWindow.document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"> <link rel="stylesheet" href="resultres.css">');
    mWindow.document.write('    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>  </script>    ');  
//style to body tag
    mWindow.document.write('<div class="container">'); //container
    mWindow.document.write('      <h1 class="text-center">Resume</h1><b><hr></b>  ');
    mWindow.document.write('   <div class="row abc">'); //row 1
    mWindow.document.write('      <div class="col-sm-4 " id="pers"> '); //dividing the 3 columns to insert the personal details
    mWindow.document.write('           <div class="row">'); 
    mWindow.document.write('               <fieldset id="pd">  <img id="imm" alt="" src= '+imgg.src+' > ');
    mWindow.document.write('                        <h4><span class="glyphicon glyphicon-user"></span> <b>Personal Details</b></h4>');
    // mWindow.document.write('                        <table class="table"> '); //creating table for storing personal details
    // mWindow.document.write('                           <tbody> <tr> <td>Name<span id="sp">:-</span></td> <td>'+namee+'</td> </tr> <tr> <td>Email<span id="sp">:-</span></td> <td>'+emaill+'</td> </tr> <tr> <td>PhoneNumber<span id="sp">:-</span></td> <td> '+phnoo+'</td> </tr> <tr> <td> Date of birth<span id="sp">:-</span></td> <td>' +datt+'</td> </tr> <tr> <td>Address<span id="sp">:-</span></td> <td>'+addrr+'</td> </tr> </tbody> </table>');
    mWindow.document.write('                          <div class="tab">  <div class="row flxd"> <div class="col-sm-5"><b>Name</b> </div> <div class="col-sm-7">'+namee+'</div> </div> <br><div class="row flxd"> <div class="col-sm-5"><b>Email</b></div> <div class="col-sm-7">'+emaill+'</div> </div> <br><div class="row flxd"> <div class="col-sm-5"><b>Phone No</b></div> <div class="col-sm-7">'+phnoo+'</div> </div> <br> <div class="row flxd"> <div class="col-sm-5"><b>Date of birth</b></div> <div class="col-sm-7"> '+datt+'</div> </div> <br> <div class="row flxd"> <div class="col-sm-5"><b>Address</b></div> <div class="col-sm-7">'+addrr+'</div> </div></div>');    
    mWindow.document.write('                </fieldset> </div> </div>'); //closes the tbody ,row ,column 3 
    mWindow.document.write('      <div class="col-sm-8 " id="det"> <div class="row"> '); //creating columns 7 to insert other vallues
    mWindow.document.write('      <h4> <span class="glyphicon glyphicon-hand-right"></span> <b>Carrer Object:</b></h4> <p>'+objj+'</p> <hr> <fieldset>');//creating carrer object values
    mWindow.document.write('      <h4> <span class="glyphicon glyphicon-hand-right"></span> <b>Educational details:</h4> <div class="row"> <div class="col-sm-4">  <b>'+ye11+'-'+ye011+'</b>: </div> <div class="col-sm-8"> <p> Studied in '+in11+'</p> <p>i got '+cgp+' with '+perr1+'<b>%</b> in SSC </p> </div> </div> '); //print ssc details
    mWindow.document.write('                                    <div class="row"> <div class="col-sm-4"> <b>'+ye22+'-'+ye022+'</b>: </div> <div class="col-sm-8"> <p> Studied in '+in22+' </p> <p>i got ' +perr2+'<b>%</b> in Higher education </p> </div> </div> </fieldset><hr>');     //printing higher education details
    mWindow.document.write('               <fieldset> <h4> <span class="glyphicon glyphicon-hand-right"></span> <b>WORK EXPERIENCE</b></h4>     <div class="row"> <div class="col-sm-3"> <p><b>'+ye33+'-'+ye033 +':</b></p> </div> <div class="col-sm-8"> <p>Worked in'+compa+ 'Company As '+jobtit+' </p> <p>My Job is to do '+jobdes+' </p> <p>I have received'+awardss+'</p>    </div> </div> </fieldset><hr> ');    //inserting work experience
    mWindow.document.write('               <fieldset> <h4> <span class="glyphicon glyphicon-hand-right"></span> <b>Skills</b></h4> <p>1.'+skil1+'<br>2.'+skil2+'<br>3.'+skil3+'</p> </fieldset>');         //inserting sills 
    mWindow.document.write('               <fieldset> <h4> <span class="glyphicon glyphicon-hand-right"></span> <b>Hobbies</b></h4>             <p>1.'+hoob1+'<br>2.'+hoob2+'<br>3.'+hoob3+'</p> </fieldset> </div> </div>');  //closing 1 row and column 7 divs
    mWindow.document.write('</div> </div>'); //closing row and contanier
    mWindow.document.write('<button  class="btn btn-success " id="btt" onclick="window.print()">Print</button>    ');
    mWindow.document.write('</body>');
    mWindow.document.write('</html>');
}