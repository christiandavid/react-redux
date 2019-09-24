import mockAxios from 'axios';
import mockStore from '../test/utils/mockStore';
import getAction from '../test/utils/getAction';
import addText from './index';

describe('Text actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      text: [],
    });
  });

  it('Should create a text when passed a text string', async () => {
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: { text: 'Hello World!' },
    }));
    store.dispatch(addText('Hello World!'));
    expect(
      await getAction(store, 'ADD_TEXT'),
    ).toEqual({ type: 'ADD_TEXT', payload: { text: 'Hello World!' } });
  });
});
