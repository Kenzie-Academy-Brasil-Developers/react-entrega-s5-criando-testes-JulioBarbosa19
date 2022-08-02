import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import Search from '../../components/Search';
import MockAdapter from 'axios-mock-adapter';
import api from '../../services';

const apiMock = new MockAdapter(api)

const mockSearch = jest.fn()
const mocksetCep = jest.fn()
const mockCep = "17067640"
const mockCeps = {
  cep: "",
}

jest.mock("./../../providers/CepProvider", () => {
  return {
    useLocateCep: () => ({
      handleSearch: mockSearch,
      cepNumber: mockCep,
      setCepNumber: mocksetCep,
      ceps: mockCeps,
    }),
  }
})

describe("Test input made by users", () => {
    test("Should search cep address", async () => {
        apiMock.onGet("17067640").replyOnce(200, {});
        render(<Search />);

        const input = screen.getByPlaceholderText(/Insira o CEP/i);
        const button = screen.getByRole("button");

        fireEvent.change(input, {
            target: {
                value: '17067640'
            }
        }) 
        fireEvent.click(button);

       

       await  waitFor(() => {
        expect(input.value).toBe("17067640");
       })

  

      
    })
})