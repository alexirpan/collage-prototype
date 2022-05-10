var nodes = [
{ id: "TRIFORCE", group: 0, label: "TRIFORCE", level: 1, color: "red" },
{ id: "FELLOWSHIP", group: 1, label: "FELLOWSHIP", level: 1, color: "red" },
{ id: "DRAGONS", group: 2, label: "DRAGONS", level: 1, color: "red" },
{ id: "DISCIPLES", group: 3, label: "DISCIPLES", level: 1, color: "red" },
{ id: "NINTENDO", group: 4, label: "NINTENDO", level: 1, color: "red" },
{ id: "WIZARD", group: 5, label: "WIZARD", level: 1, color: "orange" },
{ id: "DWARVES", group: 6, label: "DWARVES", level: 1, color: "orange" },
{ id: "ARCHERS", group: 7, label: "ARCHERS", level: 1, color: "orange" },
{ id: "TRAINS", group: 8, label: "TRAINS", level: 1, color: "orange" },
{ id: "BOUNTY HUNTERS", group: 9, label: "BOUNTY HUNTERS", level: 1, color: "orange" },
{ id: "COINS", group: 10, label: "COINS", level: 1, color: "orange" },
{ id: "MUSHROOMS", group: 11, label: "MUSHROOMS", level: 1, color: "orange" },
{ id: "STARS", group: 12, label: "STARS", level: 1, color: "orange" },
{ id: "MY LITTLE PONY", group: 13, label: "MY LITTLE PONY", level: 1, color: "orange" },
{ id: "DISNEY", group: 14, label: "DISNEY", level: 1, color: "orange" },
{ id: "SPACE PROGRAMS", group: 15, label: "SPACE PROGRAMS", level: 1, color: "orange" },
{ id: "THE HUNGER GAMES", group: 16, label: "THE HUNGER GAMES", level: 1, color: "orange" },
{ id: "ANIMALS", group: 17, label: "ANIMALS", level: 1, color: "orange" },
{ id: "COURAGE", group: 18, label: "COURAGE", level: 1, color: "orange" },
{ id: "WISDOM", group: 19, label: "WISDOM", level: 1, color: "orange" },
{ id: "POWER", group: 20, label: "POWER", level: 1, color: "orange" },
{ id: "MIT", group: 21, label: "MIT", level: 1, color: "orange" },
{ id: "TAROT", group: 22, label: "TAROT", level: 1, color: "orange" },
{ id: "GANDALF", group: 23, label: "GANDALF", level: 1, color: "green" },
{ id: "GIMLI", group: 24, label: "GIMLI", level: 1, color: "green" },
{ id: "LEGOLAS", group: 25, label: "LEGOLAS", level: 1, color: "green" },
{ id: "DUMBLEDORE", group: 26, label: "DUMBLEDORE", level: 1, color: "green" },
{ id: "HERMIONE GRANGER", group: 27, label: "HERMIONE GRANGER", level: 1, color: "green" },
{ id: "GLINDA THE GOOD WITCH", group: 28, label: "GLINDA THE GOOD WITCH", level: 1, color: "green" },
{ id: "SLEEPY", group: 29, label: "SLEEPY", level: 1, color: "green" },
{ id: "DOC", group: 30, label: "DOC", level: 1, color: "green" },
{ id: "GRUMPY", group: 31, label: "GRUMPY", level: 1, color: "green" },
{ id: "KATNISS EVERDEEN", group: 32, label: "KATNISS EVERDEEN", level: 1, color: "green" },
{ id: "ROBIN HOOD", group: 33, label: "ROBIN HOOD", level: 1, color: "green" },
{ id: "APOLLO", group: 34, label: "APOLLO", level: 1, color: "green" },
{ id: "GREEN ARROW", group: 35, label: "GREEN ARROW", level: 1, color: "green" },
{ id: "THOMAS", group: 36, label: "THOMAS", level: 1, color: "green" },
{ id: "JAMES", group: 37, label: "JAMES", level: 1, color: "green" },
{ id: "PERCY", group: 38, label: "PERCY", level: 1, color: "green" },
{ id: "SIR TOPHAM HATT", group: 39, label: "SIR TOPHAM HATT", level: 1, color: "green" },
{ id: "MARIO", group: 40, label: "MARIO", level: 1, color: "green" },
{ id: "SAMUS", group: 41, label: "SAMUS", level: 1, color: "green" },
{ id: "FOX", group: 42, label: "FOX", level: 1, color: "green" },
{ id: "BOBA FETT", group: 43, label: "BOBA FETT", level: 1, color: "green" },
{ id: "JET BLACK", group: 44, label: "JET BLACK", level: 1, color: "green" },
{ id: "SPIKE SPIEGEL", group: 45, label: "SPIKE SPIEGEL", level: 1, color: "green" },
{ id: "HIPPO", group: 46, label: "HIPPO", level: 1, color: "green" },
{ id: "PENNY", group: 47, label: "PENNY", level: 1, color: "green" },
{ id: "QUARTER", group: 48, label: "QUARTER", level: 1, color: "green" },
{ id: "NICKEL", group: 49, label: "NICKEL", level: 1, color: "green" },
{ id: "SUN", group: 50, label: "SUN", level: 1, color: "green" },
{ id: "PROXIMA CENTAURI", group: 51, label: "PROXIMA CENTAURI", level: 1, color: "green" },
{ id: "SIRIUS", group: 52, label: "SIRIUS", level: 1, color: "green" },
{ id: "SPIKE", group: 53, label: "SPIKE", level: 1, color: "green" },
{ id: "MUSHU", group: 54, label: "MUSHU", level: 1, color: "green" },
{ id: "SNOW WHITE", group: 55, label: "SNOW WHITE", level: 1, color: "green" },
{ id: "SNOW SHITE", group: 56, label: "SNOW SHITE", level: 1, color: "green" },
{ id: "MERCURY", group: 57, label: "MERCURY", level: 1, color: "green" },
{ id: "GEMINI", group: 58, label: "GEMINI", level: 1, color: "green" },
{ id: "MOCKINGJAY", group: 59, label: "MOCKINGJAY", level: 1, color: "green" },
{ id: "PRESIDENT SNOW", group: 60, label: "PRESIDENT SNOW", level: 1, color: "green" },
{ id: "PEETA", group: 61, label: "PEETA", level: 1, color: "green" },
{ id: "DND STATS", group: 62, label: "DND STATS", level: 1, color: "green" },
{ id: "STRENGTH", group: 63, label: "STRENGTH", level: 1, color: "green" },
{ id: "DEXTERITY", group: 64, label: "DEXTERITY", level: 1, color: "green" },
{ id: "INTELLIGENCE", group: 65, label: "INTELLIGENCE", level: 1, color: "green" },
{ id: "CHARISMA", group: 66, label: "CHARISMA", level: 1, color: "green" },
{ id: "CONSTITUTION", group: 67, label: "CONSTITUTION", level: 1, color: "green" },
{ id: "POWERPUFF GIRLS", group: 68, label: "POWERPUFF GIRLS", level: 1, color: "green" },
{ id: "LAUREN FAUST SHOWS", group: 69, label: "LAUREN FAUST SHOWS", level: 1, color: "green" },
{ id: "DC SUPER HERO GIRLS", group: 70, label: "DC SUPER HERO GIRLS", level: 1, color: "green" },
{ id: "WONDER WOMAN", group: 71, label: "WONDER WOMAN", level: 1, color: "green" },
{ id: "BATGIRL", group: 72, label: "BATGIRL", level: 1, color: "green" },
{ id: "ZATANNA", group: 73, label: "ZATANNA", level: 1, color: "green" },
{ id: "SUPERGIRL", group: 74, label: "SUPERGIRL", level: 1, color: "green" },
{ id: "DC", group: 75, label: "DC", level: 1, color: "green" },
{ id: "SUPERMAN", group: 76, label: "SUPERMAN", level: 1, color: "green" },
{ id: "BATMAN", group: 77, label: "BATMAN", level: 1, color: "green" },
{ id: "SHAZAM", group: 78, label: "SHAZAM", level: 1, color: "green" },
{ id: "SOLOMON", group: 79, label: "SOLOMON", level: 1, color: "green" },
{ id: "HERCULES", group: 80, label: "HERCULES", level: 1, color: "green" },
{ id: "ATLAS", group: 81, label: "ATLAS", level: 1, color: "green" },
{ id: "ZEUS", group: 82, label: "ZEUS", level: 1, color: "green" },
{ id: "ACHILLES", group: 83, label: "ACHILLES", level: 1, color: "green" },
{ id: "GREEK MYTHOLOGY", group: 84, label: "GREEK MYTHOLOGY", level: 1, color: "green" },
{ id: "ATHENA", group: 85, label: "ATHENA", level: 1, color: "green" },
{ id: "BRAVE NEW WORLD", group: 86, label: "BRAVE NEW WORLD", level: 1, color: "green" },
{ id: "LIQUID COURAGE", group: 87, label: "LIQUID COURAGE", level: 1, color: "green" },
{ id: "FORTUNE FAVORS THE BOLD", group: 88, label: "FORTUNE FAVORS THE BOLD", level: 1, color: "green" },
{ id: "ALCOHOL", group: 89, label: "ALCOHOL", level: 1, color: "green" },
{ id: "FORTUNE", group: 90, label: "FORTUNE", level: 1, color: "green" },
{ id: "TEA LEAVES", group: 91, label: "TEA LEAVES", level: 1, color: "green" },
{ id: "MAGICIAN", group: 92, label: "MAGICIAN", level: 1, color: "green" },
{ id: "SUPERPOWER", group: 93, label: "SUPERPOWER", level: 1, color: "green" },
{ id: "UNITED STATES", group: 94, label: "UNITED STATES", level: 1, color: "green" },
{ id: "MYSTERY HUNT", group: 95, label: "MYSTERY HUNT", level: 1, color: "green" },
{ id: "GREAT DOME", group: 96, label: "GREAT DOME", level: 1, color: "green" },
{ id: "STATA CENTER", group: 97, label: "STATA CENTER", level: 1, color: "green" },
{ id: "GREEN BUILDING", group: 98, label: "GREEN BUILDING", level: 1, color: "green" },
{ id: "GREEN", group: 99, label: "GREEN", level: 1, color: "green" },
]

