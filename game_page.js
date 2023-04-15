var jdir=localStorage.getItem("ojorj");
var jardin=localStorage.getItem("luzaj");
var pjdir=0;
var pjardin=0;
var nextbots=jdir;
var barooms=jardin;
var hay_mas_de_donde_salió_eso="";
var es_es_______el_doradoooo="";
document.getElementById("mercurio").innerHTML=jdir+": "+pjdir+" puntos";
document.getElementById("venus").innerHTML=jardin+": "+pjardin+" puntos";
document.getElementById("tierra").innerHTML=nextbots+" preguntale";
document.getElementById("cinturon_de_asteroides").innerHTML=barooms+" respuestale";
document.getElementById("please").style.display="none";
function fisics(){
    hay_mas_de_donde_salió_eso=document.getElementById("marte").value;
    es_es_______el_doradoooo=hay_mas_de_donde_salió_eso.replaceAll("a","_");
    es_es_______el_doradoooo=es_es_______el_doradoooo.replaceAll("e","_");
    es_es_______el_doradoooo=es_es_______el_doradoooo.replaceAll("i","_");
    es_es_______el_doradoooo=es_es_______el_doradoooo.replaceAll("o","_");
    es_es_______el_doradoooo=es_es_______el_doradoooo.replaceAll("u","_");
    es_es_______el_doradoooo=es_es_______el_doradoooo.replaceAll("á","_");
    es_es_______el_doradoooo=es_es_______el_doradoooo.replaceAll("é","_");
    es_es_______el_doradoooo=es_es_______el_doradoooo.replaceAll("í","_");
    es_es_______el_doradoooo=es_es_______el_doradoooo.replaceAll("ó","_");
    es_es_______el_doradoooo=es_es_______el_doradoooo.replaceAll("ú","_");
    es_es_______el_doradoooo=es_es_______el_doradoooo.replaceAll("A","_");
    es_es_______el_doradoooo=es_es_______el_doradoooo.replaceAll("E","_");
    es_es_______el_doradoooo=es_es_______el_doradoooo.replaceAll("I","_");
    es_es_______el_doradoooo=es_es_______el_doradoooo.replaceAll("O","_");
    es_es_______el_doradoooo=es_es_______el_doradoooo.replaceAll("U","_");
    es_es_______el_doradoooo=es_es_______el_doradoooo.replaceAll("Á","_");
    es_es_______el_doradoooo=es_es_______el_doradoooo.replaceAll("É","_");
    es_es_______el_doradoooo=es_es_______el_doradoooo.replaceAll("Í","_");
    es_es_______el_doradoooo=es_es_______el_doradoooo.replaceAll("Ó","_");
    es_es_______el_doradoooo=es_es_______el_doradoooo.replaceAll("Ú","_");
    document.getElementById("júpter").innerHTML=es_es_______el_doradoooo;
    document.getElementById("please").style.display="block";
    document.getElementById("papers").style.display="none";
}
function giwnaran(){
answer=document.getElementById("saturno").value;
if(answer==hay_mas_de_donde_salió_eso){
    if(barooms==jdir){
        pjdir++;
    }
    else{
        pjardin++;
    }
}
if(barooms==jdir){
    barooms=jardin;
    nextbots=jdir;
}
else{
    barooms=jdir;
    nextbots=jardin;
}
document.getElementById("mercurio").innerHTML=jdir+": "+pjdir+" puntos";
document.getElementById("venus").innerHTML=jardin+": "+pjardin+" puntos";
document.getElementById("tierra").innerHTML=nextbots+" preguntale";
document.getElementById("cinturon_de_asteroides").innerHTML=barooms+" respuestale";
document.getElementById("please").style.display="none";
document.getElementById("papers").style.display="block";
document.getElementById("saturno").value=""
document.getElementById("marte").value=""
}