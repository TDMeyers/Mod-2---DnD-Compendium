import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import alignmentsReducer from "./Slices/Character Data/alignmentsSlice";
import abilityScoresReducer from "./Slices/Character Data/abilityScoresSlice";
import backgroundsReducer from "./Slices//Character Data/backgroundsSlice";
import languagesReducer from "./Slices/Character Data/languagesSlice";
import classesReducer from "./Slices/Class/classesSlice";
import equipmentReducer from "./Slices/Equipment/equipmentSlice";
import proficienciesReducer from "./Slices/Character Data/proficienciesSlice";
import racesReducer from "./Slices/Races/racesSlice";
import skillsReducer from "./Slices/Character Data/skillsSlice";
import popupReducer from "./Slices/Site Functions/popupSlice";


const store = configureStore({
  reducer: {
    popup: popupReducer,
    alignments: alignmentsReducer,
    abilityScores: abilityScoresReducer,
    backgrounds: backgroundsReducer,
    languages: languagesReducer,
    classes: classesReducer,
    equipment: equipmentReducer,
    proficiencies: proficienciesReducer,
    races: racesReducer,
    skills: skillsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
