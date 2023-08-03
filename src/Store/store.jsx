import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import abilityScoresReducer from "./Slices/Character Data/abilityScoresSlice";
import alignmentsReducer from "./Slices/Character Data/alignmentsSlice";
import backgroundsReducer from "./Slices//Character Data/backgroundsSlice";
import languagesReducer from "./Slices/Character Data/languagesSlice";
import proficienciesReducer from "./Slices/Character Data/proficienciesSlice";
import skillsReducer from "./Slices/Character Data/skillsSlice";
import traitsReducer from "./Slices/Character Data/traitsSlice"
import classesReducer from "./Slices/Class/classesSlice";
import conditionsReducer from "./Slices/Game Mechanics/conditionsSlice";
import damageTypesReducer from "./Slices/Game Mechanics/damageTypesSlice";
import magicSchoolsReducer from "./Slices/Game Mechanics/magicSchoolsSlice";
import equipmentReducer from "./Slices/Equipment/equipmentSlice";
import featsReducer from "./Slices/FeatsAndFeatures/featsSlice";
import featuresReducer from "./Slices/FeatsAndFeatures/featuresSlice";
import monstersReducer from "./Slices/Monsters/monstersSlice";
import racesReducer from "./Slices/Races/racesSlice";
import rulesReducer from "./Slices/Rules/rulesSlice";
import spellsReducer from "./Slices/Spells/spellsSlice";
import popupReducer from "./Slices/Site Functions/popupSlice";


const store = configureStore({
  reducer: {
    abilityScores: abilityScoresReducer,
    alignments: alignmentsReducer,
    backgrounds: backgroundsReducer,
    languages: languagesReducer,
    proficiencies: proficienciesReducer,
    skills: skillsReducer,
    traits: traitsReducer,
    classes: classesReducer,
    conditions: conditionsReducer,
    damageTypes: damageTypesReducer,
    magicSchools: magicSchoolsReducer,
    equipment: equipmentReducer,
    feats: featsReducer,
    features: featuresReducer,
    monsters: monstersReducer,
    races: racesReducer,
    rules: rulesReducer,
    spells: spellsReducer,
    popup: popupReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
