export declare function toNode(node: string | HTMLElement): HTMLElement;
// eslint-disable-next-line @typescript-eslint/naming-convention
declare type eventPrepare = (ev: Event) => never;
interface IHandlerHash {
  [name: string]: (...args: never[]) => boolean | void;
}
export declare function eventHandler(
  prepare: eventPrepare,
  hash: IHandlerHash,
  afterCall?: never
): (ev: Event) => boolean;
export declare function locate(target: Event | Element, attr?: string): string;
export declare type IAlign = 'left' | 'center' | 'right';
export declare type Position = 'left' | 'right' | 'bottom' | 'top';
export declare type FlexDirection =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly';
export {};
