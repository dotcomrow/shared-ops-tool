// eslint-disable-next-line import/no-cycle
import { ICsvExportConfig, IGrid, IXlsxExportConfig } from './types';

// eslint-disable-next-line import/prefer-default-export
export declare class Exporter {
  private _view;

  constructor(_view: IGrid);
  xlsx(config?: IXlsxExportConfig): {
    name: string;
    columns: never[];
    header: never[][];
    data: string[][];
    styles: {
      cells: never[];
      css: {
        default: {
          color: string;
          background: string;
          fontSize: number;
        };
      };
    };
  };
  csv(config?: ICsvExportConfig): string;
}
