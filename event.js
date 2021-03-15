const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('some_event', function () {
    console.log('some_event事件触发');
});

emitter.on('arg_event', function (arg1, arg2) {
    console.log("arg_event--", arg1, arg2);
});
// 一秒之后时间触发
setTimeout(function () {
    emitter.emit('some_event');
    emitter.emit('arg_event', 'first arg', 'second arg');
}, 1000);