var links = [
{ target: "FELLOWSHIP", source: "GANDALF", strength: 0.1 },
{ target: "FELLOWSHIP", source: "GIMLI", strength: 0.1 },
{ target: "FELLOWSHIP", source: "LEGOLAS", strength: 0.1 },
{ target: "GANDALF", source: "WIZARD", strength: 0.1 },
{ target: "DUMBLEDORE", source: "WIZARD", strength: 0.1 },
{ target: "HERMIONE GRANGER", source: "WIZARD", strength: 0.1 },
{ target: "GLINDA THE GOOD WITCH", source: "WIZARD", strength: 0.1 },
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
{ target: "POWER", source: "TRIFORCE", strength: 0.1 },
{ target: "COURAGE", source: "TRIFORCE", strength: 0.1 },
{ target: "WISDOM", source: "TRIFORCE", strength: 0.1 },
{ target: "STRENGTH", source: "DND STATS", strength: 0.1 },
{ target: "DEXTERITY", source: "DND STATS", strength: 0.1 },
{ target: "WISDOM", source: "DND STATS", strength: 0.1 },
{ target: "INTELLIGENCE", source: "DND STATS", strength: 0.1 },
{ target: "CHARISMA", source: "DND STATS", strength: 0.1 },
{ target: "CONSTITUTION", source: "DND STATS", strength: 0.1 },
{ target: "POWERPUFF GIRLS", source: "POWER", strength: 0.1 },
{ target: "POWERPUFF GIRLS", source: "LAUREN FAUST SHOWS", strength: 0.1 },
{ target: "MY LITTLE PONY", source: "LAUREN FAUST SHOWS", strength: 0.1 },
{ target: "DC SUPER HERO GIRLS", source: "LAUREN FAUST SHOWS", strength: 0.1 },
{ target: "WONDER WOMAN", source: "DC SUPER HERO GIRLS", strength: 0.1 },
{ target: "BATGIRL", source: "DC SUPER HERO GIRLS", strength: 0.1 },
{ target: "ZATANNA", source: "DC SUPER HERO GIRLS", strength: 0.1 },
{ target: "SUPERGIRL", source: "DC SUPER HERO GIRLS", strength: 0.1 },
{ target: "WONDER WOMAN", source: "DC", strength: 0.1 },
{ target: "BATGIRL", source: "DC", strength: 0.1 },
{ target: "ZATANNA", source: "DC", strength: 0.1 },
{ target: "SUPERMAN", source: "DC", strength: 0.1 },
{ target: "BATMAN", source: "DC", strength: 0.1 },
{ target: "SHAZAM", source: "DC", strength: 0.1 },
{ target: "SOLOMON", source: "SHAZAM", strength: 0.1 },
{ target: "HERCULES", source: "SHAZAM", strength: 0.1 },
{ target: "ATLAS", source: "SHAZAM", strength: 0.1 },
{ target: "ZEUS", source: "SHAZAM", strength: 0.1 },
{ target: "ACHILLES", source: "SHAZAM", strength: 0.1 },
{ target: "MERCURY", source: "SHAZAM", strength: 0.1 },
{ target: "ACHILLES", source: "GREEK MYTHOLOGY", strength: 0.1 },
{ target: "ZEUS", source: "GREEK MYTHOLOGY", strength: 0.1 },
{ target: "HERCULES", source: "GREEK MYTHOLOGY", strength: 0.1 },
{ target: "ATHENA", source: "GREEK MYTHOLOGY", strength: 0.1 },
{ target: "ATHENA", source: "MIT", strength: 0.1 },
{ target: "ATHENA", source: "WISDOM", strength: 0.1 },
{ target: "SOLOMON", source: "WISDOM", strength: 0.1 },
{ target: "BRAVE NEW WORLD", source: "COURAGE", strength: 0.1 },
{ target: "LIQUID COURAGE", source: "COURAGE", strength: 0.1 },
{ target: "FORTUNE FAVORS THE BOLD", source: "COURAGE", strength: 0.1 },
{ target: "LIQUID COURAGE", source: "ALCOHOL", strength: 0.1 },
{ target: "FORTUNE FAVORS THE BOLD", source: "FORTUNE", strength: 0.1 },
{ target: "TEA LEAVES", source: "FORTUNE", strength: 0.1 },
{ target: "TAROT", source: "FORTUNE", strength: 0.1 },
{ target: "STRENGTH", source: "TAROT", strength: 0.1 },
{ target: "MAGICIAN", source: "TAROT", strength: 0.1 },
{ target: "SUN", source: "TAROT", strength: 0.1 },
{ target: "WIZARD", source: "MAGICIAN", strength: 0.1 },
{ target: "SUPERPOWER", source: "POWER", strength: 0.1 },
{ target: "UNITED STATES", source: "SUPERPOWER", strength: 0.1 },
{ target: "SUPERMAN", source: "SUPERPOWER", strength: 0.1 },
{ target: "WONDER WOMAN", source: "SUPERPOWER", strength: 0.1 },
{ target: "SHAZAM", source: "SUPERPOWER", strength: 0.1 },
{ target: "MYSTERY HUNT", source: "MIT", strength: 0.1 },
{ target: "GREAT DOME", source: "MIT", strength: 0.1 },
{ target: "STATA CENTER", source: "MIT", strength: 0.1 },
{ target: "GREEN BUILDING", source: "MIT", strength: 0.1 },
{ target: "GREEN BUILDING", source: "GREEN", strength: 0.1 },
{ target: "GREEN ARROW", source: "GREEN", strength: 0.1 },
]
