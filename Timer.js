class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.onStart = callbacks.onStart;
        this.onTick = callbacks.onTick;
        this.onComplete = callbacks.onComplete;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        this.onStart(this.timeRemaining);
        this.tick();
        this.interval = setInterval(this.tick, 50);
    };

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            this.onComplete();
        } else {
            this.timeRemaining = this.timeRemaining - .05;
            this.onTick(this.timeRemaining);
        }
    };

    pause = () => {
        clearInterval(this.interval);
    }

    onDurationChange() {

    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }

}