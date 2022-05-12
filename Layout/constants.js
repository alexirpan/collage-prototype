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
{ id: "TAROT", group: 10, label: "TAROT", level: 1, color: "orange" },
{ id: "COINS", group: 11, label: "COINS", level: 1, color: "orange" },
{ id: "MUSHROOMS", group: 12, label: "MUSHROOMS", level: 1, color: "orange" },
{ id: "LAUREN FAUST", group: 13, label: "LAUREN FAUST", level: 1, color: "orange" },
{ id: "DISNEY", group: 14, label: "DISNEY", level: 1, color: "orange" },
{ id: "SPACE PROGRAMS", group: 15, label: "SPACE PROGRAMS", level: 1, color: "orange" },
{ id: "THE HUNGER GAMES", group: 16, label: "THE HUNGER GAMES", level: 1, color: "orange" },
{ id: "ANIMALS", group: 17, label: "ANIMALS", level: 1, color: "orange" },
{ id: "MIT", group: 18, label: "MIT", level: 1, color: "orange" },
{ id: "TAROT", group: 19, label: "TAROT", level: 1, color: "orange" },
{ id: "ROBERT PATTINSON CHARACTERS", group: 20, label: "ROBERT PATTINSON CHARACTERS", level: 1, color: "orange" },
{ id: "COLORFUL CHARACTERS", group: 21, label: "COLORFUL CHARACTERS", level: 1, color: "orange" },
{ id: "LITERATURE", group: 22, label: "LITERATURE", level: 1, color: "orange" },
{ id: "MY LITTLE PONY", group: 23, label: "MY LITTLE PONY", level: 1, color: "orange" },
{ id: "GREEK MYTHOLOGY", group: 24, label: "GREEK MYTHOLOGY", level: 1, color: "orange" },
{ id: "GANDALF", group: 25, label: "GANDALF", level: 1, color: "green" },
{ id: "GIMLI", group: 26, label: "GIMLI", level: 1, color: "green" },
{ id: "LEGOLAS", group: 27, label: "LEGOLAS", level: 1, color: "green" },
{ id: "DUMBLEDORE", group: 28, label: "DUMBLEDORE", level: 1, color: "green" },
{ id: "HERMIONE GRANGER", group: 29, label: "HERMIONE GRANGER", level: 1, color: "green" },
{ id: "SLEEPY", group: 30, label: "SLEEPY", level: 1, color: "green" },
{ id: "DOC", group: 31, label: "DOC", level: 1, color: "green" },
{ id: "GRUMPY", group: 32, label: "GRUMPY", level: 1, color: "green" },
{ id: "KATNISS EVERDEEN", group: 33, label: "KATNISS EVERDEEN", level: 1, color: "green" },
{ id: "ROBIN HOOD", group: 34, label: "ROBIN HOOD", level: 1, color: "green" },
{ id: "APOLLO", group: 35, label: "APOLLO", level: 1, color: "green" },
{ id: "GREEN ARROW", group: 36, label: "GREEN ARROW", level: 1, color: "green" },
{ id: "THOMAS", group: 37, label: "THOMAS", level: 1, color: "green" },
{ id: "JAMES", group: 38, label: "JAMES", level: 1, color: "green" },
{ id: "PERCY", group: 39, label: "PERCY", level: 1, color: "green" },
{ id: "SIR TOPHAM HATT", group: 40, label: "SIR TOPHAM HATT", level: 1, color: "green" },
{ id: "MARIO", group: 41, label: "MARIO", level: 1, color: "green" },
{ id: "SAMUS ARAN", group: 42, label: "SAMUS ARAN", level: 1, color: "green" },
{ id: "FOX", group: 43, label: "FOX", level: 1, color: "green" },
{ id: "BOBA FETT", group: 44, label: "BOBA FETT", level: 1, color: "green" },
{ id: "STAR WARS", group: 45, label: "STAR WARS", level: 1, color: "green" },
{ id: "STAR", group: 46, label: "STAR", level: 1, color: "green" },
{ id: "STAR TREK", group: 47, label: "STAR TREK", level: 1, color: "green" },
{ id: "DARTH VADER", group: 48, label: "DARTH VADER", level: 1, color: "green" },
{ id: "LUKE SKYWALKER", group: 49, label: "LUKE SKYWALKER", level: 1, color: "green" },
{ id: "JET BLACK", group: 50, label: "JET BLACK", level: 1, color: "green" },
{ id: "SPIKE SPIEGEL", group: 51, label: "SPIKE SPIEGEL", level: 1, color: "green" },
{ id: "FAYE VALENTINE", group: 52, label: "FAYE VALENTINE", level: 1, color: "green" },
{ id: "HIPPO", group: 53, label: "HIPPO", level: 1, color: "green" },
{ id: "PENNY", group: 54, label: "PENNY", level: 1, color: "green" },
{ id: "QUARTER", group: 55, label: "QUARTER", level: 1, color: "green" },
{ id: "NICKEL", group: 56, label: "NICKEL", level: 1, color: "green" },
{ id: "SUN", group: 57, label: "SUN", level: 1, color: "green" },
{ id: "SIRIUS", group: 58, label: "SIRIUS", level: 1, color: "green" },
{ id: "PERCY WEASLEY", group: 59, label: "PERCY WEASLEY", level: 1, color: "green" },
{ id: "SIRIUS BLACK", group: 60, label: "SIRIUS BLACK", level: 1, color: "green" },
{ id: "BELLATRIX BLACK", group: 61, label: "BELLATRIX BLACK", level: 1, color: "green" },
{ id: "MERLIN", group: 62, label: "MERLIN", level: 1, color: "green" },
{ id: "CEDRIC DIGGORY", group: 63, label: "CEDRIC DIGGORY", level: 1, color: "green" },
{ id: "BATMAN", group: 64, label: "BATMAN", level: 1, color: "green" },
{ id: "EDWARD CULLEN", group: 65, label: "EDWARD CULLEN", level: 1, color: "green" },
{ id: "BLACK", group: 66, label: "BLACK", level: 1, color: "green" },
{ id: "JACOB BLACK", group: 67, label: "JACOB BLACK", level: 1, color: "green" },
{ id: "SPIKE", group: 68, label: "SPIKE", level: 1, color: "green" },
{ id: "APPLEJACK", group: 69, label: "APPLEJACK", level: 1, color: "green" },
{ id: "APPLES", group: 70, label: "APPLES", level: 1, color: "green" },
{ id: "TWILIGHT SPARKLE", group: 71, label: "TWILIGHT SPARKLE", level: 1, color: "green" },
{ id: "PRINCESS LUNA", group: 72, label: "PRINCESS LUNA", level: 1, color: "green" },
{ id: "PRINCESS CELESTIA", group: 73, label: "PRINCESS CELESTIA", level: 1, color: "green" },
{ id: "MOON", group: 74, label: "MOON", level: 1, color: "green" },
{ id: "PRINCESS", group: 75, label: "PRINCESS", level: 1, color: "green" },
{ id: "TWILIGHT", group: 76, label: "TWILIGHT", level: 1, color: "green" },
{ id: "BELLA SWAN", group: 77, label: "BELLA SWAN", level: 1, color: "green" },
{ id: "VAMPIRE", group: 78, label: "VAMPIRE", level: 1, color: "green" },
{ id: "WEREWOLF", group: 79, label: "WEREWOLF", level: 1, color: "green" },
{ id: "NEW MOON", group: 80, label: "NEW MOON", level: 1, color: "green" },
{ id: "ECLIPSE", group: 81, label: "ECLIPSE", level: 1, color: "green" },
{ id: "WHEEL OF FORTUNE", group: 82, label: "WHEEL OF FORTUNE", level: 1, color: "green" },
{ id: "WORLD", group: 83, label: "WORLD", level: 1, color: "green" },
{ id: "FORTUNE", group: 84, label: "FORTUNE", level: 1, color: "green" },
{ id: "MUSHU", group: 85, label: "MUSHU", level: 1, color: "green" },
{ id: "SNOW WHITE", group: 86, label: "SNOW WHITE", level: 1, color: "green" },
{ id: "MERCURY", group: 87, label: "MERCURY", level: 1, color: "green" },
{ id: "GEMINI", group: 88, label: "GEMINI", level: 1, color: "green" },
{ id: "MOCKINGJAY", group: 89, label: "MOCKINGJAY", level: 1, color: "green" },
{ id: "PRESIDENT SNOW", group: 90, label: "PRESIDENT SNOW", level: 1, color: "green" },
{ id: "PEETA", group: 91, label: "PEETA", level: 1, color: "green" },
{ id: "POWER", group: 92, label: "POWER", level: 1, color: "green" },
{ id: "COURAGE", group: 93, label: "COURAGE", level: 1, color: "green" },
{ id: "WISDOM", group: 94, label: "WISDOM", level: 1, color: "green" },
{ id: "DND STATS", group: 95, label: "DND STATS", level: 1, color: "green" },
{ id: "STRENGTH", group: 96, label: "STRENGTH", level: 1, color: "green" },
{ id: "INTELLIGENCE", group: 97, label: "INTELLIGENCE", level: 1, color: "green" },
{ id: "CONSTITUTION", group: 98, label: "CONSTITUTION", level: 1, color: "green" },
{ id: "POWERPUFF GIRLS", group: 99, label: "POWERPUFF GIRLS", level: 1, color: "green" },
{ id: "BUTTERCUP", group: 100, label: "BUTTERCUP", level: 1, color: "green" },
{ id: "BUBBLES", group: 101, label: "BUBBLES", level: 1, color: "green" },
{ id: "BLOSSOM", group: 102, label: "BLOSSOM", level: 1, color: "green" },
{ id: "MOJO JOJO", group: 103, label: "MOJO JOJO", level: 1, color: "green" },
{ id: "PUFF", group: 104, label: "PUFF", level: 1, color: "green" },
{ id: "PUFF THE MAGIC DRAGON", group: 105, label: "PUFF THE MAGIC DRAGON", level: 1, color: "green" },
{ id: "DC SUPER HERO GIRLS", group: 106, label: "DC SUPER HERO GIRLS", level: 1, color: "green" },
{ id: "WONDER WOMAN", group: 107, label: "WONDER WOMAN", level: 1, color: "green" },
{ id: "BATGIRL", group: 108, label: "BATGIRL", level: 1, color: "green" },
{ id: "ZATANNA", group: 109, label: "ZATANNA", level: 1, color: "green" },
{ id: "SUPERGIRL", group: 110, label: "SUPERGIRL", level: 1, color: "green" },
{ id: "DC", group: 111, label: "DC", level: 1, color: "green" },
{ id: "SUPERMAN", group: 112, label: "SUPERMAN", level: 1, color: "green" },
{ id: "SHAZAM", group: 113, label: "SHAZAM", level: 1, color: "green" },
{ id: "SOLOMON", group: 114, label: "SOLOMON", level: 1, color: "green" },
{ id: "HERCULES", group: 115, label: "HERCULES", level: 1, color: "green" },
{ id: "ATLAS", group: 116, label: "ATLAS", level: 1, color: "green" },
{ id: "ZEUS", group: 117, label: "ZEUS", level: 1, color: "green" },
{ id: "ACHILLES", group: 118, label: "ACHILLES", level: 1, color: "green" },
{ id: "ATHENA", group: 119, label: "ATHENA", level: 1, color: "green" },
{ id: "BRAVE NEW WORLD", group: 120, label: "BRAVE NEW WORLD", level: 1, color: "green" },
{ id: "LIQUID COURAGE", group: 121, label: "LIQUID COURAGE", level: 1, color: "green" },
{ id: "FORTUNE FAVORS THE BOLD", group: 122, label: "FORTUNE FAVORS THE BOLD", level: 1, color: "green" },
{ id: "ALCOHOL", group: 123, label: "ALCOHOL", level: 1, color: "green" },
{ id: "FORTUNE TELLING", group: 124, label: "FORTUNE TELLING", level: 1, color: "green" },
{ id: "FORTUNE COOKIE", group: 125, label: "FORTUNE COOKIE", level: 1, color: "green" },
{ id: "TEA LEAVES", group: 126, label: "TEA LEAVES", level: 1, color: "green" },
{ id: "MAGICIAN", group: 127, label: "MAGICIAN", level: 1, color: "green" },
{ id: "SUPERPOWER", group: 128, label: "SUPERPOWER", level: 1, color: "green" },
{ id: "UNITED STATES", group: 129, label: "UNITED STATES", level: 1, color: "green" },
{ id: "MYSTERY HUNT", group: 130, label: "MYSTERY HUNT", level: 1, color: "green" },
{ id: "GREAT DOME", group: 131, label: "GREAT DOME", level: 1, color: "green" },
{ id: "STATA CENTER", group: 132, label: "STATA CENTER", level: 1, color: "green" },
{ id: "GREEN BUILDING", group: 133, label: "GREEN BUILDING", level: 1, color: "green" },
{ id: "KRESGE CENTER", group: 134, label: "KRESGE CENTER", level: 1, color: "green" },
{ id: "GREEN", group: 135, label: "GREEN", level: 1, color: "green" },
{ id: "BEER", group: 136, label: "BEER", level: 1, color: "green" },
{ id: "VODKA", group: 137, label: "VODKA", level: 1, color: "green" },
{ id: "WHISKEY", group: 138, label: "WHISKEY", level: 1, color: "green" },
{ id: "PRINCESS BUTTERCUP", group: 139, label: "PRINCESS BUTTERCUP", level: 1, color: "green" },
{ id: "DYSTOPIA", group: 140, label: "DYSTOPIA", level: 1, color: "green" },
{ id: "DOC BROWN", group: 141, label: "DOC BROWN", level: 1, color: "green" },
{ id: "METALS", group: 142, label: "METALS", level: 1, color: "green" },
{ id: "TIN", group: 143, label: "TIN", level: 1, color: "green" },
{ id: "TIN MAN", group: 144, label: "TIN MAN", level: 1, color: "green" },
{ id: "THE WIZARD OF OZ", group: 145, label: "THE WIZARD OF OZ", level: 1, color: "green" },
{ id: "DOROTHY", group: 146, label: "DOROTHY", level: 1, color: "green" },
{ id: "PENNY PARK", group: 147, label: "PENNY PARK", level: 1, color: "green" },
{ id: "BOOKSPACE", group: 148, label: "BOOKSPACE", level: 1, color: "green" },
{ id: "PERPIW", group: 149, label: "PERPIW", level: 1, color: "green" },
{ id: "HOLIDAY FOREST", group: 150, label: "HOLIDAY FOREST", level: 1, color: "green" },
{ id: "VALENTINES DAY", group: 151, label: "VALENTINES DAY", level: 1, color: "green" },
{ id: "THANKSGIVING", group: 152, label: "THANKSGIVING", level: 1, color: "green" },
{ id: "VALENTINE", group: 153, label: "VALENTINE", level: 1, color: "green" },
]

