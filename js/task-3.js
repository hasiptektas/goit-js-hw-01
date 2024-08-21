function getElementWidth(content, padding, border) {

    const fullWidth = Number(content.split('px')[0]) + 
                    2 * Number(padding.split('px')[0]) + 
                    2 * Number(border.split('px')[0]);

    return fullWidth;
    
};

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));