import { configureStore } from '@reduxjs/toolkit';
import { postAPI } from '../services/postService';

const store = configureStore({
	reducer: {
		[postAPI.reducerPath]: postAPI.reducer, 
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(postAPI.middleware),
	devTools: process.env.NODE_ENV !== 'production'
});

export default store;