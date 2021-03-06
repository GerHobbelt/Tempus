QUnit.module('New Day Methods');

covers(Tempus.prototype, 'Tempus', 'getDay', 'day', 'getISODay', 'ISODay');
QUnit.test('getDay()/day() and getISODay()/ISODay()', function () {
    var newdate = new Tempus(2011, 8, 11)
    ,   i = 11
    ,   n = 6;
    
    expect(28);
    
    equal(newdate.getDay(), 0, String(newdate) + 'getDay');
    equal(newdate.day(), 0, String(newdate) + 'day');
    equal(newdate.getISODay(), 7, String(newdate) + 'getISODay');
    equal(newdate.ISODay(), 7, String(newdate) + ' ISODay');
    
    while(i-- > 5) {
        newdate.setDate(i);
        equal(newdate.getDay(), n, String(newdate) + ' getDay');
        equal(newdate.day(), n, String(newdate) + ' day');
        equal(newdate.getISODay(), n, String(newdate) + ' getISODay');
        equal(newdate.ISODay(), n, String(newdate) + ' ISODay');
        --n;
    }
});

covers(Tempus.prototype, 'Tempus', 'setDay', 'setISODay', 'getISODay', 'addDay', 'addISODay', 'subDay', 'subISODay');
QUnit.test('setDay() and setDay(true)/setISODay()', function () {
    var newdate = new Tempus(2011, 8, 9)
    ,   n = 0;
    
    expect(44);
    
    newdate.setDay(0);
    equal(newdate.getDay(), 0, String(newdate) + ' setDay(0) with getDay');
    equal(newdate.getISODay(), 7, String(newdate) + ' setDay(0) with getISODay');
    newdate.setISODay(7);
    equal(newdate.getDay(), 0, String(newdate) + ' setISODay(7) with getDay');
    equal(newdate.getISODay(), 7, String(newdate) + ' setISODay(7) with getISODay');

    while(++n < 6) {
        newdate.setDay(n);
        equal(newdate.getDay(), n, String(newdate) + ' setDay(' + n + ') with getDay');
        equal(newdate.getISODay(), n, String(newdate) + ' setDay(' + n + ') with getISODay');
        newdate.setISODay(n);
        equal(newdate.getDay(), n, String(newdate) + ' setISODay(' + n + ') with getDay');
        equal(newdate.getISODay(), n, String(newdate) + ' setISODay(' + n + ') with getISODay');

        newdate.addDay();
        equal(newdate.getDay(), n+1, String(newdate) + ' addDay() with getDay');
        equal(newdate.getISODay(), n+1, String(newdate) + ' addDay() with getISODay');
        newdate.subDay(1);
        equal(newdate.getDay(), n, String(newdate) + ' subDay(2) with getDay');
        equal(newdate.getISODay(), n, String(newdate) + ' subDay(2) with getISODay');
    }
});

covers(Tempus.prototype, 'Tempus', 'getDayName', 'getFullDayName');
QUnit.test('getDayName(), and getFullDayName()', function () {
    var newdate = new Tempus(2011, 8, 11)
    ,   i = 11
    ,   n = 6;
    
    expect(13);

    var SHORTDAYS = [
        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
    ]
    ,   FULLDAYS = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];


    
    equal(newdate.getDayName(), SHORTDAYS[0], String(newdate));
    
    while(i-- > 5) {
        newdate.setDate(i);
        equal(newdate.getDayName(), SHORTDAYS[n], String(newdate));
        equal(newdate.getFullDayName(), FULLDAYS[n], String(newdate));
        --n;
    }
});

