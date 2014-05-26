function layout(){ 

    var browserWidth = self.innerWidth;
        
    // Narrow CSS rules 
    if (browserWidth < 640)
    { 
        link("narrow");
    } 
    // Normal (default) CSS rules 
    if ((browserWidth >= 640) && (browserWidth <= 960))
    { 
        link("adaptive");
    } 
    // Wide CSS rules 
    if (browserWidth > 960)
    { 
        link("wide"); 
    } 
}

function link(name)
{
    var ss = document.createElement("link");
    ss.type = "text/css";
    ss.rel = "stylesheet";
    ss.href = "css/"+name+".css";
    document.getElementsByTagName("head")[0].appendChild(ss);
}


