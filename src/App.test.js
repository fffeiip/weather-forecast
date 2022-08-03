import { render, screen } from '@testing-library/react';
import { Footer, Header, MainInformation, PeriodForecast } from './components/CityWeather/Forecast';
import TownSelect from './components/TownSelect/TownSelect';
import {api} from './services/weatherapi/api'
import {transformData} from './services/weatherapi/getForecast'
import {useEffect} from 'react'
import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';

let city = "Recife"
const fetchData = () => {
 return api.get('', {
    params: {
      q: city
    }
  }).then(({data}) => transformData(data))
}

test('renders town select', () => {
  render(<TownSelect />);
  const element = screen.getByText(/Recife/i);
  expect(element).toBeInTheDocument();
});

test('renders city weather main information component', async () => {
  let data = await fetchData()
  render(<MainInformation data={data}/>)
  const element = screen.getByAltText(/weather-icon/i)
  expect(element).toBeInTheDocument()

});

test('renders city weather header component', async () => {
  let data = await fetchData()
  render(<Header data={data}/>)
  const cityName = screen.getByText(/Recife/i)
  const cityWeather = screen.getByText(data.condition.text.toLowerCase())
  expect(cityName).toBeInTheDocument();
  expect(cityWeather).toBeInTheDocument();
});

test('renders city weather footer component', async () => {
  let data = await fetchData()
  render(<Footer data={data}/>)
  const element = screen.getByText(/sunrise/i)
  expect(element).toBeInTheDocument();
});

test('renders city weather period forecast component', async () => {
  let data = await fetchData()
  render(<PeriodForecast data={data}/>)
  const elements = screen.getAllByAltText(/weather-icon/i).length
  expect(elements).toEqual(4)
});