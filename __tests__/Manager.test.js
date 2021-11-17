// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Mladen', 89, 'mladennoemail@yahoo.com', 4);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Mladen', 89, 'mladennoemail@yahoo.com.', );

    expect(manager.getRole()).toEqual("Manager");
});