//START DarkServer's eatHook API
var nowAmount, nowId, nowData, lastAmount, lastId, lastData, lastBlock, nowSlotId, lastSlotId;

//add food item id's here 
var foodItems = [260,282,297,319,320,349,350,357,360,363,364,365,366,367,391,392,393,400,4095,4094];

//add inventory blocks here - or farming...
var invBlocks = [54,58,60,61,62];

var tick = 0;

//DO NOT EDIT BELOW THIS UNLESS YOU KNOW WHAT YOU ARE DOING
function modTick() {
  lastBlock = Player.getPointedBlockId();
  nowId = Player.getCarriedItem();
  nowData = Player.getCarriedItemData();
  nowAmount = Player.getCarriedItemCount();
  nowSlotId = Player.getSelectedSlotId();
  if(foodItems.indexOf(nowId) >= 0) {
    tick++;
    if(tick == 10) {
      tick = 0;
      if(nowId == lastId) {
        if(nowData == lastData) {
          if((lastAmount-1) == nowAmount) {
	    if(invBlocks.indexOf(lastBlock) == -1) {
	      eatHook(lastId);
	    }
	  }
        }
      }
      lastId = Player.getCarriedItem();
      lastData = Player.getCarriedItemData();
      lastAmount = Player.getCarriedItemCount();
      lastSlotId = Player.getSelectedSlotId();
    }
  }
  //trying to fix the single item bug...
  if(nowId == 0) {
    if(foodItems.indexOf(lastId) >= 0) {
      if(lastAmount == 1) {
	if(nowSlotId == lastSlotId) {
	  if(invBlocks.indexOf(lastBlock) == -1) {
	    eatHook(lastId);
	    lastId = 0;
	  }
	}
      }
    }
  }
  if(foodItems.indexOf(nowId) == -1) {
    if(nowId !== 0) { //if item is not 0
      lastId = 0; //set last item to 0
    }
  }
}
//DO NOT EDIT ABOVE THIS UNLESS YOU KNOW WHAT YOU ARE DOING
//END DarkServer's eatHook API

function newLevel() {
  clientMessage("Golden Apples 0.11 by No-One");
}

//Golden Apples
ModPE.setFoodItem(4095, "apple_golden", 0, 4, "§bGolden Apple");
ModPE.setFoodItem(4094, "apple_golden", 0, 4, "§dGolden Apple");

//Crafting
Item.addShapedRecipe(4095, 1, 0, ["ggg", "gag", "ggg"], ["g", 266, 0, "a", 260, 0]);
Item.addShapedRecipe(4094, 1, 0, ["bbb", "bab", "bbb"], ["b", 41, 0, "a", 260, 0]);

function eatHook(foodId) {
  if(foodId == 4095) {
    Entity.addEffect(getPlayerEnt(), MobEffect.healthBoost, 120*20, 0, false, true);
    Entity.addEffect(getPlayerEnt(), MobEffect.regeneration, 5*20, 1, false, true);
  }
  else
  if(foodId == 4094) {
    Entity.addEffect(getPlayerEnt(), MobEffect.healthBoost, 120*20, 0, false, true);
    Entity.addEffect(getPlayerEnt(), MobEffect.regeneration, 30*20, 4, false, true);
    Entity.addEffect(getPlayerEnt(), MobEffect.damageResistance, 300*20, 3, false, true);
    Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 300*20, 1, false, true);
  }
}
