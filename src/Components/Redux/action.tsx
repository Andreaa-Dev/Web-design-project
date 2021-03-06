import { createAction } from "@reduxjs/toolkit";

export const addOrder = createAction<number>("addOrder");
export const addFavItem = createAction<number>("addFavItem");
export const getUser = createAction("getUser");
export const addIcon = createAction("addIcon");
