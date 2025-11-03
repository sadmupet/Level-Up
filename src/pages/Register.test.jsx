import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Register from './Register.jsx';

vi.mock('../components/FirstpageH.jsx', () => ({
  default: () => <div>Mocked Header</div>
}));

vi.mock('../components/RegisterContent.jsx', () => ({
  default: () => <div>Mocked Register Content</div>
}));

vi.mock('../components/FirstpageFooter.jsx', () => ({
  default: () => <div>Mocked Footer</div>
}));

describe('Página <Register />', () => {

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('debería renderizar el header, el footer y el contenido de registro', () => {

    render(<Register />);

    const header = screen.getByText('Mocked Header');
    const content = screen.getByText('Mocked Register Content');
    const footer = screen.getByText('Mocked Footer');

    expect(header).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it('debería renderizar el texto estático "HOLAA"', () => {
    
    render(<Register />);

    // Buscamos un encabezado (h3) que tenga el texto "HOLAA"
    const holaaText = screen.getByRole('heading', { name: /holaa/i });

    expect(holaaText).toBeInTheDocument();
  });
});