'use strict';

import counterType from '../core/counterTypeEnums.js';
import operatorId from '../core/operatorIdEnum.js';
import Operator from '../core/operatorFactory.js';
import r6operators from "r6operators";

let amaru = new Operator(r6operators.amaru, operatorId.amaru, "Operation Ember Rise");

export default amaru