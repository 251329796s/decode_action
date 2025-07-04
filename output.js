//Fri Jul 04 2025 05:26:49 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x52adaf = require("axios"),
  _0x202a34 = require("protobufjs"),
  _0x3a09d5 = require("fs"),
  _0x5f48bb = require("path"),
  _0x7391da = require("readline"),
  {
    Worker: _0xeef6fa
  } = require("worker_threads"),
  _0x4e604c = require("ntp-client"),
  {
    HttpsProxyAgent: _0x3c4012
  } = require("https-proxy-agent"),
  {
    SocksProxyAgent: _0x58a891
  } = require("socks-proxy-agent"),
  _0x3fde34 = require("tweetnacl");
_0x3fde34.util = require("tweetnacl-util");
const {
  performance: _0x47b8a0
} = require("perf_hooks");
function _0x11c226(_0x2555a1) {
  return "[32;1m" + _0x2555a1 + "[0m";
}
function _0x449548(_0x6361c9) {
  return "[34;1m" + _0x6361c9 + "[0m";
}
function _0x245304(_0x3e79f0) {
  return "[33;1m" + _0x3e79f0 + "[0m";
}
function _0x2647d9(_0x2b3fff) {
  return "[36;1m" + _0x2b3fff + "[0m";
}
function _0x88cd56(_0x1a6329) {
  return "[31;1m" + _0x1a6329 + "[0m";
}
function _0x2fc3e5(_0x232932) {
  return "[37;1m" + _0x232932 + "[0m";
}
function _0x997abc(_0x1bf1eb) {
  return "[35m" + _0x1bf1eb + "[0m";
}
const _0x1ccb6a = _0x27efd2 => "[93m" + _0x27efd2 + "[0m";
function _0x6d7e48() {
  console.log(_0x11c226("==============================================="));
  console.log(_0x449548("🚀 ") + _0x2fc3e5("Nexus Web"));
  console.log(_0x2647d9("📢 TELEGRAM CHANNEL: ") + _0x2fc3e5("https://t.me/tahuri01"));
  console.log(_0x1ccb6a("☕ BUY ME A COFFEE (EVM Wallet): \n") + _0x2fc3e5("  0x8C6CF045C907da9fDA86355D0704BE92A7A5b847"));
  console.log(_0x11c226("==============================================="));
}
function _0x593e80(_0x10d9e0) {
  if (!_0x10d9e0) return null;
  const _0x3f99b9 = _0x10d9e0.toLowerCase();
  if (_0x3f99b9.startsWith("socks4://") || _0x3f99b9.startsWith("socks5://")) return new _0x58a891(_0x10d9e0);
  if (_0x3f99b9.startsWith("http://") || _0x3f99b9.startsWith("https://")) return new _0x3c4012(_0x10d9e0);
  return new _0x3c4012("http://" + _0x10d9e0);
}
function _0x5cd2c6(_0x3a70cf = "") {
  const _0x5eb118 = {
      "hour": "2-digit",
      "minute": "2-digit",
      "second": "2-digit",
      "hour12": false
    },
    _0x34cbb3 = new Intl.DateTimeFormat("id-ID", _0x5eb118).format(new Date()),
    _0x930a7c = "[" + _0x34cbb3 + "][" + _0x3a70cf + "]";
  return _0x930a7c;
}
function _0x2664f2() {
  const _0x4f3232 = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"];
  return _0x4f3232[Math.floor(Math.random() * _0x4f3232.length)];
}
const _0x31fb2b = _0x29fb14 => new Promise(_0x8778b0 => setTimeout(_0x8778b0, _0x29fb14)),
  _0x37984d = _0x2664f2(),
  _0x17c898 = {
    "Pragma": "no-cache",
    "Cache-Control": "no-cache",
    "Accept": "*/*",
    "Access-Control-Request-Headers": "content-type",
    "Origin": "https://app.nexus.xyz",
    "User-Agent": _0x37984d,
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://app.nexus.xyz/",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    "Priority": "u=1, i",
    "Connection": "close"
  };
