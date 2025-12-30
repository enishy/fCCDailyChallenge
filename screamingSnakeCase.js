function toScreamingSnakeCase(variableName) {
    /*const letters = variableName.match(/[\_\-A-Z]/g, '_');
    if (letters !== null) {
        if (letters[letters.length - 1].match(/[A-Z]/))
            variableName = variableName.replace(letters[letters.length - 1], '_' + letters[letters.length - 1].toUpperCase());
            variableName = variableName.replace("-", "_");
    }
    return variableName.toUpperCase();
*/
    return str.replace(/-/g, "_").replace(/([a-z0-9])([A-Z])/g, "$1_$2").toUpperCase();
}

toScreamingSnakeCase("userEmail")
toScreamingSnakeCase("UserPassword")
toScreamingSnakeCase("user_id")
toScreamingSnakeCase("user-address")
toScreamingSnakeCase("username")