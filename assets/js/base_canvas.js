function cc_hw(h=null, w=null) {

    // console.log("h, w = ", h, w);
    if (h != null && w != null) {
        var cnv = createCanvas(h, w);
        cnv.parent('sketch-holder');
        background(255, 0, 200);
    }
    
    else {
        throw 'Provide h and w';
    }
}

function cc_s(s=null) {

    // console.log("s = ", s);
    if (s != null) {
        var cnv = createCanvas(windowWidth*s, windowHeight*s);
        cnv.parent('sketch-holder');
        background(255, 0, 200);
    }
    
    else {
        throw 'Provide s';
    }
}