import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const url = '/explore/foods';

describe(
  'Testa todos os elementos da página de DRINKS', () => {
    test('01-Verificando se o icone profile existe.', () => {
      renderWithRouter(<App />, { route: url });
      const PROFILE_ICON = screen.getByTestId('profile-top-btn');
      expect(PROFILE_ICON).toBeInTheDocument();
    });

    test('02-Verificando se o titulo Done Recipes existe.', () => {
      renderWithRouter(<App />, { route: url });
      const TITLE_EXP = screen.getByText('Explore Foods');
      expect(TITLE_EXP).toBeInTheDocument();
    });

    test('03-Verificando se o botão By Ingredient existe', () => {
      renderWithRouter(<App />, { route: url });
      const BY_ING_BUTTON = screen.getByTestId('explore-by-ingredient');
      expect(BY_ING_BUTTON).toBeInTheDocument();
    });

    test('04-Verificando se o botão By Ingredient redireciona', async () => {
      const { history } = renderWithRouter(<App />, { route: url });
      const BY_ING_BUTTON = await screen.findByTestId('explore-by-ingredient');
      userEvent.click(BY_ING_BUTTON);
      expect(history.location.pathname).toBe('/explore/foods/ingredients');
    });

    test('05-Verificando se o botão By Nationality existe', async () => {
      renderWithRouter(<App />, { route: url });
      const BY_NAT_BUTTON = await screen.findByTestId('explore-by-nationality');
      expect(BY_NAT_BUTTON).toBeInTheDocument();
    });

    test('06-Verificando se o botão By Nationality redireciona', async () => {
      const { history } = renderWithRouter(<App />, { route: url });
      const BY_NAT_BUTTON = await screen.findByTestId('explore-by-nationality');
      userEvent.click(BY_NAT_BUTTON);
      expect(history.location.pathname).toBe('/explore/foods/nationalities');
    });

    test('07-Verificando se o botão Surprise Me existe', async () => {
      renderWithRouter(<App />, { route: url });
      const SURPRISE_BUTTON = await screen.findByTestId('explore-surprise');
      expect(SURPRISE_BUTTON).toBeInTheDocument();
    });

    test('08-Verificando se o botão Surprise Me redireciona', async () => {
      const { history } = renderWithRouter(<App />, { route: url });
      const DRINKS_BUTTON = await screen.findByTestId('explore-surprise');
      userEvent.click(DRINKS_BUTTON);
      expect(history.location.pathname).toBe('/explore/foods');
    });

    test('09-Verificando se o botão DRINKS existe', async () => {
      renderWithRouter(<App />, { route: url });
      const DRINKS_BUTTON = await screen.findByTestId('drinks-bottom-btn');
      expect(DRINKS_BUTTON).toBeInTheDocument();
    });

    test('10-Verificando se o botão DRINKS redireciona para /drinks', async () => {
      const { history } = renderWithRouter(<App />, { route: url });
      const DRINKS_BUTTON = await screen.findByTestId('drinks-bottom-btn');
      userEvent.click(DRINKS_BUTTON);
      expect(history.location.pathname).toBe('/drinks');
    });

    test('11-Verificando se o botão EXPLORE existe', async () => {
      renderWithRouter(<App />, { route: url });
      const EXPLORE_BUTTON = await screen.findByTestId('explore-bottom-btn');
      expect(EXPLORE_BUTTON).toBeInTheDocument();
    });

    test('12-Verificando se o botão EXPLORE redireciona para /explore', async () => {
      const { history } = renderWithRouter(<App />, { route: '/foods' });
      const EXPLORE_BUTTON = await screen.findByTestId('explore-bottom-btn');
      userEvent.click(EXPLORE_BUTTON);
      expect(history.location.pathname).toBe('/explore');
    });

    test('13-Verificando se o botão FOOD existe', async () => {
      renderWithRouter(<App />, { route: '/foods' });
      const EXPLORE_BUTTON = await screen.findByTestId('food-bottom-btn');
      expect(EXPLORE_BUTTON).toBeInTheDocument();
    });

    test('14-Verificando se o botão FOOD redireciona para /foods', async () => {
      const { history } = renderWithRouter(<App />, { route: url });
      const FOOD_BUTTON = await screen.findByTestId('food-bottom-btn');
      userEvent.click(FOOD_BUTTON);
      expect(history.location.pathname).toBe('/foods');
    });

    // test('?', () => {
    //   renderWithRouter(<App />);
    // });
  },
);
