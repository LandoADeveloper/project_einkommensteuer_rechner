const selectYear = document.getElementById("selectYear")
const zvEInput = document.getElementById("zvEInput")
const output = document.getElementById("outputSection")

const handleCalc = ()=>{
    const tarifDivider = document.getElementById("grundtarif").checked ? 1:2
    const selectedOption = selectYear.options[selectYear.selectedIndex]
    const year = Number(selectedOption.value)
    let result=0
    switch (year) {
        case 2022:
            result= tarifDivider* (calc2022(zvEInput.value)/tarifDivider)
            
            break
        case 2021:
            result=tarifDivider* (calc2021(zvEInput.value)/tarifDivider)
            break
        case 2020:
            result=tarifDivider* (calc2020(zvEInput.value)/tarifDivider)
            break
        default:
            console.log("error no year selected")
    }
    renderOutput(result)


}

const calc2022 = (zvE) => {
    let ESt = 0
    let y = 0
    
    if(zvE <=10347) return ESt
    if(zvE > 10347 && zvE <= 14926) {
        y = (zvE - 10347)/10000
        ESt = (1088.67 * y + 1400)* y
        return ESt.toFixed(2)
    }
    let z = (zvE-14926)/10000
    if(zvE > 14926 && zvE <= 58596) {
        ESt = (209.43 * z +2397)*z +896.32
        return ESt.toFixed(2)
    }
    if(zvE > 58596 && zvE <= 277825) {
        ESt = 0.42*zvE - 9336.45
        return ESt.toFixed(2)
    }
    if(zvE > 277825 ) {
        ESt = 0.45*zvE - 17671.2
        return ESt.toFixed(2)
    }
}
const calc2021 = (zvE) => {
    let ESt = 0
    let y = 0
    
    if(zvE <=9744) return ESt
    if(zvE > 9744 && zvE <= 14753) {
        y = (zvE - 9744)/10000
        ESt = (995.21 * y + 1400)* y
        return ESt.toFixed(2)
    }
    let z = (zvE-14753)/10000
    if(zvE > 14753 && zvE <= 57918) {
        ESt = (208.85 * z +2397)*z +950.96
        return ESt.toFixed(2)
    }
    if(zvE > 57918 && zvE <= 274612) {
        ESt = 0.42*zvE - 9136.63
        return ESt.toFixed(2)
    }
    if(zvE > 274612 ) {
        ESt = 0.45*zvE - 17374.99
        return ESt.toFixed(2)
    }
}
const calc2020 = (zvE) => {
    let ESt = 0
    let y = 0
    
    if(zvE <=9408) return ESt
    if(zvE > 9408 && zvE <= 14532) {
        y = (zvE - 9408)/10000
        ESt = (972.87 * y + 1400)* y
        return ESt.toFixed(2)
    }
    let z = (zvE-14532)/10000
    if(zvE > 14532 && zvE <= 57051) {
        ESt = (212.02 * z +2397)*z +972.79
        return ESt.toFixed(2)
    }
    if(zvE > 57051 && zvE <= 270500) {
        ESt = 0.42*zvE - 8963.74
        return ESt.toFixed(2)
    }
    if(zvE > 270500 ) {
        ESt = 0.45*zvE - 17078.74
        return ESt.toFixed(2)
    }
}

const renderOutput = (result) => {
    output.innerHTML = result
}