function* _0x109ee4(_0x720ec1) {
  for (const _0x256e52 of _0x720ec1) {
    yield _0x256e52.nodeId;
  }
}
function _0x408985(_0x49d367, _0x56b887 = "account.txt") {
  try {
    {
      const _0x50f3c9 = _0x5f48bb.join(__dirname, _0x56b887),
        _0x3b0a6d = _0x3a09d5.readFileSync(_0x50f3c9, "utf-8").trim(),
        _0x451ffa = _0x3b0a6d.split("|");
      _0x451ffa.length !== 2 && console.log("Format account.txt not valid. ex: (nodeId|walletAddress)");
      const _0xebf2a3 = _0x451ffa[1],
        _0x45ca83 = _0x49d367 + "|" + _0xebf2a3;
      _0x3a09d5.writeFileSync(_0x50f3c9, _0x45ca83, "utf-8");
      console.log("✅ account.txt updated");
    }
  } catch (_0x490db1) {
    console.error("❌ Failed update account.txt:", _0x490db1.message);
  }
}
const _0x14c726 = _0x3a09d5.readFileSync("proxy.txt", "utf-8").trim(),
  _0x238a41 = _0x14c726.trim().split("\n"),
  _0x298722 = _0x238a41[0] || null,
  _0x4f2cbc = _0x593e80(_0x298722),
  _0x1590f6 = JSON.parse(_0x3a09d5.readFileSync("./config.json", "utf8"));
let _0x10aecb, _0x55e22b;
const _0x41a319 = "nodes.json";
if (_0x3a09d5.existsSync(_0x41a319)) try {
  const _0x16551b = _0x3a09d5.readFileSync(_0x41a319, "utf8");
  _0x16551b.trim().length > 0 ? (_0x10aecb = JSON.parse(_0x16551b), _0x10aecb && Array.isArray(_0x10aecb) && (_0x55e22b = _0x109ee4(_0x10aecb))) : console.log("nodes.json kosong, dilewati.");
} catch (_0x1f804c) {
  console.log("Failed parsing nodes.json:", _0x1f804c.message);
}
let _0x5a84f9, _0x4f946b;
if (_0x3a09d5.existsSync("account.txt")) {
  const _0x225190 = _0x3a09d5.readFileSync("account.txt", "utf-8").trim();
  if (_0x225190) {
    const [_0x24b256, _0x3f9741] = _0x225190.split("|");
    _0x24b256 && _0x3f9741 && (_0x5a84f9 = _0x24b256, _0x4f946b = _0x3f9741);
  }
}
const _0x77ae46 = _0x202a34.Root.fromJSON({
    "nested": {
      "NodeTelemetry": {
        "fields": {
          "flopsPerSec": {
            "type": "int32",
            "id": 1
          },
          "memoryUsed": {
            "type": "int32",
            "id": 2
          },
          "memoryCapacity": {
            "type": "int32",
            "id": 3
          },
          "location": {
            "type": "string",
            "id": 4
          }
        }
      },
      "SubmitProofRequest": {
        "fields": {
          "nodeId": {
            "type": "string",
            "id": 1
          },
          "nodeType": {
            "type": "int32",
            "id": 2
          },
          "proofHash": {
            "type": "string",
            "id": 3
          },
          "nodeTelemetry": {
            "type": "NodeTelemetry",
            "id": 4
          },
          "proof": {
            "type": "bytes",
            "id": 5
          },
          "taskId": {
            "type": "string",
            "id": 6
          },
          "ed25519PublicKey": {
            "type": "bytes",
            "id": 7
          },
          "signature": {
            "type": "bytes",
            "id": 8
          }
        }
      },
      "GetProofTaskRequest": {
        "fields": {
          "nodeId": {
            "type": "string",
            "id": 1
          },
          "nodeType": {
            "type": "int32",
            "id": 2
          }
        }
      },
      "Task": {
        "fields": {
          "programId": {
            "type": "string",
            "id": 1
          },
          "publicInputs": {
            "type": "bytes",
            "id": 2
          },
          "taskId": {
            "type": "string",
            "id": 3
          }
        }
      },
      "Node": {
        "fields": {
          "nodeId": {
            "type": "string",
            "id": 1
          },
          "nodeType": {
            "type": "int32",
            "id": 2
          },
          "ed25519PublicKey": {
            "type": "bytes",
            "id": 3
          }
        }
      },
      "NodesContainer": {
        "fields": {
          "nodes": {
            "rule": "repeated",
            "type": "Node",
            "id": 1
          },
          "nodesNextCursor": {
            "type": "string",
            "id": 2
          }
        }
      }
    }
  }),
  _0x30d05f = _0x77ae46.lookupType("SubmitProofRequest"),
  _0x40f4b4 = _0x77ae46.lookupType("GetProofTaskRequest"),
  _0x39d11a = _0x77ae46.lookupType("Task");
