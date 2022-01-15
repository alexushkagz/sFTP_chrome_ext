var _0x55a3 = ['exists',
'#license_status, #website_status, #support_status',
'undefined',
'https://chrome.sftpapp.com/status',
'get',
'parse',
'green',
'removeClass',
'red',
'grey',
'#website_status.icon,#license_status.icon,#support_status.icon',
'license_status',
'online',
'langArr',
'offline',
'Currently Unavailable.',
'support_status',
'website_status',
'currently_unavailable',
'admin_notice',
'',
'no_message_to_display',
'addClass',
'#license_status.icon',
'html',
'title',
'attr',
'#support_status.icon',
'#website_status.icon',
'empty',
'#admin_notice',
'offline_notice_title',
'offline_notice_desc',
'ajax',
'click',
'a.button.recheck_status',
'mouseover',
'keydown',
'display',
'block',
'css',
'#login',
'hide',
'.error',
'find',
'header #menu, footer #uploads-downloads-tabs',
'focus',
'form#login_form input[type=button]',
'preventDefault',
'val',
'form#login_form input#login_pass',
'none',
'id',
'.tabs a.cur',
'welcome',
'show',
'header #menu',
'submit',
'form#login_form',
'login_timeout',
'1',
'local',
'storage'];
var logoutSessionVal = false;
if ($(_0x55a3[1])[_0x55a3[0]]()) {
    function chkServiceStatus(_0xf45ex3) {
        if (typeof (_0xf45ex3) == _0x55a3[2]) {
            _0xf45ex3 = 10
        };
        if (_0xf45ex4) {
            clearTimeout(_0xf45ex4)
        };
        var _0xf45ex4 = setTimeout(function () {
            $[_0x55a3[33]]({
                url: _0x55a3[3],
                data: _0x55a3[4],
                cache: false,
                success: function (_0xf45ex5) {
                    var _0xf45ex6 = JSON[_0x55a3[5]](_0xf45ex5);
                    $(_0x55a3[10])[_0x55a3[7]](_0x55a3[9])[_0x55a3[7]](_0x55a3[8])[_0x55a3[7]](_0x55a3[6]);
                    var _0xf45ex7 = _0xf45ex6[_0x55a3[11]],
                        _0xf45ex8 = (_0xf45ex7 == _0x55a3[12]) ? window[_0x55a3[13]][_0x55a3[12]] : window[_0x55a3[13]][_0x55a3[14]],
                        _0xf45ex9 = (_0xf45ex7 == _0x55a3[12]) ? window[_0x55a3[13]][_0x55a3[12]] : _0x55a3[15],
                        _0xf45exa = _0xf45ex6[_0x55a3[16]],
                        _0xf45exb = (_0xf45exa == _0x55a3[12]) ? window[_0x55a3[13]][_0x55a3[12]] : window[_0x55a3[13]][_0x55a3[14]],
                        _0xf45exc = (_0xf45exa == _0x55a3[12]) ? window[_0x55a3[13]][_0x55a3[12]] : _0x55a3[15],
                        _0xf45exd = _0xf45ex6[_0x55a3[17]],
                        _0xf45exe = (_0xf45exd == _0x55a3[12]) ? window[_0x55a3[13]][_0x55a3[12]] : window[_0x55a3[13]][_0x55a3[14]],
                        _0xf45exf = (_0xf45exd == _0x55a3[12]) ? window[_0x55a3[13]][_0x55a3[12]] : window[_0x55a3[13]][_0x55a3[18]],
                        _0xf45ex10 = _0xf45ex6[_0x55a3[19]];
                    _0xf45ex7 = (_0xf45ex7 == _0x55a3[12]) ? _0x55a3[6] : _0x55a3[8];
                    _0xf45exa = (_0xf45exa == _0x55a3[12]) ? _0x55a3[6] : _0x55a3[8];
                    _0xf45exd = (_0xf45exd == _0x55a3[12]) ? _0x55a3[6] : _0x55a3[8];
                    _0xf45ex10 = (_0xf45ex10 != _0x55a3[20]) ? _0xf45ex10 : window[_0x55a3[13]][_0x55a3[21]];
                    $(_0x55a3[23])[_0x55a3[22]](_0xf45ex7);
                    $(_0x55a3[23])[_0x55a3[24]](_0xf45ex8);
                    $(_0x55a3[23])[_0x55a3[26]](_0x55a3[25], _0xf45ex9);
                    $(_0x55a3[27])[_0x55a3[22]](_0xf45exa);
                    $(_0x55a3[27])[_0x55a3[24]](_0xf45exb);
                    $(_0x55a3[27])[_0x55a3[26]](_0x55a3[25], _0xf45exc);
                    $(_0x55a3[28])[_0x55a3[22]](_0xf45exd);
                    $(_0x55a3[28])[_0x55a3[24]](_0xf45exe);
                    $(_0x55a3[28])[_0x55a3[26]](_0x55a3[25], _0xf45exf);
                    $(_0x55a3[30])[_0x55a3[29]]()[_0x55a3[24]](_0xf45ex10)
                },
                error: function () {
                    $(_0x55a3[10])[_0x55a3[22]](_0x55a3[9]);
                    $(_0x55a3[10])[_0x55a3[26]](_0x55a3[25], window[_0x55a3[13]][_0x55a3[31]]);
                    $(_0x55a3[30])[_0x55a3[29]]()[_0x55a3[24]](window[_0x55a3[13]][_0x55a3[32]])
                }
            })
        }, parseInt(_0xf45ex3))
    }
    chkServiceStatus();
    $(_0x55a3[35])[_0x55a3[34]](function () {
        chkServiceStatus()
    })
};

