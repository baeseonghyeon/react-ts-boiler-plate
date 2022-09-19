import { observable } from 'mobx';

const NumberStore = observable({
    // state
    num: 0,

    // action
    setIncreaseNumber() {
        this.num += 1;
    },

    setDecreaseNumber() {
        this.num -= 1;
    },
});

export default NumberStore;
