const topics = [
'world_20200524-1530','trump_20200524-1530','memori_20200524-1530','coronavirus_20200524-1530','case_20200524-1530','pandem_20200524-1430','black_20200524-1430','biden_20200524-1330','ain_20200524-1010','summer_20200523-2130','weekend_20200523-1700','covid_20200523-1400','time_20200523-1330','beach_20200523-1230','reopen_20200523-1200','china_20200523-1100','open_20200523-0330','open_20200523-0300','open_20200523-0230'
]
const VARtopics = [
'coronavirus','trump','black','ain','world','memori','biden','pandem','case'
]
function setupImgBox(){
    var myToken=document.getElementById("issueButton").value;
    var myIssue = myToken.split('_')
    console.log(myIssue)
    issue = myIssue[1] + '_' + myIssue[0]
    img_name = issue + ".jpg";
    var newHTML = '<img src = "./img/';
    newHTML += img_name;
    newHTML += '" width=90%>';
    document.getElementById("imgBox").innerHTML = newHTML;
};
function setupVARImgBox(){
    var myToken=document.getElementById("VARButton").value;
    var myIssue = myToken
    issue = myIssue
    img_name = issue + ".jpg";
    var newHTML = '<img src = "./models/VAR/';
    newHTML += img_name;
    newHTML += '" width=90%>';
    document.getElementById("imgBox").innerHTML = newHTML;
};
function setupDropdownBox(){
    newHTML = '<table id="SelectTable">'
    newHTML += '<caption><i>Select a Series</i></caption>'
    newHTML += '<tr><th>Issue (last updated)</th><th>VAR Model</th></tr>'
    newHTML += '<td><select id="issueButton" onchange="setupImgBox()">';
    topics.forEach(topic => newHTML+= '<option value='+topic+'>'+topic+'</option>');
    newHTML += '</select></td>'
    newHTML += '<td><select id="VARButton" onchange="setupVARImgBox()">';
    VARtopics.forEach(topic => newHTML+= '<option value='+topic+'>'+topic+'</option>');
    newHTML += '</select></td>'
    newHTML += '</tr></table>';
    document.getElementById("dropdowns").innerHTML = newHTML;
};
