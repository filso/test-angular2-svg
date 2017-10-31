import { Component, OnInit } from '@angular/core';

import { BackendDataService } from '../backend-data.service';
import { describeArc } from './arcCalculations';

import * as Vivus from 'vivus';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  public score: any = {};

  public d: string;

  constructor(private _backendDataService: BackendDataService) { }

  ngOnInit() {
    let self = this;

    this._backendDataService.getScore().then((score) => {
      self.score = score;

      let percentage = score.score / score.maxScoreValue;

      let endAngle = Math.floor(percentage * 360);
      self.d = describeArc(0, 0, 30, 0, endAngle);

      setTimeout(() => {
        let animation = new Vivus('donut-gauge-menu', {
          duration: 100,
          animTimingFunction: Vivus.EASE
        });
        animation.stop()
          .reset()
          .play(1);
      });

    });

  }

}
