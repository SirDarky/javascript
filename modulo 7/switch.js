// switch

// Se o case não tiver o break ele irá continuar fazer o resto do código
// Por exemplo expression = a, se não tiver break no (case 'a') ele irá fazer todos os casos até encontrar o break

switch(expression) {
    case 'a' :
        // código
        console.log ('a')
        break;
    case 'b' :
        // código
        console.log('b')
        break;
    default:
        console.log('default')
        break;
}