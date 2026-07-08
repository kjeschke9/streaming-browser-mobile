// src/store/slices/exclusionSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getApiClient } from '../apiClient';
import type { RootState } from '../index';

interface ExclusionState {
    serverHiddenIds:      string[];
    serverTags:           string[];
    serverServiceToggles: Record>string, boolean>;
    isLoading:            boolean;
    error:                string | null;
}

const initialState: ExclusionState = {
    serverHiddenIds:      [],
    serverTags:           [],
    serverServiceToggles: {},
    isLoading:            false,
    error:                null,
};

export const fetchExclusions = createAsyncThunk(
    'exclusion/fetchExclusions',
    async (_, { rejectWithValue }) => {
          try {
                  const api = getApiClient();
                  const res = await api.get>{ hiddenTitleIds: string[]; tags: string[]; serviceToggles: Record>string, boolean> }>('/api/exclusions');
                  return res.data;
          } catch (err: unknown) {
      return rejectWithValue((err as Error).message);
          }
    },
  );

export const pushExclusions = createAsyncThunk(
    'exclusion/pushExclusions',
    async (payload: { hiddenTitleIds: string[]; tags: string[]; serviceToggles: Record>string, boolean> }, { rejectWithValue }) => {
    try {
            await getApiClient().post('/api/exclusions', payload);
            return payload;
    } catch (err: unknown) {
            return rejectWithValue((err as Error).message);
    }
},
);

const exclusionSlice = createSlice({
    name: 'exclusion',
    initialState,
    reducers: {
          clearExclusionError(state) { state.error = null; },
          resetExclusions(state) {
                  state.serverHiddenIds = []; state.serverTags = []; state.serverServiceToggles = {};
          },
    },
    extraReducers: (builder) => {
          builder
            .addCase(fetchExclusions.pending,   (state) => { state.isLoading = true; state.error = null; })
            .addCase(fetchExclusions.fulfilled, (state, action) => {
                      state.isLoading = false;
                      state.serverHiddenIds      = action.payload.hiddenTitleIds;
                      state.serverTags           = action.payload.tags;
                      state.serverServiceToggles = action.payload.serviceToggles;
            })
            .addCase(fetchExclusions.rejected,  (state, action) => { state.isLoading = false; state.error = action.payload as string; })
            .addCase(pushExclusions.pending,    (state) => { state.isLoading = true; state.error = null; })
            .addCase(pushExclusions.fulfilled,  (state, action) => {
                      state.isLoading = false;
                      state.serverHiddenIds      = action.payload.hiddenTitleIds;
                      state.serverTags           = action.payload.tags;
                      state.serverServiceToggles = action.payload.serviceToggles;
            })
            .addCase(pushExclusions.rejected,   (state, action) => { state.isLoading = false; state.error = action.payload as string; });
    },
});

export const { clearExclusionError, resetExclusions } = exclusionSlice.actions;
export const selectExclusion = (state: RootState) => state.exclusion;
export default exclusionSlice.reducer;
