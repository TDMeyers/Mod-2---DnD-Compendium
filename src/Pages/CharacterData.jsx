import DisplayAbilityScores from "../components/Character Data/DisplayAbilityScores";
import DisplayAlignments from "../components/Character Data/DisplayAlignments";
import DisplayBackgrounds from "../components/Character Data/DisplayBackgrounds";

export default function CharacterData() {
  return (
    <div>
      <DisplayAbilityScores />
      <DisplayAlignments />
      <DisplayBackgrounds />
    </div>
  );
}
