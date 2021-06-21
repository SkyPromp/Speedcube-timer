class StopWatch{
    constructor() {
        self.milliseconds = 0;
        self.seconds = 0;
        self.minutes = 0;
        self.hours = 0;
    }

    stopwatch(){
        // calculate next time
        self.milliseconds++;
        if (self.milliseconds === 1000){
            self.milliseconds = 0;
            self.seconds++;
            if (self.seconds === 60){
                self.seconds = 0;
                self.minutes++;
                if (self.minutes === 60){
                    self.minutes = 0;
                    self.hours++;
                }
            }
        }

        // Get leading zero's function
        const zeroPad = (num, places) => String(num).padStart(places, '0');

        // Display time
        if (self.hours !== 0){
            document.getElementById("display").innerHTML = `${zeroPad(self.hours, 2)}:${zeroPad(self.minutes, 2)}:${self.seconds}.${zeroPad(self.milliseconds, 3)}`;
        }else if (self.minutes !== 0){
            document.getElementById("display").innerHTML = `${zeroPad(self.minutes, 2)}:${self.seconds}.${zeroPad(self.milliseconds, 3)}`;
        } else {
            document.getElementById("display").innerHTML = `${self.seconds}.${zeroPad(self.milliseconds, 3)}`;
        }
    }
}





