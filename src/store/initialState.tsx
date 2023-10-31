export interface RootState {
  skillPointer: {
    skillPoints: number;
    maxSkillPoints: number;
  };
}

export const initialState = {
  skillPoints: 0,
  maxSkillPoints: 6,
};
