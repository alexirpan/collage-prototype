var nodes = [
{ id: "FELLOWSHIP", group: 0, label: "FELLOWSHIP", level: 1, color: "red" },
{ id: "DRAGONS", group: 1, label: "DRAGONS", level: 1, color: "red" },
{ id: "DISCIPLES", group: 2, label: "DISCIPLES", level: 1, color: "red" },
{ id: "NINTENDO", group: 3, label: "NINTENDO", level: 1, color: "red" },
{ id: "WIZARDS", group: 4, label: "WIZARDS", level: 1, color: "orange" },
{ id: "DWARVES", group: 5, label: "DWARVES", level: 1, color: "orange" },
{ id: "ARCHERS", group: 6, label: "ARCHERS", level: 1, color: "orange" },
{ id: "TRAINS", group: 7, label: "TRAINS", level: 1, color: "orange" },
{ id: "BOUNTY HUNTERS", group: 8, label: "BOUNTY HUNTERS", level: 1, color: "orange" },
{ id: "COINS", group: 9, label: "COINS", level: 1, color: "orange" },
{ id: "MUSHROOMS", group: 10, label: "MUSHROOMS", level: 1, color: "orange" },
{ id: "STARS", group: 11, label: "STARS", level: 1, color: "orange" },
{ id: "MY LITTLE PONY", group: 12, label: "MY LITTLE PONY", level: 1, color: "orange" },
{ id: "DISNEY", group: 13, label: "DISNEY", level: 1, color: "orange" },
{ id: "SPACE PROGRAMS", group: 14, label: "SPACE PROGRAMS", level: 1, color: "orange" },
{ id: "THE HUNGER GAMES", group: 15, label: "THE HUNGER GAMES", level: 1, color: "orange" },
{ id: "ANIMALS", group: 16, label: "ANIMALS", level: 1, color: "orange" },
{ id: "GIMLI", group: 17, label: "GIMLI", level: 1, color: "green" },
{ id: "LEGOLAS", group: 18, label: "LEGOLAS", level: 1, color: "green" },
{ id: "GANDALF", group: 19, label: "GANDALF", level: 1, color: "green" },
{ id: "DUMBLEDORE", group: 20, label: "DUMBLEDORE", level: 1, color: "green" },
{ id: "HERMIONE GRANGER", group: 21, label: "HERMIONE GRANGER", level: 1, color: "green" },
{ id: "GLINDA THE GOOD WITCH", group: 22, label: "GLINDA THE GOOD WITCH", level: 1, color: "green" },
{ id: "SLEEPY", group: 23, label: "SLEEPY", level: 1, color: "green" },
{ id: "DOC", group: 24, label: "DOC", level: 1, color: "green" },
{ id: "GRUMPY", group: 25, label: "GRUMPY", level: 1, color: "green" },
{ id: "KATNISS EVERDEEN", group: 26, label: "KATNISS EVERDEEN", level: 1, color: "green" },
{ id: "ROBIN HOOD", group: 27, label: "ROBIN HOOD", level: 1, color: "green" },
{ id: "APOLLO", group: 28, label: "APOLLO", level: 1, color: "green" },
{ id: "GREEN ARROW", group: 29, label: "GREEN ARROW", level: 1, color: "green" },
{ id: "THOMAS", group: 30, label: "THOMAS", level: 1, color: "green" },
{ id: "JAMES", group: 31, label: "JAMES", level: 1, color: "green" },
{ id: "PERCY", group: 32, label: "PERCY", level: 1, color: "green" },
{ id: "SIR TOPHAM HATT", group: 33, label: "SIR TOPHAM HATT", level: 1, color: "green" },
{ id: "MARIO", group: 34, label: "MARIO", level: 1, color: "green" },
{ id: "SAMUS", group: 35, label: "SAMUS", level: 1, color: "green" },
{ id: "FOX", group: 36, label: "FOX", level: 1, color: "green" },
{ id: "BOBA FETT", group: 37, label: "BOBA FETT", level: 1, color: "green" },
{ id: "JET BLACK", group: 38, label: "JET BLACK", level: 1, color: "green" },
{ id: "SPIKE SPIEGEL", group: 39, label: "SPIKE SPIEGEL", level: 1, color: "green" },
{ id: "HIPPO", group: 40, label: "HIPPO", level: 1, color: "green" },
{ id: "PENNY", group: 41, label: "PENNY", level: 1, color: "green" },
{ id: "QUARTER", group: 42, label: "QUARTER", level: 1, color: "green" },
{ id: "NICKEL", group: 43, label: "NICKEL", level: 1, color: "green" },
{ id: "SUN", group: 44, label: "SUN", level: 1, color: "green" },
{ id: "PROXIMA CENTAURI", group: 45, label: "PROXIMA CENTAURI", level: 1, color: "green" },
{ id: "SIRIUS", group: 46, label: "SIRIUS", level: 1, color: "green" },
{ id: "SPIKE", group: 47, label: "SPIKE", level: 1, color: "green" },
{ id: "MUSHU", group: 48, label: "MUSHU", level: 1, color: "green" },
{ id: "SNOW WHITE", group: 49, label: "SNOW WHITE", level: 1, color: "green" },
{ id: "SNOW SHITE", group: 50, label: "SNOW SHITE", level: 1, color: "green" },
{ id: "MERCURY", group: 51, label: "MERCURY", level: 1, color: "green" },
{ id: "GEMINI", group: 52, label: "GEMINI", level: 1, color: "green" },
{ id: "MOCKINGJAY", group: 53, label: "MOCKINGJAY", level: 1, color: "green" },
{ id: "PRESIDENT SNOW", group: 54, label: "PRESIDENT SNOW", level: 1, color: "green" },
{ id: "PEETA", group: 55, label: "PEETA", level: 1, color: "green" },
]

