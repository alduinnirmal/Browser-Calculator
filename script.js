function ClickButton(val)
{
    document.getElementById("screen").value += val
}
function ClearScreen()
{
    document.getElementById("screen").value = ""
}

function ClickResult()
{
    var value = document.getElementById("screen").value
    var result = eval(value)
    document.getElementById("screen").value = result
}