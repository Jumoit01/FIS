import React from 'react';
import { render, screen } from '@testing-library/react';


import Home from '../components/Home'

describe("Home Tests", () => {
    it('should render title', () => {
        render(<Home />);
        const title = screen.getByText("Faculty Information System")

        expect(title).toBeInTheDocument();
    })
    it('should render Login', () => {
        render(<Home />);
        const login = screen.getByText("Login")

        expect(login).toBeInTheDocument();
    })
    it('should render the filter option', () => {
        render(<Home />);
        const filterOption = screen.getByText("Choose your schedule:")

        expect(filterOption).toBeInTheDocument();
    })
})