function _0x354117(_0x376541) {
  const _0x54f630 = _0x40f4b4.create(_0x376541),
    _0x19c4ff = _0x40f4b4.encode(_0x54f630).finish();
  return _0x19c4ff;
}
function _0x5e4638(_0x59686f) {
  return _0x39d11a.decode(_0x59686f);
}
function _0x1ad604(_0x109432) {
  const _0x52857e = {
      ..._0x109432,
      "proof": Buffer.from(_0x109432.proof),
      "ed25519PublicKey": Buffer.from(_0x109432.ed25519PublicKey),
      "signature": Buffer.from(_0x109432.signature)
    },
    _0x4aff5d = _0x30d05f.create(_0x52857e),
    _0x1e9a98 = _0x30d05f.encode(_0x4aff5d).finish();
  return _0x1e9a98;
}
function _0x2dff64(_0x18ccc6, _0x567802, _0x3ea410, _0x56ff95, _0x320841) {
  const _0x5605cf = Buffer.from(_0x320841.publicKey, "base64"),
    _0x128878 = Buffer.from(_0x320841.secretKey, "base64"),
    _0x22d685 = new Uint8Array(_0x5605cf),
    _0x1e078f = "0 | " + _0x18ccc6 + " | ",
    _0x48b911 = Buffer.from(_0x1e078f, "utf-8"),
    _0x439fe8 = _0x3fde34.sign.detached(_0x48b911, _0x128878),
    _0x5f2b42 = new Uint8Array(_0x439fe8);
  return {
    "nodeId": "",
    "nodeType": 0,
    "proofHash": "",
    "nodeTelemetry": {
      "flopsPerSec": _0x3ea410,
      "memoryUsed": 1,
      "memoryCapacity": 1,
      "location": "US"
    },
    "proof": _0x56ff95,
    "taskId": _0x18ccc6,
    "ed25519PublicKey": _0x22d685.buffer.slice(0),
    "signature": _0x5f2b42.buffer.slice(0)
  };
}
async function _0x5434f4(_0x3fa285) {
  try {
    const _0x1de969 = _0x354117(_0x3fa285),
      _0xa9ac72 = await _0x52adaf.post(_0x1590f6.taskUrl, _0x1de969, {
        "headers": {
          ..._0x17c898,
          "Content-Type": "application/octet-stream"
        },
        "httpAgent": _0x4f2cbc,
        "httpsAgent": _0x4f2cbc,
        "responseType": "arraybuffer"
      });
    _0xa9ac72.data && console.log(_0x5cd2c6() + " Task: Success");
    const _0x36c8b7 = Uint8Array.from(Buffer.from(_0xa9ac72.data, "binary")),
      _0x2340f0 = _0x5e4638(_0x36c8b7);
    return _0x2340f0;
  } catch (_0x599db0) {
    {
      let _0x57d86f;
      const _0x9f8003 = _0x599db0?.["response"]?.["status"];
      if (_0x9f8003 >= 500 && _0x9f8003 < 600) _0x57d86f = "Server Error: " + _0x9f8003;else {
        if (_0x599db0?.["response"]?.["data"]) {
          if (typeof _0x599db0.response.data === "string") {
            _0x57d86f = _0x599db0.response.data;
          } else Buffer.isBuffer(_0x599db0.response.data) ? _0x57d86f = _0x599db0.response.data.toString("utf-8") : _0x57d86f = JSON.stringify(_0x599db0.response.data);
        } else _0x57d86f = _0x599db0?.["message"] || "Unknown error";
      }
      console.error(_0x5cd2c6() + " Failed get task:", _0x57d86f);
      console.error(_0x5cd2c6() + " Waiting to fetch task again in " + _0x1590f6.delayRetryGetTask + " seconds");
      await _0x31fb2b(_0x1590f6.delayRetryGetTask * 1000);
      _0x196e3f = true;
    }
  }
}
async function _0x5a4da1(_0x56aebe, _0x44883a = 5) {
  const _0x16ac81 = _0x1ad604(_0x56aebe);
  for (let _0x1c5b2 = 1; _0x1c5b2 <= _0x44883a; _0x1c5b2++) {
    try {
      const _0x394ae6 = await _0x52adaf.post(_0x1590f6.submitUrl, _0x16ac81, {
        "headers": {
          ..._0x17c898,
          "Content-Type": "application/octet-stream"
        },
        "httpAgent": _0x4f2cbc,
        "httpsAgent": _0x4f2cbc
      });
      if (_0x394ae6.data) {
        console.log(_0x5cd2c6() + " Proof: Success");
        return;
      }
    } catch (_0x14b9ee) {
      let _0x237917;
      const _0x445df7 = _0x14b9ee?.["response"]?.["status"];
      if (_0x445df7 >= 500 && _0x445df7 < 600) _0x237917 = "Server Error: " + _0x445df7;else {
        if (_0x14b9ee?.["response"]?.["data"]) {
          if (typeof _0x14b9ee.response.data === "string") {
            _0x237917 = _0x14b9ee.response.data;
          } else Buffer.isBuffer(_0x14b9ee.response.data) ? _0x237917 = _0x14b9ee.response.data.toString("utf-8") : _0x237917 = JSON.stringify(_0x14b9ee.response.data);
        } else _0x237917 = _0x14b9ee?.["message"] || "Unknown error";
      }
      if (_0x1c5b2 < _0x44883a) console.log(_0x5cd2c6() + " Submit failed (attempt " + _0x1c5b2 + "): " + _0x237917 + ", retrying submit.."), await new Promise(_0x2240d3 => setTimeout(_0x2240d3, 2000));else {
        console.log(_0x5cd2c6() + " Failed submit proof after " + _0x44883a + " attempts: " + _0x237917);
      }
    }
  }
}
function _0x4954e2(_0x393648) {
  const _0xe3180a = Object.keys(_0x393648).length,
    _0x1ea696 = new Uint8Array(_0xe3180a);
  for (let _0x5cb095 = 0; _0x5cb095 < _0xe3180a; _0x5cb095++) {
    _0x1ea696[_0x5cb095] = _0x393648[_0x5cb095];
  }
  return _0x1ea696;
}
async function _0x50f2b2(_0x8dd9a2) {
  const _0x78b3d0 = _0x77ae46.lookupType("NodesContainer"),
    _0x5bc050 = _0x4954e2(_0x8dd9a2),
    _0x494a02 = _0x78b3d0.decode(_0x5bc050),
    _0x23683e = _0x78b3d0.toObject(_0x494a02, {
      "longs": String,
      "enums": String,
      "bytes": String,
      "defaults": true
    }),
    _0x373b9c = _0x23683e.nodes,
    _0x10e9f0 = _0x373b9c.filter(_0x385b90 => _0x385b90.nodeType === 0),
    _0x330ea4 = "nodes.json";
  _0x3a09d5.writeFileSync(_0x330ea4, JSON.stringify(_0x10e9f0, null, 2));
}
function _0x36c8a8(_0x19e0c3) {
  const _0x2d159d = Uint8Array.from(_0x19e0c3);
  return Array.from(_0x2d159d).map(_0x373ff6 => _0x373ff6.toString(16).padStart(2, "0")).join("");
}
function _0x3636b7(_0x3229ce) {
  const _0x565fa0 = _0x5f48bb.resolve("keys.json");
  let _0x1695aa = {};
  if (_0x3a09d5.existsSync(_0x565fa0)) try {
    _0x1695aa = JSON.parse(_0x3a09d5.readFileSync(_0x565fa0, "utf-8"));
  } catch (_0x2fac3a) {
    console.error("⚠️ Gagal parsing keys.json. Membuat baru.");
  }
  if (_0x1695aa[_0x3229ce]) {
    return _0x1695aa[_0x3229ce];
  }
  const _0x54b270 = _0x3fde34.sign.keyPair(),
    _0x228b45 = {
      "publicKey": Buffer.from(_0x54b270.publicKey).toString("base64"),
      "secretKey": Buffer.from(_0x54b270.secretKey).toString("base64")
    };
  _0x1695aa[_0x3229ce] = _0x228b45;
  _0x3a09d5.writeFileSync(_0x565fa0, JSON.stringify(_0x1695aa, null, 2));
  return _0x228b45;
}
let _0x17f00e,
  _0x53d76a,
  _0x1c87d5,
  _0x5b6d0f,
  _0x134b28,
  _0x196e3f = true,
  _0x48dce4,
  _0x175f83,
  _0x2d3c25;
