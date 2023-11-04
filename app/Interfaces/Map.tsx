export interface ICoords {
    latitude: number
    longitude:  number
}

export interface IMapData {
    latitude: number
    longitude:  number,
    weight?: number
}

export interface IMapPointData {
    coords: ICoords[]
}