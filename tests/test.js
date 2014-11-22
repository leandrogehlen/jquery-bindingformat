QUnit.test("Date test", function (assert) {
    var $date = $('#date-input');
    $date.bindingFormat('date',{
        display: {
            language: "pt-BR",
            dateFormat: "dd/mm/yy"
        }
    });

    assert.ok($("input[name='date']").length, "Hidden input found");
    assert.ok($date.bindingFormat('getValue') instanceof Date, "Checking data type");
    assert.equal($date.bindingFormat('getText'), "2014-12-31", "Checking formatted text");
});

QUnit.test("Float test", function (assert) {
    var $float = $('#float-input');
    $float.bindingFormat('float');

    var value = $float.bindingFormat('getValue');

    assert.ok($("input[name='float']").length, "Hidden input found");
    assert.ok(typeof value == 'number', "Checking data type");
    assert.equal(value, 1500.23, "Checking formatted value");
    assert.equal($float.bindingFormat('getText'), "1500.23", "Checking formatted text");
});
