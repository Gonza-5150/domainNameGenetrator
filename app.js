var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var dots = [".com", ".net", ".ar", ".org"];

for (let i=0; i< pronoun.length; i++ ) {
    for (let a=0; a< adj.length; a++ ) {
        for (let b=0; b< noun.length; b++ ) {
            for (let c=0; c< dots.length; c++ ) {
                console.log(pronoun[i] + adj[a] + noun[b] + dots[c]);
            }
        }
    }
}