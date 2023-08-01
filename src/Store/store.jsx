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
import spellsReducer from "./Slices/Spells/spellsSlice";
import conditionsReducer from "./Slices/Game Mechanics/conditionsSlice";
import damageTypesReducer from "./Slices/Game Mechanics/damageTypesSlice";
import magicSchoolsReducer from "./Slices/Game Mechanics/magicSchoolsSlice"
import featsReducer from "./Slices/FeatsAndFeatures/featsSlice";
import featuresReducer from "./Slices/FeatsAndFeatures/featuresSlice";
import monstersReducer from "./Slices/Monsters/monstersSlice";
import rulesReducer from "./Slices/Rules/rulesSlice";
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
    spells: spellsReducer,
    skills: skillsReducer,
    conditions: conditionsReducer,
    damageTypes: damageTypesReducer,
    magicSchools: magicSchoolsReducer,
    feats: featsReducer,
    features: featuresReducer,
    monsters: monstersReducer,
    rules: rulesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
