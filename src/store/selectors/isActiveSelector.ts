import { RootState } from "..";

const isActiveSelector = (state: RootState) => !!(state.activity.start && !state.activity.pausedOn);

export default isActiveSelector;
