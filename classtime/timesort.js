
//时间数组排序
function quickSort(arr) {
    if (arr.length <= 1) { return arr; }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        var t1 = pivot.split("~");
        var t2 = arr[i].split("~");
        var b1 = parseInt(t1[0].replace(":", ""), 10);
        var e1 = parseInt(t1[1].replace(":", ""), 10);
        var b2 = parseInt(t2[0].replace(":", ""), 10);
        var e2 = parseInt(t2[1].replace(":", ""), 10);
        if (b2 < b1 || (b2==b1 && e2< e1)) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
};

var arr = ["07:00~08:30","08:40~09:45","09:55~10:30","10:40~11:00","13:10~14:00","14:10~15:00"];
console.log(quickSort(arr));

//时间重叠检测
var ts = quickSort(arr);
for (var j = 0; j < ts.length; j++) {
    var tt = ts[j].split("~");
    var b1 = parseInt(tt[0].replace(":", ""), 10);
    var e1 = parseInt(tt[1].replace(":", ""), 10);
    for (var k = 0; k < ts.length; k++) {
        if (j == k) continue;
        tt = ts[k].split("~");
        var b2 = parseInt(tt[0].replace(":", ""), 10);
        var e2 = parseInt(tt[1].replace(":", ""), 10);
        if ((b1 > b2 && b1 < e2) || (e1 > b2 && e1 < e2) || (b1 == b2 && e1 == e2)) {
            error = true;
        }
    }
}

if (error) {
    console.log("时间有重叠，请修改。");
}
