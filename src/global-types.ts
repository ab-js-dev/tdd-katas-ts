type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>

export type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export type PinsRange = Range<0, 11>
// @ts-ignore
export type XmasLightsRange = Range<0, 1000>