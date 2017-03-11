import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { baseJsPsychParam } from 'app/classes/jspsych.param';

@Injectable()
export class JsPsychParamControlService {
  constructor() { }

  toFormGroup(params: baseJsPsychParam<any>[] ) {
    let group: any = {};

    params.forEach(param => {
      group[param.key] = param.required ? new FormControl(param.value || '', Validators.required)
                                              : new FormControl(param.value || '');
    });
    return new FormGroup(group);
  }
}