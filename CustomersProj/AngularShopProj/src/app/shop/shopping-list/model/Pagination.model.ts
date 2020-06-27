


export class PaginationRequest {
    pageNumber: string;
    pageSize: string;
    sortColumn: string;
    sortType: string;

    constructor(pageNumber: string, pageSize: string, sortColumn: string, sortType: string) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.sortColumn = sortColumn;
        this.sortType = sortType;
    }
  }
  