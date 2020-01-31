var n = 9;

for(i = 1; i <= n; i++){
    for(j = 1 ;j <= n;j++){
        if(j == 1 || i == 1 || j == n || i == n){
            document.write("1 ");
        }else if(j == 2 || i == 2 || j == 8 || i == 8){
            document.write("A");
        }else if(j == 3 || i == 3 || j == 7 || i == 7){
            document.write("3 ")
        }else if(j == 4 || i == 4 || j == 6 || i == 6){
            document.write("B");
        }
        else{
            document.write("5 ")
        }
    }

    document.write("<br>");
}
