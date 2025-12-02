import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Login from '../pages/Login.jsx';


vi.mock('../components/FirstpageH.jsx', () => ({
  default: () => <div>Mocked Header</div>
}));

vi.mock('../components/LoginContent.jsx', () => ({
  default: () => <div>Mocked Login Content</div>
}));

vi.mock('../components/FirstpageFooter.jsx', () => ({
  default: () => <div>Mocked Footer</div>
}));

describe('Página <Login />', () => {

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('debería renderizar el header, el footer y el contenido de login', () => {

    render(<Login />);

    const header = screen.getByText('Mocked Header');
    const content = screen.getByText('Mocked Login Content');
    const footer = screen.getByText('Mocked Footer');

    expect(header).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});