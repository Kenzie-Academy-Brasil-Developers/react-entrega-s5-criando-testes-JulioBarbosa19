import React from 'react';
import {render, screen} from "@testing-library/react";
import Search from '../../components/Search';

describe("Search Component Button", () =>{
    test("should be at the page", () => {
        render(<Search  />)
        const btn = screen.getByRole("button");
        expect(btn).toBeInTheDocument();
    })
})
