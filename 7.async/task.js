class AlarmClock {
    constructor (intervalId) {
      this.alarmCollection = [];
      this.intervalId = intervalId;
    }
  
    addClock (time, callBack, id) {

        
        if (id === undefined) {
          throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.find(item => item.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        } else {
            this.alarmCollection.push({
                callBack,
                time, 
                canCall: true
            });
        }
     
    }
  }
  