async function _0x579d7f(_0x160c4a, _0x46f99c) {
  console.log(_0x5cd2c6() + " NodeId:", _0x160c4a);
  _0x196e3f = false;
  let _0x1044c8,
    _0x40c40b = {
      "nodeId": _0x160c4a,
      "nodeType": 0,
      "ed25519PublicKey": _0x46f99c?.["publicKey"]
    };
  try {
    const _0x2fc415 = _0x5f48bb.join(__dirname, "tah.uri"),
      _0xd5959b = "rhythmKrakatoa",
      _0x3fc16f = _0x3a09d5.readFileSync(_0x2fc415),
      _0x469d44 = Buffer.from(_0x3fc16f.map(_0x1b4e23 => _0x1b4e23 ^ _0xd5959b));
    ({
      instance: _0x17f00e
    } = await WebAssembly.instantiate(_0x469d44, {}));
    _0x5b6d0f = _0x17f00e.exports.memory;
    _0x53d76a = _0x17f00e.exports.get_proof_for_program;
    _0x1c87d5 = _0x17f00e.exports.free_proof;
    {
      {
        _0x134b28 = await _0x5434f4(_0x40c40b);
        let _0x3db404 = _0x47b8a0.now(),
          _0x51ff88 = _0x47b8a0.now() - _0x3db404,
          _0x5e493c = 40000000 / (_0x51ff88 / 1000);
        const _0x75d7de = Math.floor(_0x5e493c);
        if (_0x134b28?.["publicInputs"]) {
          let _0x47633b = 0;
          (_0x134b28.programId = "fib_input_initial") && (_0x47633b = 1);
          console.log(_0x5cd2c6() + " Processing task, please wait...");
          let _0x41ca1a = _0x53d76a(_0x134b28.publicInputs, _0x47633b),
            _0x135a87 = new DataView(_0x5b6d0f.buffer, _0x41ca1a, 20),
            _0x5f3386 = _0x135a87.getInt32(0, true),
            _0x33ffc5 = _0x135a87.getUint32(4, true),
            _0x1927b9 = _0x135a87.getUint32(8, true),
            _0x56a330 = _0x135a87.getUint32(12, true),
            _0x5ef1de = _0x135a87.getUint32(16, true),
            _0x489110 = new Uint8Array(_0x5b6d0f.buffer);
          _0x48dce4 = _0x489110.slice(_0x33ffc5, _0x33ffc5 + _0x1927b9);
          _0x175f83 = _0x489110.slice(_0x56a330, _0x56a330 + _0x5ef1de);
          _0x1c87d5(_0x41ca1a);
          _0x2d3c25 = _0x36c8a8(_0x175f83);
        } else console.log("-----------------------------------------");
        if (_0x48dce4) {
          _0x1044c8 = _0x2dff64(_0x134b28.taskId, _0x2d3c25, _0x75d7de, _0x48dce4.buffer.slice(0), _0x46f99c);
          if (_0x1044c8) {
            {
              wasmPath = null;
              _0x17f00e = null;
              _0x5b6d0f = null;
              _0x53d76a = null;
              _0x1c87d5 = null;
              wasmBuffer = null;
              buffer = null;
              _0x48dce4 = null;
              _0x175f83 = null;
              await _0x5a4da1(_0x1044c8, _0x1590f6?.["retrySubmit"]);
              _0x1044c8 = null;
              console.log(_0x5cd2c6() + " Waiting " + _0x1590f6.delay + " seconds");
              await _0x31fb2b(_0x1590f6.delay * 1000);
              _0x196e3f = true;
              console.log("-----------------------------------------");
            }
          }
        }
      }
    }
  } catch (_0x42825f) {
    console.error("❌ Error in main loop:", _0x42825f);
  }
}
async function _0x2cafe1() {
  _0x298722 ? console.log(_0x5cd2c6() + " Proxy: true") : console.log(_0x5cd2c6() + " Proxy: false ");
  const _0x1f6cf3 = _0x3a09d5.readFileSync("account.txt", "utf-8").trim().split("\n").map(_0x50b2ce => _0x50b2ce.trim()).filter(Boolean),
    _0x51df48 = _0x3636b7(_0x1f6cf3[0]);
  while (_0x196e3f) {
    try {
      await _0x579d7f(_0x1f6cf3[0], _0x51df48);
    } catch (_0xcde4f9) {
      console.log(_0xcde4f9);
    }
  }
}
const _0x4d63da = "tahuriGGtahuri";
function _0x3d508(_0x513e62, _0x32714b) {
  const _0x5b8531 = Buffer.from(_0x513e62, "base64"),
    _0x5544a9 = Buffer.from(_0x32714b),
    _0x3161a8 = Buffer.alloc(_0x5b8531.length);
  for (let _0x51be79 = 0; _0x51be79 < _0x5b8531.length; _0x51be79++) {
    _0x3161a8[_0x51be79] = _0x5b8531[_0x51be79] ^ _0x5544a9[_0x51be79 % _0x5544a9.length];
  }
  return _0x3161a8.toString();
}
function _0x481c86(_0x4b7c37) {
  try {
    const _0x26613b = _0x3d508(_0x4b7c37, _0x4d63da),
      [_0x1303e4, _0x2ac6fa] = _0x26613b.split(":"),
      [_0x5f153e, _0xed4e8e] = _0x2ac6fa.split("|"),
      _0x57e3ca = parseInt(_0x5f153e),
      _0x380dea = parseInt(_0xed4e8e),
      _0x2979d8 = Math.floor(Date.now() / 1000);
    if (_0x2979d8 - _0x57e3ca > 1200) return {
      "valid": false,
      "reason": "Key expired"
    };
    if (_0x2979d8 > _0x380dea) {
      return {
        "valid": false,
        "reason": "Key expired"
      };
    }
    return {
      "valid": true,
      "userId": _0x1303e4,
      "createdAt": _0x57e3ca,
      "expiresAt": _0x380dea
    };
  } catch (_0x3d68cb) {
    return {
      "valid": false,
      "reason": "Key error"
    };
  }
}
const _0x2608af = _0x7391da.createInterface({
  "input": process.stdin,
  "output": process.stdout
});
async function _0x1651ff() {
  try {
    {
      const {
        data: _0x28e503
      } = await _0x52adaf.get("https://raw.githubusercontent.com/wrightL-dev/a/refs/heads/main/c.json");
      if (_0x28e503.nexus === true) {
        _0x2608af.question("🔑 Input key : ", _0x515101 => {
          const _0x64c1f9 = _0x481c86(_0x515101);
          console.clear();
          _0x6d7e48();
          _0x64c1f9.valid ? (_0x2608af.close(), setInterval(() => {
            const _0xa3d8c1 = Math.floor(Date.now() / 1000);
            if (_0xa3d8c1 > _0x64c1f9.expiresAt) {
              console.log("❌ Key expired");
              process.exit(1);
            } else {}
          }, 3600000), _0x2cafe1()) : (console.log("❌ Key expired or invalid."), _0x2608af.close(), process.exit(1));
        });
      } else _0x6d7e48(), _0x2cafe1();
    }
  } catch (_0x233c93) {
    console.log("Network error");
    _0x2608af.close();
    process.exit(1);
  }
}
_0x1651ff();
process.on("SIGINT", () => {
  process.exit(1);
});