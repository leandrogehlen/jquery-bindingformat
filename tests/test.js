QUnit.test("Date test", function (assert) {
    var $date = $('#date-input');
    $date.bindingFormat('date',{
        language: "en-US",
        display: {
            dateFormat: "dd/mm/yy"
        }
    });

    assert.ok($("input[name='date']").length, "Hidden input found");
    assert.equal($date.bindingFormat('getValue'), "2014-12-31", "Checking formatted value");
});

QUnit.test("Float test", function (assert) {
    var $float = $('#float-input');
    $float.bindingFormat('float');

    assert.ok($("input[name='float']").length, "Hidden input found");
    assert.equal($float.bindingFormat('getValue'), "1500.23", "Checking formatted value");
});
