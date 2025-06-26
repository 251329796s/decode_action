//Thu Jun 26 2025 09:14:51 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x4ce693 = require("axios"),
  _0x59753e = require("protobufjs"),
  _0x566a49 = require("fs"),
  _0x1938f3 = require("path"),
  _0x80294e = require("readline"),
  {
    Worker: _0x48d33a
  } = require("worker_threads"),
  _0x102cbb = require("ntp-client"),
  {
    HttpsProxyAgent: _0x558fb9
  } = require("https-proxy-agent"),
  {
    SocksProxyAgent: _0xfc644c
  } = require("socks-proxy-agent"),
  _0x3f7c71 = require("tweetnacl");
_0x3f7c71.util = require("tweetnacl-util");
const {
  performance: _0x806e8a
} = require("perf_hooks");
function _0x1aa649(_0x5ddc07) {
  return "[32;1m" + _0x5ddc07 + "[0m";
}
function _0x4aff7a(_0x4db8af) {
  return "[34;1m" + _0x4db8af + "[0m";
}
function _0x46c693(_0x12d21e) {
  return "[33;1m" + _0x12d21e + "[0m";
}
function _0x3bb58e(_0x36b850) {
  return "[36;1m" + _0x36b850 + "[0m";
}
function _0x1b8842(_0x3cd9fb) {
  return "[31;1m" + _0x3cd9fb + "[0m";
}
function _0x4911ca(_0x589e54) {
  return "[37;1m" + _0x589e54 + "[0m";
}
function _0x464075(_0x351721) {
  return "[35m" + _0x351721 + "[0m";
}
const _0x19c438 = _0x18fb0b => "[93m" + _0x18fb0b + "[0m";
function _0x3603f0() {
  console.log(_0x1aa649("==============================================="));
  console.log(_0x4aff7a("🚀 ") + _0x4911ca("Nexus Web"));
  console.log(_0x3bb58e("📢 TELEGRAM CHANNEL: ") + _0x4911ca("https://t.me/tahuri01"));
  console.log(_0x19c438("☕ BUY ME A COFFEE (EVM Wallet): \n") + _0x4911ca("  0x8C6CF045C907da9fDA86355D0704BE92A7A5b847"));
  console.log(_0x1aa649("==============================================="));
}
function _0x43bea7(_0x35783a) {
  if (!_0x35783a) return null;
  const _0x1a878f = _0x35783a.toLowerCase();
  if (_0x1a878f.startsWith("socks4://") || _0x1a878f.startsWith("socks5://")) return new _0xfc644c(_0x35783a);
  if (_0x1a878f.startsWith("http://") || _0x1a878f.startsWith("https://")) return new _0x558fb9(_0x35783a);
  return new _0x558fb9("http://" + _0x35783a);
}
function _0x3bc7cb(_0x5a3bdc = "") {
  const _0x5c5704 = {
      "hour": "2-digit",
      "minute": "2-digit",
      "second": "2-digit",
      "hour12": false
    },
    _0x29b49e = new Intl.DateTimeFormat("id-ID", _0x5c5704).format(new Date()),
    _0x95c059 = "[" + _0x29b49e + "][" + _0x5a3bdc + "]";
  return _0x95c059;
}
function _0x3c75e8() {
  const _0x1bf057 = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"];
  return _0x1bf057[Math.floor(Math.random() * _0x1bf057.length)];
}
const _0x415446 = _0x4dfaa8 => new Promise(_0x2caacd => setTimeout(_0x2caacd, _0x4dfaa8)),
  _0x14e3dc = _0x3c75e8(),
  _0x127044 = {
    "Pragma": "no-cache",
    "Cache-Control": "no-cache",
    "Accept": "*/*",
    "Access-Control-Request-Headers": "content-type",
    "Origin": "https://app.nexus.xyz",
    "User-Agent": _0x14e3dc,
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://app.nexus.xyz/",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    "Priority": "u=1, i",
    "Connection": "close"
  };
