'use strict';

/**
* Copyright (c) 2017 Copyright bp All Rights Reserved.
* Author: lipengxiang
* Date: 2019-07-30 16:27
* Desc: use babel in nodejs.
*/

global.__debug = true;

//
// close Scheduling task.
global.__enableScheduled = false;

//
// debug feignClient; use url.
global.__debugFeignClient = true;

// application entry.
require('./libs-dev');
