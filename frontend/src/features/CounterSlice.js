import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import CounterService from './CounterService';

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    counter: null,
}

const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        resetSuccess(state) {
            state.isSuccess = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(incCounter.fulfilled, (state, actions) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
            })
            .addCase(incCounter.rejected, (state, actions) => {
                state.isLoading = false
                state.isError = true
            })
            .addCase(incCounter.pending, (state, actions) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
            })

            .addCase(viewCounter.fulfilled, (state, actions) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.counter = actions.payload
            })
            .addCase(viewCounter.rejected, (state, actions) => {
                state.isLoading = false
                state.isError = true
            })
            .addCase(viewCounter.pending, (state, actions) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
            })
    }
});

export const incCounter = createAsyncThunk(
    "incCounter",
    async (thunkAPI) => {
        try {
            return await CounterService.incCounter()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.toString())
        }
    }
)

export const viewCounter = createAsyncThunk(
    "viewCounter",
    async (thunkAPI) => {
        try {
            return await CounterService.viewCounter()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.toString())
        }
    }
)


export const { resetSuccess } = CounterSlice.actions

export default CounterSlice.reducer