var links = [
{ target: "FELLOWSHIP", source: "GIMLI", strength: 0.1 },
{ target: "FELLOWSHIP", source: "LEGOLAS", strength: 0.1 },
{ target: "GANDALF", source: "WIZARDS", strength: 0.1 },
{ target: "DUMBLEDORE", source: "WIZARDS", strength: 0.1 },
{ target: "HERMIONE GRANGER", source: "WIZARDS", strength: 0.1 },
{ target: "GLINDA THE GOOD WITCH", source: "WIZARDS", strength: 0.1 },
{ target: "GIMLI", source: "DWARVES", strength: 0.1 },
{ target: "SLEEPY", source: "DWARVES", strength: 0.1 },
{ target: "DOC", source: "DWARVES", strength: 0.1 },
{ target: "GRUMPY", source: "DWARVES", strength: 0.1 },
{ target: "LEGOLAS", source: "ARCHERS", strength: 0.1 },
{ target: "KATNISS EVERDEEN", source: "ARCHERS", strength: 0.1 },
{ target: "ROBIN HOOD", source: "ARCHERS", strength: 0.1 },
{ target: "APOLLO", source: "ARCHERS", strength: 0.1 },
{ target: "GREEN ARROW", source: "ARCHERS", strength: 0.1 },
{ target: "THOMAS", source: "DISCIPLES", strength: 0.1 },
{ target: "JAMES", source: "DISCIPLES", strength: 0.1 },
{ target: "THOMAS", source: "TRAINS", strength: 0.1 },
{ target: "JAMES", source: "TRAINS", strength: 0.1 },
{ target: "PERCY", source: "TRAINS", strength: 0.1 },
{ target: "SIR TOPHAM HATT", source: "TRAINS", strength: 0.1 },
{ target: "MARIO", source: "NINTENDO", strength: 0.1 },
{ target: "SAMUS", source: "NINTENDO", strength: 0.1 },
{ target: "FOX", source: "NINTENDO", strength: 0.1 },
{ target: "SAMUS", source: "BOUNTY HUNTERS", strength: 0.1 },
{ target: "BOBA FETT", source: "BOUNTY HUNTERS", strength: 0.1 },
{ target: "JET BLACK", source: "BOUNTY HUNTERS", strength: 0.1 },
{ target: "SPIKE SPIEGEL", source: "BOUNTY HUNTERS", strength: 0.1 },
{ target: "FOX", source: "ANIMALS", strength: 0.1 },
{ target: "HIPPO", source: "ANIMALS", strength: 0.1 },
{ target: "MUSHROOMS", source: "MARIO", strength: 0.1 },
{ target: "STARS", source: "MARIO", strength: 0.1 },
{ target: "COINS", source: "MARIO", strength: 0.1 },
{ target: "PENNY", source: "COINS", strength: 0.1 },
{ target: "QUARTER", source: "COINS", strength: 0.1 },
{ target: "NICKEL", source: "COINS", strength: 0.1 },
{ target: "SUN", source: "STARS", strength: 0.1 },
{ target: "PROXIMA CENTAURI", source: "STARS", strength: 0.1 },
{ target: "SIRIUS", source: "STARS", strength: 0.1 },
{ target: "SPIKE", source: "MY LITTLE PONY", strength: 0.1 },
{ target: "SPIKE SPIEGEL", source: "SPIKE", strength: 0.1 },
{ target: "SPIKE", source: "DRAGONS", strength: 0.1 },
{ target: "MUSHU", source: "DRAGONS", strength: 0.1 },
{ target: "MUSHU", source: "DISNEY", strength: 0.1 },
{ target: "SNOW WHITE", source: "DISNEY", strength: 0.1 },
{ target: "SLEEPY", source: "SNOW WHITE", strength: 0.1 },
{ target: "GRUMPY", source: "SNOW SHITE", strength: 0.1 },
{ target: "APOLLO", source: "SPACE PROGRAMS", strength: 0.1 },
{ target: "MERCURY", source: "SPACE PROGRAMS", strength: 0.1 },
{ target: "GEMINI", source: "SPACE PROGRAMS", strength: 0.1 },
{ target: "MOCKINGJAY", source: "ANIMALS", strength: 0.1 },
{ target: "MOCKINGJAY", source: "THE HUNGER GAMES", strength: 0.1 },
{ target: "PRESIDENT SNOW", source: "THE HUNGER GAMES", strength: 0.1 },
{ target: "PEETA", source: "THE HUNGER GAMES", strength: 0.1 },
]
