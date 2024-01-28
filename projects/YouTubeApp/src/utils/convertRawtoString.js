export const convertRawtoString = (labelValue,isSub=false)=>{

    const num = Math.abs(Number(labelValue));

    if(num >= 1.0e9) {

        return(num/1.0e9).toFixed(0) +"B"; //150,0000,000 = 1 B
    }

    if(num >= 1.0e6){

        return(num/1.0e6).toFixed(0) +"M"; //15,000,00 = 1M
    }
    if(num >= 1.0e3){
        return(num/1.0e3).toFixed(isSub ? 2 : 0) +"K"; //1500 = 1.50 K

    }

    return num.toString();
}