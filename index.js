const socialistLogic = function(wage1, wage2, costs) {

    const wages = [new Big(wage1), new Big(wage2)];
    const higherWage = Math.max(...wages);
    const lowerWage = Math.min(...wages);
    const higherPercentage = new Big( ( (0.5 - ( 0.5 * (lowerWage / higherWage) ) ) + 0.5 ) );
    const lowerPercentage = new Big(1).minus(higherPercentage);
    const lowerCost = costs * lowerPercentage;
    const higherCost = costs * higherPercentage;
    let messages = [];
    messages.push(`person1 wage ${higherWage} costs ${higherCost} remaining ${higherWage - higherCost} percentage ${higherPercentage * 100}%`);
    messages.push(`person2 wage ${lowerWage} costs ${lowerCost} remaining ${lowerWage - lowerCost} percentage ${lowerPercentage * 100}%`);
    return messages;

};

const capitalistLogic = function() {

};

const communistLogic = function() {

}

const formual = {
    
    1: capitalistLogic,
    2: socialistLogic,
    3: communistLogic 
};

var app = new Vue({ 
    el: '#app',
    data: {
        output: ""
    },
    methods: {
    	submit: function(event) {
    		event.preventDefault();
    		const messages = formual[this.type](this.wage1,this.wage2,this.costs);
    		this.output = messages;
    	}
    }
});