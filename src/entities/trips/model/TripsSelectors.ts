import type { TripDtoResponse } from "@shared/api/entities/trips";

export const selectTrips = (state: RootState): TripDtoResponse[] =>
  state.trips.trips;
export const selectLoading = (state: RootState): boolean => state.trips.loading;
export const selectError = (state: RootState) => state.trips.error;
export const selectPage = (state: RootState) => state.trips.page;
export const selectPageCount = (state: RootState) => state.trips.page_count;
export const selectTotalItems = (state: RootState) => state.trips.total_items;
export const selectChoosenTrip = (state: RootState) => state.trips.choosenTrip;
export const selectFilters = (state: RootState) => state.trips.filters;

