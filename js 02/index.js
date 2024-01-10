console.log('hellooo chaliye suru karte hee');



//object create

let rectangle={
    length:1,
    breadth:2,
    
    draw:function () {
        console.log('drawing rectanglr');
    }
};

//factory function

function createRectangle(len,bre) {
    return ractangle={
        length:len,
        breadth:bre,
        
        draw:function () {
            console.log('drawing rectanglr');
        }
    };
   
}


let rectangleobj1=createRectangle(5,4);
let rectangleobj2=createRectangle(2,3);
let rectangleobj3=createRectangle(7,9);


// rectangle.length;
// rrctangle.breadth;
// rectangle.draw();