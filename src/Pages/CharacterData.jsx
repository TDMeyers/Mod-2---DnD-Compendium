import DisplayAbilityScores from "../components/Character Data/DisplayAbilityScores";
import DisplayAlignments from "../components/Character Data/DisplayAlignments";
import DisplayBackgrounds from "../components/Character Data/DisplayBackgrounds";
import DisplayLanguages from "../components/Character Data/DisplayLanguages";
import DisplayProficiencies from "../components/Character Data/DisplayProficiencies";

export default function CharacterData() {
  return (
    <div>
      <DisplayAbilityScores />
      <DisplayAlignments />
      <DisplayBackgrounds />
      <DisplayLanguages />
      <DisplayProficiencies />
    </div>
  );
}
