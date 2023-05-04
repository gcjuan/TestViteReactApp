import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from "./App.js";

describe('something truthy and falsy', () => {
    it('renders the correct text', () => {
        render(<App />);
        const linkElement = screen.getByText('dsaddsadsadsa');
        expect(linkElement).toBeInTheDocument();
    });
});
