import React from 'react';
import {render, screen} from "@testing-library/react";
import Search from '../../components/Search';

describe("Search Component", () =>{
    test("should be at the page", () => {
        render(<Search error=''  />)
        const insiraCep = screen.getByPlaceholderText("Insira o CEP");
        expect(insiraCep).toBeInTheDocument();
    })
})

