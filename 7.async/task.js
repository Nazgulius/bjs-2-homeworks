class AlarmClock {
    constructor () {
      this.alarmCollection = [];
      this.intervalId = null;
    }
  
    addClock (time, callback) {
        if (callback === undefined || time === null) {
            throw new Error ('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.find(item => item.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        } 
        
        this.alarmCollection.push({time, callback, canCall: true});
    }
   
    removeClock (time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    }

    getCurrentFormattedTime () {
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        if (hours < 10) {
            hours = '0' + hours;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        return hours + ':' + minutes;
    }

    start () {
        if (this.intervalId === null) {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach(item => {
                    if (this.getCurrentFormattedTime() === item.time && item.canCall === true) {
                        item.canCall = false;
                        item.callback();
                    }
                })
            }, 1000);
        } else {
            return 0;
        }
    }

    stop () {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls () {
        this.alarmCollection.forEach(item => item.canCall = true);
    }

    clearAlarms () {
        this.stop();
        this.alarmCollection = [];
    }
}
  