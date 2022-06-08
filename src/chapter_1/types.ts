export interface BaseColor {
    l: number;
    c: number;
    h: number;
    mode: "lch";
}
export type Types = "analogous" | "triadic" | "tetradic" | "complementary" | "splitComplementary";
