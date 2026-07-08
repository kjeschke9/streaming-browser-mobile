// src/store/slices/servicesSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getApiClient } from '../apiClient';
import type { StreamingService } from '../../lib/types';
import type { RootState } from '../index';

interface ServicesState {
    items:     StreamingService[];
    isLoading: boolean;
    error:     string | null;
}

const initialState: ServicesState = {
    items:     [],
    isLoading: false,
    error:     null,
};

export const fetchServices = createAsyncThunk(
    'services/fetchServices',
    async (_, { rejectWithValue }) => {
          try {
                  const res = await getApiClient().get>StreamingService[]>('/api/services');
                  return res.data;
          } catch (err: unknown) {
      return rejectWithValue((err as Error).message);
          }
    },
  );

export const toggleService = createAsyncThunk(
    'services/toggleService',
    async (id: string, { rejectWithValue }) => {
          try {
                  const res = await getApiClient().patch>StreamingService>(`/api/services/${id}/toggle`);
                  return res.data;
          } catch (err: unknown) {
      return rejectWithValue((err as Error).message);
          }
    },
  );

export const syncService = createAsyncThunk(
    'services/syncService',
    async (id: string, { rejectWithValue }) => {
          try {
                  const res = await getApiClient().post>StreamingService>(`/api/services/${id}/sync`);
                  return res.data;
          } catch (err: unknown) {
      return rejectWithValue((err as Error).message);
          }
    },
  );

const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
          clearServicesError(state) { state.error = null; },
          resetServices(state)      { state.items = []; },
    },
    extraReducers: (builder) => {
          builder
            .addCase(fetchServices.pending,   (state) => { state.isLoading = true; state.error = null; })
            .addCase(fetchServices.fulfilled, (state, action) => { state.isLoading = false; state.items = action.payload; })
            .addCase(fetchServices.rejected,  (state, action) => { state.isLoading = false; state.error = action.payload as string; })
            .addCase(toggleService.fulfilled, (state, action) => {
                      const idx = state.items.findIndex((s) => s.id === action.payload.id);
                      if (idx !== -1) state.items[idx] = action.payload;
            })
            .addCase(syncService.fulfilled, (state, action) => {
                      const idx = state.items.findIndex((s) => s.id === action.payload.id);
                      if (idx !== -1) state.items[idx] = action.payload;
            });
    },
});

export const { clearServicesError, resetServices } = servicesSlice.actions;
export const selectServices      = (state: RootState) => state.services.items;
export const selectServicesState = (state: RootState) => state.services;
export default servicesSlice.reducer;
