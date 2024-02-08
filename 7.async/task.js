class AlarmClock {
    constructor (intervalId) {
      this.alarmCollection = [];
      this.intervalId = intervalId;
    }
  
    addClock (time, callBack) {
        // let time = new Date();
        // let timeStart = `${time.getHours()}:${time.getMinutes()}`;
        // let timeStart = time.getHours() + ":" + time.getMinutes();

        if (time === undefined && callBack === undefined) {
          throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.find(item => item.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        } else {
            this.alarmCollection.push({
                callBack: callBack,
                time: time, 
                canCall: true
            });
        }
    }

    removeClock (time) {
        this.alarmCollection.filter((item, i, arr) => {
            if (item.time === time) { 
                arr.splice(i, 1); 
            }
        });
    }

    getCurrentFormattedTime () {
        let time = new Date();
        return `${time.getHours()}:${time.getMinutes()}`;
    }

    start () {
        if (this.intervalId !== undefined) {
            return 0;
        }

        this.intervalId = this.alarmCollection.forEach(item => {            
            if (item.time === new Date() && canCall === true) {
                canCall = false;
                callback;
            }
        });
    }

    stop () {
        clearInterval();
        this.intervalId = null;
    }

    resetAllCalls () {
        this.alarmCollection.forEach(item => item.canCall = true);
    }

    clearAlarms  () {
        stop();
        this.alarmCollection = [];
    }
}
  