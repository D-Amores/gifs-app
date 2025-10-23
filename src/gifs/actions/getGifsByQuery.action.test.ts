import { describe, expect, test, vi } from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query.action";

import AxiosMockAdapter from "axios-mock-adapter";
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from "../../test/mocks/giphy.response.data";
import { before } from "node:test";

describe('getGifsByQuery', () => {
  let mock = new AxiosMockAdapter(giphyApi);

  before(() => {
    mock = new AxiosMockAdapter(giphyApi);
  });

  // test('should return a list of gifs', async () => {
  //   const gifs = await getGifsByQuery('cats');
  //   const [gif1] = gifs;

  //   expect(gif1).toStrictEqual({
  //     id: expect.any(String),
  //     title: expect.any(String),
  //     url: expect.any(String),
  //     width: expect.any(Number),
  //     height: expect.any(Number),
  //   });
  // });

  test('should return a list of gifs', async () => {
    mock.onGet('/search').reply(200, giphySearchResponseMock);

    const gifs = await getGifsByQuery('naruto');
    expect(gifs.length).toBe(10);

    for (const gif of gifs) {
      expect(gif).toStrictEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String),
        width: expect.any(Number),
        height: expect.any(Number),
      });
    }
  });

  test('should return an empty list of gifs if query is empty', async () => {
    mock.restore();
    const gifs = await getGifsByQuery('');
    expect(gifs.length).toBe(0);

  });

  test('should handle error when the API returns an error', async () => {

    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    mock.onGet('/search').reply(400, {
      data: {
        message: 'Bad Request'
      }
    });

    const gifs = await getGifsByQuery('naruto');

    expect(gifs.length).toBe(0);
    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything());

  });

});