function* _0x5b3f19(_0x129ad7) {
  for (const _0x206332 of _0x129ad7) {
    yield _0x206332.nodeId;
  }
}
function _0x1e9b84(_0x1a6e70, _0x1ce367 = "account.txt") {
  try {
    {
      const _0x45bbe4 = _0x1938f3.join(__dirname, _0x1ce367),
        _0x4f6748 = _0x566a49.readFileSync(_0x45bbe4, "utf-8").trim(),
        _0x2fb0e1 = _0x4f6748.split("|");
      if (_0x2fb0e1.length !== 2) {
        console.log("Format account.txt not valid. ex: (nodeId|walletAddress)");
      }
      const _0x3362cf = _0x2fb0e1[1],
        _0x347287 = _0x1a6e70 + "|" + _0x3362cf;
      _0x566a49.writeFileSync(_0x45bbe4, _0x347287, "utf-8");
      console.log("✅ account.txt updated");
    }
  } catch (_0x438081) {
    console.error("❌ Failed update account.txt:", _0x438081.message);
  }
}
const _0x42f39c = _0x566a49.readFileSync("proxy.txt", "utf-8").trim(),
  _0x109435 = _0x42f39c.trim().split("\n"),
  _0x1fb44f = _0x109435[0] || null,
  _0x32d6c7 = _0x43bea7(_0x1fb44f),
  _0x4c5527 = JSON.parse(_0x566a49.readFileSync("./config.json", "utf8"));
