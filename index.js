const durationInput = document.querySelector('.timer__duration');
const startButton = document.querySelector('.btn-start');
const pauseButton = document.querySelector('.btn-pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(
    durationInput,
    startButton,
    pauseButton,
    {
        onStart(totalDuration) {
            duration = totalDuration;
        },
        onTick(timeRemaining) {
            circle.setAttribute('stroke-dashoffset', 
                perimeter * timeRemaining / duration - perimeter
            );
        },
        onComplete() {
            console.log('timer complete');
        }
    }
);
