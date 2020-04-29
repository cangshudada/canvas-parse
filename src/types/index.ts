export interface AcrPoint {
    x: number,
    y: number
}

export interface BezierPoint extends AcrPoint {
    [prop: string]: number
}

export type BezierParse = (pointDensity: number, p1: AcrPoint, p2: AcrPoint, cp1?: AcrPoint, cp2?: AcrPoint) => AcrPoint