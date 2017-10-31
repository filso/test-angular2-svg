import { Injectable } from '@angular/core';

import data from './data/data';

@Injectable()
export class BackendDataService {
  private promise: Promise<object>;

  private _getData(): Promise<object> {
    if (this.promise === undefined) {
      this.promise = Promise.resolve(data);
    }

    return this.promise;
  }

  public getScore(): Promise<any> {
    return this._getData().then(() => {
      return {
        score: data.creditReportInfo.score,
        maxScoreValue: data.creditReportInfo.maxScoreValue
      }
    });
  }

}
