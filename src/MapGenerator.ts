export const enum Direction {
    N,
    S,
    E,
    W,
    Undefined
}

export const enum Size {
    Small = 10,
    Medium = 20,
    Large = 30,
    Extreme = 40
}

export class MapCell {
    outdoors: Map<Direction, MapCell>;
    fromDirection: Direction;
    constructor(direction?: Direction, parent?: MapCell) {
        this.outdoors = new Map();
        if (direction && parent) {
            this.fromDirection = direction;
            this.outdoors.set(direction, parent);
        } else {
            this.fromDirection = Direction.Undefined;
        }
    }
}

export class MapGenerator {
    difficulty: number;
    size: Size;
    map: MapCell[];
    constructor(difficulty: number, size: Size) {
        this.difficulty = difficulty;
        this.size = size;
        // generate the map
        this.map = [];
        let blockCount = this.getBlockCount();
        console.log(blockCount)
    }
    getBlockCount(): number {
        let random = (Math.random() - 0.5) * 0.25;
        return Math.round((1 + random) * this.size)
    }
    getCurrentDirection(): Direction {
        if (this.map.length === 0) {
            return Direction.Undefined;
        } else {
            return this.map[this.map.length - 1].fromDirection;
        }
    }
    pickNextDirection() {

    }
}