// import dependencies
import React from 'react';
// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect';
import Math from './../Math';

// wrap all test in describe block 
// add another test to check for something
test('loads and displays greeting', async () => {
    // Arrange
    const { container, asFragment, debug } = render(<Math num1={19} operator="+" num2={341} />);
    debug();
    // Act
    // Assert
    expect(container).toContainHTML(`<span>360</span>`);

});

describe('Display', () => {
    let wrapper;
    // beforeEach(() => wrapper = shallow(<Math />));
    test('<div><span>num1={42} operator="-" num2={17}</span></div>', () => {
        expect(42 - 17).toBe(25);
    });
});


