//Reguired abilities of a calculator;
//accept user inputs of number, operator, and another number
//should accept decimal numbers
//store inputs
//recognize input and perform calculations
//return a result

//optional festures;
//should aacept longer arithmetic poerations.
//display aall input as it is beeing enterred
//store previous total as start of next operation
//clear button should clear all entries 
//shoild prevent invalid inputs (operators next to each other, two decimal points)

const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click', event => {
        const{target} = event;
        const{value} = target;
        if(!target.matches('button')) {
            return;  //this rreutrn is not neccessary here
        }else{
            calculator.parseInput(value)
            //pass value to parse
            //console.log(value)
        }
    })

const calculator = {
    displayText: '0',
    prevTotal: null,

    // parseInput(value){
    //     if(this.displayText==='0') {
    //         this.displayText = ''
    //     }

        parseInput(value){
        //have any of the "special buttons" been clicke
        switch(value) {
            case '=':
                //calculator the answer
                this.calcAnswer(this.displayText)
                break;
            case 'AC':
                this.clearAll()
                //clear screen and stored values 
                break;
            case '.':
                if(this.displayText == 0){
                    this.addText('0.')
                    //pass '0.' into add text method
                }else{
                    this.addText(value)
                    //add value to text string
                }
                break;
            default:
                this.addText(value)
                 //add value to text string
                 break;
        }

        
    },

    addText(value) {
        if(this.displayText==='0') {
            this.displayText = ''
        }else if(this.prevTotal !== null) {
            this.displayText = this.prevTotal
            this.prevTotal = null
        }
        if (isNaN(+(value)) && isNaN(+(this.displayText))
            /*user has entered an invalid sequence dont proceed
            check whether the last char  in display AND */){
            if(isNaN(this.displayText.slice(-1))){
                return;
            }
        }
        this.displayText += value
        this.outputText(this.displayText)
        //output display text to screen
    },

    outputText(text){
        document.querySelector('.calculator-screen').value = text
    },

    calcAnswer(equation) {
        //console.log(eval(equation))
         let result = Function("return " + equation)()
         this.outputText(result)
    },

    clearAll(){
        this.displayText = '0',
        this.prevTotal = null,
        this.outputText(this.displayText)
    }
}

