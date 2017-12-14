(<any>global).requestAnimationFrame = (cb: any) => {
  setTimeout(cb, 0);
};

import * as Enzyme from 'enzyme';
const ADAPTER = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new ADAPTER() });

export const mount = Enzyme.mount;
export const shallow = Enzyme.shallow;
