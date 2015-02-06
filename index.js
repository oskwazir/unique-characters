
function uniqueCharacters(leftWord,rightWord){
    var leftCharacters = leftWord.toLowerCase().split('');
    var rightCharacters = rightWord.toLowerCase().split('');
    var leftUnique = [];
    var rightUnique = rightCharacters;
    leftCharacters.forEach(function(char,index){
        var rightIndex = rightCharacters.indexOf(char);
        if (rightIndex === -1){
            leftUnique.push(char);
        } else {
            rightUnique.splice(rightIndex,1);
        }
    });
    return({leftUnique:leftUnique, rightUnique:rightUnique});
};

module.exports = uniqueCharacters;