function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZQeutD1JHL":
        Script1();
        break;
      case "6paHkyTUV1H":
        Script2();
        break;
      case "6oAts4EGWOh":
        Script3();
        break;
      case "5b714jZFr8T":
        Script4();
        break;
      case "5fVNPij2GgZ":
        Script5();
        break;
      case "67FEGNOpEvr":
        Script6();
        break;
      case "6g3pBKzWQ6W":
        Script7();
        break;
      case "69FXp8BIYCv":
        Script8();
        break;
      case "5h9rze9PwDA":
        Script9();
        break;
      case "60lX6Vhp5Au":
        Script10();
        break;
      case "64wemxMHDY9":
        Script11();
        break;
      case "6cJqN9fNDI7":
        Script12();
        break;
      case "6HSRVF8krAR":
        Script13();
        break;
      case "6Uy8FlaXGIs":
        Script14();
        break;
      case "5njUM8DOdB9":
        Script15();
        break;
      case "6kRvXPZZidY":
        Script16();
        break;
      case "64pF2U8JGKQ":
        Script17();
        break;
      case "60HSb712fSH":
        Script18();
        break;
      case "6PNyiZe0YJt":
        Script19();
        break;
      case "6MydINbzgZs":
        Script20();
        break;
      case "67g6tsS1OoW":
        Script21();
        break;
      case "6aro2BmybFw":
        Script22();
        break;
      case "63tIKxUDHS3":
        Script23();
        break;
      case "62LakluRSEW":
        Script24();
        break;
      case "61olCtspNhV":
        Script25();
        break;
      case "67mj2BGHcXH":
        Script26();
        break;
      case "5jYg3LDtRyc":
        Script27();
        break;
      case "5h83swnF2cm":
        Script28();
        break;
      case "6bZiKZxE4AN":
        Script29();
        break;
      case "5mSD5iRUJhd":
        Script30();
        break;
      case "6ahkDqmDnxQ":
        Script31();
        break;
      case "6GWy3zuQeDe":
        Script32();
        break;
      case "5VMEPEKSKVv":
        Script33();
        break;
      case "6kkBFv56Kp8":
        Script34();
        break;
      case "6AE6CCRnRtU":
        Script35();
        break;
      case "62iOrAJsC9h":
        Script36();
        break;
      case "6SzJX0J7UdF":
        Script37();
        break;
      case "5queo98r2Jj":
        Script38();
        break;
      case "5mfDDPQSMHj":
        Script39();
        break;
      case "5nA9ZN7EHc8":
        Script40();
        break;
      case "5siMzuvwmN3":
        Script41();
        break;
      case "5n2RBwCMi2d":
        Script42();
        break;
      case "6iCsFPQd2ON":
        Script43();
        break;
      case "6p1msxlSFoe":
        Script44();
        break;
      case "6eaFQEs1zEY":
        Script45();
        break;
      case "65PhjqpMR2W":
        Script46();
        break;
      case "6NeOe8jz6Xp":
        Script47();
        break;
      case "6f5fsJN71a7":
        Script48();
        break;
      case "6WHrqsGTBTM":
        Script49();
        break;
      case "60CdIwS9LZf":
        Script50();
        break;
      case "6PtPOc3jC5E":
        Script51();
        break;
      case "6QSYt3toHV3":
        Script52();
        break;
      case "6Q1yLoTCs9K":
        Script53();
        break;
      case "5jPvqFZybZ3":
        Script54();
        break;
      case "6W8L1lFcnK1":
        Script55();
        break;
      case "5zENuxIkQOK":
        Script56();
        break;
      case "6hJKxyz6WSZ":
        Script57();
        break;
      case "6HHPKZY9hpC":
        Script58();
        break;
      case "5VJigaV9cxO":
        Script59();
        break;
      case "65L3o9bc5wI":
        Script60();
        break;
      case "5mJaMFEVIkt":
        Script61();
        break;
      case "6B913A7MLwA":
        Script62();
        break;
      case "66zU5SZGCBM":
        Script63();
        break;
      case "6oX6D1uMDvC":
        Script64();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('6nYdtDrcUL1');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6nYdtDrcUL1');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6MtigdcYVke');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6MtigdcYVke');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6nYdtDrcUL1');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6nYdtDrcUL1');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6MtigdcYVke');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6MtigdcYVke');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6nYdtDrcUL1');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('6nYdtDrcUL1');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('6MtigdcYVke');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('6MtigdcYVke');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('6nYdtDrcUL1');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('6nYdtDrcUL1');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('6MtigdcYVke');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('6MtigdcYVke');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('6nYdtDrcUL1');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('6nYdtDrcUL1');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('6MtigdcYVke');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  const target = object('6MtigdcYVke');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  const target = object('6nYdtDrcUL1');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('6nYdtDrcUL1');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('6MtigdcYVke');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('6MtigdcYVke');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('6nYdtDrcUL1');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('6nYdtDrcUL1');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('6MtigdcYVke');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  const target = object('6MtigdcYVke');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script29 = function()
{
  const target = object('6nYdtDrcUL1');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('6nYdtDrcUL1');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  const target = object('6MtigdcYVke');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script32 = function()
{
  const target = object('6MtigdcYVke');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  const target = object('67pVyHV293E');
const duration = 100;
const easing = 'ease-out';
const id = '5bHpOvISD7U';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script34 = function()
{
  const target = object('67pVyHV293E');
const duration = 100;
const easing = 'ease-out';
const id = '5bHpOvISD7U_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script35 = function()
{
  const target = object('6cDishbyKCL');
const duration = 100;
const easing = 'ease-out';
const id = '5lkg8EU9sBx';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script36 = function()
{
  const target = object('6cDishbyKCL');
const duration = 100;
const easing = 'ease-out';
const id = '5lkg8EU9sBx_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  const target = object('5xvZPHRMnw6');
const duration = 100;
const easing = 'ease-out';
const id = '66FtcEoKKor';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script38 = function()
{
  const target = object('5xvZPHRMnw6');
const duration = 100;
const easing = 'ease-out';
const id = '66FtcEoKKor_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  const target = object('6nYdtDrcUL1');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script40 = function()
{
  const target = object('6nYdtDrcUL1');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script41 = function()
{
  const target = object('6MtigdcYVke');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script42 = function()
{
  const target = object('6MtigdcYVke');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script43 = function()
{
  const target = object('6nYdtDrcUL1');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script44 = function()
{
  const target = object('6nYdtDrcUL1');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script45 = function()
{
  const target = object('6MtigdcYVke');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script46 = function()
{
  const target = object('6MtigdcYVke');
const duration = 100;
const easing = 'ease-out';
const id = '5iVKtHc4weY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
