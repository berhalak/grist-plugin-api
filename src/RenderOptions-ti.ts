import * as t from "ts-interface-checker";
// tslint:disable:object-literal-key-quotes

export const RenderTarget = t.union(t.lit("fullscreen"), "number");

export const RenderOptions = t.iface([], {
  "height": t.opt("string"),
});

const exportedTypeSuite: t.ITypeSuite = {
  RenderTarget,
  RenderOptions,
};
export default exportedTypeSuite;
