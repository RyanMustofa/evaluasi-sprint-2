

function fpb(a,b){
    return (b == 0) ? a : (fpb(b, a % b));
}

function kpk(a,b){
    return (a / fpb(a,b)) * b;
}
document.write( "kpk dengan nilai 120 dan 240 <br>" )
document.write("fpb adalah " + fpb(120,240));
document.write(" kpk adalah " + kpk(120,240));
