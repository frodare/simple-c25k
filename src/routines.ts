type IntervalType = 'run' | 'walk';

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



const routines: Routine[] = [{
  id: '9wc25k',
  name: '9 Week Couch to 5k',
  description: 'A 9 week program to get you from the couch to running 5k',
  workouts: [
    [WEEK1_WORKOUT,WEEK1_WORKOUT,WEEK1_WORKOUT],
    [WEEK2_WORKOUT,WEEK2_WORKOUT,WEEK2_WORKOUT],
    [WEEK3_WORKOUT,WEEK3_WORKOUT,WEEK3_WORKOUT],
    [WEEK4_WORKOUT,WEEK4_WORKOUT,WEEK4_WORKOUT],
  ]
}];

export type { IntervalType, Interval, routines, Routine, Workout, RoutineKey };
export default routines;
