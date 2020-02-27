Array.prototype.first = function (expr){
    let arr = this
    if(expr) {
        let data = arr.filter(expr)
        return data[0] || null
    }else
        return arr[0] || null
}

Array.prototype.last = function (expr){
    let arr = this
    if(expr) {
        let data = arr.filter(expr)
        return data[data.count() - 1] || null
    }else
        return arr[data.count() - 1] || null
}

Array.prototype.select = function(expr){
    var arr = this;
    return arr.map(expr);
};

Array.prototype.where = function(expr){
    let arr = this;
    return arr.filter(expr);
};

Array.prototype.add = function(item){
    let arr = this;
    arr.push(item)
};

Array.prototype.remove = function(item){
    let arr = this;
    const i = arr.indexOf(item)
    if(i > -1)
        return arr.slice(0, i).concat(arr.slice(i + 1, arr.length))
    else return arr;
};

Array.prototype.removeAt = function(index){
    let arr = this;
    const i = index;
    if(i > -1)
        return arr.slice(0, i).concat(arr.slice(i + 1, arr.length))
    else return arr;
};

Array.prototype.count = function() {
    return this.length;
}

Array.prototype.sum = function() {
    let arr = this
    let total = arr.reduce((total, num) => total + num,0)
    return total;
}

Array.prototype.distinct = function() {
    let arr = this
    let distinct = [...new Set(arr.map( m => m))]
    return distinct;
}

Array.prototype.max = function (expr) {
    if(expr)
        return Math.max.apply(null, this.map(expr));
    else
        return Math.max.apply(null, this);
};

Array.prototype.min = function (expr) {
    if(expr)
        return Math.min.apply(null, this.map(expr));
    else
        return Math.min.apply(null, this);
};

Array.prototype.orderBy = function(expr) {
    let arr = this
    if(expr)
        return arr.sort((a, b) => {
            switch(typeof a)
            {
                case "number":
                    return a - b
                case "string":
                    return a.localeCompare(b)
                default:
                    return a < b
            }
        });
    else
        return arr.sort((a, b) => {
            switch(typeof a)
            {
                case "number":
                    return a - b
                case "string":
                    return a.localeCompare(b)
                default:
                    console.log(a)
                    return a < b
            }
        });
}

Array.prototype.orderByDesc = function(expr) {
    let arr = this
    return arr.sort((a, b) => {
        switch(typeof a)
        {
            case "number":
                return b - a
            case "string":
                console.log('Entro string')
                return b.localeCompare(a)
            default:
                return b < a
        }
    });
}


// function compare(a, b) {
//     // Use toUpperCase() to ignore character casing
//     const bandA = a.name.toUpperCase();
//     const bandB = b.name.toUpperCase();

//     let comparison = 0;
//     if (bandA > bandB) {
//         comparison = 1;
//     } else if (bandA < bandB) {
//         comparison = -1;
//     }
//     return comparison;
// }