var links = [
{ target: "FELLOWSHIP", source: "GANDALF", strength: 0.5 },
{ target: "FELLOWSHIP", source: "GIMLI", strength: 0.5 },
{ target: "FELLOWSHIP", source: "LEGOLAS", strength: 0.5 },
{ target: "GANDALF", source: "WIZARD", strength: 0.5 },
{ target: "DUMBLEDORE", source: "WIZARD", strength: 0.5 },
{ target: "HERMIONE GRANGER", source: "WIZARD", strength: 0.5 },
{ target: "GIMLI", source: "DWARVES", strength: 0.5 },
{ target: "SLEEPY", source: "DWARVES", strength: 0.5 },
{ target: "DOC", source: "DWARVES", strength: 0.5 },
{ target: "GRUMPY", source: "DWARVES", strength: 0.5 },
{ target: "LEGOLAS", source: "ARCHERS", strength: 0.5 },
{ target: "KATNISS EVERDEEN", source: "ARCHERS", strength: 0.5 },
{ target: "ROBIN HOOD", source: "ARCHERS", strength: 0.5 },
{ target: "APOLLO", source: "ARCHERS", strength: 0.5 },
{ target: "GREEN ARROW", source: "ARCHERS", strength: 0.5 },
{ target: "THOMAS", source: "DISCIPLES", strength: 0.5 },
{ target: "JAMES", source: "DISCIPLES", strength: 0.5 },
{ target: "THOMAS", source: "TRAINS", strength: 0.5 },
{ target: "JAMES", source: "TRAINS", strength: 0.5 },
{ target: "PERCY", source: "TRAINS", strength: 0.5 },
{ target: "SIR TOPHAM HATT", source: "TRAINS", strength: 0.5 },
{ target: "MARIO", source: "NINTENDO", strength: 0.5 },
{ target: "SAMUS ARAN", source: "NINTENDO", strength: 0.5 },
{ target: "FOX", source: "NINTENDO", strength: 0.5 },
{ target: "SAMUS ARAN", source: "BOUNTY HUNTERS", strength: 0.5 },
{ target: "BOBA FETT", source: "BOUNTY HUNTERS", strength: 0.5 },
{ target: "STAR WARS", source: "BOBA FETT", strength: 0.5 },
{ target: "STAR", source: "TAROT", strength: 0.5 },
{ target: "STAR TREK", source: "STAR", strength: 0.5 },
{ target: "STAR WARS", source: "STAR", strength: 0.5 },
{ target: "BOBA FETT", source: "STAR WARS", strength: 0.5 },
{ target: "DARTH VADER", source: "STAR WARS", strength: 0.5 },
{ target: "LUKE SKYWALKER", source: "STAR WARS", strength: 0.5 },
{ target: "LUKE SKYWALKER", source: "DARTH VADER", strength: 0.5 },
{ target: "JET BLACK", source: "BOUNTY HUNTERS", strength: 0.5 },
{ target: "SPIKE SPIEGEL", source: "BOUNTY HUNTERS", strength: 0.5 },
{ target: "FAYE VALENTINE", source: "BOUNTY HUNTERS", strength: 0.5 },
{ target: "FOX", source: "ANIMALS", strength: 0.5 },
{ target: "HIPPO", source: "ANIMALS", strength: 0.5 },
{ target: "MUSHROOMS", source: "MARIO", strength: 0.5 },
{ target: "STAR", source: "MARIO", strength: 0.5 },
{ target: "COINS", source: "MARIO", strength: 0.5 },
{ target: "PENNY", source: "COINS", strength: 0.5 },
{ target: "QUARTER", source: "COINS", strength: 0.5 },
{ target: "NICKEL", source: "COINS", strength: 0.5 },
{ target: "SUN", source: "STAR", strength: 0.5 },
{ target: "SIRIUS", source: "STAR", strength: 0.5 },
{ target: "PERCY WEASLEY", source: "WIZARD", strength: 0.5 },
{ target: "PERCY", source: "PERCY WEASLEY", strength: 0.5 },
{ target: "SIRIUS BLACK", source: "SIRIUS", strength: 0.5 },
{ target: "SIRIUS BLACK", source: "WIZARD", strength: 0.5 },
{ target: "BELLATRIX BLACK", source: "WIZARD", strength: 0.5 },
{ target: "MERLIN", source: "WIZARD", strength: 0.5 },
{ target: "CEDRIC DIGGORY", source: "WIZARD", strength: 0.5 },
{ target: "ROBERT PATTINSON CHARACTERS", source: "CEDRIC DIGGORY", strength: 0.5 },
{ target: "BATMAN", source: "ROBERT PATTINSON CHARACTERS", strength: 0.5 },
{ target: "EDWARD CULLEN", source: "ROBERT PATTINSON CHARACTERS", strength: 0.5 },
{ target: "SIRIUS BLACK", source: "BLACK", strength: 0.5 },
{ target: "JACOB BLACK", source: "BLACK", strength: 0.5 },
{ target: "JET BLACK", source: "BLACK", strength: 0.5 },
{ target: "SPIKE", source: "MY LITTLE PONY", strength: 0.5 },
{ target: "APPLEJACK", source: "MY LITTLE PONY", strength: 0.5 },
{ target: "APPLEJACK", source: "APPLES", strength: 0.5 },
{ target: "TWILIGHT SPARKLE", source: "MY LITTLE PONY", strength: 0.5 },
{ target: "PRINCESS LUNA", source: "MY LITTLE PONY", strength: 0.5 },
{ target: "PRINCESS CELESTIA", source: "MY LITTLE PONY", strength: 0.5 },
{ target: "SUN", source: "PRINCESS CELESTIA", strength: 0.5 },
{ target: "MOON", source: "PRINCESS LUNA", strength: 0.5 },
{ target: "PRINCESS", source: "PRINCESS CELESTIA", strength: 0.5 },
{ target: "PRINCESS", source: "PRINCESS LUNA", strength: 0.5 },
{ target: "TWILIGHT", source: "TWILIGHT SPARKLE", strength: 0.5 },
{ target: "EDWARD CULLEN", source: "TWILIGHT", strength: 0.5 },
{ target: "BELLA SWAN", source: "TWILIGHT", strength: 0.5 },
{ target: "JACOB BLACK", source: "TWILIGHT", strength: 0.5 },
{ target: "VAMPIRE", source: "TWILIGHT", strength: 0.5 },
{ target: "WEREWOLF", source: "TWILIGHT", strength: 0.5 },
{ target: "NEW MOON", source: "TWILIGHT", strength: 0.5 },
{ target: "ECLIPSE", source: "TWILIGHT", strength: 0.5 },
{ target: "SUN", source: "ECLIPSE", strength: 0.5 },
{ target: "MOON", source: "ECLIPSE", strength: 0.5 },
{ target: "MOON", source: "NEW MOON", strength: 0.5 },
{ target: "MOON", source: "TAROT", strength: 0.5 },
{ target: "WHEEL OF FORTUNE", source: "TAROT", strength: 0.5 },
{ target: "WORLD", source: "TAROT", strength: 0.5 },
{ target: "WHEEL OF FORTUNE", source: "FORTUNE", strength: 0.5 },
{ target: "SPIKE SPIEGEL", source: "SPIKE", strength: 0.5 },
{ target: "SPIKE", source: "DRAGONS", strength: 0.5 },
{ target: "MUSHU", source: "DRAGONS", strength: 0.5 },
{ target: "MUSHU", source: "DISNEY", strength: 0.5 },
{ target: "SNOW WHITE", source: "DISNEY", strength: 0.5 },
{ target: "SLEEPY", source: "SNOW WHITE", strength: 0.5 },
{ target: "GRUMPY", source: "SNOW WHITE", strength: 0.5 },
{ target: "APOLLO", source: "SPACE PROGRAMS", strength: 0.5 },
{ target: "MERCURY", source: "SPACE PROGRAMS", strength: 0.5 },
{ target: "GEMINI", source: "SPACE PROGRAMS", strength: 0.5 },
{ target: "MOCKINGJAY", source: "ANIMALS", strength: 0.5 },
{ target: "MOCKINGJAY", source: "THE HUNGER GAMES", strength: 0.5 },
{ target: "PRESIDENT SNOW", source: "THE HUNGER GAMES", strength: 0.5 },
{ target: "PEETA", source: "THE HUNGER GAMES", strength: 0.5 },
{ target: "POWER", source: "TRIFORCE", strength: 0.5 },
{ target: "COURAGE", source: "TRIFORCE", strength: 0.5 },
{ target: "WISDOM", source: "TRIFORCE", strength: 0.5 },
{ target: "STRENGTH", source: "DND STATS", strength: 0.5 },
{ target: "WISDOM", source: "DND STATS", strength: 0.5 },
{ target: "INTELLIGENCE", source: "DND STATS", strength: 0.5 },
{ target: "CONSTITUTION", source: "DND STATS", strength: 0.5 },
{ target: "POWERPUFF GIRLS", source: "POWER", strength: 0.5 },
{ target: "POWERPUFF GIRLS", source: "BUTTERCUP", strength: 0.5 },
{ target: "POWERPUFF GIRLS", source: "BUBBLES", strength: 0.5 },
{ target: "POWERPUFF GIRLS", source: "BLOSSOM", strength: 0.5 },
{ target: "POWERPUFF GIRLS", source: "MOJO JOJO", strength: 0.5 },
{ target: "POWERPUFF GIRLS", source: "LAUREN FAUST", strength: 0.5 },
{ target: "PUFF", source: "POWERPUFF GIRLS", strength: 0.5 },
{ target: "PUFF THE MAGIC DRAGON", source: "PUFF", strength: 0.5 },
{ target: "PUFF THE MAGIC DRAGON", source: "DRAGONS", strength: 0.5 },
{ target: "MY LITTLE PONY", source: "LAUREN FAUST", strength: 0.5 },
{ target: "DC SUPER HERO GIRLS", source: "LAUREN FAUST", strength: 0.5 },
{ target: "WONDER WOMAN", source: "DC SUPER HERO GIRLS", strength: 0.5 },
{ target: "BATGIRL", source: "DC SUPER HERO GIRLS", strength: 0.5 },
{ target: "ZATANNA", source: "DC SUPER HERO GIRLS", strength: 0.5 },
{ target: "SUPERGIRL", source: "DC SUPER HERO GIRLS", strength: 0.5 },
{ target: "WONDER WOMAN", source: "DC", strength: 0.5 },
{ target: "BATGIRL", source: "DC", strength: 0.5 },
{ target: "ZATANNA", source: "DC", strength: 0.5 },
{ target: "SUPERMAN", source: "DC", strength: 0.5 },
{ target: "BATMAN", source: "DC", strength: 0.5 },
{ target: "BATMAN", source: "BATGIRL", strength: 0.5 },
{ target: "SHAZAM", source: "DC", strength: 0.5 },
{ target: "SOLOMON", source: "SHAZAM", strength: 0.5 },
{ target: "HERCULES", source: "SHAZAM", strength: 0.5 },
{ target: "ATLAS", source: "SHAZAM", strength: 0.5 },
{ target: "WORLD", source: "ATLAS", strength: 0.5 },
{ target: "ZEUS", source: "SHAZAM", strength: 0.5 },
{ target: "ACHILLES", source: "SHAZAM", strength: 0.5 },
{ target: "MERCURY", source: "SHAZAM", strength: 0.5 },
{ target: "ACHILLES", source: "GREEK MYTHOLOGY", strength: 0.5 },
{ target: "ZEUS", source: "GREEK MYTHOLOGY", strength: 0.5 },
{ target: "HERCULES", source: "GREEK MYTHOLOGY", strength: 0.5 },
{ target: "ATHENA", source: "GREEK MYTHOLOGY", strength: 0.5 },
{ target: "ATHENA", source: "MIT", strength: 0.5 },
{ target: "ATHENA", source: "WISDOM", strength: 0.5 },
{ target: "SOLOMON", source: "WISDOM", strength: 0.5 },
{ target: "BRAVE NEW WORLD", source: "COURAGE", strength: 0.5 },
{ target: "LIQUID COURAGE", source: "COURAGE", strength: 0.5 },
{ target: "FORTUNE FAVORS THE BOLD", source: "COURAGE", strength: 0.5 },
{ target: "LIQUID COURAGE", source: "ALCOHOL", strength: 0.5 },
{ target: "FORTUNE FAVORS THE BOLD", source: "FORTUNE", strength: 0.5 },
{ target: "FORTUNE TELLING", source: "FORTUNE", strength: 0.5 },
{ target: "FORTUNE COOKIE", source: "FORTUNE", strength: 0.5 },
{ target: "TEA LEAVES", source: "FORTUNE TELLING", strength: 0.5 },
{ target: "TAROT", source: "FORTUNE TELLING", strength: 0.5 },
{ target: "STRENGTH", source: "TAROT", strength: 0.5 },
{ target: "MAGICIAN", source: "TAROT", strength: 0.5 },
{ target: "SUN", source: "TAROT", strength: 0.5 },
{ target: "WIZARD", source: "MAGICIAN", strength: 0.5 },
{ target: "SUPERPOWER", source: "POWER", strength: 0.5 },
{ target: "UNITED STATES", source: "SUPERPOWER", strength: 0.5 },
{ target: "SUPERMAN", source: "SUPERPOWER", strength: 0.5 },
{ target: "MYSTERY HUNT", source: "MIT", strength: 0.5 },
{ target: "GREAT DOME", source: "MIT", strength: 0.5 },
{ target: "STATA CENTER", source: "MIT", strength: 0.5 },
{ target: "GREEN BUILDING", source: "MIT", strength: 0.5 },
{ target: "KRESGE CENTER", source: "MIT", strength: 0.5 },
{ target: "GREEN BUILDING", source: "GREEN", strength: 0.5 },
{ target: "GREEN ARROW", source: "GREEN", strength: 0.5 },
{ target: "BEER", source: "ALCOHOL", strength: 0.5 },
{ target: "VODKA", source: "ALCOHOL", strength: 0.5 },
{ target: "WHISKEY", source: "ALCOHOL", strength: 0.5 },
{ target: "PRINCESS BUTTERCUP", source: "BUTTERCUP", strength: 0.5 },
{ target: "PRINCESS", source: "PRINCESS BUTTERCUP", strength: 0.5 },
{ target: "BRAVE NEW WORLD", source: "LITERATURE", strength: 0.5 },
{ target: "TWILIGHT", source: "LITERATURE", strength: 0.5 },
{ target: "THE HUNGER GAMES", source: "DYSTOPIA", strength: 0.5 },
{ target: "DOC BROWN", source: "DOC", strength: 0.5 },
{ target: "GREEN ARROW", source: "COLORFUL CHARACTERS", strength: 0.5 },
{ target: "DOC BROWN", source: "COLORFUL CHARACTERS", strength: 0.5 },
{ target: "SNOW WHITE", source: "COLORFUL CHARACTERS", strength: 0.5 },
{ target: "NICKEL", source: "METALS", strength: 0.5 },
{ target: "TIN", source: "METALS", strength: 0.5 },
{ target: "TIN MAN", source: "TIN", strength: 0.5 },
{ target: "THE WIZARD OF OZ", source: "TIN MAN", strength: 0.5 },
{ target: "THE WIZARD OF OZ", source: "WIZARD", strength: 0.5 },
{ target: "THE WIZARD OF OZ", source: "DOROTHY", strength: 0.5 },
{ target: "PENNY PARK", source: "PENNY", strength: 0.5 },
{ target: "MYSTERY HUNT", source: "PENNY PARK", strength: 0.5 },
{ target: "BOOKSPACE", source: "MYSTERY HUNT", strength: 0.5 },
{ target: "LITERATURE", source: "BOOKSPACE", strength: 0.5 },
{ target: "PERPIW", source: "MYSTERY HUNT", strength: 0.5 },
{ target: "HOLIDAY FOREST", source: "MYSTERY HUNT", strength: 0.5 },
{ target: "VALENTINES DAY", source: "HOLIDAY FOREST", strength: 0.5 },
{ target: "THANKSGIVING", source: "HOLIDAY FOREST", strength: 0.5 },
{ target: "VALENTINE", source: "VALENTINES DAY", strength: 0.5 },
{ target: "FAYE VALENTINE", source: "VALENTINE", strength: 0.5 },
{ target: "BRAVE NEW WORLD", source: "WORLD", strength: 0.5 },
]
