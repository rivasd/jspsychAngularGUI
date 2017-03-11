import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { baseJsPsychParam }          from 'app/classes/jspsych.param';
import { JsPsychParamControlService }   from 'app/services/jspsych-param-control.service';


@Component({
  moduleId: module.id,
  selector: 'dynamic-form',
  templateUrl: 'app/templates/dynamic-form.component.html',
  providers: [ JsPsychParamControlService ]
})
export class DynamicFormComponent implements OnInit {
  
    @Input() 
  params: baseJsPsychParam<any>[] = [];
  form: FormGroup;
  payLoad = '';
  
  constructor(private pcs: JsPsychParamControlService) {  }
  
  ngOnInit() {
    this.form = this.pcs.toFormGroup(this.params);
  }
  
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