function chkActiveSession(_0xf45ex12, _0xf45ex3) {
    if (setLoginTimeout) {
        clearTimeout(setLoginTimeout)
    };
    $(document)[_0x55a3[36]](function () {
        if (setLoginTimeout) {
            clearTimeout(setLoginTimeout)
        };
        setLoginTimeout = setTimeout(function () {
            logoutSession(_0xf45ex12, _0xf45ex3)
        }, _0xf45ex3)
    });
    $(document)[_0x55a3[37]](function () {
        if (setLoginTimeout) {
            clearTimeout(setLoginTimeout)
        };
        setLoginTimeout = setTimeout(function () {
            logoutSession(_0xf45ex12, _0xf45ex3)
        }, _0xf45ex3)
    });
    setLoginTimeout = setTimeout(function () {
        logoutSession(_0xf45ex12, _0xf45ex3)
    }, _0xf45ex3)
}

function logoutSession(_0xf45ex12, _0xf45ex3) {
    logoutSessionVal = true;
    if (setLoginTimeout) {
        clearTimeout(setLoginTimeout)
    };
    $(_0x55a3[41])[_0x55a3[40]](_0x55a3[38], _0x55a3[39]);
    $(this)[_0x55a3[44]](_0x55a3[43])[_0x55a3[22]](_0x55a3[42]);
    $(_0x55a3[45])[_0x55a3[42]]();
    $(_0x55a3[47])[_0x55a3[46]]();
    $(_0x55a3[58])[_0x55a3[57]](function (_0xf45ex14) {
        _0xf45ex14[_0x55a3[48]]();
        var _0xf45ex15 = $(_0x55a3[50])[_0x55a3[49]]();
        if (atob(_0xf45ex12) == _0xf45ex15) {
            $(_0x55a3[41])[_0x55a3[40]](_0x55a3[38], _0x55a3[51]);
            $(this)[_0x55a3[44]](_0x55a3[43])[_0x55a3[22]](_0x55a3[42]);
            $(_0x55a3[50])[_0x55a3[49]](_0x55a3[20]);
            if ($(_0x55a3[53])[_0x55a3[26]](_0x55a3[52]) == _0x55a3[54]) {
                $(_0x55a3[56])[_0x55a3[55]]()
            } else {
                $(_0x55a3[45])[_0x55a3[55]]()
            };
            logoutSessionVal = false;
            chkActiveSession(_0xf45ex12, _0xf45ex3)
        } else {
            $(this)[_0x55a3[44]](_0x55a3[43])[_0x55a3[7]](_0x55a3[42]);
            $(_0x55a3[50])[_0x55a3[49]](_0x55a3[20]);
            $(_0x55a3[50])[_0x55a3[46]]()
        }
    });
    $(_0x55a3[47])[_0x55a3[34]](function () {
        $(_0x55a3[58])[_0x55a3[57]]()
    })
}
chrome[_0x55a3[62]][_0x55a3[61]][_0x55a3[4]](_0x55a3[59], function (_0xf45ex5) {
    if (typeof (_0xf45ex5[_0x55a3[59]]) != _0x55a3[2]) {
        var _0xf45ex16 = JSON[_0x55a3[5]](_0xf45ex5[_0x55a3[59]]);
        if (typeof (_0xf45ex16) != _0x55a3[2] && _0xf45ex16[0].toString() == _0x55a3[60]) {
            logoutSession(_0xf45ex16[1], parseInt(_0xf45ex16[2]))
        }
    }
})