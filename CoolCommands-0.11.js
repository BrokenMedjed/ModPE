function newLevel() {
  clientMessage("CoolCommands 0.11 by No-One");
  clientMessage("Type '/help' in chat to get");
  clientMessage("help for commands");
}

function procCmd(cmd) {
  var cmd = cmd.split(" ");

  if(cmd[0] == "effect") {
    Entity.addEffect(getPlayerEnt(), parseInt(cmd[1]), parseInt(cmd[2]*20), parseInt(cmd[3]), false, parseInt(cmd[4]));
    clientMessage("You have been given effect " + cmd[1]);
    clientMessage("of strength " + cmd[3] + " for " + cmd[2] + " seconds");
  }
  else
  if(cmd[0] == "give") {
    Player.addItemInventory(parseInt(cmd[1]), parseInt(cmd[2]), parseInt(cmd[3]));
    clientMessage("You have been given " + cmd[2]);
    clientMessage("of " + cmd[1] + ":" + cmd[3]);
  }
  else
  if(cmd[0] == "time") {
    if(cmd[1] == "set") {
      Level.setTime(parseInt(cmd[2]));
      clientMessage("Set the time to " + cmd[2]);
    }
  }
  else
  if(cmd[0] == "gamemode") {
    Level.setGameMode(parseInt(cmd[1]));
    clientMessage("Gamemode set to " + cmd[1]);
  }
  else
  if(cmd[0] == "spawnpoint") {
    if(cmd[1] == "coords") {
      Level.setSpawn(parseInt(cmd[2]), parseInt(cmd[3]), parseInt(cmd[4]));
      clientMessage("Spawnpoint set to");
      clientMessage("X: " + cmd[2]);
      clientMessage("Y: " + cmd[3]);
      clientMessage("Z: " + cmd[4]);
    }
    else
    if(cmd[1] == "here") {
      Level.setSpawn(getPlayerX(), getPlayerY(), getPlayerZ());
      clientMessage("Spawnpoint set to");
      clientMessage("X: " + getPlayerX());
      clientMessage("Y: " + getPlayerY());
      clientMessage("Z: " + getPlayerZ());
    }
  }
  else
  if(cmd[0] == "tp") {
    Entity.setPosition(getPlayerEnt(), parseInt(cmd[1]), parseInt(cmd[2]), parseInt(cmd[3]));
    clientMessage("Teleported you to");
    clientMessage("X: " + cmd[1]);
    clientMessage("Y: " + cmd[2]);
    clientMessage("Z: " + cmd[3]);
  }
  else
  if(cmd[0] == "coords") {
    clientMessage("Your coordinates:");
    clientMessage("X: " + getPlayerX());
    clientMessage("Y: " + getPlayerY());
    clientMessage("Z: " + getPlayerZ());
  }
  else
  if(cmd[0] == "clear") {
    if(cmd[1] == "inv") {
      if(Level.getGameMode() == 0) {
        Level.setGameMode(1);
        Level.setGameMode(0);
        clientMessage("Your inventory has been");
        clientMessage("cleared");
      }
      else
      if(Level.getGameMode() == 1) {
        clientMessage("Error: You are on creative!");
      }
    }
    else
    if(cmd[1] == "effect") {
      if(cmd[2] == "all") {
        Entity.removeAllEffects(getPlayerEnt());
        clientMessage("All your effects have");
        clientMessage("been cleared");
      }
      else
      if(cmd[2] == "one") {
        Entity.removeEffect(getPlayerEnt(), parseInt(cmd[3]));
        clientMessage("Cleared effect " + cmd[3] + " from you");
      }
    }
  }
  else
  if(cmd[0] == "help") {
    clientMessage("==Page 1 of 1==");
    clientMessage("==More pages in future==");
    clientMessage("'/effect <id> <duration> <strength> <particles[0|1]>'");
    clientMessage("'/give <id> <amount> <data>'");
    clientMessage("'/time set <time>'");
    clientMessage("'/gamemode <gamemode[0|1]>'");
    clientMessage("'/spawnpoint coords <x> <y> <z>|here'");
    clientMessage("'/tp <x> <y> <z>'");
    clientMessage("'/coords'");
    clientMessage("'/clear inv|effect all|one <id>'");
  }
}
