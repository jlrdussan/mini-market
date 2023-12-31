import {
  deleteFromApi,
  getFromApi,
  patchFromApi,
  postFromApi,
  putFromApi,
} from 'utils/api';
import axiosClient from 'config/axios';

jest.mock('config/axios');

let apiSpy;

describe('getFromApi', () => {
  test('should call get in axios', async () => {
    await getFromApi({ url: '/test' });
    apiSpy = jest.spyOn(axiosClient.prototype, 'constructor');
    expect(apiSpy).toHaveBeenCalled();
    expect(apiSpy).toHaveBeenCalledWith({ url: '/test', method: 'GET' });
  });

  test('should call post in axios', async () => {
    await postFromApi({ url: '/test' });
    apiSpy = jest.spyOn(axiosClient.prototype, 'constructor');
    expect(apiSpy).toHaveBeenCalled();
    expect(apiSpy).toHaveBeenCalledWith({ url: '/test', method: 'POST' });
  });

  test('should call put in axios', async () => {
    await putFromApi({ url: '/test' });
    apiSpy = jest.spyOn(axiosClient.prototype, 'constructor');
    expect(apiSpy).toHaveBeenCalled();
    expect(apiSpy).toHaveBeenCalledWith({ url: '/test', method: 'PUT' });
  });

  test('should call patch in axios', async () => {
    await patchFromApi({ url: '/test' });
    apiSpy = jest.spyOn(axiosClient.prototype, 'constructor');
    expect(apiSpy).toHaveBeenCalled();
    expect(apiSpy).toHaveBeenCalledWith({ url: '/test', method: 'PATCH' });
  });

  test('should call delete in axios', async () => {
    await deleteFromApi({ url: '/test' });
    apiSpy = jest.spyOn(axiosClient.prototype, 'constructor');
    expect(apiSpy).toHaveBeenCalled();
    expect(apiSpy).toHaveBeenCalledWith({ url: '/test', method: 'DELETE' });
  });
});
