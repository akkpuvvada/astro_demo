export interface TableRow {
    no: number;
    item: string;
    dateObtained: string;
    tag: string;
    index: string;
    notes: string;
    hyperlink: string;
}


export interface Column {
  key: string;
  label: string;
  className?: string;
}


export interface TableRowData {
    [key: string]: any;
  }