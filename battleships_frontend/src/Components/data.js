export const pBoard = Array.from(Array(100).keys()).map((idx) => {return({id: idx, fieldState: 'empty-field'})});

export const oBoard = Array.from(Array(100).keys()).map((idx) => {return({id: idx, isChecked: false, isOccupied: 'empty'})});

export const ships = [
  {
    id: 0,
    type: "patrol",
    length: 1,
    direction: "vertical",
  },
  {
    id: 1,
    type: "submarine",
    length: 2,
    direction: "vertical",
  },
  {
    id: 2,
    type: "destroyer",
    length: 3,
    direction: "vertical",
  },
  {
    id: 3,
    type: "frigate",
    length: 4,
    direction: "vertical",
  },
  {
    id: 4,
    type: "carrier",
    length: 5,
    direction: "vertical",
  }
];