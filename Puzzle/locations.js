var nodes = [
{ id: "TRIFORCE", group: 0, label: "TRIFORCE", level: 1, color: "pink", x: "1289.7434377955312", y: "742.0795593921803", ntype: "answer" },
{ id: "FELLOWSHIP", group: 1, label: "FELLOWSHIP", level: 1, color: "red", x: "465.1815601195492", y: "667.2712850190951", ntype: "hidden" },
{ id: "DRAGON", group: 2, label: "DRAGON", level: 1, color: "red", x: "575.1301609709519", y: "488.97767715636564", ntype: "hidden" },
{ id: "APOSTLE", group: 3, label: "APOSTLE", level: 1, color: "red", x: "996.9820011980007", y: "1236.7095908544115", ntype: "hidden" },
{ id: "NINTENDO", group: 4, label: "NINTENDO", level: 1, color: "red", x: "162.31721204755627", y: "343.6219017212102", ntype: "hidden" },
{ id: "APPLE", group: 5, label: "APPLE", level: 1, color: "red", x: "1154.6376935704204", y: "153.24471547410485", ntype: "hidden" },
{ id: "SMAUG", group: 6, label: "SMAUG", level: 1, color: "green", x: "522.885910229478", y: "579.9518113946879", ntype: "regular" },
{ id: "THE LORD OF THE RINGS", group: 7, label: "THE LORD OF THE RINGS", level: 1, color: "green", x: "384.5111240237004", y: "700.0736614886332", ntype: "regular" },
{ id: "TOOTHLESS", group: 8, label: "TOOTHLESS", level: 1, color: "green", x: "588.0558072764", y: "400.13549757081", ntype: "regular" },
{ id: "JESUS CHRIST", group: 9, label: "JESUS CHRIST", level: 1, color: "green", x: "1061.5461511640785", y: "1201.6820067371855", ntype: "regular" },
{ id: "NINTENDO ENTERTAINMENT SYSTEM", group: 10, label: "NINTENDO ENTERTAINMENT SYSTEM", level: 1, color: "green", x: "100.0", y: "385.16677841649243", ntype: "regular" },
{ id: "MAC", group: 11, label: "MAC", level: 1, color: "green", x: "1167.1647821285007", y: "225.8866073930394", ntype: "regular" },
{ id: "BLUE-EYES WHITE DRAGON", group: 12, label: "BLUE-EYES WHITE DRAGON", level: 1, color: "green", x: "653.8431053304155", y: "465.60836697969717", ntype: "regular" },
{ id: "THE LAST SUPPER", group: 13, label: "THE LAST SUPPER", level: 1, color: "green", x: "926.0010273816144", y: "1216.7843080900252", ntype: "regular" },
{ id: "THOMAS", group: 14, label: "THOMAS", level: 1, color: "green", x: "995.3544488346404", y: "1310.7079236410123", ntype: "regular" },
{ id: "ADAM'S APPLE", group: 15, label: "ADAM'S APPLE", level: 1, color: "green", x: "1224.3064587337265", y: "126.86666423681186", ntype: "regular" },
{ id: "SUPER SMASH BROS", group: 16, label: "SUPER SMASH BROS", level: 1, color: "green", x: "213.465572044812", y: "395.23001241520933", ntype: "regular" },
{ id: "GANDALF THE GREY", group: 17, label: "GANDALF THE GREY", level: 1, color: "green", x: "454.8306429175543", y: "752.1137616946144", ntype: "regular" },
{ id: "GRANNY SMITH", group: 18, label: "GRANNY SMITH", level: 1, color: "green", x: "1104.0285237414294", y: "100.0", ntype: "regular" },
{ id: "DONKEY KONG", group: 19, label: "DONKEY KONG", level: 1, color: "green", x: "177.43746280176993", y: "271.3257046024037", ntype: "regular" },
]

var links = [
{ target: "SMAUG", source: "DRAGON", color: "rgba(50,50,50,0.5)", source_x: "575.1301609709519", source_y: "488.97767715636564", target_x: "522.885910229478", target_y: "579.9518113946879" },
{ target: "THE LORD OF THE RINGS", source: "FELLOWSHIP", color: "rgba(50,50,50,0.5)", source_x: "465.1815601195492", source_y: "667.2712850190951", target_x: "384.5111240237004", target_y: "700.0736614886332" },
{ target: "TOOTHLESS", source: "DRAGON", color: "rgba(50,50,50,0.5)", source_x: "575.1301609709519", source_y: "488.97767715636564", target_x: "588.0558072764", target_y: "400.13549757081" },
{ target: "JESUS CHRIST", source: "APOSTLE", color: "rgba(50,50,50,0.5)", source_x: "996.9820011980007", source_y: "1236.7095908544115", target_x: "1061.5461511640785", target_y: "1201.6820067371855" },
{ target: "NINTENDO ENTERTAINMENT SYSTEM", source: "NINTENDO", color: "rgba(50,50,50,0.5)", source_x: "162.31721204755627", source_y: "343.6219017212102", target_x: "100.0", target_y: "385.16677841649243" },
{ target: "MAC", source: "APPLE", color: "rgba(50,50,50,0.5)", source_x: "1154.6376935704204", source_y: "153.24471547410485", target_x: "1167.1647821285007", target_y: "225.8866073930394" },
{ target: "DRAGON", source: "BLUE-EYES WHITE DRAGON", color: "rgba(50,50,50,0.5)", source_x: "653.8431053304155", source_y: "465.60836697969717", target_x: "575.1301609709519", target_y: "488.97767715636564" },
{ target: "THE LAST SUPPER", source: "APOSTLE", color: "rgba(50,50,50,0.5)", source_x: "996.9820011980007", source_y: "1236.7095908544115", target_x: "926.0010273816144", target_y: "1216.7843080900252" },
{ target: "THOMAS", source: "APOSTLE", color: "rgba(50,50,50,0.5)", source_x: "996.9820011980007", source_y: "1236.7095908544115", target_x: "995.3544488346404", target_y: "1310.7079236410123" },
{ target: "SMAUG", source: "FELLOWSHIP", color: "rgba(50,50,50,0.5)", source_x: "465.1815601195492", source_y: "667.2712850190951", target_x: "522.885910229478", target_y: "579.9518113946879" },
{ target: "APPLE", source: "ADAM'S APPLE", color: "rgba(50,50,50,0.5)", source_x: "1224.3064587337265", source_y: "126.86666423681186", target_x: "1154.6376935704204", target_y: "153.24471547410485" },
{ target: "SUPER SMASH BROS", source: "NINTENDO", color: "rgba(50,50,50,0.5)", source_x: "162.31721204755627", source_y: "343.6219017212102", target_x: "213.465572044812", target_y: "395.23001241520933" },
{ target: "GANDALF THE GREY", source: "FELLOWSHIP", color: "rgba(50,50,50,0.5)", source_x: "465.1815601195492", source_y: "667.2712850190951", target_x: "454.8306429175543", target_y: "752.1137616946144" },
{ target: "GRANNY SMITH", source: "APPLE", color: "rgba(50,50,50,0.5)", source_x: "1154.6376935704204", source_y: "153.24471547410485", target_x: "1104.0285237414294", target_y: "100.0" },
{ target: "NINTENDO", source: "DONKEY KONG", color: "rgba(50,50,50,0.5)", source_x: "177.43746280176993", source_y: "271.3257046024037", target_x: "162.31721204755627", target_y: "343.6219017212102" },
]
