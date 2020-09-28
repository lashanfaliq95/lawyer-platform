import { combineReducers } from 'redux';

const difficultyReducer = (selectedDifficulty = null) => selectedDifficulty;

export default combineReducers({ difficulty: difficultyReducer });
