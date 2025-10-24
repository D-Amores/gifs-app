import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import useGifs from "./useGifs";

describe('useGifs', () => {

  test('should return default values and methods', () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs).toBe(0);
    expect(result.current.previousTerms).toBe(0);
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handleTermClicked).toBeDefined();

  });

  test('should return a list of gifs', async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch('goku');
    })
    
    expect(result.current.gifs.length).toBe(10);

  });

  test('should return a list of gifs term clicked', async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClicked('goku');
    })
    
    expect(result.current.gifs.length).toBe(10);
  });

});