covers(Tempus.prototype, 'Tempus', 'setDayOfYear', 'dayOfYear', 'subDayOfYear', 'addDayOfYear');
QUnit.test("setDayOfYear()", function () {
    var newdate = new Tempus(2011, 8).timezone(0).hours(0);
    
    equal(newdate.setDayOfYear(1).toISOString(), "2011-01-01T00:00:00.000+0000", 'setDayOfYear(1) ' + String(newdate));
    equal(newdate.dayOfYear(1).toISOString(), '2011-01-01T00:00:00.000+0000', 'dayOfYear(1) ' + String(newdate));
    equal(newdate.setDayOfYear(31).toISOString(), '2011-01-31T00:00:00.000+0000', 'setDayOfYear(31) ' + String(newdate));
    equal(newdate.dayOfYear(31).toISOString(), '2011-01-31T00:00:00.000+0000', 'dayOfYear(31) ' + String(newdate));
    equal(newdate.setDayOfYear(56).toISOString(), '2011-02-25T00:00:00.000+0000', 'setDayOfYear(56) ' + String(newdate));
    equal(newdate.dayOfYear(56).toISOString(), '2011-02-25T00:00:00.000+0000', 'dayOfYear(56) ' + String(newdate));
    equal(newdate.setDayOfYear(120).toISOString(), '2011-04-30T00:00:00.000+0000', 'setDayOfYear(120) ' + String(newdate));
    equal(newdate.dayOfYear(120).toISOString(), '2011-04-30T00:00:00.000+0000', 'dayOfYear(120) ' + String(newdate));
    equal(newdate.setDayOfYear(364).toISOString(), '2011-12-30T00:00:00.000+0000', 'setDayOfYear(364) ' + String(newdate));
    equal(newdate.dayOfYear(364).toISOString(), '2011-12-30T00:00:00.000+0000', 'dayOfYear(364) ' + String(newdate));

    equal(newdate.dayOfYear(), 364, 'day of year is as set (364)');
    newdate.subDayOfYear(360);
    equal(newdate.dayOfYear(), 4, 'subDayOfYear(360) == 4');

    newdate.addDayOfYear(55);
    equal(newdate.dayOfYear(), 59, 'addDayOfyear(55) == 59');
});

covers(Tempus.prototype, 'Tempus', 'getDayOfYear', 'dayOfYear');
QUnit.test("getDayOfYear()", function () {
    var newdate = new Tempus(2011, 0, 1);
    equal(newdate.getDayOfYear(), 1, String(newdate));
    
    newdate = new Tempus(2011, 0, 31);
    equal(newdate.getDayOfYear(), 31, String(newdate));
    equal(newdate.dayOfYear(), 31, String(newdate));
    
    newdate = new Tempus(2011, 1, 25);
    equal(newdate.getDayOfYear(), 56, String(newdate));
    equal(newdate.dayOfYear(), 56, String(newdate));
    
    newdate = new Tempus(2011, 3, 30);
    equal(newdate.getDayOfYear(), 120, String(newdate));
    equal(newdate.dayOfYear(), 120, String(newdate));
    
    newdate = new Tempus(2011, 11, 30);
    equal(newdate.getDayOfYear(), 364, String(newdate));
    equal(newdate.dayOfYear(), 364, String(newdate));
});

covers(Tempus.prototype, 'Tempus', 'getDateOrdinal');
QUnit.test('getDateOrdinal()', function () {
    var newdate = new Tempus(2011, 8, 1);
    
    equal(newdate.getDateOrdinal(), 'st', '1st');
    newdate.setDate(2);
    equal(newdate.getDateOrdinal(), 'nd', '2nd');
    newdate.setDate(3);
    equal(newdate.getDateOrdinal(), 'rd', '3rd');
    newdate.setDate(4);
    equal(newdate.getDateOrdinal(), 'th', '4th');
    newdate.setDate(5);
    equal(newdate.getDateOrdinal(), 'th', '5th');
    newdate.setDate(6);
    equal(newdate.getDateOrdinal(), 'th', '6th');
    newdate.setDate(7);
    equal(newdate.getDateOrdinal(), 'th', '7th');
    newdate.setDate(8);
    equal(newdate.getDateOrdinal(), 'th', '8th');
    newdate.setDate(9);
    equal(newdate.getDateOrdinal(), 'th', '9th');
    newdate.setDate(10);
    equal(newdate.getDateOrdinal(), 'th', '10th');
    newdate.setDate(11);
    equal(newdate.getDateOrdinal(), 'th', '11th');
    newdate.setDate(12);
    equal(newdate.getDateOrdinal(), 'th', '12th');
    newdate.setDate(21);
    equal(newdate.getDateOrdinal(), 'st', '21st');
    newdate.setDate(22);
    equal(newdate.getDateOrdinal(), 'nd', '22nd');
    newdate.setDate(23);
    equal(newdate.getDateOrdinal(), 'rd', '23rd');
    newdate.setDate(30);
    equal(newdate.getDateOrdinal(), 'th', '30th');
});

