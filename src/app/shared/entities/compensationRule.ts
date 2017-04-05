/**
 * /*******************************************************************************
 * @fileoverview This class has the basic structural fields for Compensation Rules
 * @author Sesha Sai Srivatsav on 3/30/17
 ******************************************************************************/

export class CompensationRule {
    constructor (
        public ruleId : string,
        public entity : string,
        public ruleName: string,
        public premium: [{yr: number, show: boolean, premPercentage : string}]){}

}