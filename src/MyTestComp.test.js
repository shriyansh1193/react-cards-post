import React from 'react';
import MyTestComp from './MyTestComponent';
import { create } from 'react-test-renderer';

describe('Our First Snapshot Test Case', () => {
    test('Testing the Button UI for the App', () => {
        let main = create(<MyTestComp />)
        expect(main.toJSON()).toMatchSnapshot();
    })
});


// describe('Changing our Button Name to Hide', () => {
//     test('toggle the button', () => {
//         let tree = create(<MyTestComp />);
//         let instance = tree.getInstance();

//         expect(instance.state.isActive).toBe(false)

//         // Change the State
//         instance.handleClick();

//         // isActive Property is Updated to 'true'
//         expect(instance.state.isActive).toBe(true);

//         expect(tree.toJSON()).toMatchSnapshot();    
//     })
// });

test('toggle the button', () => {
    let tree = create(<MyTestComp />);
    let instance = tree.getInstance();

    expect(instance.state.isActive).toBe(false)

    // Change the State
    instance.handleClick();

    // isActive Property is Updated to 'true'
    expect(instance.state.isActive).toBe(true);

    expect(tree.toJSON()).toMatchSnapshot();    
});

describe('Checking our Raining Status', () => {
    test('Check the Rain', () => {
        let tree = create(<MyTestComp />);
        let instance = tree.getInstance();

        expect(instance.state.isRaining).toBe(false)

        // Change the State
        instance.checkRain();

        // isRaining Property is Checked to 'rain' or 'not raining'
        expect(instance.state.isRaining).toBe(true);

        expect(tree.toJSON()).toMatchSnapshot();
    })
});