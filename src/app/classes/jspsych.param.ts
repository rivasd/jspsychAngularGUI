
export class baseJsPsychParam<T>{
    
    value   : T;
    key     : string;
    label   : string;
    required: boolean;
    default : T;
    controlType: string;
    
    constructor(options:{
        value?  : T,
        key?    : string,
        label?  : string,
        required?: boolean,
        order?  : number,
        controlType?: string
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.controlType = options.controlType || '';
    }
}

export class jsPsychBooleanParam extends baseJsPsychParam<boolean>{
    
    default     = false;
    controlType = 'checkbox';
    
}

export class jsPsychStringParam extends baseJsPsychParam<string>{
    
    default     = "";
    controlType = 'text'
}

export class jsPsychSelectParam extends baseJsPsychParam<string>{
    
    options: {key: string, value: string}[] = [];
    
    constructor( options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}