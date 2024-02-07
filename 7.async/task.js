class AlarmClock {
    constructor (intervalId) {
      this.alarmCollection = [];
      this.intervalId = intervalId;
    }
  
    addClock (time, callBack, id) {

        // `${time.getHours()}:${time.getMinutes()}`
        let timeStart = `${time.getHours()}:${time.getMinutes()}`;

        if (id === undefined) {
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
  }
  