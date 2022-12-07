import * as React from "react";
import * as renderer from "react-test-renderer";
import Button from './Button.comp';

it('Correctly assigns the varient', ()=>{
  const component = renderer.create(
    <p>TEST</p>
  );
  console.log('---------------------------------------');
  console.log(component);
  console.log('---------------------------------------');
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

})