let _0x3606e3, _0x40e715;
const _0x3b9c23 = "nodes.json";
if (_0x566a49.existsSync(_0x3b9c23)) try {
  const _0x31e8f5 = _0x566a49.readFileSync(_0x3b9c23, "utf8");
  _0x31e8f5.trim().length > 0 ? (_0x3606e3 = JSON.parse(_0x31e8f5), _0x3606e3 && Array.isArray(_0x3606e3) && (_0x40e715 = _0x5b3f19(_0x3606e3))) : console.log("nodes.json kosong, dilewati.");
} catch (_0x55ae49) {
  console.log("Failed parsing nodes.json:", _0x55ae49.message);
}
let _0x55b05f, _0x5c847b;
if (_0x566a49.existsSync("account.txt")) {
  const _0x1254bb = _0x566a49.readFileSync("account.txt", "utf-8").trim();
  if (_0x1254bb) {
    const [_0x2311ef, _0x59c4d7] = _0x1254bb.split("|");
    _0x2311ef && _0x59c4d7 && (_0x55b05f = _0x2311ef, _0x5c847b = _0x59c4d7);
  }
}
const _0x43258b = _0x59753e.Root.fromJSON({
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
  _0x43b866 = _0x43258b.lookupType("SubmitProofRequest"),
  _0x36358f = _0x43258b.lookupType("GetProofTaskRequest"),
  _0x2226af = _0x43258b.lookupType("Task");
function _0xeeb203(_0x4c6e70) {
  const _0x344884 = _0x36358f.create(_0x4c6e70),
    _0x459340 = _0x36358f.encode(_0x344884).finish();
  return _0x459340;
}
function _0x4e3d3a(_0x2ba28c) {
  return _0x2226af.decode(_0x2ba28c);
}
function _0x31fc46(_0x2affb6) {
  const _0x3bacc6 = {
      ..._0x2affb6,
      "proof": Buffer.from(_0x2affb6.proof),
      "ed25519PublicKey": Buffer.from(_0x2affb6.ed25519PublicKey),
      "signature": Buffer.from(_0x2affb6.signature)
    },
    _0x1bc8aa = _0x43b866.create(_0x3bacc6),
    _0x2f7884 = _0x43b866.encode(_0x1bc8aa).finish();
  return _0x2f7884;
}
function _0x3df83e(_0x7f3217, _0x4bee79, _0x70b455, _0x3c3914, _0x178bb9) {
  const _0x5ace3d = Buffer.from(_0x178bb9.publicKey, "base64"),
    _0x4f9c08 = Buffer.from(_0x178bb9.secretKey, "base64"),
    _0x3fb768 = new Uint8Array(_0x5ace3d),
    _0x51d0bb = "0 | " + _0x7f3217 + " | ",
    _0x58e695 = Buffer.from(_0x51d0bb, "utf-8"),
    _0x2e30aa = _0x3f7c71.sign.detached(_0x58e695, _0x4f9c08),
    _0x34505b = new Uint8Array(_0x2e30aa);
  return {
    "nodeId": "",
    "nodeType": 0,
    "proofHash": "",
    "nodeTelemetry": {
      "flopsPerSec": _0x70b455,
      "memoryUsed": 1,
      "memoryCapacity": 1,
      "location": "US"
    },
    "proof": _0x3c3914,
    "taskId": _0x7f3217,
    "ed25519PublicKey": _0x3fb768.buffer.slice(0),
    "signature": _0x34505b.buffer.slice(0)
  };
}
async function _0xe04112(_0x3aa0f8) {
  try {
    {
      const _0x1df20d = _0xeeb203(_0x3aa0f8),
        _0x113d60 = await _0x4ce693.post(_0x4c5527.taskUrl, _0x1df20d, {
          "headers": {
            ..._0x127044,
            "Content-Type": "application/octet-stream"
          },
          "httpAgent": _0x32d6c7,
          "httpsAgent": _0x32d6c7,
          "responseType": "arraybuffer"
        });
      _0x113d60.data && console.log(_0x3bc7cb() + " Task: Success");
      const _0x1404cc = Uint8Array.from(Buffer.from(_0x113d60.data, "binary")),
        _0x190d71 = _0x4e3d3a(_0x1404cc);
      return _0x190d71;
    }
  } catch (_0x7952ec) {
    console.error(_0x3bc7cb() + " Failed get task:", _0x7952ec?.["response"]?.["data"]);
    if (_0x7952ec?.["response"]?.["data"]?.["httpCode"] === 429) {
      console.log(_0x3bc7cb() + "  Change node ID...");
      _0x40e715.next();
      const _0x3c6743 = _0x40e715.next();
      if (!_0x3c6743.done) {
        {
          _0x55b05f = _0x3c6743.value;
          console.log(_0x3bc7cb() + " ➡️ New nodeId:", _0x55b05f);
          _0x3a5700 = true;
          dataTasks.nodeId = _0x55b05f;
          _0x1e9b84(_0x55b05f);
          await _0x4cae92();
        }
      } else console.log("❌ All nodes have been used. "), process.exit(1);
    }
  }
}
async function _0x45636a(_0x5ba158) {
  try {
    const _0x36a9d6 = _0x31fc46(_0x5ba158),
      _0x2c2dba = await _0x4ce693.post(_0x4c5527.submitUrl, _0x36a9d6, {
        "headers": {
          ..._0x127044,
          "Content-Type": "application/octet-stream"
        },
        "httpAgent": _0x32d6c7,
        "httpsAgent": _0x32d6c7
      });
    if (_0x2c2dba.data) {
      console.log(_0x3bc7cb() + " Proof: Success");
    }
  } catch (_0x33e59c) {
    console.error(_0x3bc7cb() + " Failed send proof", _0x33e59c.message);
  }
}
async function _0x3321fb() {
  try {
    const _0x354026 = await _0x4ce693.post("https://rpc.nexus.xyz/http", {
      "jsonrpc": "2.0",
      "id": 18,
      "method": "eth_getBalance",
      "params": [_0x5c847b]
    }, {
      "headers": {
        ..._0x127044,
        "content-type": "application/json"
      },
      "httpAgent": _0x32d6c7,
      "httpsAgent": _0x32d6c7
    });
    if (_0x354026.data?.["result"]) {
      const _0x266a1c = BigInt(_0x354026.data?.["result"]),
        _0x4d6924 = Number(_0x266a1c) / 1000000000000000000;
      console.log(_0x3bc7cb() + " Points: " + _0x4d6924 + " NEX");
    }
  } catch (_0x2b75b8) {
    console.error("Failed get points:", _0x2b75b8);
  }
}
async function _0x16fc23(_0x4ac099) {
  try {
    {
      const _0x240bf2 = await _0x4ce693.get("https://beta.orchestrator.nexus.xyz/v3/users/" + _0x4ac099, {
          "headers": _0x127044,
          "httpAgent": _0x32d6c7,
          "httpsAgent": _0x32d6c7
        }),
        _0x3c92c7 = _0x240bf2.data,
        _0x284ff0 = Uint8Array.from(Buffer.from(_0x3c92c7, "binary"));
      _0x483d03(_0x284ff0);
    }
  } catch (_0x14190f) {
    console.log("error get nodes", _0x14190f);
  }
}
function _0x420442(_0x1127c2) {
  const _0x53bc8f = Object.keys(_0x1127c2).length,
    _0x34fdf0 = new Uint8Array(_0x53bc8f);
  for (let _0x3603ba = 0; _0x3603ba < _0x53bc8f; _0x3603ba++) {
    _0x34fdf0[_0x3603ba] = _0x1127c2[_0x3603ba];
  }
  return _0x34fdf0;
}
async function _0x483d03(_0x54ff50) {
  const _0x126c92 = _0x43258b.lookupType("NodesContainer"),
    _0x5729de = _0x420442(_0x54ff50),
    _0x3cc3fa = _0x126c92.decode(_0x5729de),
    _0x138649 = _0x126c92.toObject(_0x3cc3fa, {
      "longs": String,
      "enums": String,
      "bytes": String,
      "defaults": true
    }),
    _0x59a9cd = _0x138649.nodes,
    _0x541016 = _0x59a9cd.filter(_0x571284 => _0x571284.nodeType === 0),
    _0x4607bd = "nodes.json";
  _0x566a49.writeFileSync(_0x4607bd, JSON.stringify(_0x541016, null, 2));
}
function _0x226a0e(_0x505aa2) {
  const _0x252b77 = Uint8Array.from(_0x505aa2);
  return Array.from(_0x252b77).map(_0x47b1d2 => _0x47b1d2.toString(16).padStart(2, "0")).join("");
}
function _0x526618(_0x3ae41f) {
  const _0x9dacea = _0x1938f3.resolve("keys.json");
  let _0x154db8 = {};
  if (_0x566a49.existsSync(_0x9dacea)) {
    try {
      _0x154db8 = JSON.parse(_0x566a49.readFileSync(_0x9dacea, "utf-8"));
    } catch (_0x3601e8) {
      console.error("⚠️ Gagal parsing keys.json. Membuat baru.");
    }
  }
  if (_0x154db8[_0x3ae41f]) return _0x154db8[_0x3ae41f];
  const _0x24e257 = _0x3f7c71.sign.keyPair(),
    _0x3fde88 = {
      "publicKey": Buffer.from(_0x24e257.publicKey).toString("base64"),
      "secretKey": Buffer.from(_0x24e257.secretKey).toString("base64")
    };
  _0x154db8[_0x3ae41f] = _0x3fde88;
  _0x566a49.writeFileSync(_0x9dacea, JSON.stringify(_0x154db8, null, 2));
  return _0x3fde88;
}
let _0x26e126,
  _0x3649ae,
  _0x31da47,
  _0x5acce3,
  _0x2e862c,
  _0x3a5700 = true,
  _0xaa87fd,
  _0x3b1206,
  _0x3bcce9;
async function _0x314659(_0x495966, _0x2520ef) {
  console.log(_0x3bc7cb() + " NodeId:", _0x495966);
  _0x3a5700 = false;
  let _0x1f2f49,
    _0x3a5c1e = {
      "nodeId": _0x495966,
      "nodeType": 0,
      "ed25519PublicKey": _0x2520ef?.["publicKey"]
    };
  try {
    const _0xd1ab93 = _0x1938f3.join(__dirname, "tah.uri"),
      _0x28be4b = "a",
      _0x2363b7 = _0x566a49.readFileSync(_0xd1ab93),
      _0x17adf1 = Buffer.from(_0x2363b7.map(_0x442a97 => _0x442a97 ^ _0x28be4b));
    ({
      instance: _0x26e126
    } = await WebAssembly.instantiate(_0x17adf1, {}));
    _0x5acce3 = _0x26e126.exports.memory;
    _0x3649ae = _0x26e126.exports.get_proof;
    _0x31da47 = _0x26e126.exports.free_proof;
    if (_0x3649ae) {
      {
        _0x2e862c = await _0xe04112(_0x3a5c1e);
        let _0x3dd8e3 = _0x806e8a.now(),
          _0x351863 = _0x806e8a.now() - _0x3dd8e3,
          _0x4cb7b0 = 40000000 / (_0x351863 / 1000);
        const _0xa68129 = Math.floor(_0x4cb7b0);
        if (_0x2e862c?.["publicInputs"]) {
          {
            console.log(_0x3bc7cb() + " Processing task, please wait...");
            let _0x10212e = _0x3649ae(_0x2e862c.publicInputs),
              _0xd2cd9d = new DataView(_0x5acce3.buffer, _0x10212e, 20),
              _0x5925cc = _0xd2cd9d.getInt32(0, true),
              _0x594f12 = _0xd2cd9d.getUint32(4, true),
              _0x5ce01d = _0xd2cd9d.getUint32(8, true),
              _0x28cc20 = _0xd2cd9d.getUint32(12, true),
              _0x13a91b = _0xd2cd9d.getUint32(16, true),
              _0x386855 = new Uint8Array(_0x5acce3.buffer);
            _0xaa87fd = _0x386855.slice(_0x594f12, _0x594f12 + _0x5ce01d);
            _0x3b1206 = _0x386855.slice(_0x28cc20, _0x28cc20 + _0x13a91b);
            _0x31da47(_0x10212e);
            _0x3bcce9 = _0x226a0e(_0x3b1206);
          }
        }
        if (_0xaa87fd) {
          _0x1f2f49 = _0x3df83e(_0x2e862c.taskId, _0x3bcce9, _0xa68129, _0xaa87fd.buffer.slice(0), _0x2520ef);
          if (_0x1f2f49) {
            {
              wasmPath = null;
              _0x26e126 = null;
              _0x5acce3 = null;
              _0x3649ae = null;
              _0x31da47 = null;
              wasmBuffer = null;
              buffer = null;
              _0xaa87fd = null;
              _0x3b1206 = null;
              await _0x45636a(_0x1f2f49);
              _0x1f2f49 = null;
              console.log(_0x3bc7cb() + " Waiting " + _0x4c5527.delay + " seconds");
              await _0x415446(_0x4c5527.delay * 1000);
              _0x3a5700 = true;
              console.log("-----------------------------------------");
            }
          }
        }
      }
    } else _0x3a5700 = true;
  } catch (_0x3dee90) {
    console.error("❌ Error in main loop:", _0x3dee90);
  }
}
async function _0x4cae92() {
  _0x1fb44f ? console.log(_0x3bc7cb() + " Proxy: true") : console.log(_0x3bc7cb() + " Proxy: false ");
  const _0x24a6bd = _0x566a49.readFileSync("account.txt", "utf-8").trim().split("\n").map(_0x18dc9a => _0x18dc9a.trim()).filter(Boolean),
    _0x29b1ce = _0x526618(_0x24a6bd[0]);
  while (_0x3a5700) {
    await _0x314659(_0x24a6bd[0], _0x29b1ce);
  }
}
const _0x5f5749 = "tahuriGGtahuri";
function _0x212dad(_0x2cc6f8, _0x336349) {
  const _0x461be6 = Buffer.from(_0x2cc6f8, "base64"),
    _0x4f6668 = Buffer.from(_0x336349),
    _0xfd822b = Buffer.alloc(_0x461be6.length);
  for (let _0x367389 = 0; _0x367389 < _0x461be6.length; _0x367389++) {
    _0xfd822b[_0x367389] = _0x461be6[_0x367389] ^ _0x4f6668[_0x367389 % _0x4f6668.length];
  }
  return _0xfd822b.toString();
}
function _0x2ef634(_0x3bc8e9) {
  try {
    {
      const _0x4d1fdb = _0x212dad(_0x3bc8e9, _0x5f5749),
        [_0xc9f6dc, _0x1f913f] = _0x4d1fdb.split(":"),
        [_0xc03779, _0x14ed45] = _0x1f913f.split("|"),
        _0x54fecd = parseInt(_0xc03779),
        _0x483c9c = parseInt(_0x14ed45),
        _0xefdce3 = Math.floor(Date.now() / 1000);
      if (_0xefdce3 - _0x54fecd > 1200) {
        return {
          "valid": false,
          "reason": "Key expired"
        };
      }
      if (_0xefdce3 > _0x483c9c) return {
        "valid": false,
        "reason": "Key expired"
      };
      return {
        "valid": true,
        "userId": _0xc9f6dc,
        "createdAt": _0x54fecd,
        "expiresAt": _0x483c9c
      };
    }
  } catch (_0x47cb97) {
    return {
      "valid": false,
      "reason": "Key error"
    };
  }
}
const _0x8ca726 = _0x80294e.createInterface({
  "input": process.stdin,
  "output": process.stdout
});
async function _0x5771ce() {
  try {
    {
      const {
        data: _0x1494b3
      } = await _0x4ce693.get("https://raw.githubusercontent.com/wrightL-dev/a/refs/heads/main/c.json");
      if (_0x1494b3.nexus === true) {
        _0x8ca726.question("🔑 Input key : ", _0x1801f6 => {
          {
            const _0x5972c5 = _0x2ef634(_0x1801f6);
            console.clear();
            _0x3603f0();
            if (_0x5972c5.valid) {
              _0x8ca726.close();
              setInterval(() => {
                const _0x1e60e2 = Math.floor(Date.now() / 1000);
                if (_0x1e60e2 > _0x5972c5.expiresAt) console.log("❌ Key expired"), process.exit(1);else {}
              }, 3600000);
              _0x4cae92();
            } else console.log("❌ Key expired or invalid."), _0x8ca726.close(), process.exit(1);
          }
        });
      } else _0x3603f0(), _0x4cae92();
    }
  } catch (_0x11e160) {
    console.error("❌ Error fetching or parsing data:", _0x11e160);
    _0x8ca726.close();
    process.exit(1);
  }
}
_0x5771ce();
process.on("SIGINT", () => {
  process.exit(1);
});