import { IEventSystem } from '../../ts-common/events';
import { IKeyManager } from '../../ts-common/KeyManager';
import { Id, ITouchParam } from '../../ts-common/types';
import { View } from '../../ts-common/view';
import {
  DataEvents,
  DragEvents,
  IDataCollection,
  IDataEventsHandlersMap,
  IDragEventsHandlersMap,
} from '../../ts-data';
import { Exporter } from './Exporter';
import {
  Dirs,
  EditorType,
  GridEvents,
  IAdjustBy,
  ICellRect,
  ICol,
  IContentList,
  ICoords,
  IEventHandlersMap,
  IGrid,
  IGridConfig,
  IScrollState,
  ISelection,
  ISpan,
  GridSystemEvents,
  ISystemEventHandlersMap,
  ISortingState,
  SortFunction,
} from './types';
import { Combobox } from '../../ts-combobox';

// eslint-disable-next-line import/prefer-default-export
export declare class Grid extends View implements IGrid {
  data: IDataCollection;

  config: IGridConfig;

  events: IEventSystem<
    DataEvents | GridEvents | DragEvents,
    IEventHandlersMap & IDataEventsHandlersMap & IDragEventsHandlersMap
  >;

  export: Exporter;

  content: IContentList;

  selection: ISelection;

  keyManager: IKeyManager;

  protected _touch: ITouchParam;

  protected _scroll: IScrollState;

  protected _events: IEventSystem<GridSystemEvents, ISystemEventHandlersMap>;

  protected _htmlEvents: never;

  private _sortDir;

  private _sortBy;

  constructor(container: HTMLElement | string, config?: IGridConfig);
  destructor(): void;
  setColumns(columns: ICol[]): void;
  addRowCss(rowId: Id, css: string): void;
  removeRowCss(rowId: Id, css: string): void;
  addCellCss(rowId: Id, colId: Id, css: string): void;
  removeCellCss(rowId: Id, colId: Id, css: string): void;
  showColumn(colId: Id): void;
  hideColumn(colId: Id): void;
  isColumnHidden(colId: Id): boolean;
  showRow(rowId: Id): void;
  hideRow(rowId: Id): void;
  isRowHidden(rowId: Id): boolean;
  getScrollState(): ICoords;
  scroll(x: number, y: number): void;
  scrollTo(rowId: Id, colId: Id): void;
  adjustColumnWidth(colId: Id, adjust?: IAdjustBy): void;
  getCellRect(rowId: Id, colId: Id): ICellRect;
  getColumn(colId: Id): ICol;
  addSpan(spanObj: ISpan): void;
  getSpan(rowId: Id, colId: Id): ISpan;
  removeSpan(rowId: Id, colId: Id): void;
  editCell(rowId: Id, colId: Id, editorType?: EditorType): void;
  editEnd(withoutSave?: boolean): void;
  getSortingState(): ISortingState;
  getHeaderFilter(colId: Id): HTMLElement | Combobox;
  /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
  edit(rowId: Id, colId: Id, editorType?: EditorType): void;
  // eslint-disable-next-line no-underscore-dangle
  protected _parseColumns(configChanged?: boolean): void;
  // eslint-disable-next-line no-underscore-dangle
  protected _setEventHandlers(): void;
  // eslint-disable-next-line no-underscore-dangle
  protected _sort(by: Id, dir?: Dirs, sortAs?: SortFunction): void;
  // eslint-disable-next-line no-underscore-dangle
  protected _clearTouchTimer(): void;
  // eslint-disable-next-line no-underscore-dangle
  protected _checkFilters(): void;
}
