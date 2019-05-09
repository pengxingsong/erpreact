import React from "react";
import { shallow, mount, render } from "enzyme";
import toJson from "enzyme-to-json"; 
import App from '../src/App';

test('test:/src/app.render', () => {
  const Guide_render = render(
    <App /> //直接使用store将引入的store传给待测组件
  );
  console.log(toJson(Guide_render))
  //expect(toJson(Guide_render)).toMatchSnapshot();  //生成快照
});