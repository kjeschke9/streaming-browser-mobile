// src/services/mockData.ts
// Fixed: removed @streambrws/shared-types import  uses local shim.

import type { ContentTitle } from '../lib/types';

export const MOCK_TITLES: ContentTitle[] = [
  { id: '1',  title: 'Stranger Things',       serviceId: 'netflix',    externalId: 'nf-001', genre: 'Sci-Fi/Horror',    year: 2016, posterUrl: '' },
  { id: '2',  title: 'The Boys',              serviceId: 'prime',      externalId: 'pr-001', genre: 'Action',           year: 2019, posterUrl: '' },
  { id: '3',  title: 'Succession',            serviceId: 'hbo',        externalId: 'hb-001', genre: 'Drama',            year: 2018, posterUrl: '' },
  { id: '4',  title: 'Ted Lasso',             serviceId: 'apple',      externalId: 'at-001', genre: 'Comedy',           year: 2020, posterUrl: '' },
  { id: '5',  title: 'Andor',                 serviceId: 'disney',     externalId: 'dp-001', genre: 'Sci-Fi',           year: 2022, posterUrl: '' },
  { id: '6',  title: 'The Last of Us',        serviceId: 'hbo',        externalId: 'hb-002', genre: 'Drama/Horror',     year: 2023, posterUrl: '' },
  { id: '7',  title: 'Wednesday',             serviceId: 'netflix',    externalId: 'nf-002', genre: 'Comedy/Horror',    year: 2022, posterUrl: '' },
  { id: '8',  title: 'House of the Dragon',   serviceId: 'hbo',        externalId: 'hb-003', genre: 'Fantasy',          year: 2022, posterUrl: '' },
  { id: '9',  title: 'The Mandalorian',       serviceId: 'disney',     externalId: 'dp-002', genre: 'Sci-Fi/Western',   year: 2019, posterUrl: '' },
  { id: '10', title: 'Severance',             serviceId: 'apple',      externalId: 'at-002', genre: 'Thriller',         year: 2022, posterUrl: '' },
  { id: '11', title: 'Rings of Power',        serviceId: 'prime',      externalId: 'pr-002', genre: 'Fantasy',          year: 2022, posterUrl: '' },
  { id: '12', title: 'Yellowstone',           serviceId: 'peacock',    externalId: 'pc-001', genre: 'Drama/Western',    year: 2018, posterUrl: '' },
  { id: '13', title: 'Fallout',               serviceId: 'prime',      externalId: 'pr-003', genre: 'Sci-Fi',           year: 2024, posterUrl: '' },
  { id: '14', title: 'Shogun',                serviceId: 'hulu',       externalId: 'hu-001', genre: 'Historical Drama', year: 2024, posterUrl: '' },
  { id: '15', title: 'The Bear',              serviceId: 'hulu',       externalId: 'hu-002', genre: 'Drama/Comedy',     year: 2022, posterUrl: '' },
  { id: '16', title: 'Abbott Elementary',     serviceId: 'hulu',       externalId: 'hu-003', genre: 'Comedy',           year: 2021, posterUrl: '' },
  ];
