export function renderLocation(location) {
  if (location == "defendersidespawn") {
    location = "Defender Side Spawn";
  } else if (location == "midcourtyard") {
    location = "Mid Courtyard";
  } else if (location == "lobbya") {
    location = "Lobby A";
  } else {
    location = "B Site";
  }

  return location;
}
