export class Tprofil {
  $key: string;
  HEA: number;
  A: number;
  ASteg: number;
  G: number;
  b: number;
  d: number;
  h: number;
  r: number;
  tg: number;
  ts: number;

  constructor(HEA: number, h: number, b: number, tg: number, ts: number, r: number) {
    this.HEA = HEA;
    this.h = h;
    this.b = b;
    this.tg = tg;
    this.ts = ts;
    this.r = r;
  }

  getAreaProfil () {
    return (2 * this.b * this. tg + this.ts * (this.h - 2 * this.tg) + (4 - Math.PI) * this.r * this.r ) / 100;
  }

  getAreaSteg () {
    return ( this.ts * (this.h - 2 * this.tg) + (this.ts + 2 * this.r) * this.tg + (4 - Math.PI) * this.r * this.r ) / 100;
  }

  getWichteProfil () {
    return this.getAreaProfil() * 0.7856 ;
  }
}
