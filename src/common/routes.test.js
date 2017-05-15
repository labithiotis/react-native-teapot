import * as module from './routes';
const { routes } = module;
jest.unmock('./routes');

describe('routes', () => {
  it('should be a object', () => {
    expect(routes).toBeInstanceOf(Object);
  });

  Object.keys(routes).forEach(key => {
    describe(key, () => {
      it('should have screen defined', () => {
        expect(routes[key].screen).toBeInstanceOf(Function);
      });

      it('should have a upper case export', () => {
        expect(module[key.toUpperCase()]).toBeDefined();
      });
    });
  });
});
