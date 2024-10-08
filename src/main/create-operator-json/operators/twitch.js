'use strict';

import counterType from '../core/counterTypeEnums.js';
import operatorId from '../core/operatorIdEnum.js';
import Operator from '../core/operatorFactory.js';
import r6operators from "r6operators";

let twitch = new Operator(r6operators.twitch, operatorId.twitch, "N/A");

twitch.addCounterNode(operatorId.mira, counterType.hard, "Twitch's Drone can easily pop out Mira's Black Mirrors.");
twitch.addCounterNode(operatorId.bandit, counterType.hard, "Twitch's Drone can easily shoot Bandit's Shock Wire.");
twitch.addCounterNode(operatorId.mute, counterType.hard, "If careful, Twitch's Drone can shoot Mute's Signal Disruptor.");
twitch.addCounterNode(operatorId.kaid, counterType.soft, "Twitch's Drone can shoot Kaid's Electroclaws.");
twitch.addCounterNode(operatorId.alibi, counterType.soft, "Twitch's Drone can shoot Alibi's Prismas.");
twitch.addCounterNode(operatorId.echo, counterType.soft, "Twitch's Drone can shoot Echo's Drone.");
twitch.addCounterNode(operatorId.ela, counterType.soft, "Twitch's Drone can shoot Ela's Grzmot mines.");
twitch.addCounterNode(operatorId.jager, counterType.hard, "Twitch's Drone can shoot Jäger's ADS.");
twitch.addCounterNode(operatorId.kapkan, counterType.soft, "Twitch's Drone can shoot Kapkan's Entry Denial Devices.");
twitch.addCounterNode(operatorId.lesion, counterType.soft, "Twitch's Drone can shoot Lesion's Gu mines.");
twitch.addCounterNode(operatorId.maestro, counterType.minor, "Twitch's Drone can temporarily disable Maestro's Evil Eye cameras by shooting at them when they are closed.");
twitch.addCounterNode(operatorId.melusi, counterType.soft, "Twitch's Drone can temporarily disable Melusi's Banshee.");
twitch.addCounterNode(operatorId.thunderbird, counterType.hard, "Twitch's Drone can shoot Thunderbird's Kona Station.");

export default twitch