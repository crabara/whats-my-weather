import _ from 'lodash';

import mkAction from '../mkAction';

describe('src::utils::mkAction', () => {
  it('when passed type and payload returns an object with type and payload', () => {
    const payload = {
      data: 'Hello',
      type: 'test',
    };
    const type = () => {};
    const combined = {
      type,
      payload,
    };

    expect(_.isEqual(mkAction(type, payload), combined)).toBe(true);
  });
});
