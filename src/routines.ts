type IntervalType = 'run' | 'walk' | 'warmup' | 'cooldown';

interface Interval {
  type: IntervalType;
  duration: number;
}

interface Workout {
  repeat: number;
  intervals: Interval[];
}

type RoutineKey = '9wc25k';

interface Routine {
  id: RoutineKey;
  name: string;
  description: string;
  workouts: Workout[][];
}

const WEEK1_WORKOUT: Workout = {
  repeat: 8,
  intervals: [{
    type: 'run',
    duration: 60
  }, {
    type: 'walk',
    duration: 90
  }]
};

const WEEK2_WORKOUT: Workout = {
  repeat: 5,
  intervals: [{
    type: 'run',
    duration: 120
  }, {
    type: 'walk',
    duration: 120
  }]
};

const WEEK3_WORKOUT: Workout = {
  repeat: 4,
  intervals: [{
    type: 'run',
    duration: 180
  }, {
    type: 'walk',
    duration: 120
  }]
};

const WEEK4_WORKOUT: Workout = {
  repeat: 3,
  intervals: [{
    type: 'run',
    duration: 300
  }, {
    type: 'walk',
    duration: 180
  }]
};

const WEEK5_WORKOUT_1: Workout = {
  repeat: 1,
  intervals: [{
    type: 'run',
    duration: 6 * 60
  }, {
    type: 'walk',
    duration: 3 * 60
  },
  {
    type: 'run',
    duration: 6 * 60
  }]
};

const WEEK5_WORKOUT_2: Workout = {
  repeat: 1,
  intervals: [{
    type: 'run',
    duration: 8 * 60
  }, {
    type: 'walk',
    duration: 5 * 60
  },
  {
    type: 'run',
    duration: 8 * 60
  }]
};


const WEEK6_WORKOUT_1: Workout = {
  repeat: 1,
  intervals: [{
    type: 'run',
    duration: 5 * 60
  }, {
    type: 'walk',
    duration: 3 * 60
  },
  {
    type: 'run',
    duration: 8 * 60
  }, {
    type: 'walk',
    duration: 3 * 60
  },
  {
    type: 'run',
    duration: 5 * 60
  }]
};

const WEEK6_WORKOUT_2: Workout = {
  repeat: 1,
  intervals: [{
    type: 'run',
    duration: 10 * 60
  }, {
    type: 'walk',
    duration: 3 * 60
  },
  {
    type: 'run',
    duration: 10 * 60
  }]
};

const RUN_20: Workout = {
  repeat: 1,
  intervals: [{
    type: 'run',
    duration: 20 * 60
  }]
};

const RUN_25: Workout = {
  repeat: 1,
  intervals: [{
    type: 'run',
    duration: 25 * 60
  }]
};

const RUN_28: Workout = {
  repeat: 1,
  intervals: [{
    type: 'run',
    duration: 28 * 60
  }]
};

const RUN_30: Workout = {
  repeat: 1,
  intervals: [{
    type: 'run',
    duration: 30 * 60
  }]
};




const routines: Routine[] = [{
  id: '9wc25k',
  name: '9 Week Couch to 5k',
  description: 'A 9 week program to get you from the couch to running 5k',
  workouts: [
    [WEEK1_WORKOUT,WEEK1_WORKOUT,WEEK1_WORKOUT],
    [WEEK2_WORKOUT,WEEK2_WORKOUT,WEEK2_WORKOUT],
    [WEEK3_WORKOUT,WEEK3_WORKOUT,WEEK3_WORKOUT],
    [WEEK4_WORKOUT,WEEK4_WORKOUT,WEEK4_WORKOUT],
    [WEEK5_WORKOUT_1, WEEK5_WORKOUT_2, RUN_20],
    [WEEK6_WORKOUT_1, WEEK6_WORKOUT_2, RUN_25],
    [RUN_25, RUN_25, RUN_25],
    [RUN_28, RUN_28, RUN_28],
    [RUN_30, RUN_30, RUN_30],
  ]
}];

export type { IntervalType, Interval, routines, Routine, Workout, RoutineKey };
export default routines;
