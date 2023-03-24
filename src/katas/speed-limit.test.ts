import { speedLimit } from "./speed-limit";
 
describe('speed limit function', () => {
    it('should return 0 if no signals', () => {
        const speeds = [10,20,300];
        speeds.forEach(speed => {
            expect(speedLimit(speed, [])).toBe(0);
        })
    })

it('Should return 250 if speed is 100 and signals are [110, 100, 80]', ()=>{
    expect(speedLimit(100, [110, 100, 80])).toBe(250);
})
    it('Should return 250 if speed is 120 and signals are [110, 100, 80]', ()=>{
        expect(speedLimit(120, [110, 100, 80])).toBe(850);
    })

    test.each([50, 90, 100, 130])('Should return 0 if speed exceeds only by 9', (signal) => {
        const speed = signal + 9;
        expect(speedLimit(speed, [signal])).toBe(0);
      });
})
