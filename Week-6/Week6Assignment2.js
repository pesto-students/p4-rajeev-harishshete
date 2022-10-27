function SpiralPrinter(arr,row_end,column_end)
{
    
    var row_start =0;
    var column_start = 0;
    while(row_start<=row_end && column_start<=column_end)
    {
        //Printing First Row of remainig elemenst
        for(let i=column_start;i<=column_end;i++)
        {
            console.log(arr[row_start][i]);
        }
        row_start++;

        //Printing last column of remainig elemenst
        for(let j = row_start; j<=row_end;j++)
        {
            console.log(arr[j][column_end]);
        }
        column_end--;

        //Printing Last Row of remainig elemenst
        if(row_start<row_end)
        {
            for(let i= column_end;i>=column_start;i--)
            {
                console.log(arr[row_end][i]);
            }
            row_end--;
        }

        //Printing First Column of remainig elemenst
        if(column_start<column_end)
        {
            for(let i =row_end;i>=row_start;i--)
            {
                console.log(arr[i][column_start]);
            }            
            column_start++;
        }

    }
}

var arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];

SpiralPrinter(arr,arr.length-1,arr[0].length-1);