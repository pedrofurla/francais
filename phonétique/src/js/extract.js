// Extract contents from http://en.wikipedia.org/wiki/Extended_Speech_Assessment_Methods_Phonetic_Alphabet into a 
// new window containing JSON code
var table=function(id) { 
    console.debug('entrou',$);
    var tab=$('#'+id+' tr:not(:first)');//.filter(function(x) { return x<5});     
    return tab.map( function(x,y) {
        var el=$('td:not(:last-child) > :first-child, td:last-child',this);
        console.debug(el);
        var size=el.get().length;
        var mod = size==5 ? 0 : 1; 
        return "{ xsampa:'"+el.get(0).innerHTML+"', "+
                "ipa:'"+el.get(1).innerHTML+"', "+
                "ipaImg:'"+(size==5 ? $('img',el).get(0).src : "")+"', "+
                "ipaRef:'"+el.get(3-mod).href+"', "+
                "ipaName:'"+el.get(3-mod).innerHTML+"', "+
                "usageHtml:'"+el.get(4-mod).innerHTML+"' "+
        "},\n"
    }) 
}
var table2=function(id) { 
    console.debug('entrou',$);
    var tab=$('#'+id+' tr:not(:first)');//.filter(function(x) { return x<5});     
    return tab.map( function(x,y) {
        var el=$('td',this);       
        console.debug(el);
        return "{ xsampa:'"+el.get(0).firstChild.innerHTML+"', "+
                "ipa:'"+(el.get(1).firstChild!=null ? el.get(1).firstChild.innerHTML : '')+"', "+
                "ipaImg:'"+($('img',el).get(0)!=undefined ? $('img',el).get(0).src : '')+"', "+
                "desc:'"+el.get(3).innerHTML+"', "+                
                "usageHtml:'"+el.get(4).innerHTML +"' "+
        "},\n"
    }) 
}
var table3=function(id) { 
    console.debug('entrou',$);
    var tab=$('#'+id+' tr:not(:first)');//.filter(function(x) { return x<5});     
    return tab.map( function(x,y) {
        var el=$('td',this);
        console.debug(el);
        return "{ xsampa:'"+el.get(0).firstChild.innerHTML+"', "+
                "ipa:'"+(el.get(1).firstChild!=null ? el.get(1).firstChild.innerHTML : '').replace("&nbsp;","").replace(" ","")+"', "+
                "ipaImg:'"+($('img',el).get(0)!=undefined ? $('img',el).get(0).src : '')+"', "+
                "desc:'"+el.get(3).innerHTML+"' "+
        "},\n"
    }) 
}

var win = window.open();
win.document.writeln("// Lowercase") 
win.document.open();
table('sortable_table_id_0').each(function(x,y) { 
	win.document.write(y) 
});
win.document.writeln("//<br/>\n// Uppercase") 
table('sortable_table_id_1').each(function(x,y) { 
	win.document.write(y) 
});
win.document.writeln("//<br/>\n// Other symbols") 
table2('sortable_table_id_2').each(function(x,y) {
	win.document.write(y) 
});
win.document.writeln("//<br/>\n// Diacritics") 
table3('sortable_table_id_3').each(function(x,y) {
	win.document.write(y) 
});
win.document.close();