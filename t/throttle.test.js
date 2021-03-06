it('basic', function(done) {
    var counter = 0;

    var throttleFn = throttle(function() {
        counter++;
    }, 50);

    throttleFn();
    throttleFn();
    throttleFn();
    setTimeout(throttleFn, 70);
    setTimeout(throttleFn, 75);
    setTimeout(throttleFn, 130);
    setTimeout(throttleFn, 135);

    setTimeout(function() {
        expect(counter).to.equal(3);
        done();
    }, 300);
});