covers(Tempus.prototype, 'Tempus', 'eachDayOfWeek');
QUnit.test('eachDayOfWeek()', function () {
    
    var newdate = new Tempus(2012, 2, 13)
    ,   i = 0
    ,   dateDay = 11
    ,   dateObj = new Date(+newdate);

    expect(28);

    newdate.eachDayOfWeek(function (dayI, date) {
        equal(dayI, dateDay, 'First argument is day in ' + String(date));
        ok(date instanceof Tempus, 'Second argument is Tempus object');
        dateObj.setDate(dateDay);
        equal(Number(date), Number(dateObj), 'Second argument is date obj ' + String(date));
        equal(this === newdate, true, '`this` is fixed to the original date: ' + String(date));
        ++i;
        ++dateDay;
    });
    
});

covers(Tempus.prototype, 'Tempus', 'eachISODayOfWeek');
QUnit.test('eachISODayOfWeek()', function () {
    
    var newdate = new Tempus(2012, 2, 13)
    ,   i = 0
    ,   dateDay = 12
    ,   dateObj = new Date(+newdate);

    expect(28);

    newdate.eachISODayOfWeek(function (dayI, date) {
        equal(dayI, dateDay, 'First argument is day in ' + String(date));
        ok(date instanceof Tempus, 'Second argument is Tempus object');
        dateObj.setDate(dateDay);
        equal(Number(date), Number(dateObj), 'Second argument is date obj ' + String(date));
        equal(this === newdate, true, '`this` is fixed to the original date: ' + String(date));
        ++i;
        ++dateDay;
    });
    
});

covers(Tempus.prototype, 'Tempus', 'eachDayOfMonth');
QUnit.test('eachDayOfMonth()', function () {
    var newdate
    ,   c
    ,   i = 12
    ,   n = 0
    ,   days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    ,   dateObj;
    
    expect(1825);
    
    while(i--) {
        newdate = new Tempus(2011, i);
        dateObj = new Date(+newdate);
        c = 0;
        newdate.eachDayOfMonth(function (dayI, date) {
            equal(dayI, ++c, 'First argument is day in ' + date.getMonthName());
            ok(date instanceof Tempus, 'Second argument is Tempus object');
            dateObj.setDate(dayI);
            equal(date.toDateString(), dateObj.toDateString(), 'Second argument is date obj ' + String(date));
            equal(date.toTimeString(), dateObj.toTimeString(), 'Second argument is date obj ' + String(date));
            equal(this === newdate, true, '`this` is fixed to the original date: ' + String(date));
        });
    }
    
});

covers(Tempus.prototype, 'Tempus', 'eachDayOfYear');
QUnit.test("eachDayOfYear()", function () {
    expect(2927);

    var lastDate = 0
    ,   newdate = new Tempus(2011, 0, 1)
    ,   dateObj = new FakeDate(2011, 0, 0);

    newdate.eachDayOfYear(function (dayI, date) {
        equal(dayI, ++lastDate, 'First argument is day in ' + date.getMonthName());
        dateObj.setDate(dateObj.getDate()+1);
        equal(date.toDateString(), dateObj.toDateString(), 'Second argument is date obj ' + String(date));
        equal(date.toTimeString(), dateObj.toTimeString(), 'Second argument is date obj ' + String(date));
    });

    equal(lastDate, 365);

    // Leap year
    lastDate = 0;
    newdate = new Tempus(2012, 0, 1);
    dateObj = new FakeDate(2012, 0, 0);
    
    newdate.eachDayOfYear(function (dayI, date) {
        equal(dayI, ++lastDate, 'First argument is day in ' + date.getMonthName());
        ok(date instanceof Tempus, 'Second argument is Tempus object');
        dateObj.setDate(dateObj.getDate()+1);
        equal(date.toDateString(), dateObj.toDateString(), 'Second argument is date obj ' + String(date));
        equal(date.toTimeString(), dateObj.toTimeString(), 'Second argument is date obj ' + String(date));
        equal(this === newdate, true, '`this` is fixed to the original date: ' + String(date));
    });

    equal(lastDate, 366);
    
});