const utils = require('./utils')
it('Should add two numbers', ()=>{
    var res  = utils.add(23,34);

    if(res!= 57)
    throw new Error('Value not correct');
});

it()