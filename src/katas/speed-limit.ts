export function speedLimit(speed:number, signals: number[]){
    if(!signals.length) return 0;

    const fines = signals.reduce((acc, current) => {
        const exceedSpeed = speed - current ;
        if(exceedSpeed < 10) return acc;
        if( exceedSpeed < 20) return acc + 100; 
        if(exceedSpeed < 29) return acc + 250;
        return acc + 500;
    }, 0);
return fines;
}