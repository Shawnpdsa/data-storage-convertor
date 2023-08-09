let convertData=()=>{
    let input=document.getElementById("userInput").value;
let output=document.getElementById("displayOutput")

let inputType=document.getElementById("inputType").value;
let outputType=document.getElementById("outputType").value;
 
if(input ==="" & inputType=="" & outputType==""){
    output.classList.add("blink-error")
    output.innerHTML="Please fill all the required fields"
}
else{
    output.classList.remove("blink-error")
}
let kilobyte,megabyte,gigabyte,terabyte;
if(inputType=="kilobyte" & outputType=="kilobyte"){
    kilobyte=input;
    output.innerHTML=`${input}Kb =${kilobyte}Kb`;
}
else if(inputType=="kilobyte" & outputType=="megabyte"){
    megabyte=input/1024;
    output.innerHTML=`${input}Kb =${megabyte}Mb`;
}
else if(inputType=="kilobyte" & outputType=="gigabyte"){
    gigabyte=(input/1024) /1024;
    output.innerHTML=`${input}Kb =${gigabyte}Gb`;
}
else if(inputType=="kilobyte" & outputType=="terabyte"){
    terabyte=(input/1024)/1024/1024;
    output.innerHTML=`${input}Kb =${terabyte}Tb`;
}


if(inputType=="megabyte" & outputType=="kilobyte"){
    kilobyte=input*1024;
    output.innerHTML=`${input}Mb =${kilobyte}Kb`;
}
else if(inputType=="megabyte" & outputType=="megabyte"){
    megabyte=input;
    output.innerHTML=`${input}Mb =${megabyte}Mb`;
}
else if(inputType=="megabyte" & outputType=="gigabyte"){
    gigabyte=input/1024;
    output.innerHTML=`${input}Mb =${gigabyte}Gb`;
}
else if(inputType=="megabyte" & outputType=="terabyte"){
    terabyte=(input/1024)/1024;
    output.innerHTML=`${input}Mb =${terabyte}Tb`;
}

if(inputType=="gigabyte" & outputType=="kilobyte"){
    kilobyte=(input*1024)*1024;
    output.innerHTML=`${input}Gb =${kilobyte}Kb`;
}
else if(inputType=="gigabyte" & outputType=="megabyte"){
    megabyte=input*1024;
    output.innerHTML=`${input}Gb =${megabyte}Mb`;
}
else if(inputType=="gigabyte" & outputType=="gigabyte"){
    gigabyte=input;
    output.innerHTML=`${input}Gb =${gigabyte}Gb`;
}
else if(inputType=="gigabyte" & outputType=="terabyte"){
    terabyte=input/1024;
    output.innerHTML=`${input}Gb =${terabyte}Tb`;
}

if(inputType=="terabyte" & outputType=="kilobyte"){
    kilobyte=(input*1024)*1024*1024;
    output.innerHTML=`${input}Tb =${kilobyte}Kb`;
}
else if(inputType=="terabyte" & outputType=="megabyte"){
    megabyte=input*1024*1024;
    output.innerHTML=`${input}Tb =${megabyte}Mb`;
}
else if(inputType=="terabyte" & outputType=="gigabyte"){
    gigabyte=input*1024;
    output.innerHTML=`${input}Tb =${gigabyte}Gb`;
}
else if(inputType=="terabyte" & outputType=="terabyte"){
    terabyte=input;
    output.innerHTML=`${input}Tb =${terabyte}Tb`;
}



}